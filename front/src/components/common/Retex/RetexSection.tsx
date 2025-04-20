import { Heading, Flex, Text } from "@radix-ui/themes";
import { ClickableRetex } from "./ClickableRetex";
import { RetexModel } from "../../../model/Retex";
import { DATA_SCIENCE, IUT, DEVOPS, PERSO, WEBDEV, SCRUM, SYSPROG } from "../../../model/Badges";
import terminal from "../../../../public/terminal.png"

export const RetexSection = () => {
    const vintrends:RetexModel = {
        name: "Vintrends",
        description: "Insight avancé pour resellers",
        logoUrl: "https://www.fibermall.com/blog/wp-content/uploads/2024/08/GPON-OLT-SFP-UF-HORIZON.jpg",
        imageUrl: "https://vintrends.fr/vintrends.png",
        badges: [DATA_SCIENCE, PERSO, DEVOPS],
        paragraph:
        <Text as="p" size="2">
            Vintrends est un outil destiné aux professionels de la (re)vente sur Vinted.
            Grâce à des analyses poussées, un scraping continu des données du site, et un système poussé de calcul de score d'une niche donnée à partir de plusieurs paramètres, les utilisateurs de la plateforme disposent d'un insight poussé dans ce qu'il est intéressant,
            ou non, de revendre sur Vinted.
        </Text>,
        websiteUrl: "https://vintrends.fr/"
    }

    const ndi:RetexModel = {
        name: "Nuit de l'Info",
        description: "Hackathon en équipe",
        logoUrl: "https://www.nuitdelinfo.com/img/logo_n2i_color_moon.svg",
        imageUrl: "https://www.nuitdelinfo.com/materiel_communication/2024/banniere/n2i2024-banner-600x345.png",
        badges: [WEBDEV, SCRUM, DEVOPS, IUT],
        paragraph:
        <Text>
        Lors de la Nuit de l'Info 2024, nous avons eu l'occasion de former une équipe de 10 personnes, travaillant et suivant la méthodologie Scrum, afin de réaliser dans le temps imparti (16h uniquement) une application web fonctionnelle. Le thème imparti était celui de la sensibilisation auprès de l'environnement. Nous avons donc choisi de réaliser un jeu de gestion coopératif au tour-par-tour, ou le but est de sauver l'écosystème du monde qu'on habite grâce à diverses mesures.
        <br /><br />
        Nous avons aussi utilisé des outils comme Docker afin de conteneuriser les différents modules composant l'application.
        </Text>,
        websiteUrl: "https://nuitdelinfo.com/"
    }

    const minishell:RetexModel = {
        name: "Minishell",
        description: "Réalisation d'un Shell en C",
        logoUrl: terminal,
        badges: [SYSPROG,IUT],
        paragraph:
        <Text>
        J'ai réalisé au cours d'une semaine, un prototype visant à répliquer le fonctionnement du shell dans linux:
         c'est-à-dire une interface entre l'utilisateur et le hardware. Le programme réalisait donc des appels système comme fork à la demande de
         l'utilisateur qui interagit via une ligne de commande.
        </Text>,
    }

    return (
        <>
        <Heading>Mes Projets</Heading>
        <Heading as="h4" size="2" weight="regular">(Cliquez!)</Heading>

        <Flex direction="row" gap={{initial:"1",md:"5"}} wrap="wrap" justify="center">
        <ClickableRetex retex={vintrends}/>
        <ClickableRetex retex={ndi}/>
        <ClickableRetex retex={minishell}/>
        {/* <ClickableRetex retex={}/>
        <ClickableRetex retex={}/>
        <ClickableRetex retex={}/> */}

        </Flex>
        </>
    );
}