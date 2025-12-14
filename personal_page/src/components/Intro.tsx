import { FileText, Mail, Moon, Sun } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";
import useWindowDim from "../hooks/useWindowDim";
import { useContext, useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import ClickableIcon from "./ClickableIcon";
import WaveInView from "./WaveInView";
import { ThemeContext } from "../contexts/themeContext";
import ThemedCard from "./ThemedCard";

export default function Intro() {
    const screenDim = useWindowDim();
    const colRef = useRef<HTMLDivElement>(null);
    const [colWidth, setColWidth] = useState(0);
    useEffect(() => {
        if (colRef.current) {
            setColWidth(colRef.current!.offsetWidth);
        }
    }, [screenDim]);

    const [theme, setTheme] = useContext(ThemeContext);

    return <ThemedCard style={{position: 'relative'}}>
        <div 
            style={{position: 'absolute', display: 'flex', top: 0, right: 0, margin: 10}} 
            onClick={() => {setTheme(theme === 'dark'? 'light' : 'dark')}}
        >
            <ClickableIcon desc={theme==='dark'? 'dark mode' : 'light mode'} placement="bottom" >
                {theme === 'dark'? <Moon /> : <Sun />}
            </ClickableIcon>
        </div>
        <Container>
            <Row>
                <Col sm={12} md={6} lg={4} ref={colRef}>
                    <img alt="A headshot of Charlie Li" src='headshot.png' width={colWidth*0.9>200? 200 : colWidth*0.9} style={{borderRadius: '50%'}} className="margin" />
                    <h1> Charlie Li </h1>
                    <h2> Computational Biologist & Developer </h2>
                    <h3><i> <a href="https://washu.edu/">Washington University in St. Louis</a> | Class of 2027 </i></h3>
                    <div className="disperse-row" style={{width: colWidth*0.96>250? 250 : colWidth*0.96, margin: 'auto'}}>
                        <ClickableIcon href="mailto:chenglin.l@wustl.edu" desc="Email">
                            <Mail size={20} />
                        </ClickableIcon>
                        <ClickableIcon href="https://github.com/P-mandevillei" desc="GitHub">
                            <BsGithub size={20} />
                        </ClickableIcon>
                        <ClickableIcon href="resume.pdf" desc="Resume">
                            <FileText size={20} />
                        </ClickableIcon>
                        <ClickableIcon href="https://www.linkedin.com/in/charlie-li-376470345" desc="LinkedIn">
                            <FaLinkedin size={20} />
                        </ClickableIcon>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={8} className="d-flex flex-column justify-content-center align-items-start">
                    <WaveInView>
                        <h1 style={{marginBottom: '1em', marginTop: '1em'}}>
                            Bridging Code and Clinic
                        </h1>
                    </WaveInView>
                    <p className="intro-text">
                        {"Welcome! I am a junior at WashU on the pre-medical track "}
                        {"double majoring in Computer Science and Biology (Genomics and Computational Biology Specialization) with a minor in Chemistry. "}
                        {"My research philosophy is hybrid: I believe the next generation of medical breakthroughs will come from those how can handle both the pipette "}
                        <i><b>and</b></i>
                        {" the command line. My work spans from wet-lab evolutionary biology to building custom machine learning architectures for protein analysis."}
                    </p>
                </Col>
            </Row>
        </Container>
    </ThemedCard>
}