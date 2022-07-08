import { PostContent } from "../../components/PostContent/PostContent";
import { TopNavigationBar } from "../../components/TopNavigationBar/TopNavigationBar";
import "./HomePage.scss";

export const HomePage: React.FC = () => {

    return (
        <div className="home-page-container">
            <TopNavigationBar />
            <div className="home-page-container__content-container">
                <PostContent />
            </div>
        </div>
    );
}