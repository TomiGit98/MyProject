import { Col } from "react-bootstrap";
import "./NewProfileContent.scss";

import photo from "../../images/profile-photo-4.jpg"

import { ReactComponent as LoveIcon1 } from "../../svgs/love1.svg"
import { ReactComponent as MessageIcon1 } from "../../svgs/message2.svg"
import { ReactComponent as ShareIcon1 } from "../../svgs/share-1.svg"

export const NewProfileContent: React.FC = () => {

    return (
        <Col className="new-profile-content" xs={4} lg={3}>
            <div className="content__container">
                <img className="aspect-[1/1]" src={photo} alt="content" />
                <div className="container__content-item">
                    <LoveIcon1 />
                    <p>1.7M</p>
                </div>
            </div>
            {/*<div className="new-profile-content__controller-container">
                <div className="controller-container__status-item">
                    <LoveIcon1 />
                    <p>1.7M</p>
                </div>
                <div className="controller-container__status-item">
                    <MessageIcon1 />
                    <p>4.3K</p>
                </div>
                <div className="controller-container__status-item">
                    <ShareIcon1 />
                    <p>575</p>
                </div>
            </div>*/}
        </Col>
    );
}