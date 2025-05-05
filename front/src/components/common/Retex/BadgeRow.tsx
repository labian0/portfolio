import { Flex } from "@radix-ui/themes"

interface BadgeRowProps {
    badges: React.ReactNode[]
}

export const BadgeRow:React.FC<BadgeRowProps> = (props) => {
    return (
        <>
        <Flex direction="row" gap="0">
            {props.badges}
        </Flex>
        </>
    )
}