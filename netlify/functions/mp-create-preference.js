// netlify/functions/mp-create-preference.js
import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN, // Defina no Netlify (variável de ambiente)
});

export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const cart = JSON.parse(event.body);

    if (!Array.isArray(cart) || cart.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: "Carrinho vazio" }) };
    }

    const preference = {
      items: cart.map(item => ({
        id: item.id,
        title: item.name,
        quantity: item.quantity,
        unit_price: Number(item.price),
        currency_id: "BRL",
      })),
      back_urls: {
        success: "https://SEU_SITE.netlify.app/pedido/sucesso.html",
        failure: "https://SEU_SITE.netlify.app/pedido/erro.html",
        pending: "https://SEU_SITE.netlify.app/pedido/pendente.html",
      },
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);

    return {
      statusCode: 200,
      body: JSON.stringify({ id: response.body.id }),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
}