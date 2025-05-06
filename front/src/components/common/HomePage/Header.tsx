import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes"

export const Header = () => {
    return (
        <>
        <Card>
        <Flex direction="column" width={{initial:"100vw", md:"100%"}} >
        <Heading as="h1" size={"8"}>Antoine Lalagüe--Binos</Heading>
        <Flex direction={{initial:"column", md:"row"}} gap="6"  justify="between">
            <Flex direction="column">
            <Heading weight="light">Full stack dev</Heading>
            <Box height="24px"></Box>
            <Text as="p" size="2">
                Passionné d'informatique depuis mon plus jeune âge, j'ai commencé à programmer avec Python puis Java.
                J'ai développé de nombreux projets personnels en plus de ceux réalisés au sein des cours.
                Vous pouvez les consulter ici.
            </Text>
            </Flex>

            <Flex width="100%" justify="center">
            <Flex width="16rem" height="16rem" justify="center">
                <img src="/me.jpg" alt="" 
                style={{objectFit:"contain", height:"100%", borderRadius: "var(--radius-2)",
            }}/>
            </Flex>
            </Flex>
        </Flex>

        </Flex>
        </Card>
        </>
    )
}