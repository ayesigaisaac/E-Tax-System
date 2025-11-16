import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Row, Col, Alert } from 'react-bootstrap';
import { FaFileAlt, FaMoneyBillWave, FaHistory, FaDownload } from 'react-icons/fa';
import StatCard from '../components/StatCard';
import PageHeader from '../components/PageHeader';
import AppFooter from '../components/AppFooter';

const Dashboard = () => {
    const { user } = useSelector(state => state.auth) || { user: { fullName: 'Taxpayer' } };

    const taxSummary = {
        dueAmount: "2,500.00",
        lastPayment: "1,200.00",
        lastPaymentDate: "2025-10-15",
        nextDueDate: "2025-12-31"
    };

    return (
        <div className="container py-4">
            <PageHeader title={`Welcome, ${user?.fullName || 'User'}`} subtitle={`Next due: ${taxSummary.nextDueDate}`} />

            <Row className="g-3 mb-4">
                <Col md={3} sm={6} xs={12}>
                    <StatCard title="Amount Due" value={`$${taxSummary.dueAmount}`} icon={<FaMoneyBillWave />} color="var(--danger)" />
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <StatCard title="Last Payment" value={`$${taxSummary.lastPayment}`} icon={<FaHistory />} color="var(--success)" />
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <StatCard title="Documents" value={`3`} icon={<FaFileAlt />} color="var(--brand-accent)" />
                </Col>
                <Col md={3} sm={6} xs={12}>
                    <StatCard title="Downloads" value={`12`} icon={<FaDownload />} color="#f59e0b" />
                </Col>
            </Row>

            <Card className="mb-4 card-rounded">
                <Card.Header>
                    <h5 className="mb-0">Recent Activity</h5>
                </Card.Header>
                <Card.Body>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-2">Tax Return Filed - October 15, 2025</li>
                        <li className="mb-2">Payment Processed - October 15, 2025</li>
                        <li className="mb-2">Document Downloaded - October 10, 2025</li>
                    </ul>
                </Card.Body>
            </Card>

            <AppFooter />
        </div>
    );
};

export default Dashboard;