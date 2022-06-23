import { NavigationBar } from "../../../components/NavigationBar/NavigationBar";
import { Post } from "../../../components/Post/Post";
import "./HomePage.scss";

export const HomePage = () => {

    return (
        <div className="home-page">
            <NavigationBar />
            <div className="home-page__middle-container">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}