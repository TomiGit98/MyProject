import "./PostComponent.scss";

import { ReactComponent as LocationIcon } from "../../svgs/location2.svg";
import { ReactComponent as LoveIcon } from "../../svgs/love-fill.svg";
import { ReactComponent as CommentIcon } from "../../svgs/comment-fill.svg";
import { ReactComponent as ShareIcon } from "../../svgs/share-fill.svg";
import { ReactComponent as MoreIcon } from "../../svgs/more.svg";


interface PostProps {
    username: string;
    location: string;
    profilePicture: any;
    contentImage: any;
    date: string;
    capitation: string;
    hashtags: string;
    loveCounter: string;
    commentCounter: string;
    shareCounter: string;
}

export const PostComponent: React.FC<PostProps> = ({
    username,
    location,
    profilePicture,
    contentImage,
    date,
    capitation,
    hashtags,
    loveCounter,
    commentCounter,
    shareCounter }: PostProps
) => {
    return (
        <div className="post-component shadow-sm">
            <div className="post-component__post-header">
                <div className="post-header__left-container">
                    <img src={profilePicture}></img>
                </div>
                <div className="post-header__middle-container">
                    <div className="middle-container__name-container">
                        <p className="name-container__username">{username}</p>
                        <div className="details-container__location-container">
                            <LocationIcon />
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
                <div className="post-header__right-container">
                    <MoreIcon />
                </div>

            </div>
            <div className="post-component__post-content">
                <img src={contentImage} style={{ width: '100%' }}></img>
                <div className="post-content__reaction-container">
                    <div className="reaction-container__reaction-item">
                        <ShareIcon />
                        <p>{shareCounter}</p>
                    </div>
                    <div className="reaction-container__reaction-item">
                        <CommentIcon />
                        <p>{commentCounter}</p>
                    </div>
                    <div className="reaction-container__reaction-item">
                        <LoveIcon />
                        <p>{loveCounter}</p>
                    </div>
                </div>
            </div>
            <div className="post-component__post-footer">
                <div className="post-footer__details-container">
                    <p className="details-container__date">{date}</p>
                </div>
                <div className="post-footer__capitation-container">
                    <p className="capitation-container__capitation">
                        {capitation}
                    </p>
                </div>
                <div className="post-footer__hashtag-container">
                    <p className="hashtag-container__hashtag">
                        {hashtags}
                    </p>
                </div>
            </div>
        </div>
    );
}