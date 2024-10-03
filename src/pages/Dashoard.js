import React, { useState, useEffect, useContext } from "react";
import { Table, Button, Form, InputGroup, Row, Col } from "react-bootstrap";

import { UserContext } from "../context/usercontext";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const [sales, setSales] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
    setSales(user.sales);
  }, [user]);

  const handleSort = (type) => {
    const sorted = [...sales].sort((a, b) => {
      if (type === "date") {
        return sortOrder === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      } else if (type === "points") {
        return sortOrder === "asc" ? a.points - b.points : b.points - a.points;
      }
      return 0;
    });

    setSales(sorted);

    // Toggle sort order
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSearch = () => {
    return sales.filter((sale) =>
      sale.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  if (!user) {
    return (
      <div className="text-center" style={{ marginTop: "10%" }}>
        <h2>Please login redirect in 3 seconds</h2>
      </div>
    );
  }
  return (
    <div className="dashboard-container">
      {/* User Info Section */}
      <div className="user-info-card shadow p-3 mb-4 rounded">
        <Row className="align-items-center justify-content-between w-100">
          <Col md={2}>
            <img
              className="img-thumbnail w-100 h-100"
              src={user.user_data.image}
              alt="User Profile"
            />
          </Col>
          <Col md={8}>
            <h1>{user.user_data.name}</h1>
            <p className="fst-italic">{user.user_data.designation}</p>
          </Col>
          <Col md={2}>
            <Button className="bg-secondary w-50" onClick={handleLogout}>
              Logout
            </Button>
          </Col>
        </Row>
      </div>

      {/* Sales Summary Section */}
      <div className="sales-summary shadow p-3 mb-4 fw-bold rounded d-flex justify-content-between">
        <div>Total Sales: Rs 53,244,343</div>
        <div>Reward Points: 12,300</div>
      </div>

      {/* Search and Sort Section */}
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search by brand"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-secondary" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="outline-secondary" onClick={() => handleSort("date")}>
          Sort by Date
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => handleSort("points")}
        >
          Sort by Points
        </Button>
      </InputGroup>

      {/* Sales List Table */}
      <Table responsive bordered className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Purchase Date</th>
            <th>Sale Amount (Rs)</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {handleSearch().map((sale) => (
            <tr key={sale.id} onClick={() => navigate(`/item/${sale.id}`)}>
              <td>{sale.id}</td>
              <td className="fw-bold">{sale.brand}</td>
              <td>{sale.date}</td>
              <td>{sale.amount}</td>
              <td>{sale.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
