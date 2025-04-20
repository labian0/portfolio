const webhookUrl: string = "https://discord.com/api/webhooks/1363295249455251586/XDlcx0TbMCHoMrgucZt4djpbU4IUmiYhfFWtvf1CI6Gu23DIVu4igINSMiL2-_yJjnbG"

export async function postToDiscordWebhook(message: string): Promise<Response> {
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({content:message}),
        });

        if (!response.ok) {
            throw new Error(`Discord webhook request failed with status ${response.status}`);
        }

        return response;
    } catch (error) {
        console.error('Error posting to Discord webhook:', error);
        throw error;
    }
}
