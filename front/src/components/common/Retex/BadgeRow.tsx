import { Badge, Flex } from "@radix-ui/themes"



export const BadgeRow = () => {
    return (
        <>
        <Flex direction="row" gap="1">
            <Badge color="red">Data science</Badge>
            <Badge color="blue">IUT</Badge>
        </Flex>
        </>
    )
}