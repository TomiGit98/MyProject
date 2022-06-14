import SideBar from "../../components/SideBar/SideBar";
import TopNavigationBar from "../../components/TopNavigationBar/TopNavigationBar";

import profile from "../../images/profile.jpg"

import "./ProfilePage.css"

const ProfilePage = () => (
    <div className="profile-page-container">
        <div>
            <TopNavigationBar />
        </div>
        <div className="profile-page-container-content">
            <SideBar />
            <div className="profile-page-main-content">
                <div className="profile-page-main-content-outer-holder">
                    <div className="profile-details-container">
                        <div className="profile-details-container-left">
                            <img src={profile} alt="profile" />
                        </div>
                        <div className="profile-details-container-right">
                            <div className="profile-details-statistics">
                                <p><strong>7.2M</strong> Like</p>
                                <p><strong>1.7K</strong> Follower</p>
                                <p><strong>787</strong> Friends</p>
                            </div>
                            <div className="profile-details-container-name">
                                <p>Bruce Wayne</p>
                                <button>Follow</button>
                            </div>
                            <div className="profile-details-container-nickname">
                                <p>@Wayne</p>
                            </div>
                        </div>
                    </div>
                    <div className="profile-details-container-description">
                        <p>This is a description of the profile and you should read it beacause it took sometime to use the keyboard to write that down.</p>
                    </div>
                </div>
                <div className="profile-page-content-controller">
                    <p>Uploads</p>
                    <p>Trophy</p>
                    <p>Settings</p>
                </div>
                <div className="profile-page-content-container">
                    
                </div>
            </div>
        </div>
    </div>
);

export default ProfilePage;