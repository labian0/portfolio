import { Box, Flex, Heading } from "@radix-ui/themes"

export const Header = () => {
    return (
        <>
        <Flex direction="row" gap="6">
            <Flex direction="column">
            <Heading as="h1" size={"8"}>Antoine Lalagüe--Binos</Heading>
            <Heading weight="light">Full stack dev</Heading>
            </Flex>

            <Box width="12rem" height="12rem">
                <img src="https://m.media-amazon.com/images/I/51-ZnMsEGnL._AC_UY1000_.jpg" alt="" 
                style={{objectFit:"contain", height:"100%", borderRadius: "var(--radius-2)",
            }}/>
            </Box>
        </Flex>

        </>
    )
}