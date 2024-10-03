import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import salesData from "../assets/data/salesData.json"; // Assuming sales data is stored here
import "./Item.css";

const Item = () => {
  const { id } = useParams(); // Get the sale item ID from the URL
  const [item, setItem] = useState(null);

  // Fetch the specific item details using the ID from URL
  useEffect(() => {
    const saleItem = salesData.find((sale) => sale.id === parseInt(id));
    setItem(saleItem);
    console.log(item)
  }, [id]);

  if (!item) {
    return (
      <div className="text-center" style={{ marginTop: "10%" }}>
        <h2>No Item Info ......</h2>
      </div>
    )
  }

  return (
    <div className="item-description-container">
      <Card className="shadow p-4 bg-white rounded">
        <Row>
          <Col md={6}>
            <Card.Img variant="top" src={item.image} alt={item.brand} className="mt-5"/>
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{item.brand} - Sale #{item.id}</Card.Title>
              <Card.Text>
                <strong>Purchase Date:</strong> {item.date}
              </Card.Text>
              <Card.Text>
                <strong>Sale Amount:</strong> Rs {item.amount}
              </Card.Text>
              <Card.Text>
                <strong>Reward Points:</strong> {item.points}
              </Card.Text>
              <Card.Text>
                <strong>Description:</strong> {item.description}
              </Card.Text>
              <Button variant="primary" as={Link} to="/dashboard">
                Back to Dashboard
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Item;
