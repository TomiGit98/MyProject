import "./RegistrationPage.scss"

export const RegistrationPage: React.FC = () => (
    <div className="registration-page-container">
        <div className="d-none d-sm-flex registration-page-container__registration-component--pc">
            <p className="title-of-the-app">Register your account to Post It</p>
            <input placeholder="e-mail, username" />
            <input placeholder="password" />
            <input placeholder="password again" />
            <hr />
            <div className="registration-component__button-container--pc">
                <button className="">Sign-up</button>
            </div>
            <p className="registration-link">Already registered? <a href="/">Back to Sign-in</a></p>
            <p className="copyright">&copy; 2022 PostIt</p>
        </div>
        <div className="d-flex d-sm-none registration-page-container__registration-component--mobile">
            <p className="title-of-the-app">Register your account to Post It</p>
            <input placeholder="e-mail, username" />
            <input placeholder="password" />
            <input placeholder="password again" />
            <div className="registration-component__button-container--mobile">
                <button className="">Sign-up</button>
            </div>
            <p className="registration-link">Already registered? <a href="/">Back to Sign-in</a></p>
            <p className="copyright">&copy; 2022 PostIt</p>
        </div>
    </div>
);