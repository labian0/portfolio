import { Box, Card, Flex, Avatar, Text } from "@radix-ui/themes"

interface SkillProps {
    name: string
    imgUrl: string
}

export const Skill:React.FC<SkillProps> = (props) => {
    return (
    <Card>
        <Flex align="center" direction="column">
            <Box maxHeight="80px" maxWidth="80px">
                <img src={props.imgUrl} alt={props.name} style={{objectFit:"cover", maxHeight:"100%", maxWidth:"100%"}}/>
            </Box>
            <Text as="div" size="2" weight="bold">{props.name}</Text>
        </Flex>
    </Card>
    )
}