import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar/SideBar";
import TopNavigationBar from "../../components/TopNavigationBar/TopNavigationBar";
import "./ContentPage.scss";

import world from "../../images/world.jpg"
import owl2 from "../../images/owl.jpg"
import girl from "../../images/girl.jpg"
import { ContentComment } from "../../components/ContentComment/ContentComment";

export const ContentPage: React.FC = () => (
    <div>
        <div>
            <TopNavigationBar />
        </div>
        <div className="content-page-container-content">
            <SideBar />
            <div className="content-page-main-content">
                <div className="content-page-main-content-positioning-container">
                    <Container className="content-container" fluid>
                        <Row>
                            <Col xs={12}>
                                <div className="content-container-left">
                                    <img src={girl} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                < hr />
                <div className="conten-page-comments-container">
                    <ContentComment />
                    <ContentComment />
                    <ContentComment />
                    <ContentComment />
                    <ContentComment />
                </div>

            </div>
        </div>
    </div>
);