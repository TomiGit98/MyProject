import { PostComponent } from "../../components/PostComponent/PostComponent";
import { TopNavbar } from "../../components/TopNavbar/TopNavbar";
import "./HomePage.scss";

import vancouver from "../../images/vancouver.png";
import vancouver2 from "../../images/vancouver2.png";
import vancouver3 from "../../images/vancouver3.png";
import vancouver4 from "../../images/vancouver4.png";
import vancouver5 from "../../images/vancouver5.png";
import profile from "../../images/profil.png";

export const HomePage: React.FC = () => {

    return (
        <div className="home-page">
            <TopNavbar />
            <div className="home-page__middle-container">
                <PostComponent username="Sarah Ellis new"
                    location="Vancouver, Central Park"
                    profilePicture={profile}
                    contentImage={vancouver}
                    date="2022.10.07"
                    capitation="The best times begin at the end of your comfort zone.
                    So you can catch me on the opposite end of the end of
                    my comfort zone."
                    hashtags="#park #holiday #summerforest"
                    loveCounter="15M"
                    commentCounter="427"
                    shareCounter="1.7K" />
                <PostComponent username="Sarah Ellis new"
                    location="Vancouver, Central Park"
                    profilePicture={profile}
                    contentImage={vancouver2}
                    date="2022.10.07"
                    capitation="The best times begin at the end of your comfort zone.
                    So you can catch me on the opposite end of the end of
                    my comfort zone."
                    hashtags="#park #holiday #summerforest"
                    loveCounter="15M"
                    commentCounter="427"
                    shareCounter="1.7K" />
                <PostComponent username="Sarah Ellis new"
                    location="Vancouver, Central Park"
                    profilePicture={profile}
                    contentImage={vancouver3}
                    date="2022.10.07"
                    capitation="The best times begin at the end of your comfort zone.
                    So you can catch me on the opposite end of the end of
                    my comfort zone."
                    hashtags="#park #holiday #summerforest"
                    loveCounter="15M"
                    commentCounter="427"
                    shareCounter="1.7K" />
                <PostComponent username="Sarah Ellis new"
                    location="Vancouver, Central Park"
                    profilePicture={profile}
                    contentImage={vancouver4}
                    date="2022.10.07"
                    capitation="The best times begin at the end of your comfort zone.
                    So you can catch me on the opposite end of the end of
                    my comfort zone."
                    hashtags="#park #holiday #summerforest"
                    loveCounter="15M"
                    commentCounter="427"
                    shareCounter="1.7K" />
                <PostComponent username="Sarah Ellis new"
                    location="Vancouver, Central Park"
                    profilePicture={profile}
                    contentImage={vancouver5}
                    date="2022.10.07"
                    capitation="The best times begin at the end of your comfort zone.
                    So you can catch me on the opposite end of the end of
                    my comfort zone."
                    hashtags="#park #holiday #summerforest"
                    loveCounter="15M"
                    commentCounter="427"
                    shareCounter="1.7K" />
            </div>
        </div>
    );
}