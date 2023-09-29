const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6285771598591@s.whatsapp.net"]
global.nomerOwner = "6285771598591"
global.nomorOwner = ['6285771598591']
global.OwnerName = "STRAKZ STORE"
global.BotName = "STRAKZBOTS"

// SETTING CPANEL
global.domain = 'https://' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '19' // id eggs yang dipakai
global.location = '1' // id location

// APIKEY DIGITAL OCEAN
global.apitokendo = ''

// TEXT JPM
global.teksjpm = ""

// TEXT PUSH KNTK
global.tekspushkon = "ASSALAMU'ALAIKUM SV STRAKZ STORE"
global.tekspushkonv1 = ""
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""

// IMAGE
global.thumb = fs.readFileSync('./thumb.jpg')

// GLOBAL MESS
global.mess = {
   owner: "Jirr Lu Siapa Cok*",
   proses: "Wet Otw Bangg",
   sukses: "*⌜ DONE ⌟*\nSucces Mas",
   group: "Khusus Di Group",
   priv: "Khusus Di Private Chat",
   inf: "*[ SCRIPT BY STRAKZ STORE ]*\n\n> MAU BELI SC NYA?\n>😁\nTAPI KALO DI TAKE GANJA GAS\n\n- KEUNTUNGAN :\n> BISA PUSH KONTAK\n> BISA JPM + GAMBAR\n> JPM TANPA CAPE CUMA LEWAT BOT\n> BISA SAVE KONTAK LEWAT ID\n> BISA CREATE PANEL OTOMATIS\n\n*MINAT? CHAT WA DI BAWAH*\n_wa.me/6285771598591_"
}
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})