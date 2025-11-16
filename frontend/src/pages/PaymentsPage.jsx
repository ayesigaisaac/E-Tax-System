import React, { useState } from 'react';
import { Table, Card, Form, Row, Col, Badge } from 'react-bootstrap';
import { FaCreditCard, FaUniversity } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import PrimaryButton from '../components/PrimaryButton';
import StatCard from '../components/StatCard';
import { Button } from 'react-bootstrap';

const PaymentsPage = () => {
    const [paymentAmount, setPaymentAmount] = useState('');
    
    // Mock payment history
    const paymentHistory = [
        { id: 1, date: '2025-10-15', amount: 1200.00, status: 'Completed', type: 'Tax Payment' },
        { id: 2, date: '2025-07-15', amount: 1500.00, status: 'Completed', type: 'Quarterly Tax' },
        { id: 3, date: '2025-04-15', amount: 1300.00, status: 'Completed', type: 'Tax Payment' }
    ];

    // Mock tax summary
    const taxSummary = {
        dueAmount: '2,500.00',
        lastPayment: '1,200.00'
    };

    const handlePayment = (e) => {
        e.preventDefault();
        // TODO: Integrate with payment gateway
        console.log('Processing payment:', paymentAmount);
    };

    return (
        <div className="container py-4">
            <PageHeader title="Tax Payments" subtitle="Manage and track your payments" />

            <Row className="g-3 mb-4">
                <Col md={4} sm={6} xs={12}>
                    <StatCard title="Outstanding" value={`$${taxSummary?.dueAmount || '0.00'}`} icon={<FaCreditCard />} color="var(--danger)" />
                </Col>
                <Col md={4} sm={6} xs={12}>
                    <StatCard title="Last Payment" value={`$${taxSummary?.lastPayment || '0.00'}`} icon={<FaUniversity />} color="var(--success)" />
                </Col>
            </Row>

            {/* Make Payment Section */}
            <Card className="mb-4 card-rounded">
                <Card.Header>
                    <h5 className="mb-0">Make a Payment</h5>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handlePayment}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Payment Amount ($)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={paymentAmount}
                                        onChange={(e) => setPaymentAmount(e.target.value)}
                                        required
                                        placeholder="Enter amount to pay"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mb-4">
                            <h6>Payment Method</h6>
                            <Row>
                                <Col md={6}>
                                    <Card className="mb-3 cursor-pointer">
                                        <Card.Body>
                                            <div className="d-flex align-items-center">
                                                <FaCreditCard size={24} className="me-3 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">Credit/Debit Card</h6>
                                                    <small className="text-muted">Visa, MasterCard, etc.</small>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className="mb-3 cursor-pointer">
                                        <Card.Body>
                                            <div className="d-flex align-items-center">
                                                <FaUniversity size={24} className="me-3 text-primary" />
                                                <div>
                                                    <h6 className="mb-0">Bank Transfer</h6>
                                                    <small className="text-muted">Direct bank payment</small>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>

                        <PrimaryButton variant="primary" type="submit">Process Payment</PrimaryButton>
                    </Form>
                </Card.Body>
            </Card>

            {/* Payment History Section */}
            <Card>
                <Card.Header>
                    <h5 className="mb-0">Payment History</h5>
                </Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentHistory.map(payment => (
                                <tr key={payment.id}>
                                    <td>{payment.date}</td>
                                    <td>{payment.type}</td>
                                    <td>${payment.amount.toFixed(2)}</td>
                                    <td>
                                        <span className="badge bg-success">
                                            {payment.status}
                                        </span>
                                    </td>
                                    <td>
                                        <PrimaryButton variant="outline-primary" className="btn-sm">View Receipt</PrimaryButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PaymentsPage;