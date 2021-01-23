let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • > Salva o ctt do meu Criador
│       Wa.me/+556392445315      
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
