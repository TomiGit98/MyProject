import { Col, Container, Row } from "react-bootstrap";
import "./UploadPhotoSelect1.scss";

import { ReactComponent as RightIcon } from "../../../svgs/right.svg";
import { ReactComponent as PhotoIcon } from "../../../svgs/photo.svg";
import React, { useRef, useState } from "react";

interface Step1Props {
    setStep: (stepNum: Number) => void;
    setImageState: (img: any) => void;
}

export const UploadPhotoSelect1: React.FC<Step1Props> = ({ setStep, setImageState }: Step1Props) => {

    const selectFileRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<any>(null);

    const nextStep = () => {
        setImageState(selectedFile)
        setStep(2);
    }

    const onHandleSelectFileChange = (event: any) => {
        try {
            setSelectedFile(URL.createObjectURL(event.target.files[0]))
        } catch (exception) {
            console.error("Target is null, maybe you not selected file!")
        }
    }

    const onFileUploadClick = () => {
        selectFileRef.current?.click();
    }

    return (
        <Container className="upload-container__upload-form-container" fluid>
            <Row>
                <Col className="upload-form-container__left-upload-col" xs={12} lg={6}>

                    <input className="left-upload-col__upload-file-input" type="file" onChange={onHandleSelectFileChange} ref={selectFileRef} />
                    <div className="left-upload-col__preview-container" onClick={onFileUploadClick}>
                        {selectedFile !== null && <img src={selectedFile} />}
                        {selectedFile === null && <PhotoIcon />}
                    </div>

                </Col>
                <Col className="upload-form-container__right-upload-col" xs={12} lg={6}>
                    <Container fluid>
                        <Row>
                            <Col className="right-upload-col__navigator-left">

                            </Col>
                            <Col className="right-upload-col__navigator-middle">
                                <p>Choose</p>
                            </Col>
                            <Col className="right-upload-col__navigator-right" onClick={nextStep}>
                                <p>Step 2</p>
                                <RightIcon />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}