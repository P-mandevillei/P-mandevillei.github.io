import { Col, Container, Row } from "react-bootstrap";
import useWindowDim from "../hooks/useWindowDim";
import { useEffect, useRef, useState } from "react";

type props = {
  title: React.ReactNode,
  period?: string,
  imgSrc: string,
  imgAlt: string,
  imgRef?: string,
  putImgLeft?: boolean,
  header?: string,
  children: React.ReactNode
}
export default function ExperienceItem({
    title, period="", imgSrc, imgAlt, imgRef="", putImgLeft=true, header="", children
}: props) {

    const screenDim = useWindowDim();
    const colRef = useRef<HTMLDivElement>(null);
    const [colWidth, setColWidth] = useState(0);
    useEffect(() => {
        if (colRef.current) {
            setColWidth(colRef.current!.offsetWidth);
        }
    }, [screenDim]);

    return <Container>
        <Row>
            <Col xs={12} md={{span:4, order: putImgLeft? 'first':'last'}} lg={{span:3, order: putImgLeft? 'first':'last'}} ref={colRef} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {imgRef? 
                    <a href={imgRef} target="_blank">
                        <img alt={imgAlt} src={imgSrc} width={colWidth*0.9>200? 200 : colWidth*0.9} style={{borderRadius: '1em'}} />
                    </a>
                    : <img alt={imgAlt} src={imgSrc} width={colWidth*0.9>200? 200 : colWidth*0.9} style={{borderRadius: '1em'}} />
                }
            </Col>
            <Col xs={12} md={{span:8, order: putImgLeft? 'last':'first'}} lg={{span:9, order: putImgLeft? 'last':'first'}}
                className="d-flex flex-column align-items-start text-start"
            >
                <h2 className="margin-top-btm">{title}</h2>
                {
                    period && <p className="period"><i>{period}</i></p>
                }
                { header && <h3 className="header"> {header} </h3>}
                <p className="intro-text"> {children} </p>
            </Col>
        </Row>
    </Container>
}