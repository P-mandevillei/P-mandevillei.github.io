import { Globe } from "lucide-react";
import CollapsableCard from "./CollapsableCard";
import ExperienceItem from "./ExperienceItem";

export default function Volunteering() {
    return <CollapsableCard title="Community & Service" icon={<Globe />} >
        
        <ExperienceItem 
            title={<span> Question Writing Co-Chair at <b><i>WashU Stem Education Association (WUSEA)</i></b> </span>} period='Aug 23 - Present' 
            imgSrc="wuct.jpg" imgAlt="WashU Chemistry Tournament Logo"
            imgRef="https://wuct.w3spaces.com/about.html" putImgLeft={false}
        >
            I lead the committee that crafts, reviews and grades questions for the annual <a href='https://wuct.w3spaces.com/index.html' target="_blank"> WashU Chemistry Tournament (WUCT)</a> for high-school students. It's harder than you'd think to write questions that are approachable and challenging at the same time!
        </ExperienceItem>


        <ExperienceItem 
            title={<span> Wildlife Rehab at <a href='https://www.worldbirdsanctuary.org/' target="_blank">World Bird Sanctuary</a> </span>} period='May 24 - Aug 25' 
            imgSrc="wbs.gif" imgAlt="World Bird Sanctuary Logo"
            imgRef="https://www.worldbirdsanctuary.org/" putImgLeft={false}
        >
           I cared for injured birds of prey and helped with site maintenance, and promoted raptor conservation to visitors.
        </ExperienceItem>

        <ExperienceItem 
            title={<span> <a href='https://www.barnesjewish.org/' target="_blank">Barnes Jewish Hospital</a> Cardiovascular Procedure Center Coordinator</span>} period='Aug 24 - Aug 25' 
            imgSrc="bjc.png" imgAlt="BJH logo"
            imgRef="https://www.barnesjewish.org/" putImgLeft={false}
        >
           I coordinated with nurses for family visits, patient registration and discharge.
        </ExperienceItem>

    </CollapsableCard>
}