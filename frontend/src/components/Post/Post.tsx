import { NavigationBar } from "../NavigationBar/NavigationBar";
import "./Post.scss";

import photo from "../../images/profile-photo-2.jpg";
import profile from "../../images/profile-photo-3.jpeg";

import { ReactComponent as MoreIcon } from "../../svgs/moreup1.svg";

import { ReactComponent as LoveIcon } from "../../svgs/love3.svg";
import { ReactComponent as CommentIcon } from "../../svgs/comment2.svg";
import { ReactComponent as ShareIcon } from "../../svgs/share-1.svg";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

interface IsLikedInterface {
    liked: boolean;
}

export const Post = () => {

    const [isLiked, setIsLiked] = useState<IsLikedInterface>({ liked: false });

    const onLoveClicked = (e: React.MouseEvent<HTMLElement>) => {
        if(isLiked.liked) {

        } else {

        }
        setIsLiked({ liked: !isLiked.liked })
    }

    return (
        <div>
            <div className="post-container">
                <div className="post-container__post-header">
                    <div className="post-header__profile-picture-container">
                        <img src={profile} />
                    </div>
                    <div className="post-header__profile-middle-container">
                        <p>Emily Bilson</p>
                        <p>2022.09.27</p>
                    </div>
                    <div className="post-header__profile-right-container">
                        <MoreIcon />
                    </div>
                </div>
                <img src={photo} alt="content" className="aspect-[1/1]" />
                <div className="post-container__description-container">
                    <p>
                        It was an awesome day,☾ so I share it with you!
                        🌙 I hope you like it and like these emojies
                        because I spent a lot of time to find them. 😀🤩🥳
                    </p>
                </div>
            </div>
            <Container className="post-container__statistics-container" fluid>
                <Row>
                    <Col className="statistics-container__statistic-col-right">
                        <div className="statistic-col-right__statistic-item">
                            <CommentIcon />
                            <p>52</p>
                        </div>
                        <div className="statistic-col-right__statistic-item">
                            <ShareIcon />
                            <p>1.2K</p>
                        </div>
                        {/*${(activeMenu.name === "video") ? 
                        "inner-controller-container__active-controller-item" : 
                        "inner-controller-container__controller-item"}*/}
                        <div className={`statistic-col-right__statistic-item ${(isLiked.liked === true) ? "statistic-col-right__active-statistic-item" : "" }`} 
                        onClick={(e) => onLoveClicked(e)}>
                            <LoveIcon />
                            <p>137M</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}