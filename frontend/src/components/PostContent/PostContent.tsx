import "./PostContent.scss";

import photo from "../../images/profile2.png";
import profile from "../../images/profile.png";

import { ReactComponent as LoveIcon } from "../../svgs/love2.svg";
import { ReactComponent as CommentIcon } from "../../svgs/commentgood.svg";
import { ReactComponent as ShareIcon } from "../../svgs/sharegood3.svg";

export const PostContent: React.FC = () => {

    return (
        <div className="post-wrapper-container">
            <div className="post-wrapper-container__post-container shadow-sm">
                <div className="post-container__content-container">
                    <img src={photo} alt="profile"></img>
                    <div className="content-container__header-container">
                        <div className="header-container__profile-container">
                            <img src={profile} alt="content"></img>
                            {/*<div className="profile-container__name-container">
                                <p>Emily Tate</p>
                                <p>Budapest, Öntő út</p>
                            </div>*/}
                        </div>
                    </div>
                </div>
                <div className="post-container__footer-container">
                    <div className="footer-container__date-container">
                        <div className="date-container__left-container">
                            <p>November 19, 2019</p>
                        </div>
                        <div className="date-container__right-container">
                            <div className="reaction-count-container__reaction-count-item">
                                <LoveIcon />
                                <p>2.7M</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-container__description-container">
                        <p>
                            'The greatest glory in living lies not in never falling,
                            but in rising every time we fall.' -Nelson Mandela
                        </p>
                    </div>
                    <div className="footer-container__hashtag-container">
                        <a href="/home">#highlife</a>
                        <a href="/home">#fun</a>
                        <a href="/home">#nature</a>
                    </div>
                    <div className="hr-container">
                        <hr />
                    </div>
                    <div className="footer-container__reaction-container">
                        <div className="reaction-container__reaction-item-container">
                            <LoveIcon />
                            <p>Love</p>
                        </div>
                        <div className="reaction-container__reaction-item-container">
                            <CommentIcon />
                            <p>Comment</p>
                        </div>
                        <div className="reaction-container__reaction-item-container">
                            <ShareIcon />
                            <p>Share</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post-wrapper-container__reaction-container">

            </div>
        </div>
    );
}