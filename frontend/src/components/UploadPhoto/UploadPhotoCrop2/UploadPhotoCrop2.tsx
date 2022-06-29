import "./UploadPhotoCrop2.scss";

import { Col, Container, Row } from "react-bootstrap";

import { ReactComponent as RightIcon } from "../../../svgs/right.svg";
import { ReactComponent as LeftIcon } from "../../../svgs/left.svg";
import React, { useState } from "react";

import image from "../../../images/profile-photo-1.png";



import Cropper from 'react-easy-crop'

interface Step2Props {
    setStep: (stepNum: Number) => void;
    setImageState: (img: any) => void;
}


export const UploadPhotoCrop2: React.FC<Step2Props> = ({ setStep, setImageState }: Step2Props) => {

    const prevStep = () => {
        setStep(1);
    }

    const nextStep = () => {
        setStep(3);
    }

    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(2)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropChange = (crop: any) => {
        setCrop(crop);
    };

    const onZoomChange = (zoom: any) => {
        setZoom(zoom);
    };

    return (
        <Container className="upload-container__upload-form-container" fluid>
            <Row>
                <Col className="upload-form-container__left-upload-col" xs={12} lg={6}>
                    <div className="left-upload-col__image-container">
                        <Cropper
                            image={image}
                            crop={crop}
                            zoom={zoom}
                            aspect={4 / 3}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                        />
                    </div>
                </Col>
                <Col className="upload-form-container__right-upload-col" xs={12} lg={6}>
                    <Container fluid>
                        <Row>
                            <Col className="right-upload-col__navigator-left" onClick={prevStep}>
                                <LeftIcon />
                                <p>Step 1</p>
                            </Col>
                            <Col className="right-upload-col__navigator-middle">
                                <p>Crop</p>
                            </Col>
                            <Col className="right-upload-col__navigator-right" onClick={nextStep}>
                                <p>Step 3</p>
                                <RightIcon />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}