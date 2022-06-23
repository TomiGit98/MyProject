import { Col } from "react-bootstrap";
import "./ProfileContentSmall.scss";

import { ReactComponent as RateIcon } from "../../svgs/star.svg";
import { ReactComponent as VideoIcon } from "../../svgs/vide2.svg";
import { ReactComponent as MorePhotoIcon } from "../../svgs/more-photo.svg";

interface ProfileContentProps {
    img: any;
    type: string;
}

export const ProfileContentSmall: React.FC<ProfileContentProps> = ({ img, type }: ProfileContentProps) => (
    <Col className="profile-content-small" xs={4} md={3} lg={3}>
        <div className="profile-content-small__profile-content-container-small aspect-w-4 aspect-h-5">
            <img src={img} alt="user-content-small" className="shadow-md"/>
            {/*<div className="profile-content-container-small__details">
                <RateIcon />
                <p>1.7M</p>
            </div>
            <div className="profile-content-container-small__type">
                {type === "multi-photo" && <MorePhotoIcon />}
                {type === "video" && <VideoIcon />}
            </div>*/}
        </div>
    </Col>
);