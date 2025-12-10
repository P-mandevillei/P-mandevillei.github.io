import { Beaker } from "lucide-react";
import CollapsableCard from "./CollapsableCard";
import ExperienceItem from "./ExperienceItem";
import ClickableIcon from "./ClickableIcon";
import { BsGithub } from "react-icons/bs";

export default function Research() {
    return <CollapsableCard title="Research" icon={<Beaker />} >
        <ExperienceItem 
            title={<span>Comparative Microbiome Analysis at <a href='https://sites.wustl.edu/losos/' target="_blank">Losos Lab</a> & <a href='https://mallott-lab.github.io/' target="_blank">Mallot Lab</a> </span>}
            period='Aug 25 - Present' 
            imgSrc="anole.png" imgAlt="A phylogenetic tree of Anoles"
            imgRef="https://www.semanticscholar.org/paper/Phenotypic-convergence-is-not-mirrored-at-the-level-Corbett-Detig-Russell/8b829601756c368941c639fc26a2273e1f3ec5c2"
        >
            Interested in the extent of evolutionary determinism on the microscopic level, we studied the microbiome compositions of the <i>Anolis</i> lizards in the Greater Antilles, an example system of adaptive radiation, looking for phylogenetic and ecological relationships. Bioinformatics tools including <a href="https://qiime2.org/" target="_blank">QIIME2</a> and <a href='https://github.com/picrust/picrust2' target="_blank">PICRUSt2</a> are utilized for analysis.
        </ExperienceItem>

        <ExperienceItem 
            title={<span> Research Associate at <a href='https://www.stlouischildrens.org/' target="_blank">St. Louis Children's Hospital</a> </span>} period='Jan 25 - Aug 25' 
            imgSrc="slch.jpg" imgAlt="The building of St. Louis Children's Hospital"
            imgRef=""
        >
            As part of the competitive <a href='https://pemrap.wustl.edu/' target="_blank">PEMRAP</a> program at WashU, I screened and recruited around 300 participants to multiple clinical studies, which leveraged the emergency room as a lens by which to understand the broader distribution of health resources for certain populations like non-English speakers or pediatric psychiatric patients.
        </ExperienceItem>

        <ExperienceItem 
            title={<span className="center-row gap-1"> 
                <ClickableIcon href="https://github.com/P-mandevillei/UNC-49_IonChannelMDAnalysis" desc="GitHub Repo">
                    <BsGithub size={20} />
                </ClickableIcon>
                <span>
                    UNC49 Molecular Dynamics at <a href='https://scholar.google.com/citations?user=HES_B60AAAAJ&hl=en&inst=2230987035966559800' target="_blank">Held Lab</a> 
                </span>
            </span>}
            period='Aug 24 - May 25' 
            imgSrc="md.gif" imgAlt="Trajectory of UNC49 ion channel"
            imgRef=""
        >
            We used <a href='https://www.gromacs.org/' target="_blank">GROMACS</a> to run molecular dynamics simulations on the redox opening of the GABA<sub>A</sub> receptor UNC49 by oxidation of Cys238. The trajectories were analyzed with <a href='https://www.mdanalysis.org/'>MDAnalysis</a>. We developed an algorithm to group the pentameric protein correctly in the tilted triclinic box, and characterized multiple geometrics and energetics properties relevant to the description of channel opening.
        </ExperienceItem>

        <ExperienceItem 
            title={<span> CryptoCache Project at <a href='https://scholar.google.com/citations?user=HES_B60AAAAJ&hl=en&inst=2230987035966559800' target="_blank">Held Lab</a> </span>} period='Jan 24 - May 24' 
            imgSrc="crypticity.png" imgAlt="A machine learning workflow diagram of crypticity prediction"
            imgRef=""
        >
            We characterized residue crypticity, a solvent exposure dynamics property, across all deposited structures in the <a href='https://www.rcsb.org/' target="_blank">PDB</a>. We explored the correlations of crypticity with features like post-translational modifications, and explored protein domains with varying residue dynamics. Later in my <i><b><a href='https://zzhenglab.github.io/ai4chem/intro.html' target="_blank">AI for Chemistry</a></b></i> course, we developed a transformer encoder & random forest classifier for crypticity prediction.
        </ExperienceItem>

    </CollapsableCard>
}