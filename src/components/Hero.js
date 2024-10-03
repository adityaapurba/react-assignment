import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default class Hero extends Component {
  render() {
    return (
      <div>
        <Container
        className="m-5 p-5"
      >
        <Row className="text-center">
          <Col>
            <h1 className="pb-3 tx-xl">Affiliate Marketing Pro</h1>
            <p className="lead">
              Your one-stop solution to boost affiliate earnings and grow your
              network effortlessly.
            </p>
            <a href="#login">
              <Button variant="primary" size="lg" className="mt-3">
                Get Started
              </Button>
            </a>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Track Performance</Card.Title>
                <Card.Text>
                  Monitor your affiliate links, clicks, and conversions in
                  real-time with detailed analytics.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Increase Earnings</Card.Title>
                <Card.Text>
                  Leverage optimized strategies to maximize your affiliate
                  commissions and earnings potential.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Grow Your Network</Card.Title>
                <Card.Text>
                  Connect with top brands and influencers to expand your
                  affiliate network and reach new audiences.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
