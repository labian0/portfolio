import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes"
import { BadgeRow } from "./BadgeRow"
import { JargonSelect } from "./JargonSelect"
import { RetexModel } from "../../../model/Retex"

interface RetexProps {
    retex: RetexModel
}

export const Retex:React.FC<RetexProps> = (props) => {
    const {retex} = props;

    return (
        <>
        <Flex direction="column" width="100%" gap="3">
            <Box>
            <Heading as="h1" align="left" size="8">Retex: {retex.name}</Heading>
            <Heading as="h2" weight="regular" size="6">{retex.description}</Heading>
            {/* insérer image */}
            </Box>
            
            {/* gap here */}
            <BadgeRow badges={retex.badges}/>
            {/* gap here */}
            <JargonSelect/>
            {/* gap here */}

            <Text as="p" size="2">
            Vintrends is a SaaS solution aimed to provide Vinted resellers with critical insight. <br/>
            Users provide a niche, which is then 'watched' by our bots, to later provide detailed data such as item quantity, price average, etc.
            </Text>

            {retex.websiteUrl && <Text as="span"><a href={retex.websiteUrl} target="_blank"><Button variant="ghost">{retex.websiteUrl}</Button></a></Text>}
        </Flex>  
        </>
    )
}