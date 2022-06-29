import "./UploadPhotoFilter3.scss";

import { Col, Container, Row } from "react-bootstrap";

import { ReactComponent as RightIcon } from "../../../svgs/right.svg";
import { ReactComponent as LeftIcon } from "../../../svgs/left.svg";
import { ReactComponent as PhotoIcon } from "../../../svgs/photo.svg";
import React, { useRef, useState } from "react";

import image from "../../../images/profile-photo-1.png";

interface Step3Props {
    setStep: (stepNum: Number) => void;
    setImageState: (img: any) => void;
}

export const UploadPhotoFilter3: React.FC<Step3Props> = ({ setStep, setImageState }: Step3Props) => {

    const prevStep = () => {
        setStep(2);
    }

    const nextStep = () => {
        setStep(4);
    }

    return (
        <Container className="upload-container__upload-form-container" fluid>
            <Row>
                <Col className="upload-form-container__left-upload-col" xs={12} lg={6}>
                    <img src={image} style={{ filter: 'blur(5px)' }} />
                </Col>
                <Col className="upload-form-container__right-upload-col" xs={12} lg={6}>
                    <Container fluid>
                        <Row>
                            <Col className="right-upload-col__navigator-left">
                                <LeftIcon />
                                <p>Step 2</p>
                            </Col>
                            <Col className="right-upload-col__navigator-middle">
                                <p>Filters</p>
                            </Col>
                            <Col className="right-upload-col__navigator-right" onClick={nextStep}>
                                <p>Step 4</p>
                                <RightIcon />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}