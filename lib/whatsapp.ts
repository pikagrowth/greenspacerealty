export async function sendWhatsAppAlert(message: string): Promise<void> {
  // Using the existing CALLMEBOT_PHONE or a new WHATSAPP_PHONE to prevent breaking changes
  const phone = process.env.WHATSAPP_PHONE || process.env.CALLMEBOT_PHONE;
  const idInstance = process.env.GREENAPI_ID_INSTANCE;
  const apiToken = process.env.GREENAPI_API_TOKEN;

  if (!phone || !idInstance || !apiToken) {
    console.error("Missing Green API credentials or phone number");
    return;
  }

  // Green API requires the phone number to be purely numeric, appended with @c.us
  const cleanPhone = phone.replace(/\D/g, '');
  const chatId = `${cleanPhone}@c.us`;

  const url = `https://api.greenapi.com/waInstance${idInstance}/sendMessage/${apiToken}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatId: chatId,
        message: message,
      }),
    });

    if (!response.ok) {
      console.error("Green API responded with an error:", response.statusText);
    }
  } catch (error) {
    console.error("Failed to send WhatsApp alert via Green API:", error);
  }
}