import { Col } from "react-bootstrap";

import "./UserProfileElement.scss";

import profile from "../../images/profile.jpg";

export const UserProfileElement: React.FC = () => (
    <Col className="user-profile-element-container" xs={4}>
        <div className="user-profile-element-inner-container aspect-h-4 aspect-w-3">
            <div className="user-profile-element-image-container">
                <img src={profile} />
                <p>Bruce Wayne</p>
                
                
            </div>
        </div>
    </Col>
);