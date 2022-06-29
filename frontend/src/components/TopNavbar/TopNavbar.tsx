import { Col, Container, Row } from "react-bootstrap";
import "./TopNavbar.scss";

export const TopNavbar: React.FC = () => {

    return (
        <Container className="top-navbar" fluid>
            <Row className="top-navbar-row">
                <Col className="top-navbar-row__row-left-container d-none d-lg-flex" xs={3}>
                    
                </Col>
                <Col className="top-navbar-row__row-middle-container" xs={12} lg={6}>
                    <input className="top-navbar-row__search-bar">

                    </input>
                </Col>
                <Col className="top-navbar-row__row-right-container d-none d-lg-flex" xs={3}>
                    
                </Col>
            </Row>
        </Container>
    );
}