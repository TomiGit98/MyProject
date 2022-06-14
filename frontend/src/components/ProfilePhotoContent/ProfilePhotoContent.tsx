import { Col } from "react-bootstrap";

import "./ProfilePhotoContent.scss"

interface PhotoContentProps {
    likeNumber: string;
    image: any
}


export const ProfilePhotoContent: React.FC<PhotoContentProps> = ({ likeNumber, image }: PhotoContentProps) => (
    <Col className="profile-photo-content-container" xs={4} xxl={3}>
        <div className="aspect-w-1 aspect-h-1 content-container">
            <img src={image} alt="user-content"/>
        </div>
    </Col>
);