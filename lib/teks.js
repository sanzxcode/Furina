const chalk = require("chalk");
const fs = require("fs");
require("../settings.js")

module.exports = {

menu: {
  utama: `*🜲 Menu Utama*
么 ${global.perfa}allmenu
么 ${global.perfa}mainmenu
么 ${global.perfa}groupmenu
么 ${global.perfa}storemenu
么 ${global.perfa}aimenu
么 ${global.perfa}downloadmenu
么 ${global.perfa}panelmenu
么 ${global.perfa}ownermenu`,
  main: `*🜲 Main Menu*
么 ${global.perfa}tourl
么 ${global.perfa}tourl2
么 ${global.perfa}sticker
么 ${global.perfa}cekidch`,
  group: `*🜲 Group Menu*
么 ${global.perfa}antilink
么 ${global.perfa}antilink2
么 ${global.perfa}welcome
么 ${global.perfa}cekidch
么 ${global.perfa}kick
么 ${global.perfa}open
么 ${global.perfa}close
么 ${global.perfa}linkgc
么 ${global.perfa}resetlinkgc`,
  store: `*🜲 Store Menu*
么 ${global.perfa}addlist
么 ${global.perfa}dellist
么 ${global.perfa}list
么 ${global.perfa}payment
么 ${global.perfa}proses
么 ${global.perfa}done`,
  panel: `*🜲 Panel Menu*
么 ${global.perfa}1gb - .unlimited 
么 ${global.perfa}listpanel
么 ${global.perfa}delpanel
么 ${global.perfa}cadmin
么 ${global.perfa}listadmin
么 ${global.perfa}deladmin`,
  ai: `*🜲 Ai Menu*
么 ${global.perfa}autoai`,
  down: `*🜲 Download Menu*
么 ${global.perfa}ytmp3
么 ${global.perfa}ytmp4 
么 ${global.perfa}tiktok
么 ${global.perfa}spotify
么 ${global.perfa}xnxxdl
么 ${global.perfa}facebook 
么 ${global.perfa}instagram
么 ${global.perfa}mediafire
么 ${global.perfa}npmdl
么 ${global.perfa}gitclone`,
  owner: `*🜲 Owner Menu*
么 ${global.perfa}setprefix
么 ${global.perfa}joinch
么 ${global.perfa}addowner 
么 ${global.perfa}listowner
么 ${global.perfa}delowner
么 ${global.perfa}addseller
么 ${global.perfa}listseller
么 ${global.perfa}delseller
么 ${global.perfa}pushkontak
么 ${global.perfa}pushkontak2
么 ${global.perfa}jpm
么 ${global.perfa}jpmht
么 ${global.perfa}jpmch
么 ${global.perfa}savenomor
么 ${global.perfa}stoppush
么 ${global.perfa}stoppush
么 ${global.perfa}setjeda`,
  all: `*🜲 Main Menu*
么 ${global.perfa}tourl
么 ${global.perfa}tourl2
么 ${global.perfa}sticker
么 ${global.perfa}cekidch

*🜲 Group Menu*
么 ${global.perfa}antilink
么 ${global.perfa}antilink2
么 ${global.perfa}welcome
么 ${global.perfa}cekidch
么 ${global.perfa}kick
么 ${global.perfa}open
么 ${global.perfa}close
么 ${global.perfa}linkgc
么 ${global.perfa}resetlinkgc

*🜲 Store Menu*
么 ${global.perfa}addlist
么 ${global.perfa}dellist
么 ${global.perfa}list
么 ${global.perfa}payment
么 ${global.perfa}proses
么 ${global.perfa}done

*🜲 Panel Menu*
么 ${global.perfa}1gb - .unlimited 
么 ${global.perfa}listpanel
么 ${global.perfa}delpanel
么 ${global.perfa}cadmin
么 ${global.perfa}listadmin
么 ${global.perfa}deladmin

*🜲 Ai Menu*
么 ${global.perfa}autoai

*🜲 Download Menu*
么 ${global.perfa}ytmp3
么 ${global.perfa}ytmp4 
么 ${global.perfa}tiktok
么 ${global.perfa}spotify
么 ${global.perfa}xnxxdl
么 ${global.perfa}facebook 
么 ${global.perfa}instagram
么 ${global.perfa}mediafire
么 ${global.perfa}npmdl
么 ${global.perfa}gitclone

*🜲 Owner Menu*
么 ${global.perfa}setprefix
么 ${global.perfa}joinch
么 ${global.perfa}addowner 
么 ${global.perfa}listowner
么 ${global.perfa}delowner
么 ${global.perfa}addseller
么 ${global.perfa}listseller
么 ${global.perfa}delseller
么 ${global.perfa}pushkontak
么 ${global.perfa}pushkontak2
么 ${global.perfa}jpm
么 ${global.perfa}jpmht
么 ${global.perfa}jpmch
么 ${global.perfa}savenomor
么 ${global.perfa}stoppush
么 ${global.perfa}stoppush
么 ${global.perfa}setjeda`
  },
  
tqto: ``

}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blue(">> Update File :"), chalk.black.bgWhite(`${__filename}`))
delete require.cache[file]
require(file)
})