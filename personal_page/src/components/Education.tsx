import { BookOpen } from "lucide-react";
import CollapsableCard from "./CollapsableCard";
import { Container, Col, Row } from "react-bootstrap";
import useWindowDim from "../hooks/useWindowDim";
import { useEffect, useRef, useState } from "react";

export default function Education() {
    const screenDim = useWindowDim();
    const colRef = useRef<HTMLDivElement>(null);
    const [colWidth, setColWidth] = useState(0);
    useEffect(() => {
        if (colRef.current) {
            setColWidth(colRef.current!.offsetWidth);
        }
    }, [screenDim]);

    return <CollapsableCard title="Education & Skills" icon={<BookOpen size={24} />} >
        <Container>
        <Row>
            <Col sm={12} md={6} >
                <Container>
                <Row className="margin-top-btm">
                    <Col xs={3} ref={colRef}>
                        <img src='washu_logo.png' alt="WashU logo" width={colWidth>50? 50 : colWidth}/>
                    </Col>
                    <Col xs={9} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <h3> Washington University in St. Louis </h3>
                        <i> B.S., Computer Science and Biology </i>
                        <p> Expected: May 2027 </p>
                    </Col>
                </Row>
                <Row className="margin-top-btm">
                    <Col xs={3}>
                        <img src='shs.png' alt="Shanghai High School logo" width={colWidth>50? 50 : colWidth}/>
                    </Col>
                    <Col xs={9} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <h3> Shanghai High School </h3>
                    </Col>
                </Row>
                </Container>
            </Col>
            <Col sm={12} md={6} className="intro-text" >
                <h2> Skills </h2>
                <ul>
                    <li>
                        <b>Programming:</b> Python, R, C, C++, Java, HTML/CSS/JavaScript, PHP, SQL, Mathematica
                    </li>
                    <li>
                        <b>Wet Lab:</b> Basic Biology and Chemistry Lab Operations
                    </li>
                    <li>
                        <b>Languages: </b> Chinese (native), English (fluent)
                    </li>
                </ul>
            </Col>
        </Row>
        </Container>
    </CollapsableCard>
}