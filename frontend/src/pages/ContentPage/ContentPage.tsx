import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar/SideBar";
import TopNavigationBar from "../../components/TopNavigationBar/TopNavigationBar";
import "./ContentPage.scss";

import world from "../../images/world.jpg"
import owl2 from "../../images/owl.jpg"

import { ContentComment } from "../../components/ContentComment/ContentComment";
import { ContentPageMainContent } from "../../components/ContentPageMainContent/ContentPageMainContent";

export const ContentPage: React.FC = () => (
    <div>
        <div>
            <TopNavigationBar />
        </div>
        <div className="content-page-container-content">
            <div className="d-none d-md-block">
                <SideBar />
            </div>

            <ContentPageMainContent />
        </div>
    </div>
);