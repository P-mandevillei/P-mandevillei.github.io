import { AppWindow, Cpu } from "lucide-react";
import CollapsableCard from "./CollapsableCard";
import ExperienceItem from "./ExperienceItem";
import ClickableIcon from "./ClickableIcon";
import { BsGithub } from "react-icons/bs";

export default function Projects() {
    return <CollapsableCard title="Featured Projects" icon={<Cpu />} >
        <ExperienceItem 
            title={
                <span className="center-row gap-1"> 
                    <ClickableIcon href="https://github.com/P-mandevillei/CSE-5504_Project" desc="GitHub Repo">
                        <BsGithub size={20} />
                    </ClickableIcon>
                    <ClickableIcon href="https://2pflim-neuron-segmentation.netlify.app/" desc="Website">
                        <AppWindow size={20} />
                    </ClickableIcon>
                    Neuron Segmentation from 2pFLIM Imaging
                </span>
            }
            period="React, TypeScript, Prototyping in Mathematica"
            putImgLeft={false}
            imgSrc="segmentation.png" imgAlt="Segmentation mask of a neuron soma in 2pFLIM images"
            imgRef=""
        >
            As the final project for the course <i><b>Geometric Computing in Biomedicine</b></i>, I built a <a href='https://2pflim-neuron-segmentation.netlify.app/' target="_blank">website</a> for batch segmentation of neuron somas from 2pFLIM images, drastically reducing manual labor. It implements classical geometric algorithms including morphological operations, marching squares contouring, PCA and SVD-ICP alignment and Laplacian deformation.
        </ExperienceItem>

        <ExperienceItem 
            title={
                <span className="center-row gap-1"> 
                    <ClickableIcon href="https://github.com/P-mandevillei/chem-4050-5050" desc="GitHub Repo">
                        <BsGithub size={20} />
                    </ClickableIcon>
                    Coarse-Grain Molecular Dynamics of a Polymer Chain
                </span>
            }
            period="Python (NumPy, pandas, SciPy, matplotlib, seaborn)"
            putImgLeft={false}
            imgSrc="chem_4050.gif" imgAlt="Molecular dynamics simulation of a polymer chain"
            imgRef=""
        >
            In the course <i><b><a href='https://wexlergroup.github.io/comp-prob-solv/' target="_blank">Computational Problem Solving in the Chemical Sciences</a></b></i>, I implemented the Monte Carlo Metropolis algorithm from scratch on a grand canonical ensemble to analyze surface adsorption in Haber-Bosch ammonia synthesis, and built a coarse-grain MD simulation in plain Python to characterize the phase transition of a polymer chain.
        </ExperienceItem>

        <ExperienceItem 
            title={<span className="center-row gap-1"> 
                <ClickableIcon href="https://github.com/P-mandevillei/CHEM-5080_Project" desc="GitHub Repo">
                    <BsGithub size={20} />
                </ClickableIcon>
                Protein Crypticity Prediction with Machine Learning 
            </span>} 
            period="Python (PyTorch, scikit-learn)"
            imgSrc="crypticity.png" imgAlt="A machine learning workflow diagram of crypticity prediction"
            imgRef="" putImgLeft={false}
        >
            In my <i><b><a href='https://zzhenglab.github.io/ai4chem/intro.html' target="_blank">AI for Chemistry</a></b></i> course, my teammate <a href='https://github.com/matthew-rao' target="_blank">Matthew Rao</a> and I developed a machine learning pipeline to predict cryptic sites -- protein residues that are hidden in ground state but become exposed upon ligand binding. We trained a custom hybrid model fusing a transformer encoder with a random forest classifier and analyzed feature importance with SHapley Additive exPlanations.
        </ExperienceItem>

        <ExperienceItem 
            title={
                <span className="center-row gap-1"> 
                    <ClickableIcon href="https://github.com/P-mandevillei/CSE330-Projects" desc="CSE 330 GitHub Repo">
                        <BsGithub size={20} />
                    </ClickableIcon>
                    <ClickableIcon href="https://github.com/P-mandevillei/Okeeheelee_Park_Petition" desc="Partition Site GitHub Repo">
                        <BsGithub size={20} />
                    </ClickableIcon>
                    <ClickableIcon href="https://protect-okeeheelee.netlify.app/" desc="Partition Site Link">
                        <AppWindow size={20} />
                    </ClickableIcon>
                    Full-Stack Web Projects
                </span>
            }
            putImgLeft={false} period="HTML/CSS/JS, PHP, Python, MySQL, MongoDB"
            imgSrc="web.png" imgAlt="A screenshot of my website https://protect-okeeheelee.netlify.app/"
            imgRef="https://protect-okeeheelee.netlify.app/"
        >
            I completed a series of full-stack web applications for the course <b><i><a href='https://classes.engineering.wustl.edu/cse330/index.php?title=CSE_330_Online_Textbook_-_Table_of_Contents' target="_blank">Rapid Prototype Development and Creative Programming</a></i></b>, which were hosted on <i><b>Amazon AWS</b></i>. The final project became the basis for the <a href='https://protect-okeeheelee.netlify.app/' target="_blank">partition site for Okeeheelee Park South, Florida</a>, a mission near and dear to the heart of my lab mentor <a href='https://tasmanezra.com/#intro' target="_blank">Tasman</a>.
        </ExperienceItem>

    </CollapsableCard>
}