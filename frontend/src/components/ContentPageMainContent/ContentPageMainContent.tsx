import { Container, Row, Col } from "react-bootstrap";
import "./ContentPageMainContent.scss";

import world3 from "../../images/world3.jpg"
import girl from "../../images/girl.jpg"
import { ContentComment } from "../ContentComment/ContentComment";

export const ContentPageMainContent: React.FC = () => (
    <div className="content-page-main-content">
        <div className="content-page-main-content-positioning-container d-none d-md-block">
            <Container className="content-container" fluid>
                <Row className="content-container-row">
                    <Col xs={12} lg={8}>
                        <div className="content-container-left">
                            <img src={world3} />
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <div className="content-container-right">
                            <div className="content-container-right-header">
                                <img src={girl} />
                                <div className="content-container-right-header-details">
                                    <p>Michael Rodrigues</p>
                                    <p>2022.08.15</p>
                                </div>
                            </div>
                            <div className="post-description">
                                <p>
                                    It is a description full of sth but it is not the vest comment so pls fill it.
                                    It is a description full of sth but it is not the vest comment so pls fill it.
                                </p>
                            </div>
                            <div className="post-comments">

                            </div>
                    
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="content-page-main-content-positioning-container d-block d-md-none">
            <p>Kecske</p>
        </div>
    </div>
);