import { AppWindow, Cpu } from "lucide-react";
import CollapsableCard from "./CollapsableCard";
import ExperienceItem from "./ExperienceItem";
import ClickableIcon from "./ClickableIcon";
import { BsGithub } from "react-icons/bs";

export default function Projects() {
    return <CollapsableCard title="Featured Projects" icon={<Cpu />} >
        <ExperienceItem 
            title={<>
                <ClickableIcon href="https://github.com/P-mandevillei/CSE-5504_Project" desc="GitHub Repo">
                    <BsGithub size={20} />
                </ClickableIcon>
                <ClickableIcon href="https://2pflim-neuron-segmentation.netlify.app/" desc="Website">
                    <AppWindow size={20} />
                </ClickableIcon>
                Neuron Segmentation from 2pFLIM Imaging
            </>}
            period="React, TypeScript, Prototyping in Mathematica"
            putImgLeft={false}
            imgSrc="segmentation.png" imgAlt="Segmentation mask of a neuron soma in 2pFLIM images"
            imgRef=""
        >
            To reduce manual labor in biomedical image analysis, I built an accessible <a href='https://2pflim-neuron-segmentation.netlify.app/' target="_blank">website</a> for batch segmentation of neuron somas from 2pFLIM images, achieving up to 90% accuracy. I implemented classical geometric algorithms including morphological operations, marching squares contouring, PCA and SVD-ICP alignment, and Laplacian deformation.
        </ExperienceItem>

        <ExperienceItem 
            title={<> 
                <ClickableIcon href="https://github.com/P-mandevillei/trust_in_tcm_opinion_mining" desc="GitHub Repo">
                    <BsGithub size={20} />
                </ClickableIcon>
                Comparative Analysis of Trust in Traditional Chinese Medicine (TCM)
            </>}
            period="Python (spaCy, NLTK, PyTorch, transformers)"
            imgSrc="trust_tcm.webp" imgAlt="A workflow diagram for analyzing trust in TCM"
            imgRef="" putImgLeft={false}
        >
            Interested in how the pandemic affected public opinion toward TCM, I mined 18,038 multilingual social media posts and compared attitudes toward TCM and evidence-based medicine (EBM) across time and culture. Combining Aspect-Based Sentiment Analysis (ABSA) with fine-tuned transformer encoders and performing robust statistical analyses, I found a nuanced emotional landscape driven by low-engagement posts.
        </ExperienceItem>

        <ExperienceItem 
            title={
                <> 
                    <ClickableIcon href="https://github.com/P-mandevillei/chem-4050-5050" desc="GitHub Repo">
                        <BsGithub size={20} />
                    </ClickableIcon>
                    Coarse-Grain Molecular Dynamics of a Polymer Chain
                </>
            }
            period="Python (NumPy, pandas, SciPy, matplotlib, seaborn)"
            putImgLeft={false}
            imgSrc="chem_4050.gif" imgAlt="Molecular dynamics simulation of a polymer chain"
            imgRef=""
        >
            In the course <i><b><a href='https://wexlergroup.github.io/comp-prob-solv/' target="_blank">Computational Problem Solving in the Chemical Sciences</a></b></i>, I implemented the Monte Carlo Metropolis algorithm from scratch on a grand canonical ensemble to analyze surface adsorption in Haber-Bosch ammonia synthesis, and built a coarse-grain MD simulation in object-oriented Python to characterize the phase transition of a polymer chain.
        </ExperienceItem>

        <ExperienceItem 
            title={
                <> 
                    <ClickableIcon href="https://github.com/P-mandevillei/CUDA_Molecular_Dynamics" desc="GitHub Repo">
                        <BsGithub size={20} />
                    </ClickableIcon>
                    Accelerating Molecular Dynamics on GPU
                </>
            }
            period="Python (Numba-CUDA, CuPy)"
            putImgLeft={false}
            imgSrc="combined_speedup_square.png" imgAlt="Speedup Comparisons of Different MD Algorithms"
            imgRef=""
        >
            I designed and implemented GPU algorithms to accelerate force computations, achieving up to 100x speedup with exact results. I optimized memory throughput with shared memory tiling, employing efficient parallelization patterns like privatization, parallel reduction and the Compressed Sparse Row (CSR) storage format to improve performance.
        </ExperienceItem>

        <ExperienceItem 
            title={<> 
                <ClickableIcon href="https://github.com/P-mandevillei/CHEM-5080_Project" desc="GitHub Repo">
                    <BsGithub size={20} />
                </ClickableIcon>
                Protein Crypticity Prediction with Machine Learning 
            </>} 
            period="Python (PyTorch, scikit-learn, transformers)"
            imgSrc="crypticity.webp" imgAlt="A machine learning workflow diagram of crypticity prediction"
            imgRef="" putImgLeft={false}
        >
            In my <i><b><a href='https://zzhenglab.github.io/ai4chem/intro.html' target="_blank">AI for Chemistry</a></b></i> course, I built upon my PDB research and developed a machine learning pipeline to predict cryptic sites -- protein residues that are hidden in ground state but become exposed upon ligand binding. I trained a hybrid model fusing a transformer encoder with a random forest classifier, achieving 87% ROC-AUC. I further analyzed feature importance with SHapley Additive exPlanations, correlating crypticity to evolutionary conservation.
        </ExperienceItem>

        <ExperienceItem 
            title={
                <> 
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
                </>
            }
            putImgLeft={false} period="HTML/CSS/JS, PHP, Python, MySQL, MongoDB"
            imgSrc="web.png" imgAlt="A screenshot of my website https://protect-okeeheelee.netlify.app/"
            imgRef="https://protect-okeeheelee.netlify.app/"
        >
            I completed a series of full-stack web applications for the course <b><i><a href='https://classes.engineering.wustl.edu/cse330/index.php?title=CSE_330_Online_Textbook_-_Table_of_Contents' target="_blank">Rapid Prototype Development and Creative Programming</a></i></b>, which were hosted on <i><b>Amazon AWS</b></i>. I built upon the final project and designed a <a href='https://protect-okeeheelee.netlify.app/' target="_blank">petition for the natural restoration of Okeeheelee Park South, Florida</a>, optimizing layout to convey the message short and clear while providing access to full information. 
        </ExperienceItem>

    </CollapsableCard>
}