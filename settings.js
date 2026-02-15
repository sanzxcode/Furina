/*       Cradit: Sanzxcode </>

⚠︎ No copy / delete cradits!, hargai kreator

© 2025 - 2026

*/
const chalk = require("chalk");
const fs = require("fs");

global.owner = "6283173403116"
global.namaOwner = "Sanz x code"
global.mode_public = true
global.perfa = ""

global.linkChannel = "https://whatsapp.com/channel/0029VbB61MpCRs1esJqPza3B"
global.idChannel = "120363402489610141@newsletter"
global.linkGrup = ""
global.thumbnail = "https://img2.pixhost.to/images/5778/695547268_skyzo.jpg"

global.dana = "08889783250"
global.ovo = "Tidak tersedia"
global.gopay = "Tidak tersedia"
global.qris = "https://files.catbox.moe/t0cyp8.jpg"

global.Apikeyss = "Sanzz"

global.JedaPushkontak = 5000
global.JedaJpm = 5000
global.autoai = true
global.autoaiDelay = 2000 // optional biar natural

global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https://server.ricotasya.my.id"
global.apikey = "ptla_xZZxSITraBdGqPT0Ge4nRb3HxLOZW9yX0oDM82J3" // Isi api ptla
global.capikey = "ptlc_TroIQEI72IEJRtMD2ZomZ1CV7Oeoi0ufEyWSWedle" // Isi api ptlc


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blue(">> Update File :"), chalk.black.bgWhite(`${__filename}`))
delete require.cache[file]
require(file)
})