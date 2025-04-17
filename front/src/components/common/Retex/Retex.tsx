import { Box, Button, DropdownMenu, Flex, Heading, RadioGroup, Text } from "@radix-ui/themes"
import { BadgeRow } from "./BadgeRow"
import { JargonSelect } from "./JargonSelect"

interface RetexProps {
    name: string

}

export const Retex = () => {
    return (
        <>
        <Flex direction="column" width="100%">
            <Heading as="h1" align="left" size="8">Retex: Vintrends</Heading>
            <Heading as="h2" weight="regular" size="6">Subtitle</Heading>
            {/* insérer image */}
            
            {/* gap here */}
            <BadgeRow/>
            {/* gap here */}
            <JargonSelect/>
            {/* gap here */}

            <Text as="p" size="2">
            Vintrends is a SaaS solution aimed to provide Vinted resellers with critical insight. <br/>
            Users provide a niche, which is then 'watched' by our bots, to later provide detailed data such as item quantity, price average, etc.
            </Text>
        </Flex>  
        </>
    )
}