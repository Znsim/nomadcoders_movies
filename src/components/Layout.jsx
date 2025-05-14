// src/components/Layout.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function Layout() {
  return (
    <Container fluid className="p-0">
      {/* 상단 공통 제목 */}
      <Row className="justify-content-center mb-4" style={{ backgroundColor: "black", height: "60px" }}>
        <Col className="d-flex align-items-center justify-content-center">
            <Link to="/" style={{ color: "white", fontWeight: "bold", fontSize: "2rem", textDecoration: "none" }}>
            MOVIES
            </Link>
        </Col>
    </Row>


      {/* 라우팅되는 실제 콘텐츠 영역 */}
      <Outlet />
    </Container>
  );
}
