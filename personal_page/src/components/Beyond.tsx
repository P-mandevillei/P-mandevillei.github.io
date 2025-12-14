import { BsBalloon, BsGithub } from "react-icons/bs";
import CollapsableCard from "./CollapsableCard";
import ExperienceCarouselItem from "./ExperienceCarouselItem";
import ClickableIcon from "./ClickableIcon";

export default function Beyond() {
    return <CollapsableCard title="Beyond the Lab" icon={<BsBalloon size={24} />} >

        <ExperienceCarouselItem
            title={<span> Aquariums, Vivariums, Carnivorous Plants, and More! </span>}
            imgSrc={["pitcher.jpeg", 'reef.jpeg', 'texas_horned_lizard.JPG', 'tropheus.jpeg']}
            imgAlt={["Australian Pitchers", "Reef Tank", "Texas Horned Lizard", "Tropheus sp. 'black' baby"]}
        >
            <p>
                I'm a nature enthusiast with over a decade of experience as an aquarist and vivarium designer, building mini ecosystems in glass tanks, PVC thermostatic chambers and even retrofitted fridges.
            </p>
            <ul>
                <li>
                    <b>Breeding Projects: </b> I successfully bred vampire crabs (<i>Geosesarma</i>), Tanganyikan cichlids (<i>Tropheus</i>, <i>Neolamprologus</i>), and Cuban snails (<i>Caracolus</i>) among others, under tailored water chemistry and environmental parameters. I've also been a bladderwort (<i>Utricularia</i>) propagator.
                </li>
                <li>
                    <b>The Science:</b> I run blogs dedicated to replacing the "just do it this way" folklore of the hobby with scientific principles, covering water chemistry, engineering laws, microbiology and more. Most contents are hosted on a Chinese platform;
                    however, I am working on building <a href='https://a-nature-sanctuary.netlify.app/en'>my own website</a>
                    {' '}
                    <ClickableIcon href="https://github.com/P-mandevillei/A_Nature_Sanctuary" desc="GitHub Repo">
                        <BsGithub />
                    </ClickableIcon>
                    {' '}
                    which serves articles and useful tools.
                </li>
            </ul>
            
        </ExperienceCarouselItem>
    </CollapsableCard>
}