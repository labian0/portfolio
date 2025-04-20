import { Button, Flex, Heading, Text, TextArea, TextField } from "@radix-ui/themes"
import { useState } from "react";
import { postToDiscordWebhook } from "../../../services/webhook";

export const ContactForm = () => {
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");

    const submitMsg = async () => {
        postToDiscordWebhook(email+"\n"+message)
        .then(() => {setEmail(""); setMessage(""); setErrorMessage("")})
        .then(() => {setErrorMessage("");setSuccessMessage("votre message a été envoyé avec succès!")})
        .catch(() => {setSuccessMessage("");setErrorMessage("une erreur est survenue. veuillez réessayer plus tard")})
    }

    return (
        <>
        <Heading>Contactez moi!</Heading>
        <Flex direction="column" width="48rem" gap="3">
        <TextField.Root placeholder="Votre email" onChange={(e) => setEmail(e.target.value)} value={email}>
        </TextField.Root>

        <TextArea placeholder="Votre message" onChange={(e) => setMessage(e.target.value)} value={message}/>
        
        </Flex>
        <Button 
        variant="soft"
        disabled={!/^.+\@.+\..+$/.test(email) || message === ""}
        onClick={submitMsg}
        >Envoyer</Button>

        <Text size="2" color="red">{errorMessage}</Text>
        <Text size="2" color="green">{successMessage}</Text>
        </>
    )
}