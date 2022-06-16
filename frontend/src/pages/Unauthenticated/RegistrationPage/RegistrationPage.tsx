import "./RegistrationPage.scss"

import snap from "../../../images/snap.png";

export const RegistrationPage: React.FC = () => (
    <div className="registration-page-container">
        <div className="d-none d-sm-flex registration-page-container__registration-component--pc">
            <p className="title-of-the-app">Registration to Post It</p>
            <div className="registration-component__symbol-container">
                <img src={snap} alt="logo" />
            </div>
            <input placeholder="E-mail" className="shadow-sm" />
            <input placeholder="Full name" className="shadow-sm" />
            <input placeholder="Username" className="shadow-sm" />
            <input placeholder="Password" className="shadow-sm" />
            <div className="registration-component__button-container--pc">
                <button className="">Sign-up</button>
            </div>
            <p className="registration-link">Do you have already an account? <a href="/login">Sign-in</a></p>
            <div className="registration-component__footer-container--pc">
                <p className="copyright">&copy; 2022 Post It</p>
            </div>
        </div>
        <div className="d-flex d-sm-none registration-page-container__registration-component--mobile">
            <p className="title-of-the-app">Registration to Post It</p>
            <div className="registration-component__symbol-container">
                <img src={snap} alt="logo" />
            </div>
            <input placeholder="E-mail" className="shadow-sm" />
            <input placeholder="Full name" className="shadow-sm" />
            <input placeholder="Username" className="shadow-sm" />
            <input placeholder="Password" className="shadow-sm" />
            <div className="registration-component__button-container--mobile">
                <button className="">Sign-up</button>
            </div>
            <p className="registration-link">Do you have already an account? <a href="/login">Sign-in</a></p>
            <div className="registration-component__footer-container--mobile">
                <p className="copyright">&copy; 2022 Post It</p>
            </div>
        </div>
    </div>
);