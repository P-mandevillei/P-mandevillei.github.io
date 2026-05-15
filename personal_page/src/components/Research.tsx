import { Beaker, Presentation } from "lucide-react";
import CollapsableCard from "./CollapsableCard";
import ExperienceItem from "./ExperienceItem";
import ClickableIcon from "./ClickableIcon";
import { BsGithub } from "react-icons/bs";
import ExperienceCarouselItem from "./ExperienceCarouselItem";

export default function Research() {
    return <CollapsableCard title="Research" icon={<Beaker />} >
        <ExperienceCarouselItem 
            title={
                <> 
                    <ClickableIcon href="https://symposium.foragerone.com/spring-2026-undergraduate-research-symposium/presentations/79977" desc="Symposium Poster">
                        <Presentation size={20} />
                    </ClickableIcon>
                    <span>Comparative Microbiome Analysis at <a href='https://sites.wustl.edu/losos/' target="_blank">Losos</a> & <a href='https://mallott-lab.github.io/' target="_blank">Mallott Lab</a></span>
                </>
            }
            period='Aug 25 - Present'
            header="Is evolution deterministic on the microscopic level?"
            imgSrc={["anole.png", "symposium.webp"]} 
            imgAlt={["A phylogenetic tree of Anoles", "A picture of me and my lab partner at the undergrad research symposium"]}
            imgRef={["https://www.semanticscholar.org/paper/Phenotypic-convergence-is-not-mirrored-at-the-level-Corbett-Detig-Russell/8b829601756c368941c639fc26a2273e1f3ec5c2", null]}
        >
            We used the <b><i>Anolis</i> lizards</b> of the Greater Antilles, a classic system of convergent adaptive radiation, to investigate host-microbiome co-evolution.
            I managed the full research pipeline from DNA extraction to amplicon analyses, using <a href="https://qiime2.org/" target="_blank">QIIME2</a> and <a href='https://github.com/picrust/picrust2' target="_blank">PICRUSt2</a> to map phylogenetic and functional relationships.
            We found the assembly of <i>Anolis</i> microbiome communities to be governed by ecological principles and proposed the concept of <b>symbiont niche partitioning</b>.
        </ExperienceCarouselItem>

        <ExperienceCarouselItem 
            title={<> 
                <ClickableIcon href="https://github.com/P-mandevillei/UNC-49_IonChannelMDAnalysis" desc="GitHub Repo">
                    <BsGithub size={20} />
                </ClickableIcon>
                <span>
                    Structural Biology at <a href='https://scholar.google.com/citations?user=HES_B60AAAAJ&hl=en&inst=2230987035966559800' target="_blank">Held Lab</a> 
                </span>
            </>}
            header="How do protein structural dynamics influence function?"
            period='Aug 24 - May 25' 
            imgSrc={["md.gif", "fes_soh2.webp"]}
            imgAlt={["Trajectory of UNC49 ion channel", "Free energy surface of one of the simulation universes"]}
        >
            <ul>
                <li> 
                    <b>Project 1 (Molecular Dynamics): </b>
                    We used <a href='https://www.gromacs.org/' target="_blank">GROMACS</a> to simulate the redox opening of the GABA<sub>A</sub> receptor UNC49 by oxidation of Cys238, identifying Met296 as the gating residue. 
                    I developed a custom centering algorithm to overcome native <a href="https://www.mdanalysis.org/" target="_blank">MDAnalysis</a> limitations, and discovered critical Cys238-Glu184 hydrogen bonds.
                </li>
                <li>
                    <b>Project 2 (CryptoCache): </b>
                    I engineered a pipeline to analyze solvent exposure dynamics (crypticity) across 18M+ structures covering the entire <a href='https://www.rcsb.org/' target="_blank">Protein Data Bank</a>, 
                    correlating crypticity with residue properties like post-translational modifications.
                </li>
            </ul>
        </ExperienceCarouselItem>

        <ExperienceItem 
            title={<span> Clinical Research Associate at <a href='https://www.stlouischildrens.org/' target="_blank">St. Louis Children's Hospital</a> </span>} period='Jan 25 - Aug 25' 
            imgSrc="slch.jpg" imgAlt="The building of St. Louis Children's Hospital"
            imgRef=""
            header="Understanding systemic barriers to healthcare and the patient behind the data"
        >
            In the competitive <a href='https://pemrap.wustl.edu/' target="_blank">PEMRAP</a> program, I recruited over 300 participants to clinical studies addressing barriers to accessing healthcare, 
            focusing on underserved populations including Spanish speakers and pediatric psychiatric patients.
            We identified factors like provider shortages, long waitlists, and lack of primary care physicians that influenced patient decisions to choose the ED as a safety net.
        </ExperienceItem>

    </CollapsableCard>
}