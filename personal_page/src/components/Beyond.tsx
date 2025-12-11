import { BsBalloon, BsGithub } from "react-icons/bs";
import CollapsableCard from "./CollapsableCard";
import ExperienceItem from "./ExperienceItem";
import ExperienceCarouselItem from "./ExperienceCarouselItem";
import ClickableIcon from "./ClickableIcon";

export default function Beyond() {
    return <CollapsableCard title="Beyond Academics" icon={<BsBalloon size={24} />} >
        <ExperienceItem 
            title={<span> Question Writing Committee Co-Chair </span>} period='Aug 23 - Present' 
            imgSrc="wuct.jpg" imgAlt="WashU Chemistry Tournament Logo"
            imgRef="https://wuct.w3spaces.com/about.html" putImgLeft={false}
        >
            I am the QW committee co-chair at <b><i>WashU Stem Education Association (WUSEA)</i></b>, where we host annual chemistry tournaments <a href='https://wuct.w3spaces.com/index.html' target="_blank">(WUCT)</a> for high-school students. It's harder than you'd think to write chemistry questions that are both approachable and challenging!
        </ExperienceItem>

        <ExperienceCarouselItem
            title={<span> Aquariums, Vivariums, Carnivorous Plants, etc. </span>}
            imgSrc={["pitcher.jpeg", 'reef.jpeg', 'texas_horned_lizard.JPG', 'tropheus.jpeg']}
            imgAlt={["Australian Pitchers", "Reef Tank", "Texas Horned Lizard", "Tropheus sp. 'black'"]}
            putImgLeft={false}
        >
            I'm a nature enthusiast crazy for all kinds of critters and have been an aquarist for over 10 years! Some of my proudest achievements include breeding the vampire crabs and the Tanganyikan cichlids <i>Tropheus</i>. I am dedicated to demystifying with science the prevalent "just-do-it-like-this-and-everything-will-be-fine"s in this hobby: visit <a href='https://a-nature-sanctuary.netlify.app/en'>my blog website</a>
            {' '}
            <ClickableIcon href="https://github.com/P-mandevillei/A_Nature_Sanctuary" desc="GitHub Repo">
                <BsGithub />
            </ClickableIcon>
            {' '} for useful tips and tools!
            
        </ExperienceCarouselItem>
    </CollapsableCard>
}