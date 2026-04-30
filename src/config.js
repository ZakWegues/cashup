export const WHATSAPP_NUMBER = '5500000000000';
export const WHATSAPP_MESSAGE = 'Olá! Quero saber mais sobre a CashUp.';

export const whatsappLink = (msg = WHATSAPP_MESSAGE) =>
  `https://wa.me/${12981615938}?text=${encodeURIComponent(msg)}`;
