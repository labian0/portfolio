import { Button, DropdownMenu, Flex, Text } from "@radix-ui/themes"
import { JargonLevel } from "../../../model/JargonLevel"
import { useJargon } from "../../../context/JargonLevelContext"


export const JargonSelect = () => {
    const {level, setLevel} = useJargon();
    const LEVELS: JargonLevel[] = ["BEGINNER", "INTERMEDIATE", "EXPERT"]

    return (
        <>
        <Flex direction="row" align="center" gap="2">
            <Text>What's your technical level?</Text>

            <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button variant="soft">
                    {level}
                    <DropdownMenu.TriggerIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                {LEVELS.map((lvl) => <DropdownMenu.Item onClick={() => {setLevel(lvl)}}>{lvl}</DropdownMenu.Item>)
                }
            </DropdownMenu.Content>
        </DropdownMenu.Root>

        </Flex>
        </>
    )
}