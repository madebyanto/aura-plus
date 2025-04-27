const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);

  const email = body.email; // l'email che ricevi dal form
  const date = new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' });

  // I TUOI DATI TELEGRAM
  const telegramBotToken = '8132682046:AAE_qUv4W0wjDCSGdE1VN05ffH2lNAgC-eI';
  const telegramChatId = '5047465981';

  const message = `Nuova registrazione su Aura+!\nEmail: ${email}\nData: ${date}`;

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};
