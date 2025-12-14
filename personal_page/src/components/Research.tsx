import { Beaker } from "lucide-react";
import CollapsableCard from "./CollapsableCard";
import ExperienceItem from "./ExperienceItem";
import ClickableIcon from "./ClickableIcon";
import { BsGithub } from "react-icons/bs";

export default function Research() {
    return <CollapsableCard title="Research" icon={<Beaker />} >
        <ExperienceItem 
            title={<span>Comparative Microbiome Analysis at <a href='https://sites.wustl.edu/losos/' target="_blank">Losos Lab</a> & <a href='https://mallott-lab.github.io/' target="_blank">Mallott Lab</a> </span>}
            period='Aug 25 - Present'
            header="The Question: Is evolution deterministic on the microscopic level?"
            imgSrc="anole.png" imgAlt="A phylogenetic tree of Anoles"
            imgRef="https://www.semanticscholar.org/paper/Phenotypic-convergence-is-not-mirrored-at-the-level-Corbett-Detig-Russell/8b829601756c368941c639fc26a2273e1f3ec5c2"
        >
            We use the <i>Anolis</i> lizards of the Greater Antilles, a classic system of adaptive radiation, to investigate host-microbiome co-evolution.
            I manage the full pipeline, from extracting 16S rRNA genes from samples to amplicon bioinformatics analyses using <a href="https://qiime2.org/" target="_blank">QIIME2</a> and <a href='https://github.com/picrust/picrust2' target="_blank">PICRUSt2</a> to map phylogenetic and functional relationships.
        </ExperienceItem>

        <ExperienceItem 
            title={<span className="center-row gap-1"> 
                <ClickableIcon href="https://github.com/P-mandevillei/UNC-49_IonChannelMDAnalysis" desc="GitHub Repo">
                    <BsGithub size={20} />
                </ClickableIcon>
                <span>
                    Structural Biology at <a href='https://scholar.google.com/citations?user=HES_B60AAAAJ&hl=en&inst=2230987035966559800' target="_blank">Held Lab</a> 
                </span>
            </span>}
            header="The Question: How do protein structural dynamics influence function?"
            period='Aug 24 - May 25' 
            imgSrc="md.gif" imgAlt="Trajectory of UNC49 ion channel"
            imgRef=""
        >
            <ul>
                <li> 
                    <b>Project 1 (Molecular Dynamics):</b>
                    We used <a href='https://www.gromacs.org/' target="_blank">GROMACS</a> to simulate the redox opening of the GABA<sub>A</sub> receptor UNC49 by oxidation of Cys238. I developed a Python algorithm to correct pentameric protein grouping in tilted triclinic boxes and characterized the geometric and energetic landscape of receptor opening.
                </li>
                <li>
                    <b>Project 2 (CryptoCache):</b>
                    Built a pipeline to map solvent exposure dynamics across the entire <a href='https://www.rcsb.org/' target="_blank">Protein Data Bank</a>, correlating crypticity with post-translational modifications.
                </li>
            </ul>
        </ExperienceItem>

        <ExperienceItem 
            title={<span> Clinical Research Associate at <a href='https://www.stlouischildrens.org/' target="_blank">St. Louis Children's Hospital</a> </span>} period='Jan 25 - Aug 25' 
            imgSrc="slch.jpg" imgAlt="The building of St. Louis Children's Hospital"
            imgRef=""
            header="The Context: Understanding health resource distribution and the patient behind the data"
        >
            As part of the competitive <a href='https://pemrap.wustl.edu/' target="_blank">PEMRAP</a> program at WashU, I screened and recruited over 300 participants for studies including psychiatric resource availabilities and non-English speakers patient experiences. This experience gave me a firsthand look at the clinical reality that drives translational research.
        </ExperienceItem>

    </CollapsableCard>
}