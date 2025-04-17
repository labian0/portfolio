import { Box, Flex, Heading, Text } from "@radix-ui/themes"

export const Header = () => {
    return (
        <>
        <Flex direction="column" width="100%" mt={{md:"6rem"}}>
        <Heading as="h1" size={"8"}>Antoine Lalagüe--Binos</Heading>
        <Flex direction={{initial:"column", md:"row"}} gap="6"  justify="between">
            <Flex direction="column">
            <Heading weight="light">Full stack dev</Heading>
            <Box height="24px"></Box>
            <Text as="p" size="2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolores exercitationem molestiae, vero dicta sint inventore eligendi repellat expedita quos enim dignissimos perspiciatis laboriosam praesentium blanditiis ad harum necessitatibus similique!
                Aliquam consequatur enim excepturi voluptatibus necessitatibus. Inventore blanditiis voluptatem mollitia officia expedita incidunt doloremque molestiae, illo harum beatae, culpa, ipsa soluta. Quod nesciunt aspernatur unde magnam doloremque dolor tempora vero!
            </Text>
            </Flex>

            <Flex width="100%" justify="center">
            <Flex width="16rem" height="16rem" justify="center">
                <img src="https://m.media-amazon.com/images/I/51-ZnMsEGnL._AC_UY1000_.jpg" alt="" 
                style={{objectFit:"contain", height:"100%", borderRadius: "var(--radius-2)",
            }}/>
            </Flex>
            </Flex>
        </Flex>

        </Flex>
        
        </>
    )
}