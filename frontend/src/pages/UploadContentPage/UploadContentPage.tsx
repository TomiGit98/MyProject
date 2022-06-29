import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { TopNavbar } from "../../components/TopNavbar/TopNavbar";
import { UploadPhotoCrop2 } from "../../components/UploadPhoto/UploadPhotoCrop2/UploadPhotoCrop2";
import { UploadPhotoFilter3 } from "../../components/UploadPhoto/UploadPhotoFilter3/UploadPhotoFilter3";
import { UploadPhotoSelect1 } from "../../components/UploadPhoto/UploadPhotoSelect1/UploadPhotoSelect1";
import "./UploadContentPage.scss";

export const UploadContentPage: React.FC = () => {

    const [step, setStep] = useState<Number>(1);
    const [imageState, setImageState] = useState<any>();

    return (
        <div className="upload-content-page">
            <TopNavbar />
            <div className="upload-content-page__upload-container">
                {step === 1 && <UploadPhotoSelect1 setStep={setStep} setImageState={setImageState}/>}
                {step === 2 && <UploadPhotoCrop2 setStep={setStep} setImageState={setImageState}/>}
                {step === 3 && <UploadPhotoFilter3 setStep={setStep} setImageState={setImageState}/>}
                {step === 4 && <p>4</p>}
            </div>
        </div>
    );
}