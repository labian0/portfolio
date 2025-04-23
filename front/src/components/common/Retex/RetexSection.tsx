import { Heading, Flex, Text } from "@radix-ui/themes";
import { ClickableRetex } from "./ClickableRetex";
import { RetexModel } from "../../../model/Retex";
import { DATA_SCIENCE, IUT, DEVOPS, PERSO, WEBDEV, SCRUM, SYSPROG, CRYPTO, SUSTAINABILITY, API, AI, MATH } from "../../../model/Badges";
import terminal from "../../../../public/terminal.png"

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

const nixos:RetexModel = {
    name: "NixOS Thinkpad",
    description: "Installation de Linux sur PC de 2011",
    logoUrl: terminal,
    badges: [SYSPROG,PERSO,SUSTAINABILITY],
    paragraph:
    <Text>J'ai acheté d'occasion un ordinateur portable Thinkpad de 2011. Pour le rendre utilisable en tant que machine de travail, il fallait enlever la version de windows présente et repartir de 0. après avoir racheté une batterie car l'ancienne était gravement endommagée et peu fonctionnelle, j'ai installé un nouveau système d'exploitation par dessus, NixOS. NixOS est une distribution gnu/linux, open-source, maintenue par la communauté, spéciale pour son approche déclarative à sa configuration; En effet, sur NixOS, il est coutume et nécessaire de noter de façon déclarative tous les changements apportés à la configuration initiale. Cela permet une reproducibilité et une maintenabilité sans égal dans l'écosystème Linux. Mon but, à long terme, et d'installer NixOS sur mes autres machines principales afin de profiter d'un environnement de développement et de travail uniforme, sur mesure, et reproduisible à l'infini.
    </Text>,
}

const passwordMan:RetexModel = {
    name: "Password Manager",
    description: "",
    logoUrl: terminal,
    badges: [CRYPTO,PERSO,],
    paragraph:
    <Text>
    Lors de ma terminale générale, j'ai décidé de réaliser comme projet final de spécialité NSI un gestionnaire de mot de passe, fonctionnement localement, et utilisant des concepts comme le chiffrement asymétrique pour chiffrer le contenu d'une base de données de mots de passe, dévérouillable uniquement grâce à la soumission d'un mot de passe maître super secret.
    <br /><br />
    Note: l'entièreté de la logique sous-jacente à cette application m'a pris 1 week-end à coder, tandis que l'interface graphique est, quant à elle, à ce jour encore incomplète. 🤷♂️ 
    </Text>,
}

const pixelWar:RetexModel = {
    name: "Pixel War",
    description: "Réalisation d'un Shell en C",
    logoUrl: terminal,
    badges: [WEBDEV,API,IUT],
    paragraph:
    <Text>
    Lors de notre première année de BUT informatique, nous avons été chargé de construire un site web permettant l'affichage de données récupérées auprès d'un API distant. En l'occurence, notre professeur avait construit un API permettant aux élèves de s'affronter sur un canvas virtuel, jeu librement inspiré de la Pixel War sur le subreddit r/place. J'ai eu l'occasion de perfectionner mes capacités à comprendre, intéragir avec, et mettre en page les informations d'un API RESTful. 
<br /><br />
    Bonus: La consigne initiale était simplement de construire une interface grâce à laquelle il était possible de voir, et modifier un canvas interactif. avec un ami (lien vers rodolf), nous nous sommes chargés de construire plusieurs outils, notamment un programme permettant de traduire n'importe quelle image de n'importe quelle dimension en matrice de pixels, pouvant ensuite être fournie à notre deuxième programme, servant quant à lui à automatiquement placer des pixels en utilisant autant de comptes différents que nous lui fournissions. 😉
    </Text>,
}

const votator:RetexModel = {
    name: "Votator",
    description: "",
    logoUrl: terminal,
    badges: [WEBDEV,API,IUT],
    paragraph:
    <Text>
    Au cours de ma 2e année de BUT informatique, afin d'apprendre le développement web par composants, j'ai du construire le front-end (comprenez: la facade) d'une application web permettant de participer à des concours d'opinion. Comme dans le cas de mon projet pixel war (lien), la logique de fonctionnement des tournois était déjà réalisée dans un API RESTful distant, conçu par nos professeurs. Le but était de mettre en page et rendre interactive ces données via une interface web par composants.
<br /><br />
Le webdev orienté composants est une façon de concevoir des interfaces qui permet la réutilisation de "morceaux d'interfaces" (composants) comme un bouton, un formulaire, une barre de navigation, une page entière, etc, afin d'obtenir des bouts génériques de code et de faciliter l'uniformité d'une application, tout en minimisant la redondance de réécrire plusieurs fois un même élément d'interface.
    </Text>,
}

const chatroom:RetexModel = {
    name: "Tchat en direct",
    description: "",
    logoUrl: terminal,
    badges: [WEBDEV,API,PERSO],
    paragraph:
    <Text>
    Lors de mon année de 1ere générale, j'ai eu l'occasion comme projet de fin d'année de spécialité NSI de réaliser un site web complètement auto-hébergé (sur un raspberry pi 3 à la maison), permettant la discussion entre plusieurs personnes dans un tchat en direct, avec simplement la . J'ai utilisé des technologies de websockets pour permettre une connexion et un échange de données bidirectionnels entre client et serveur.
<br /><br />
Le problème avec les méthodes habituelles de communication entre un client (votre ordinateur) et un serveur (l'ordinateur distant hébergeant le site web auquel vous vous connectez), souvent passant par les requêtes HTTP, et que le serveur ne peut pas spontanément prévenir le client d'un évènement: en effet, il est nécessaire que le client "pose une question", pour que le serveur lui réponde. Dans le cas d'une messagerie en direct, il faut que lorsque Alice envoie un message, il puisse être affiché sur l'ordinateur de Bob. Avec des requêtes traditionnelles, il faudrait donc que Bob envoie régulièrement (par exemple, toutes les secondes) une requête demandant au serveur, "est-ce que de nouveaux messages ont été postés?". Cette façon de faire est très inneficace, et il est préférable d'utiliser une technologie permettant une connexion bidirectionnelle, ou le serveur et le client vont initier leur conversation par un "handshake", établissant la connexion entre les deux parties. Ensuite, chacun des deux périphériques peut spontanément notifier l'autre d'un évènement (par exemple, le client peut envoyer un message au serveur, et le serveur, une fois qu'il reçoit un message d'un client, peut envoyer une notification à tous les autres membres de la conversation).
</Text>,
}

const towa:RetexModel = {
    name: "Towa",
    description: "Participation à un tournoi d'IA",
    logoUrl: terminal,
    badges: [AI,IUT,MATH],
    paragraph:
    <Text>
    Au cours de ma première année de BUT informatique, j'ai eu l'occasion de développer une intelligence artificielle chargée de gagner à un jeu de plateau. Le jeu de plateau était constituait de plusieurs règles, que nous avions du dans un premier temps implémenter nous-mêmes. Dans la seconde phase de ce projet donc, une compétition avait lieu chaque nuit entre les différents algorithmes d'IA que chacun avait soumis, afin de déterminer quelle stratégie était la meilleure. J'ai personnellement fini 5e du classement de la promotion, grâce à un algorithme permettant de trouver le meilleur coup possible en terme de changement de score bénéfique, sur le tour actuel.
<br /><br />
Le problème principal avec mon approche est que l'algorithme utilisé avait une profondeur de 1, c'est-à-dire qu'il était incapable de simuler la conitnuation de la partie après le coup étudié, afin de voir si un coup potentiellement moins avantageux tout de suite pouvait être plus utile sur le long terme. Ayant réalisé ce défaut assez tôt, j'ai eu le temps de modifier mon algorithme pour qu'il puisse planifier sur 2, voire 3 tours. Cependant, une partie durant au maximum 40 tours, cette profondeur n'était pas suffisante. À cause d'une limite de temps imparti à chaque tour (d'environ 2 secondes pour jouer), il n'est pas possible de calculer toutes les éventualités, car cela prendrait un temps faramineux dès que l'on atteint une profondeur conséquente. Il est donc avisé d'"élaguer" l'arbre des possibilités via des algorithmes qui font le juste milieu entre rapides et exhaustifs, comme "A*" (dit "A-Star")</Text>,
}


const graphs:RetexModel = {
    name: "Visualisation de Graphes",
    description: "Application pour visualiser et manipuler des graphes",
    logoUrl: terminal,
    badges: [MATH,IUT,DATA_SCIENCE],
    paragraph:
    <Text>
    J'ai été chargé de construire une application Java avec javafx permettant de visualiser et modifier des graphes. J'ai du implémenter des algorithmes sur les graphes, comme l'algorithme de Prim, ou encore celui de Dijkstra. Après avoir passé plusieurs heures de cours théoriques sur les graphes, cette application réelle des méthodes apprises pour simplifier, modifier, et parcourir des graphes me permit d'en apprendre plus sur cette discipline très large.
    </Text>,
}



export const RetexSection = () => {
    

    return (
        <>
        <Heading>Mes Projets</Heading>
        <Heading as="h4" size="2" weight="regular">(Cliquez!)</Heading>

        <Flex direction="row" gap={{initial:"1",md:"5"}} wrap="wrap" justify="center">
        <ClickableRetex retex={vintrends}/>
        <ClickableRetex retex={ndi}/>
        <ClickableRetex retex={minishell}/>
        <ClickableRetex retex={nixos}/>
        <ClickableRetex retex={pixelWar}/>
        <ClickableRetex retex={passwordMan}/>
        <ClickableRetex retex={chatroom}/>
        <ClickableRetex retex={votator}/>
        <ClickableRetex retex={graphs}/>
        <ClickableRetex retex={towa}/>

        </Flex>
        </>
    );
}