import { Dialog, Button, Flex, TextField, Text } from "@radix-ui/themes";
import { RetexModel } from "../../../model/Retex"
import { RetexCard } from "./RetexCard";
import { Retex } from "./Retex";

interface ClickableRetexProps {
    retex: RetexModel
}

export const ClickableRetex:React.FC<ClickableRetexProps> = (props) => {
    const {retex} = props;

    return (
        <>
        <Dialog.Root>
	<Dialog.Trigger>
		
		<a><RetexCard retex={retex}/></a>
	</Dialog.Trigger>

	<Dialog.Content maxWidth="100vw" maxHeight="70vh">
		<Flex justify="between">
		<Retex retex={retex}/>
		<Flex gap="3" justify="end">
			<Dialog.Close>
				<Button variant="soft" color="gray">
					Close
				</Button>
			</Dialog.Close>
		</Flex>
		
		</Flex>
		
	</Dialog.Content>
</Dialog.Root>

        </>
    )
}