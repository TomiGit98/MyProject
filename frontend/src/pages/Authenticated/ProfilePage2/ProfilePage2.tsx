import { NavigationBar } from "../../../components/NavigationBar/NavigationBar";
import "./ProfilePage2.scss";

import profile_photo from "../../../images/profile-photo-2.jpg";

import { ReactComponent as GridIcon } from "../../../svgs/grid1.svg";
import { ReactComponent as GridIcon2 } from "../../../svgs/grid2.svg";
import { ReactComponent as VideoIcon } from "../../../svgs/play2.svg";
import { ReactComponent as VideoIcon2 } from "../../../svgs/play1.svg";
import { ReactComponent as LockIcon } from "../../../svgs/lock1.svg";
import { ReactComponent as LockIcon2 } from "../../../svgs/lock2.svg";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { NewProfileContent } from "../../../components/NewProfileContent/NewProfileContent";


interface ISelectedMenu {
    name: string;
}

export const ProfilePage2: React.FC = () => {

    const [activeMenu, setActiveMenu] = useState<ISelectedMenu>({ name: "feed" });

    const onChooseMenuClick = (e: React.MouseEvent<HTMLElement>, value: string) => {
        if (value === "feed") {
            setActiveMenu({ name: "feed" });
        }

        if (value === "video") {
            setActiveMenu({ name: "video" });
        }

        if (value === "private") {
            setActiveMenu({ name: "private" });
        }
    }

    return (
        <div className="profile-page">
            <NavigationBar />
            <div className="profile-page__middle-container">
                <div className="middle-container__profile-header">
                    <div className="profile-header__upper-row">
                        <div className="upper-row__image-container">
                            <img src={profile_photo} className="aspect-[1/1]" alt="profile"></img>
                        </div>
                        <div className="upper-row__details-container">
                            <div className="details-container__statistics-container">
                                <div className="statistics-container__statistic-item">
                                    <p>1.7M</p>
                                    <p>Like</p>
                                </div>
                                <div className="statistics-container__statistic-item">
                                    <p>127K</p>
                                    <p>Follow</p>
                                </div>
                                <div className="statistics-container__statistic-item">
                                    <p>876</p>
                                    <p>Follower</p>
                                </div>
                            </div>
                            <div className="details-container__name-container">
                                <p className="name-container__full-name">Emily Tate</p>
                                <button className="name-container__follow">Follow</button>
                            </div>
                            <div className="details-container__nick-name-container">
                                <p className="name-container__nick-name">@tate_emily</p>
                            </div>
                        </div>
                    </div>
                    {/*<p className="content-container__feed-title">Bio</p>*/}
                    <div className="profile-header__description-row">
                        <p>Instagram: makkadriennofficial</p>
                        <p>Koncert rendelés a: koncert@koncertrendeles.hu ☾</p>
                        <p>Budapest🌙</p>
                        <p>20 years</p>
                    </div>
                </div>
                <div className="middle-container__controller-container">
                    {/*<div className="controller-container__bottom-line" />*/}
                    <div className="controller-container__inner-controller-container">
                        <div
                            className={`${(activeMenu.name === "feed") ? "inner-controller-container__active-controller-item" : "inner-controller-container__controller-item"}`}
                            onClick={(e) => onChooseMenuClick(e, "feed")}>
                            {(activeMenu.name === "feed") && <GridIcon2 />}
                            {(activeMenu.name !== "feed") && <GridIcon />}
                            <p>Feed</p>
                        </div>
                        <div className={`${(activeMenu.name === "video") ? "inner-controller-container__active-controller-item" : "inner-controller-container__controller-item"}`}
                            onClick={(e) => onChooseMenuClick(e, "video")}>
                            {(activeMenu.name === "video") && <VideoIcon2 />}
                            {(activeMenu.name !== "video") && <VideoIcon />}
                            <p>Video</p>
                        </div>
                        <div className={`${(activeMenu.name === "private") ? "inner-controller-container__active-controller-item" : "inner-controller-container__controller-item"}`}
                            onClick={(e) => onChooseMenuClick(e, "private")}>
                            {(activeMenu.name === "private") && <LockIcon2 />}
                            {(activeMenu.name !== "private") && <LockIcon />}
                            <p>Private</p>
                        </div>
                    </div>
                    <div className="controller-container__bottom-line" />
                </div>
                <div className="middle-container__content-container">
                    {/*<p className="content-container__feed-title">Feed</p>*/}
                    <Container className="feed-container" fluid>
                        <Row>
                            <NewProfileContent />
                            <NewProfileContent />
                            <NewProfileContent />
                            <NewProfileContent />
                            <NewProfileContent />
                            <NewProfileContent />
                            <NewProfileContent />
                            <NewProfileContent />
                            <NewProfileContent />
                        </Row>
                    </Container>
                </div>

            </div>
        </div>
    );
};