import { Box, Flex, Heading } from "@radix-ui/themes"
import { BadgeRow } from "./BadgeRow"

interface RetexProps {
    name: string

}

export const Retex = () => {
    return (
        <>
        <Box width="100%">
            <Heading as="h1" align="left" size="8">Retex: Vintrends</Heading>
            <Heading as="h2" weight="regular" size="6">Sous-titre</Heading>
            <hr/>
            <BadgeRow/>
        </Box>  
        </>
    )
}