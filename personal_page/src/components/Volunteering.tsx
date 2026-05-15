import { Globe } from "lucide-react";
import CollapsableCard from "./CollapsableCard";
import ExperienceItem from "./ExperienceItem";
import ExperienceCarouselItem from "./ExperienceCarouselItem";
import ClickableIcon from "./ClickableIcon";
import { BsGithub } from "react-icons/bs";

export default function Volunteering() {
    return <CollapsableCard title="Community & Service" icon={<Globe />} >
        
        <ExperienceCarouselItem 
            title={<span> Co-Chair (Question Writing) & Member (Community Outreach) @ <a href="https://www.instagram.com/wusea_wuct/" target="_blank">WashU Stem Education Association</a></span>} period='Aug 23 - Present' 
            imgSrc={["wuct.jpg", "wuct_26.webp", "wuct_china.webp"]} imgAlt={["WUSEA execs group photo", "WUCT 2026 group photo", "WUCT China"]}
            imgRef={["https://wuct.w3spaces.com/about.html", null, null]} putImgLeft={false}
        >
            I led 10 members in crafting chemistry questions for the annual <a href='https://wuct.w3spaces.com/index.html' target="_blank"> WashU Chemistry Tournament (WUCT)</a>, arranging weekly meetings and coordinating with professors for reviews. 
            To elevate question quality, I developed an 
            <ClickableIcon href="https://github.com/P-mandevillei/WUCT_Exam_Review" desc="GitHub Repo">
                <BsGithub size={15} />
            </ClickableIcon>
            <a href="https://wuct-exam-review.streamlit.app/" target="_blank">exam analytics website</a> for objective assessments and built an AI pipeline for difficulty prediction.
            To ensure accessibility to students from under-resourced programs, I redesigned our 
            <ClickableIcon href="https://github.com/cchan/wuct" desc="GitHub Repo">
                <BsGithub size={15} />
            </ClickableIcon>
            <a href="https://wuct.clive.io/" target="_blank">live scoring software</a> to support two distinct difficulty divisions.
            I also helped to host WUCT in Shanghai, China, and presented chemistry demos to underserved St. Louis middle schools.
        </ExperienceCarouselItem>


        <ExperienceItem 
            title={<span> Wildlife Rehab at <a href='https://www.worldbirdsanctuary.org/' target="_blank">World Bird Sanctuary</a> </span>} period='May 24 - Aug 25' 
            imgSrc="wbs.gif" imgAlt="World Bird Sanctuary Logo"
            imgRef="https://www.worldbirdsanctuary.org/" putImgLeft={false}
        >
           I cared for injured birds of prey and helped with daily husbandry and site maintenance, collaborating with rehab staff during medical examinations of raptors using closed-loop communication to ensure secure handling.
           This experience also exposed me to the ethical and emotional complexities of treatment limitations and human euthanasia in a rehabilitation setting.
        </ExperienceItem>

        <ExperienceItem 
            title="Clinical Volunteering"
            imgSrc="bjc.png" imgAlt="BJH logo" period="May 24 - Present"
            imgRef="https://www.barnesjewish.org/" putImgLeft={false}
        >
            <ul>
                <li><b>Hospice Volunteer: </b> I volunteer with SSM hospice to provide weekly bedside companionship to terminally ill patients, assisting with patient requests and communicating their needs to assist with comprehensive care plans.</li>
                <li><b>Volunteer Crisis Counselor: </b> I volunteer with <a href="https://www.crisistextline.org/" target="_blank">Crisis Text Line</a> and de-escalate high-acuity crisis conversations via text, assessing suicide risk and imminent danger. </li>
                <li><b>Volunteer Coordinator: </b> At the Cardiovascular Procedure Center at Barnes Jewish Hospital, I registered and discharged patients and coordinated with nurses for communications. </li>
            </ul>
        </ExperienceItem>

    </CollapsableCard>
}