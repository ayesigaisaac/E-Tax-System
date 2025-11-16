import React, { useState } from 'react';
import { Card, Form, Row, Col, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PageHeader from '../components/PageHeader';
import PrimaryButton from '../components/PrimaryButton';

const ProfilePage = () => {
    const { user } = useSelector(state => state.auth);
    const [editing, setEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        fullName: user?.fullName || '',
        email: user?.email || '',
        phone: '',
        address: '',
        tin: user?.tin || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Update profile in backend
        console.log('Profile update:', profileData);
        setEditing(false);
    };

    return (
        <div className="container py-4">
            <PageHeader title="My Profile" subtitle="Manage your account details" actions={<PrimaryButton onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : 'Edit Profile'}</PrimaryButton>} />

            <Row>
                <Col md={8}>
                    <Card className="card-rounded">
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="fullName"
                                                value={profileData.fullName}
                                                onChange={handleChange}
                                                disabled={!editing}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>TIN</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={profileData.tin}
                                                disabled
                                                readOnly
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={profileData.email}
                                                onChange={handleChange}
                                                disabled={!editing}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                name="phone"
                                                value={profileData.phone}
                                                onChange={handleChange}
                                                disabled={!editing}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="address"
                                        value={profileData.address}
                                        onChange={handleChange}
                                        disabled={!editing}
                                    />
                                </Form.Group>

                                {editing && (
                                    <PrimaryButton variant="primary" type="submit">Save Changes</PrimaryButton>
                                )}
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="mb-4 card-rounded">
                        <Card.Header>
                            <h5 className="mb-0">Account Status</h5>
                        </Card.Header>
                        <Card.Body>
                            <Alert variant="success">
                                Your account is active and verified
                            </Alert>
                            <p><strong>Member Since:</strong> January 2025</p>
                            <p><strong>Last Login:</strong> Today</p>
                        </Card.Body>
                    </Card>

                    <Card className="card-rounded">
                        <Card.Header>
                            <h5 className="mb-0">Security Settings</h5>
                        </Card.Header>
                        <Card.Body>
                            <PrimaryButton className="w-100 mb-2" variant="outline-primary">Change Password</PrimaryButton>
                            <PrimaryButton className="w-100" variant="outline-primary">Two-Factor Authentication</PrimaryButton>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ProfilePage;