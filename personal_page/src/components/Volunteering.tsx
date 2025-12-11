import { Globe } from "lucide-react";
import CollapsableCard from "./CollapsableCard";
import ExperienceItem from "./ExperienceItem";

export default function Volunteering() {
    return <CollapsableCard title="Volunteering" icon={<Globe />} >
        <ExperienceItem 
            title={<span> <a href='https://www.worldbirdsanctuary.org/' target="_blank">World Bird Sanctuary</a> </span>} period='May 24 - Aug 25' 
            imgSrc="wbs.gif" imgAlt="World Bird Sanctuary Logo"
            imgRef="https://www.worldbirdsanctuary.org/"
        >
           I fed and cared for injured birds of prey and helped with site maintenance.
        </ExperienceItem>
        <ExperienceItem 
            title={<span> <a href='https://www.barnesjewish.org/' target="_blank">Barnes Jewish Hospital</a> Cardiovascular Procedure Center</span>} period='Aug 24 - Aug 25' 
            imgSrc="bjc.png" imgAlt="BJH logo"
            imgRef="https://www.barnesjewish.org/"
        >
           I coordinated with nurses for family visits, registered and discharged patients.
        </ExperienceItem>
        <ExperienceItem 
            title={<span> <a href='https://www.barnesjewish.org/' target="_blank">Barnes Jewish Hospital</a> Emergency Room</span>} period='May 24 - Aug 24' 
            imgSrc="bjc.png" imgAlt="BJH logo"
            imgRef="https://www.barnesjewish.org/"
        >
           I shadowed physicians of the Emergency Department.
        </ExperienceItem>
    </CollapsableCard>
}