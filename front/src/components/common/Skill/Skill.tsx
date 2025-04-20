import { Box, Card, Flex, Text } from "@radix-ui/themes"

interface SkillProps {
    name: string
    imgUrl: string
}

export const Skill:React.FC<SkillProps> = (props) => {
    return (
    <Card>
        <Flex align="center" justify="between" direction="column">
            <Box height="80px" width="80px">
                <Flex direction="column" align="center" justify="center" height="100%">

                <img src={props.imgUrl} alt={props.name} style={{objectFit:"cover", maxHeight:"100%", maxWidth:"100%"}}/>
                </Flex>
            </Box>
            <Text as="div" size="2" weight="bold">{props.name}</Text>
        </Flex>
    </Card>
    )
}