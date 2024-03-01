let handler = async (m, { conn, text }) => {
const simi = require('chats-simsimi') 
if (!text) return m.reply("Masukkan Teks!") 
const simsimi = async (text, language) => {
	const simi = require('chats-simsimi') 
  try {
    const response = await simi(text, language);
    return response.result
  } catch (error) {
    return error;
  }
}
let res = await simsimi(text, 'id') 
conn.sendMessage(m.chat,{
text: res ,contextInfo: {
externalAdReply: {  
title: `Sim Simi`,body: '',thumbnailUrl: 'https://telegra.ph/file/cb3cbf9615c0a641dc043.jpg',sourceUrl: 'https://chat.whatsapp.com/Ftk1hl3l84EBSHI2mF7Dw3',mediaType: 2,renderLargerThumbnail: false
}}})
}
handler.help = ['simsimi <teks>']
handler.tags = ['ai']
 handler.command = /^(simi?h|simsimi|simisimi)$/i
 handler.limit = true
module.exports = handler