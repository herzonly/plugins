let handler = async (m, { text, usedPrefix, command }) => {
	if(!text) return m.reply(`Contoh: ${usedPrefix+command} Besok mabar ga?|Mabar|Ga ah malas`) 
let anu = text.split("|") 
let name = anu.slice(0, 1) 
let value = anu.slice(1) 
conn.sendMessage(m.chat, { poll: { name: name, values: value, selectableCount: 1 }})
}

handler.help = ['poll name|value|value...']
handler.command = /^poll$/
handler.owner = true
module.exports = handler