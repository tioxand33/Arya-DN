let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFORMAÇÕES 〙 ═
╠➥ Feito em linguagem javascript via NodeJs
╠➥ Criador: Tio Xande 𓇽
╠➥ Script: Privado
║
╠➥ Número: Wa.me/+556392445315
╠➥ Instagram: @Tio Xande
╠➥ YouTube: https://youtube.com/channel/UCsjx6zvKradFPRwme57XlDA
║
║>Solicitação Para grupos? Wa.me/+556392445315
║
╠═〘 XANDINHO 3.0 O BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

