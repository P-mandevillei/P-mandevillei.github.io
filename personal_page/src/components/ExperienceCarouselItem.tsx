import { Carousel, Col, Container, Row } from "react-bootstrap";
import useWindowDim from "../hooks/useWindowDim";
import { useEffect, useRef, useState } from "react";

type props = {
  title: React.ReactNode,
  period?: string,
  imgSrc: string[],
  imgAlt: string[],
  putImgLeft?: boolean,
  children: React.ReactNode
}
export default function ExperienceCarouselItem({title, period="", imgSrc, imgAlt, putImgLeft=true, children}: props) {

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
                <Carousel style={{width: colWidth*0.9>200? 200 : colWidth*0.9}} >
                    {imgSrc.map((cur, idx) => <Carousel.Item key={cur}>
                        <img src={cur} alt={imgAlt[idx]} width={colWidth*0.9>200? 200 : colWidth*0.9} loading="lazy" style={{borderRadius: '1em'}} />
                        <Carousel.Caption>
                            {imgAlt[idx]}
                        </Carousel.Caption>
                    </Carousel.Item>)}
                </Carousel>
            </Col>
            <Col xs={12} md={{span:8, order: putImgLeft? 'last':'first'}} lg={{span:9, order: putImgLeft? 'last':'first'}}
                className="d-flex flex-column justify-content-center align-items-start"
            >
                <h2 className="margin-top-btm">{title}</h2>
                {
                    period && <p> {period} </p>
                }
                <p className="intro-text"> {children} </p>
            </Col>
        </Row>
    </Container>
}