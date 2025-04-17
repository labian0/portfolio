import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"
import { RetexModel } from "../../../model/Retex"

interface RetexCardProps {
    retex: RetexModel
}

export const RetexCard:React.FC<RetexCardProps> = (props) => {
    const {retex} = props;
    
    return (
        <>
        <Box maxWidth="210px">
            <Card>
                <Flex gap="3" align="center">
                    <Avatar
                        size="3"
                        src={retex.logoUrl}
                        fallback={retex.name.length ? retex.name[0] : ""}
                    />
                    <Box>
                        <Text as="div" size="2" weight="bold">
                            {retex.name}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {retex.description}
                        </Text>
                        
                    </Box>
                </Flex>
                <Flex direction="row" gap="1">{retex.badges.slice(0,3)}</Flex>
            </Card>
        </Box>

        </>
    )
}