import React from 'react';
import { Card, Table, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FaFileDownload, FaFileAlt, FaFilePdf, FaSearch } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import PrimaryButton from '../components/PrimaryButton';

const DocumentsPage = () => {
    // Mock documents data
    const documents = [
        {
            id: 1,
            name: 'Tax Return 2025',
            type: 'PDF',
            date: '2025-10-15',
            size: '2.5 MB'
        },
        {
            id: 2,
            name: 'Payment Receipt - Oct 2025',
            type: 'PDF',
            date: '2025-10-15',
            size: '1.2 MB'
        },
        {
            id: 3,
            name: 'Tax Certificate 2025',
            type: 'PDF',
            date: '2025-09-30',
            size: '1.8 MB'
        }
    ];

    const handleDownload = (id) => {
        // TODO: Implement document download
        console.log('Downloading document:', id);
    };

    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // TODO: Implement document upload
            console.log('Uploading file:', file.name);
        }
    };

    return (
        <div className="container py-4">
            <PageHeader title="Documents" subtitle="Upload and manage your tax documents" />

            <Row className="mb-4">
                <Col md={6}>
                    <Card className="card-rounded">
                        <Card.Body>
                            <div className="d-flex align-items-center mb-3">
                                <FaFileAlt size={40} className="me-3 text-primary" />
                                <div>
                                    <h5 className="mb-0">Upload Document</h5>
                                    <small className="text-muted">Supported: PDF, DOC, DOCX</small>
                                </div>
                            </div>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control 
                                    type="file" 
                                    onChange={handleUpload}
                                    accept=".pdf,.doc,.docx"
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-end">
                                <PrimaryButton>Upload</PrimaryButton>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="d-flex align-items-start">
                    <InputGroup className="mb-3 w-100">
                        <InputGroup.Text><FaSearch /></InputGroup.Text>
                        <Form.Control placeholder="Search documents..." />
                    </InputGroup>
                </Col>
            </Row>

            <Card>
                <Card.Header>
                    <h5 className="mb-0">My Documents</h5>
                </Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Document Name</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>Size</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map(doc => (
                                <tr key={doc.id}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <FaFilePdf className="text-danger me-2" />
                                            {doc.name}
                                        </div>
                                    </td>
                                    <td>{doc.type}</td>
                                    <td>{doc.date}</td>
                                    <td>{doc.size}</td>
                                    <td>
                                        <PrimaryButton variant="outline-primary" className="btn-sm me-2" onClick={() => handleDownload(doc.id)}>
                                            <FaFileDownload className="me-1" />
                                            Download
                                        </PrimaryButton>
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

export default DocumentsPage;