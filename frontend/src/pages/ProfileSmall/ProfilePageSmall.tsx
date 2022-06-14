import React from "react";

import "./ProfilePageSmall.scss";

import profile from "../../images/profile.jpg";

import owl from "../../images/owl.jpg"
import owl2 from "../../images/owl2.jpg"
import world from "../../images/world.jpg"
import world2 from "../../images/world2.jpg"
import world3 from "../../images/world3.jpg"

import { ReactComponent as GridIcon } from "../../svgs/grid1.svg";
import { ReactComponent as FireIcon } from "../../svgs/fire2.svg";
import { ReactComponent as HomeIcon } from "../../svgs/home.svg";

import { Container, Row, Col } from "react-bootstrap";
import { ProfilePhotoContent } from "../../components/ProfilePhotoContent/ProfilePhotoContent";

export const ProfilePageSmall: React.FC = () => (
    <div className="profile-page-small-container">
        <div className="profile-page-small-picture-container">
            <img src={profile} alt="profile" />
        </div>
        <div className="profile-page-small-name">
            <p>Bruce Wayne</p>
        </div>
        <div className="profile-page-small-nickname">
            <p>@Wayne</p>
        </div>
        <Container className="profile-page-small-status-container" fluid>
            <Row className="profile-page-small-status-row">
                <Col className="profile-page-small-status-item">
                    <p><strong>7.2M</strong></p>
                    <p>Followers</p>
                </Col>
                <Col className="profile-page-small-status-item">
                    <p><strong>1.7K</strong></p>
                    <p>Followers</p>
                </Col>
                <Col className="profile-page-small-status-item">
                    <p><strong>787</strong></p>
                    <p>Friends</p>
                </Col>
            </Row>
        </Container>
        <div className="profile-page-small-user-interaction-controller">
            <button>Follow</button>
        </div>
        {/*<div className="profile-page-small-description-container">
            <p>
                This is a description of the profile and you should read it beacause it
                took sometime to use the keyboard to write that down.
                So please read it beacause it must be readed.
            </p>
</div>*/}
        <Container className="profile-page-small-content-controller-container" fluid>
            <Row className="profile-page-small-content-controller-row">
                <Col>
                    <GridIcon />
                    <p>Uploads</p>
                </Col>
                <Col>
                    <FireIcon />
                    <p>Trophy</p>
                </Col>
                <Col>
                    <HomeIcon />
                    <p>Settings</p>
                </Col>
            </Row>
        </Container>
        <Container className="profile-page-small-content-container" fluid>
            <Row className="profile-page-small-content-container-row">
                <ProfilePhotoContent likeNumber="127K" image={owl} />
                <ProfilePhotoContent likeNumber="127K" image={owl2} />
                <ProfilePhotoContent likeNumber="127K" image={world} />
                <ProfilePhotoContent likeNumber="127K" image={world2} />
                <ProfilePhotoContent likeNumber="127K" image={world3} />
                <ProfilePhotoContent likeNumber="127K" image={world2} />
                <ProfilePhotoContent likeNumber="127K" image={owl} />
                <ProfilePhotoContent likeNumber="127K" image={world} />
                <ProfilePhotoContent likeNumber="127K" image={world2} />
                <ProfilePhotoContent likeNumber="127K" image={owl} />
                <ProfilePhotoContent likeNumber="127K" image={world2} />
                <ProfilePhotoContent likeNumber="127K" image={world3} />
                <ProfilePhotoContent likeNumber="127K" image={owl} />
                <ProfilePhotoContent likeNumber="127K" image={world2} />
                <ProfilePhotoContent likeNumber="127K" image={owl} />
                <ProfilePhotoContent likeNumber="127K" image={world2} />
                <ProfilePhotoContent likeNumber="127K" image={world} />
                <ProfilePhotoContent likeNumber="127K" image={owl} />
                <ProfilePhotoContent likeNumber="127K" image={world2} />
                <ProfilePhotoContent likeNumber="127K" image={owl} />
                <ProfilePhotoContent likeNumber="127K" image={world} />
                <ProfilePhotoContent likeNumber="127K" image={world3} />
                <ProfilePhotoContent likeNumber="127K" image={world2} />
                <ProfilePhotoContent likeNumber="127K" image={world} />
                <ProfilePhotoContent likeNumber="127K" image={owl} />
            </Row>
        </Container>
    </div >
);