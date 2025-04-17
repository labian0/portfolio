import React from "react";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { Header } from "./Header";
import { ClickableRetex } from "../../common/Retex/ClickableRetex";
import { RetexModel } from "../../../model/Retex";
import { SkillGrid } from "../../common/Skill/SkillGrid";
import { DATA_SCIENCE, IUT, PERSO } from "../../../model/Badges"

export const HomePage: React.FC = () => {

    const model:RetexModel = {
        name: "Vintrends",
        description: "Pure insight for resellers",
        logoUrl: "https://www.fibermall.com/blog/wp-content/uploads/2024/08/GPON-OLT-SFP-UF-HORIZON.jpg",
        imageUrls: [],
        badges: [DATA_SCIENCE, IUT, PERSO],
        websiteUrl: "https://vintrends.fr/"
    }

    return (
        <>
        <Header/>
        <Button variant="soft" >Learn More</Button>
        
        <Heading>Mes compétences</Heading>

        <SkillGrid/>

        {/* carrousel here */}
        <Heading>Mes Projets</Heading>
        <Heading as="h4" size="2" weight="regular">(Clickable!)</Heading>

        <Flex direction="row" gap="5" wrap="wrap">
        <ClickableRetex retex={model}/>
        <ClickableRetex retex={model}/>
        <ClickableRetex retex={model}/>
        <ClickableRetex retex={model}/>
        <ClickableRetex retex={model}/>
        <ClickableRetex retex={model}/>

        </Flex>
        </>
    )
}