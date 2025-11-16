import React, { useState } from 'react';
import { Form, Card, Row, Col } from 'react-bootstrap';
import PageHeader from '../components/PageHeader';
import PrimaryButton from '../components/PrimaryButton';

const TaxFilingPage = () => {
    const [taxData, setTaxData] = useState({
        year: new Date().getFullYear(),
        annualIncome: '',
        deductions: '',
        taxCredits: '',
        businessIncome: '',
        otherIncome: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaxData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const calculateTax = () => {
        // Basic tax calculation (placeholder)
        const income = parseFloat(taxData.annualIncome) || 0;
        const deductions = parseFloat(taxData.deductions) || 0;
        const taxableIncome = income - deductions;
        // Simple 20% tax rate for example
        return (taxableIncome * 0.20).toFixed(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Submit to backend
        console.log('Tax return submitted:', taxData);
    };

    return (
        <div className="container py-4">
            <PageHeader title="File Tax Return" subtitle={`Tax Year ${taxData.year}`} />

            <Form onSubmit={handleSubmit}>
                <Card className="mb-4">
                    <Card.Header>
                        <h5 className="mb-0">Income Details</h5>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tax Year</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="year"
                                        value={taxData.year}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Annual Income</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="annualIncome"
                                        value={taxData.annualIncome}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your annual income"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Business Income</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="businessIncome"
                                        value={taxData.businessIncome}
                                        onChange={handleChange}
                                        placeholder="Enter business income (if any)"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Other Income</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="otherIncome"
                                        value={taxData.otherIncome}
                                        onChange={handleChange}
                                        placeholder="Enter other income sources"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Card className="mb-4">
                    <Card.Header>
                        <h5 className="mb-0">Deductions & Credits</h5>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Total Deductions</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="deductions"
                                        value={taxData.deductions}
                                        onChange={handleChange}
                                        placeholder="Enter total deductions"
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Tax Credits</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="taxCredits"
                                        value={taxData.taxCredits}
                                        onChange={handleChange}
                                        placeholder="Enter available tax credits"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Card className="mb-4">
                    <Card.Header>
                        <h5 className="mb-0">Tax Summary</h5>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <p><strong>Total Taxable Income:</strong> ${parseFloat(taxData.annualIncome || 0).toFixed(2)}</p>
                                <p><strong>Total Deductions:</strong> ${parseFloat(taxData.deductions || 0).toFixed(2)}</p>
                                <p><strong>Estimated Tax:</strong> ${calculateTax()}</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <div className="d-flex justify-content-end">
                    <PrimaryButton variant="secondary" className="me-2">Save Draft</PrimaryButton>
                    <PrimaryButton variant="primary" type="submit">Submit Return</PrimaryButton>
                </div>
            </Form>
        </div>
    );
};

export default TaxFilingPage;