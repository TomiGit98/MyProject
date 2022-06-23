import React from "react";
import "./ProfilePage.scss";

import profile from "../../../images/profile-photo.jpg"

import profilephoto1 from "../../../images/profile-photo-1.png"
import profilephoto2 from "../../../images/profile-photo-2.jpg"
import profilephoto3 from "../../../images/profile-photo-3.jpeg"
import profilephoto4 from "../../../images/profile-photo-4.jpg"
import profilephoto5 from "../../../images/profile-photo-5.png"

import { ReactComponent as GridIcon } from "../../../svgs/grid2.svg";
import { ReactComponent as LockIcon } from "../../../svgs/lock.svg";
import { ReactComponent as VideoIcon } from "../../../svgs/video.svg";
import { Container, Row, Col } from "react-bootstrap";
import { ProfileContent } from "../../../components/ProfileContent/ProfileContent";
import { ProfileContentSmall } from "../../../components/ProfileContentSmall/ProfileContentSmall";

export const ProfilePage: React.FC = () => (
    <div className="profile-page-container">
        <div className="d-none d-sm-flex profile-page-container__profile-container">
            <div className="profile-container__header">
                <div className="header__upper-container">
                    <img src={profile} alt="profile" className="shadow-md" />
                    <div className="upper-container__details-container">
                        <div className="details-container__statistic-container">
                            <div className="statistic-container__statistic-item">
                                <p>127K</p>
                                <p>Like</p>
                            </div>
                            <div className="statistic-container__statistic-item">
                                <p>785</p>
                                <p>Friends</p>
                            </div>
                            <div className="statistic-container__statistic-item">
                                <p>1.2M</p>
                                <p>Followers</p>
                            </div>
                        </div>
                        <div className="details-container__names-container">
                            <p>Emily Becktwitch</p>
                            <button className="shadow-md">Follow</button>
                        </div>
                        <p className="details-container__nick-name">@emily_beck</p>
                    </div>
                </div>
                <div className="header__description-container">
                    <div className="description-container__description">
                        <p>Instagram: makkadriennofficial</p>
                        <p>Koncert rendelés a: koncert@koncertrendeles.hu ☾</p>
                        <p>Budapest🌙</p>
                        <p>20 years</p>
                    </div>
                </div>
            </div>
            <div className="profile-container__content-controller">
                <div className="content-controller__controller-item">
                    <div className="controller-item__item-container">
                        <GridIcon />
                        <p>Uploads</p>
                    </div>
                    <div className="controller-item__bottom-border" />
                </div>
                <div className="content-controller__controller-item">
                    <div className="controller-item__item-container">
                        <VideoIcon />
                        <p>Videos</p>
                    </div>
                    <div className="controller-item__bottom-border" />
                </div>
                <div className="content-controller__controller-item">
                    <div className="controller-item__item-container">
                        <LockIcon />
                        <p>Private</p>
                    </div>
                    <div className="controller-item__bottom-border" />
                </div>
            </div>
            <div className="profile-container__content-container">
                <Container fluid>
                    <Row>
                        <ProfileContent img={profilephoto1} type="video" />
                        <ProfileContent img={profilephoto2} type="photo" />
                        <ProfileContent img={profilephoto3} type="photo" />
                        <ProfileContent img={profilephoto4} type="multi-photo" />
                        <ProfileContent img={profilephoto5} type="video" />
                        <ProfileContent img={profilephoto4} type="photo" />
                        <ProfileContent img={profilephoto5} type="multi-photo" />
                        <ProfileContent img={profilephoto4} type="photo" />
                        <ProfileContent img={profilephoto5} type="video" />
                    </Row>
                </Container>
            </div>
        </div>
        <div className="d-flex d-sm-none profile-page-container__profile-container--mobile">
            <img src={profile} alt="profile" className="shadow-md" />
            <p className="profile-container__name">Emily Becktwitch</p>
            <Container className="details-container__statistic-container--mobiles">
                <Row>
                    <Col className="statistic-container__statistic-item--mobile">
                        <p>127K</p>
                        <p>Like</p>
                    </Col>
                    <Col className="statistic-container__statistic-item--mobile">
                        <p>785</p>
                        <p>Friends</p>
                    </Col>
                    <Col className="statistic-container__statistic-item--mobile">
                        <p>1.2M</p>
                        <p>Followers</p>
                    </Col>
                </Row>
            </Container>
            <button className="shadow-md">Follow</button>
            <div className="header__description-container--mobile">
                <div className="description-container__description--mobile">
                    <p>Instagram: makkadriennofficial</p>
                    <p>Koncert rendelés a: koncert@koncertrendeles.hu ☾</p>
                    <p>Budapest🌙</p>
                    <p>20 years</p>
                </div>
            </div>
            <Container className="profile-container__content-controller--mobile" fluid>
                <Row>
                    <Col className="content-controller__controller-item--mobile">
                        <div className="controller-item__bottom-border" />
                        <div className="controller-item__item-container--mobile">
                            <GridIcon />
                        </div>
                        <div className="controller-item__bottom-border" />
                    </Col>
                    <Col className="content-controller__controller-item--mobile">
                        <div className="controller-item__bottom-border" />
                        <div className="controller-item__item-container--mobile">
                            <VideoIcon />
                        </div>
                        <div className="controller-item__bottom-border" />
                    </Col>
                    <Col className="content-controller__controller-item--mobile">
                        <div className="controller-item__bottom-border" />
                        <div className="controller-item__item-container--mobile">
                            <LockIcon />
                        </div>
                        <div className="controller-item__bottom-border" />
                    </Col>
                </Row>
            </Container>
            <div className="profile-container__content-container--mobile">
                <Container fluid>
                    <Row>
                        <ProfileContentSmall img={profilephoto1} type="video" />
                        <ProfileContentSmall img={profilephoto2} type="photo" />
                        <ProfileContentSmall img={profilephoto3} type="photo" />
                        <ProfileContentSmall img={profilephoto4} type="multi-photo" />
                        <ProfileContentSmall img={profilephoto5} type="video" />
                        <ProfileContentSmall img={profilephoto4} type="photo" />
                        <ProfileContentSmall img={profilephoto5} type="multi-photo" />
                        <ProfileContentSmall img={profilephoto4} type="photo" />
                        <ProfileContentSmall img={profilephoto5} type="video" />
                    </Row>
                </Container>
            </div>
        </div>
    </div >
);