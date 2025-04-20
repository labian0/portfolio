import { Button, Flex, Heading, Text } from "@radix-ui/themes"
import { BadgeRow } from "./BadgeRow"
import { RetexModel } from "../../../model/Retex"

interface RetexProps {
    retex: RetexModel
}

export const Retex:React.FC<RetexProps> = (props) => {
    const {retex} = props;

    return (
        <>
        <Flex direction="column" width="100%" gap="3">
            <Flex width="100%" justify="between" direction={{initial:"column",sm:"row"}} >
            <Flex direction="column" justify="center">
                <Heading as="h1" align="left" size="8">Retex: {retex.name}</Heading>
                <Heading as="h2" weight="regular" size="6">{retex.description}</Heading>
                <BadgeRow badges={retex.badges}/>
            </Flex>

            { retex.imageUrl &&
            <Flex maxHeight="14rem" maxWidth="18rem" justify="end">
                <img src={retex.imageUrl} alt={retex.name} style={{objectFit:"cover", maxHeight:"100%", maxWidth:"100%", borderRadius:"var(--radius-2)"}}/>
            </Flex>}
            </Flex>
            {/* <JargonSelect/> */}

            {retex.paragraph}

            {retex.websiteUrl && <Text as="span"><a href={retex.websiteUrl} target="_blank"><Button variant="ghost">{retex.websiteUrl}</Button></a></Text>}
        </Flex>  
        </>
    )
}