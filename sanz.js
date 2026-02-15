/*       Cradit: Sanzxcode </>

⚠︎ No copy / delete cradits!, hargai kreator

© 2025 - 2026

*/

const util = require("util");
const chalk = require("chalk");
const fs = require("fs");
const axios = require("axios");
const fetch = require("node-fetch");
const { exec, spawn, execSync } = require('child_process');
const LoadDataBase = require("./lib/LoadDatabase.js");
const path = require("path");
const { checkUpdate, startUpdate } = require("./lib/update.js")

module.exports = async (m, sock) => {
try {
await LoadDataBase(sock, m)
const prefix = global.perfa
const isCmd = m?.body?.startsWith(prefix)
const quoted = m.quoted ? m.quoted : m
const mime = quoted?.msg?.mimetype || quoted?.mimetype || null
const args = m.body.trim().split(/ +/).slice(1)
const qmsg = (m.quoted || m)
const text = q = args.join(" ")
const command = isCmd ? m.body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const cmd = prefix + command
const botNumber = await sock.user.id.split(":")[0]+"@s.whatsapp.net"
const isOwner = global.owner+"@s.whatsapp.net" == m.sender || m.sender == botNumber || db.settings.developer.includes(m.sender)
const isReseller = db.settings.reseller.includes(m.sender)
  m.isGroup = m.chat.endsWith('g.us');
  m.metadata = {};
  m.isAdmin = false;
  m.isBotAdmin = false;
  if (m.isGroup) {
    let meta = await global.groupMetadataCache.get(m.chat)
    if (!meta) meta = await sock.groupMetadata(m.chat).catch(_ => {})
    m.metadata = meta;
    const p = meta?.participants || [];
    m.isAdmin = p?.some(i => (i.id === m.sender || i.jid === m.sender) && i.admin !== null);
    m.isBotAdmin = p?.some(i => (i.id === botNumber || i.jid == botNumber) && i.admin !== null);
    const isAdmins = m.isAdmin
  } 

if (isCmd) {
console.log(chalk.white("• Sender :"), chalk.blue(m.chat) + "\n" + chalk.white("• Command :"), chalk.blue(cmd) + "\n")
}


//=============================================//

global.borderlist = function(style = 1, title = "LIST STORE", items = []) {
    let teks = "";

    if (style == 1) {
        teks += `╭─═[ ${title} ]═──⋆\n`;
        teks += `│╭───────────────···\n`;
        teks += `││「️🛍️ daftar key 」\n`;
        for (let item of items) teks += `││➣ ${item}\n`;
        teks += `│╰───────────────···\n`;
        teks += `╰───────────────────⋆`;
    }

    else if (style == 2) {
        teks += `┏━━━『 ${title} 』━━━⬣\n`;
        items.forEach((v,i) => {
            teks += `┃ ${i+1}. ${v}\n`;
        });
        teks += `┗━━━━━━━━━━━━━━⬣`;
    }

    else if (style == 3) {
        teks += `〔 ${title} 〕\n\n`;
        items.forEach((v,i) => {
            teks += `❏ ${i+1}. ${v}\n`;
        });
        teks += `\n─ Store Bot ─`;
    }

    return teks;
};

const FakeChannel = {
  key: {
    remoteJid: 'status@broadcast',
    fromMe: false,
    participant: '0@s.whatsapp.net'
  },
  message: {
    newsletterAdminInviteMessage: {
      newsletterJid: '123@newsletter',
      caption: `Powered By ${global.namaOwner}.`,
      inviteExpiration: 0
    }
  }
}

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

const FakeLocation = {
  key: {
    participant: '0@s.whatsapp.net',
    ...(m.chat ? { remoteJid: 'status@broadcast' } : {})
  },
  message: {
    locationMessage: {
      name: `Powered By ${global.namaOwner}.`,
      jpegThumbnail: ''
    }
  }
}

const FakeSticker = {
        key: {
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast"
        },
        message: {
            stickerPackMessage: {
                stickerPackId: "\000",
                name: `Powered By ${global.namaOwner}.`,
                publisher: "kkkk"
            }
        }
    }


//=============================================//

if (global.db.groups[m.chat]?.antilink === true) {
    const textMessage = m.text || ""
    const groupInviteLinkRegex = /(https?:\/\/)?(www\.)?chat\.whatsapp\.com\/[A-Za-z0-9]+(\?[^\s]*)?/gi
    const links = textMessage.match(groupInviteLinkRegex)
    if (links && !isOwner && !m.isAdmin && m.isBotAdmin) {
        const senderJid = m.sender
        const messageId = m.key.id
        const participantToDelete = m.key.participant || m.sender
        await sock.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: messageId,
                participant: participantToDelete
            }
        })
        await sleep(800)
        await sock.groupParticipantsUpdate(m.chat, [senderJid], "remove")
    }
}

if (global.db.groups[m.chat]?.antilink2 === true) {
    const textMessage = m.text || ""
    const groupInviteLinkRegex = /(https?:\/\/)?(www\.)?chat\.whatsapp\.com\/[A-Za-z0-9]+(\?[^\s]*)?/gi
    const links = textMessage.match(groupInviteLinkRegex)
    if (links && !isOwner && !m.isAdmin && m.isBotAdmin) {
        const messageId = m.key.id
        const participantToDelete = m.key.participant || m.sender
        await sock.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: messageId,
                participant: participantToDelete
            }
        })
    }
}

const infobot = `*〔 🤖 BOT INFORMATION 〕*
 ❏ Mode    : ${sock.public ? "Public" : "Self"}
 ❏ Runtime : ${runtime(process.uptime())}
 ❏ Owner   : @${global.owner}
‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌
`

//===========[function]=============
async function ambilJawabanAI(teks) {
    try {
        const respon = await axios.get("https://api.sanzxcode.web.id/ai/groq", {
            params: {
                apikey: global.Apikeyss,
                question: teks
            }
        })

        if (!respon.data.status) return null

        return respon.data.result

    } catch (err) {
        console.log("Error AutoAI:", err.message)
        return null
    }
}

async function sendFurinaMenu(sock, m, teksnya) {
  return await sock.sendMessage(m.chat, {
    footer: `© 2026 Furina Assistant`,
    buttons: [
    {
      buttonId: 'action',
      buttonText: { displayText: 'ini pesan interactiveMeta' },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Click To List',
          sections: [
            {
              title: 'Furina Assistant',
              highlight_label: 'Full fitur',
              rows: [
                {
                  title: 'AllMenu ⚡',
                  description: 'Menampilkan Allmenu',
                  id: `${global.perfa}allmenu`
                },
                {
                  title: 'Store Menu 🛍',
                  description: 'Menampilkan Store Menu',
                  id: `${global.perfa}storemenu`
                },
                {
                  title: 'Main Menu 🤖',
                  description: 'Menampilkan Bot Menu',
                  id: `${global.perfa}mainmenu`
                },
                {
                  title: 'Group Menu 🗝',
                  description: 'Menampilkan Group Menu',
                  id: `${global.perfa}groupmenu`
                }, 
                {
                  title: 'Panel Menu 🕹',
                  description: 'Menampilkan Panel Menu',
                  id: `${global.perfa}panelmenu`
                }, 
                {
                  title: 'Ai Menu 👾',
                  description: 'Menampilkan Ai Menu',
                  id: `${global.perfa}aimenu`
                }, 
                {
                  title: 'Download Menu 📩',
                  description: 'Menampilkan Download Menu',
                  id: `${global.perfa}downloadmenu`
                }, 
                {
                  title: 'Owner Menu 👑',
                  description: 'Menampilkan Owner Menu',
                  id: `${global.perfa}ownermenu`
                }
              ]
            }
          ]
        })
      }
    }
  ],
    headerType: 9,
    viewOnce: true,
    document: fs.readFileSync("./package.json"),
    fileName: `By ${global.namaOwner} </>`,
    mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileLength: 99999999,
    caption: teksnya,
    contextInfo: {
      isForwarded: true,
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.idChannel,
        newsletterName: `By ${global.namaOwner} </>`,
      },
      externalAdReply: {
        title: `Furina Assistant V2.5`,
        body: `📍 Runtime : ${runtime(process.uptime())}`,
        thumbnailUrl: global.thumbnail,
        sourceUrl: 'https://marketplace.sanzxcode.web.id',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  })
}
    
async function sendReact(sock, m, emoji = "👍") {
    try {
        await sock.sendMessage(m.chat, {
            react: {
                text: emoji,
                key: m.key
            }
        })
    } catch (err) {
        console.log("Error send react:", err)
    }
}
    
async function updateReact(sock, m, emoji = "✅") {
    try {
        await sock.sendMessage(m.chat, {
            react: {
                text: emoji,
                key: m.key
            }
        })
    } catch (err) {
        console.log("Error update react:", err)
    }
}
    
async function loadingPercent(sock, m, duration = 3000) {
    const totalBars = 10
    let progress = 0

    // kirim pesan awal
    const msg = await sock.sendMessage(m.chat, {
        text: `[░░░░░░░░░░] 0%`
    }, { quoted: m })

    const interval = setInterval(async () => {
        progress++

        const percent = progress * 10
        const filled = "█".repeat(progress)
        const empty = "░".repeat(totalBars - progress)

        await sock.sendMessage(m.chat, {
            text: `[${filled}${empty}] ${percent}%`,
            edit: msg.key
        })

        if (progress >= totalBars) {
            clearInterval(interval)
        }

    }, duration / totalBars)
}

//===========[case fitur]===============//
switch (command) {
case "menu": {
    const { Sticker, StickerTypes } = require('wa-sticker-formatter')

const sticker = new Sticker('./media/memek.jpg', {
    pack: 'Furina Assistant',
    author: 'by Sanzxcode',
    type: StickerTypes.FULL,
})

await sock.sendMessage(m.chat, {
    sticker: await sticker.toBuffer()
}, { quoted: m })

    await global.sleep(2000)
    
const teks = require("./lib/teks.js")
const menu = infobot + teks.menu.utama
try {
await sendFurinaMenu(sock, m, menu)
    } catch (err) {
        console.log("Error send menu:", err)
    }
}
break

case "mainmenu": {
const teks = require("./lib/teks.js")
const menu = infobot + teks.menu.main
await sendFurinaMenu(sock, m, menu)
}
break

case "groupmenu": {
const teks = require("./lib/teks.js")
const menu = infobot + teks.menu.group
await sendFurinaMenu(sock, m, menu)
}
break

case "storemenu": {
const teks = require("./lib/teks.js")
const menu = infobot + teks.menu.store
await sendFurinaMenu(sock, m, menu)
}
break

case "panelmenu": {
const teks = require("./lib/teks.js")
const menu = infobot + teks.menu.panel
await sendFurinaMenu(sock, m, menu)
}
break
        
case "aimenu": {
const teks = require("./lib/teks.js")
const menu = infobot + teks.menu.ai
await sendFurinaMenu(sock, m, menu)
}
break
        
case "downloadmenu": {
const teks = require("./lib/teks.js")
const menu = infobot + teks.menu.down
await sendFurinaMenu(sock, m, menu)
}
break

case "ownermenu": {
const teks = require("./lib/teks.js")
const menu = infobot + teks.menu.owner
await sendFurinaMenu(sock, m, menu)
}
break

case "allmenu": {
const teks = require("./lib/teks.js")
const menu = infobot + teks.menu.all
await sendFurinaMenu(sock, m, menu)
}
break
        
case "gitclone": case "git": {
  if (!text) {
    return m.reply(example(`https://github.com/kiuur/laurine-wabot`))
  }
  let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
  if (!regex.test(text)) {
    return m.reply(example(`https://github.com/kiuur/laurine-wabot`))
  }
  await sendReact(sock, m, "⌛")
  try {
    let [, user, repo] = text.match(regex) || [];
    repo = repo.replace(/\.git$/, '');
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
    let res = await fetch(url, { method: 'HEAD' });
    let cd = res.headers.get('content-disposition');
    let filename = cd.match(/attachment; filename="?([^"]+)"?/)[1];
    await sock.sendMessage(m.chat, {
      document: { url },
      mimetype: 'application/zip',
      fileName: filename,
      caption: "Github Downloader ✅"
    }, { quoted: m });
  } catch (e) {
    console.error(e);
    await m.reply(`Error! Repositori tidak ditemukan atau link tidak valid.`);
  }
}
break
        
case "autoai": {

    if (!m.isGroup) return m.reply("Khusus group.")

    let status = args[0]

    if (!status) {
        return m.reply(example("on/off"))
    }

    if (status === "on") {
        global.db.groups[m.chat].autoai = true
        m.reply("Auto AI berhasil diaktifkan.")
    }

    if (status === "off") {
        global.db.groups[m.chat].autoai = false
        m.reply("Auto AI berhasil dimatikan.")
    }

}
break
        
case "npmdl": {
   if (!text) return m.reply(example(`@whiskeysockets/baileys`))
    try {
        const axios = require("axios");
        const fs = require("fs");
        const path = require("path");
        const tar = require("tar");
        const AdmZip = require("adm-zip");
        let pkgName = text.trim();
        const info = await axios.get(`https://registry.npmjs.org/${encodeURIComponent(pkgName)}`);
        const version = info.data["dist-tags"].latest;
        const meta = await axios.get(
            `https://registry.npmjs.org/${encodeURIComponent(pkgName)}/${version}`
        );
        const tarballUrl = meta.data.dist.tarball;
        if (!tarballUrl) return m.eply("❌ Tarball tidak ditemukan untuk package ini.");
        await sendReact(sock, m, "⌛")
        const tmpDir = path.join(process.cwd(), "Tmp");
        if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

        const tarballPath = path.join(tmpDir, `${pkgName.replace(/[\/@]/g, "_")}-${version}.tgz`);
        const extractPath = path.join(tmpDir, `${pkgName.replace(/[\/@]/g, "_")}-${version}`);
        const res = await axios.get(tarballUrl, { responseType: "arraybuffer" });
        fs.writeFileSync(tarballPath, res.data);
        fs.mkdirSync(extractPath, { recursive: true });
        await tar.x({ file: tarballPath, cwd: extractPath, strip: 1 });
        const zip = new AdmZip();
        zip.addLocalFolder(extractPath);
        const zipPath = path.join(tmpDir, `${pkgName.replace(/[\/@]/g, "_")}-${version}.zip`);
        zip.writeZip(zipPath);
        await sock.sendMessage(
            m.chat,
            {
                document: fs.readFileSync(zipPath),
                mimetype: "application/zip",
                fileName: `${pkgName.replace("/", "_")}-${version}.zip`,
                caption: `✅ npm downloader\n *${pkgName}@${version}*`
            },
            { quoted: m }
        );
        fs.unlinkSync(tarballPath);
        fs.rmSync(extractPath, { recursive: true, force: true });
        fs.unlinkSync(zipPath);
    } catch (err) {
        console.error(err);
        await m.reply("❌ Gagal mengunduh package.\nPastikan nama package benar.\n\n" + err.message);
    }
}
break;
        
case "ytmp3": case "ytaudio": {
if (!text) return m.reply(example(`link_yt`))
    await sendReact(sock, m, "⌛")
const res = await fetchJson(`https://api.sanzxcode.web.id/download/ytdl-mp3?apikey=${global.Apikeyss}&url=${text}`)
if (!res.result.download) return m.reply("Error! terjadi kesalahan saat mengambil audio.")
return sock.sendMessage(m.chat, {audio: {url: res.result.download}, mimetype: "audio/mpeg", ptt: false, contextInfo: {
externalAdReply: {
title: res.result.title, 
body: ``, 
thumbnailUrl: res.result.image,
renderLargerThumbnail: true, 
mediaType: 1, 
sourceUrl: text
}
}}, { quoted: m })
    await updateReact(sock, m, "✅")
}
break
        
case "play": case "playyt": case "ytplay": {
    const Yts = require("yt-search");
if (!text) return m.reply(example(`judul lagu`))
const ress = await Yts(text)
if (ress.all.length < 1) return m.eply("Gagal! Audio/vidio tidak ditemukan.")
await sendReact(sock, m, "⌛")
const { title, url, thumbnail, timestamp, author } = ress.all[0]
const res = await fetchJson(`https://api.sanzxcode.web.id/download/ytdl-mp3?apikey=${global.Apikeyss}&url=${url}`)
if (!res.result.download) return m.reply("Error! terjadi kesalahan saat mengambil audio.")
return sock.sendMessage(m.chat, {audio: {url: res.result.download}, mimetype: "audio/mpeg", ptt: false, contextInfo: {
externalAdReply: {
title: title, 
body: `Duration: ${timestamp} || Creator: ${author.name}`, 
thumbnailUrl: thumbnail,
renderLargerThumbnail: true, 
mediaType: 1, 
sourceUrl: url
}
}}, { quoted: m })
    await updateReact(sock, m, "✅")
}
break
        
case "mediafire":
case "mddl": {
    const mediafire = require("./screper/mediafire.js")
  if (!text) return m.reply(example(`link`))
  if (!text.startsWith("https://"))
    return m.reply(example(`link`))
  const res = await mediafire(`${text}`);
  if (!res.url) return m.reply("Error! result tidak ditemukan atau link tidak valid.");
  await sendReact(sock, m, "⌛")
  async function getTypeUrlMedia(url) {
    const axios = require("axios");
    const FileType = require("file-type");
    try {
      const headers = {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "*/*",
        "Referer": "https://www.mediafire.com/",
      };
      const buffer = await axios.get(url, {
        responseType: "arraybuffer",
        headers,
        maxRedirects: 10,
      });
      const type =
        buffer.headers["content-type"] ||
        (await FileType.fromBuffer(buffer.data)).mime ||
        "application/octet-stream";

      return { type, url };
    } catch (err) {
      console.error("Gagal mendeteksi MIME type:", err.message);
      return { type: "application/octet-stream", url };
    }
  }
  const detected = await getTypeUrlMedia(res.url);
  await sock.sendMessage(
    m.chat,
    {
      document: { url: res.url },
      fileName: res.fileName,
      mimetype: detected.type,
      caption: "MediaFire Downloader ✅",
    },
    { quoted: m }
  ); await updateReact(sock, m, "✅")
}
break;
        
case "tt":
case "tiktok":
case "ttdl": {
    if (!text)
        return m.reply(example(`link_vt`))

    if (!text.startsWith("http"))
        return m.reply(example(`link_vt`))

    try {
        const axios = require("axios");

        await sendReact(sock, m, "⌛")

        const apiUrl = `https://api.sanzxcode.web.id/download/tiktok?apikey=${global.Apikeyss}&url=${encodeURIComponent(text)}`;
        const { data: res } = await axios.get(apiUrl);

        if (!res?.status || !res?.result)
            return m.eply("❌ Gagal mengambil data TikTok.");

        const d = res.result;
        const caption = d.caption || "Tiktok Downloader ✅";

        // === SLIDE / PHOTO ===
        if (d.type === "photo" && Array.isArray(d.slide)) {
            let album = [];
            for (let img of d.slide) {
                album.push({
                    image: { url: img },
                    caption
                });
            }

            await sock.sendMessage(
                m.chat,
                { album },
                { quoted: m }
            );

            // kirim audio jika ada
            if (d.audio) {
                await sock.sendMessage(
                    m.chat,
                    {
                        audio: { url: d.audio },
                        mimetype: "audio/mpeg",
                        ptt: false
                    },
                    { quoted: m }
                );
            }
            return;
        }

        // === VIDEO ===
        if (d.video) {
            await sock.sendMessage(
                m.chat,
                {
                    video: { url: d.video },
                    caption
                },
                { quoted: m }
            );

            // kirim audio jika ada
            if (d.audio) {
                await sock.sendMessage(
                    m.chat,
                    {
                        audio: { url: d.audio },
                        mimetype: "audio/mpeg",
                        ptt: false
                    },
                    { quoted: m }
                );
                await updateReact(sock, m, "✅")
            }
        }

    } catch (err) {
        console.error("TikTok DL Error:", err.response?.data || err);
        m.reply("❌ Terjadi kesalahan saat memproses TikTok.");
    }
}
break;
        
case "update": {
    if (!isOwner) return m.reply("Owner only!");

    if (!text) {
        let ada = await checkUpdate();
        if (ada) {
            m.reply("🔄 Update ditemukan dari GitHub.\nKetik *.update -start* untuk melanjutkan.");
        } else {
            m.reply("✅ Tidak ada update terbaru di repository.");
        }
    }

    if (text === "-start") {
        let ada = await checkUpdate();
        if (!ada) return m.reply("❌ Tidak ada update untuk dijalankan.");

        m.reply("🚀 Memulai update dari GitHub...");
        startUpdate(sock, m.sender);
    }
}
break;
        
case "dellist": {
    if (!m.isGroup) return m.reply("Khusus grup");
    if (!m.isAdmin) return m.reply("Admin only");

    if (!text) return m.reply("Masukkan key yang mau dihapus\nContoh: .dellist panel");

    let group = global.db.groups[m.chat];
    if (!group || !group.list || !group.list.length)
        return m.reply("List kosong");

    let key = text.toLowerCase().trim();

    let index = group.list.findIndex(v => v.key === key);
    if (index === -1)
        return m.reply("Key tidak ditemukan di list");

    // hapus data
    group.list.splice(index, 1);

    m.reply(`✅ Berhasil hapus list\nKey: ${key}`);
}
break;

case "addlist": {
    if (!m.isGroup) return m.reply("Khusus grup");

    if (!text.includes("@"))
        return m.reply("Format salah!\nContoh:\n.addlist panel@Panel ready");

    let [key, response] = text.split("@");
    if (!key || !response) return m.reply("Key atau respon kosong!");

    key = key.trim().toLowerCase();
    response = response.trim();

    // pastikan db ada
    if (!global.db.groups[m.chat]) global.db.groups[m.chat] = {};
    if (!global.db.groups[m.chat].list) global.db.groups[m.chat].list = [];

    let list = global.db.groups[m.chat].list;

    // cek duplikat
    if (list.find(v => v.key === key))
        return m.reply("Key sudah ada!");

    let imagePath = null;

    // ===== DETEKSI MEDIA =====
    let q = m.quoted ? m.quoted : m;
    let mime = q?.mimetype || q?.msg?.mimetype || "";

    if (/image/.test(mime)) {
        let dir = "./database/list_image";
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        let fileName = `${Date.now()}_${key}.jpg`;
        let savePath = path.join(dir, fileName);

        try {
            let media = await q.download();
            fs.writeFileSync(savePath, media);
            imagePath = savePath;
        } catch (e) {
            console.log(e);
            return m.reply("Gagal download gambar");
        }
    }

    // simpan ke DB
    list.push({
        key,
        response,
        image: imagePath
    });

    m.reply(`✅ Berhasil tambah list

📌 Key : ${key}
📝 Respon : ${response}
🖼️ Image : ${imagePath ? "Tersimpan" : "Tidak ada"}`);
}
break;

case "list": {
    if (!m.isGroup) return m.reply("Khusus grup");

    let data = global.db.groups[m.chat];
    if (!data || !data.list || !data.list.length)
        return m.reply("List kosong");

    let keys = data.list.map(v => v.key);

    let style = data.listStyle || 1;
    let title = data.borderTitle || "🛍️ PRODUK STORE 🛍️";

    let teks = global.borderlist(style, title, keys);

    m.reply(teks);
}
break;

case "setlisttext": {
    if (!m.isGroup) return m.reply("Khusus grup");
    if (!m.isAdmin) return m.reply("Admin only");

    let num = parseInt(text);
    if (!num) return m.reply("Masukkan nomor style\nContoh: .setlisttext 2");

    if (!global.db.groups[m.chat])
        global.db.groups[m.chat] = {};

    global.db.groups[m.chat].listStyle = num;

    m.reply(`✅ Style list berhasil diubah ke template ${num}`);
}
break;

case "pay": case "payment": {
let teks = `
*List Payment ${namaOwner} 🕊️*

- Dana: ${global.dana}
- Ovo: ${global.ovo}
- Gopay ${global.gopay}

_Wajib kirimkan bukti ss transfer, demi keamanan bersama!_
`
try {
await sock.sendMessage(m.chat, { image: { url: global.qris }, caption: teks, contextInfo: { isForwarded: true }})
} catch (err) {
await sock.sendMessage(m.chat, { text: teks, contextInfo: { isForwarded: true }})
}
}
break
        
case 'setprefix': {
    if (!isOwner) return m.reply(mess.owner)

    if (!args[0]) return m.reply(`Contoh:\n${global.perfa}setprefix !`)

    global.perfa = args[0]

    m.reply(`✅ Prefix berhasil diganti menjadi: ${global.prefa}`)
}
break
        
case "resetlinkgc": {
if (!isOwner) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!m.isBotAdmin) return m.reply(mess.botadmin)
await sock.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break
        
case "linkgc": {
if (!m.isGroup) return m.reply(mess.group)
if (!m.isBotAdmin) return m.reply(mess.botadmin)
const urlGrup = "https://chat.whatsapp.com/" + await sock.groupInviteCode(m.chat)
var teks = `nihh link\n
${urlGrup}
`
await sock.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break
        
case "joinch": case "joinchannel": {
if (!isOwner) return m.reply(mess.owner)
if (!text && !m.quoted) return m.reply("gunakan .joinch linkchnya")
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await sock.newsletterMetadata("invite", result)
await sock.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

case "cekidch":
case "idch": {
  if (!text) return m.reply(`*Contoh :* ${cmd} link channel`); 
  if (!text.includes("https://whatsapp.com/channel/")) {
    return m.reply("Link channel tidak valid");
  }
  let result = text.split("https://whatsapp.com/channel/")[1];
  let res = await sock.newsletterMetadata("invite", result);
  let teks = `${res.id}`;
  return m.reply(teks);
}
break;

case "status":
case "statusgrup": {
    if (!isOwner) return m.reply(mess.owner);
    if (!m.isGroup) return m.reply(mess.group);
    const group = global.db.groups[m.chat] || {};
    const teks = `
- Antilink  : ${group.antilink ? "✅" : "❌"}
- Antilink2 : ${group.antilink2 ? "✅" : "❌"}
- Welcome   : ${global.db.settings.welcome ? "✅" : "❌"}

_✅ = Aktif_
_❌ = Tidak Aktif_
`;
    return m.reply(teks);
}
break;

case "done":
case "don":
case "proses":
case "ps": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply(`*Contoh :* ${cmd} nama barang`);
    const status = /done|don/.test(command) ? "Transaksi Done ✅" : "Dana Telah Diterima ✅";
    const teks = `${status}

📦 Pembelian: ${text}
🗓️ Tanggal: ${global.tanggal(Date.now())}

📢 Cek Testimoni Pembeli:
${global.linkChannel.split("https://")[1] || "-"}

📣 Gabung Grup Share & Promosi:
${global.linkGrup.split("https://")[1] || "-"}`;
    await sock.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
        isForwarded: true, 
forwardingScore: 9999
        }
    }, { quoted: null });
}
break;

case "tourl": {
if (!/image|video|audio|application/.test(mime)) return m.reply(`Media tidak ditemukan!\nKetik *${cmd}* dengan reply/kirim media`)
    const FormData = require('form-data');
    const { fromBuffer } = require('file-type');    
    async function dt(buffer) {
        const fetchModule = await import('node-fetch');
        const fetch = fetchModule.default;
        let { ext } = await fromBuffer(buffer);
        let bodyForm = new FormData();
        bodyForm.append("fileToUpload", buffer, "file." + ext);
        bodyForm.append("reqtype", "fileupload");
        let res = await fetch("https://catbox.moe/user/api.php", {
            method: "POST",
            body: bodyForm,
        });
        let data = await res.text();
        return data;
    }

    let aa = m.quoted ? await m.quoted.download() : await m.download();
    let dd = await dt(aa);
    await m.reply(dd)
}
break

case "tourl2": {
if (!/image/.test(mime)) return m.reply(`Media tidak ditemukan!\nKetik *${cmd}* dengan reply/kirim foto`)
    try {
    const { ImageUploadService } = require('node-upload-images');
        let mediaPath = await sock.downloadAndSaveMediaMessage(qmsg);
        const service = new ImageUploadService('pixhost.to');
  let buffer = fs.readFileSync(mediaPath);
  let { directLink } = await service.uploadFromBinary(buffer, 'skyzo.png');
  await m.reply(directLink)
        await fs.unlinkSync(mediaPath);
    } catch (err) {
        console.error("Tourl Error:", err);
        m.reply("Terjadi kesalahan saat mengubah media menjadi URL.");
    }
}
break

case "backupsc":
case "bck":
case "backup": {
    if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber)
        return m.reply(mess.owner);
    try {        
        const tmpDir = "./Tmp";
        if (fs.existsSync(tmpDir)) {
            const files = fs.readdirSync(tmpDir).filter(f => !f.endsWith(".js"));
            for (let file of files) {
                fs.unlinkSync(`${tmpDir}/${file}`);
            }
        }
        await m.reply("Processing Backup Script . .");        
        const name = `Furina-Backup`; 
        const exclude = ["node_modules", "skyzopedia", "session", "package-lock.json", "yarn.lock", ".npm", ".cache"];
        const filesToZip = fs.readdirSync(".").filter(f => !exclude.includes(f) && f !== "");

        if (!filesToZip.length) return m.reply("Tidak ada file yang dapat di-backup.");

        execSync(`zip -r ${name}.zip ${filesToZip.join(" ")}`);

        await sock.sendMessage(m.sender, {
            document: fs.readFileSync(`./${name}.zip`),
            fileName: `${name}.zip`,
            mimetype: "application/zip"
        }, { quoted: m });

        fs.unlinkSync(`./${name}.zip`);

        if (m.chat !== m.sender) m.reply("Script bot berhasil dikirim ke private chat.");
    } catch (err) {
        console.error("Backup Error:", err);
        m.reply("Terjadi kesalahan saat melakukan backup.");
    }
}
break;

case "kick":
case "kik": {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isOwner && !m.isAdmin) return m.reply(mess.admin);
    if (!m.isBotAdmin) return m.reply(mess.botadmin);

    let target;

    if (m.mentionedJid?.[0]) {
        target = m.mentionedJid[0];
    } else if (m.quoted?.sender) {
        target = m.quoted.sender;
    } else if (text) {
        const cleaned = text.replace(/[^0-9]/g, "");
        if (cleaned) target = cleaned + "@s.whatsapp.net";
    }

    if (!target) return m.reply(`*Contoh :* .kick @tag/6283XXX`);

    try {
        await sock.groupParticipantsUpdate(m.chat, [target], "remove");
        return sock.sendMessage(m.chat, {
            text: `✅ Berhasil mengeluarkan @${target.split("@")[0]}`,
            mentions: [target]
        }, { quoted: m });
    } catch (err) {
        console.error("Kick error:", err);
        return m.reply("Gagal mengeluarkan anggota. Coba lagi atau cek hak akses bot.");
    }
}
break;

case "closegc":
case "close":
case "opengc":
case "open": {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isOwner && !m.isAdmin) return m.reply(mess.admin);
    if (!m.isBotAdmin) return m.reply(mess.botadmin);

    try {
        const cmd = command.toLowerCase();

        if (cmd === "open" || cmd === "opengc") {
            await sock.groupSettingUpdate(m.chat, 'not_announcement');
            return m.reply("Grup berhasil dibuka! Sekarang semua anggota dapat mengirim pesan.");
        }

        if (cmd === "close" || cmd === "closegc") {
            await sock.groupSettingUpdate(m.chat, 'announcement');
            return m.reply("Grup berhasil ditutup! Sekarang hanya admin yang dapat mengirim pesan.");
        }

    } catch (error) {
        console.error("Error updating group settings:", error);
        return m.reply("Terjadi kesalahan saat mencoba mengubah pengaturan grup.");
    }
}
break;

case "ht":
case "hidetag": {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply(`*Contoh :* ${cmd} pesannya`);
    try {
        if (!m.metadata || !m.metadata.participants) return m.reply("Gagal mendapatkan daftar anggota grup. Coba lagi.");
        const members = m.metadata.participants.map(v => v.id.includes("@s.whatsapp.net") ? v.id : v.jid);
        await sock.sendMessage(m.chat, {
            text: text,
            mentions: members
        }, {
            quoted: null
        });
    } catch (error) {
        console.error("Error sending hidetag message:", error);
        return m.reply("Terjadi kesalahan saat mencoba mengirim pesan hidetag.");
    }
}
break;

case "welcome": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply(`*Contoh :* ${cmd} on/off`);
    if (!/on|off/.test(text)) return m.reply(`*Contoh :* ${cmd} on/off`);

    if (text === "on") {
        if (global.db.settings.welcome) 
            return m.reply("Welcome sudah aktif ✅");
        global.db.settings.welcome = true;
        return m.reply("Berhasil menyalakan welcome ✅");
    }

    if (text === "off") {
        if (!global.db.settings.welcome) 
            return m.reply("Welcome sudah tidak aktif ✅");
        global.db.settings.welcome = false;
        return m.reply("Berhasil mematikan welcome ✅");
    }
}
break;

case "antilink": {
    if (!isOwner) return m.reply(mess.owner);
    if (!m.isGroup) return m.reply(mess.group);
    if (!text) return m.reply(`*Contoh :* ${cmd} on/off`);

    let group = global.db.groups[m.chat];
    if (text === "on") {
        if (group.antilink) return m.reply(`Antilink di grup ini sudah aktif!`);
        group.antilink = true;
        group.antilink2 = false;
        return m.reply(`Berhasil menyalakan antilink di grup ini ✅`);
    }

    if (text === "off") {
        if (!group.antilink) return m.reply(`Antilink di grup ini sudah tidak aktif!`);
        group.antilink = false;
        return m.reply(`Berhasil mematikan antilink di grup ini ✅`);
    }
}
break;

case "antilink2": {
    if (!isOwner) return m.reply(mess.owner);
    if (!m.isGroup) return m.reply(mess.group);
    if (!text) return m.reply(`*Contoh :* ${cmd} on/off`);

    let group = global.db.groups[m.chat];
    if (text === "on") {
        if (group.antilink2) return m.reply(`Antilink2 di grup ini sudah aktif!`);
        group.antilink2 = true;
        group.antilink = false;
        return m.reply(`Berhasil menyalakan antilink2 di grup ini ✅`);
    }

    if (text === "off") {
        if (!group.antilink2) return m.reply(`Antilink2 di grup ini sudah tidak aktif!`);
        group.antilink2 = false;
        return m.reply(`Berhasil mematikan antilink2 di grup ini ✅`);
    }
}
break;

case "jpmch": {
    if (!isOwner) return m.reply(mess.owner)
    if (!text) return m.reply(`*Contoh :* ${cmd} pesannya & bisa dengan foto juga`)

    let mediaPath
    const mimeType = mime
    if (/image/.test(mimeType)) {
        mediaPath = await sock.downloadAndSaveMediaMessage(qmsg)
    }
    
    const Channel = await sock.newsletterFetchAllParticipating()
    const channelList = Object.keys(Channel)
    if (!channelList || channelList.length < 1) return m.reply("Channel tidak ditemukan")
    let successCount = 0
    const messageType = mediaPath ? "teks & foto" : "teks"
    const senderChat = m.chat

    const messageContent = mediaPath
        ? { image: await fs.readFileSync(mediaPath), caption: text }
        : { text }
    global.messageJpm = messageContent

    await m.reply(`Memproses JPM ${messageType} ke ${channelList.length} Channel WhatsApp.`)
    global.statusjpm = true

    for (const chId of channelList) {
    if (global.stopjpm) {
        delete global.stopjpm
        delete global.statusjpm
        break
        }
        try {
            await sock.sendMessage(chId, global.messageJpm)
            successCount++
        } catch (err) {
            console.error(`Gagal kirim ke channel ${chId}:`, err)
        }
        await sleep(global.JedaJpm)
    }

    if (mediaPath) await fs.unlinkSync(mediaPath)    
    delete global.statusjpm
    await m.reply(`JPM Channel Telah Selsai ✅\nBerhasil dikirim ke ${successCount} Channel WhatsApp.`)
}
break

case "jasher": case "jpm": case "jaser": {
if (!isOwner) return m.reply(mess.owner)
if (!text) return m.reply(`*Contoh :* ${cmd} pesannya & bisa dengan foto juga`)
    let mediaPath
    const mimeType = mime
    if (/image/.test(mimeType)) {
        mediaPath = await sock.downloadAndSaveMediaMessage(qmsg)
    }
    const allGroups = await sock.groupFetchAllParticipating()
    const groupIds = Object.keys(allGroups)
    let successCount = 0
    const messageContent = mediaPath
        ? { image: await fs.readFileSync(mediaPath), caption: text }
        : { text }
    global.messageJpm = messageContent
    const senderChat = m.chat
    await m.reply(`Memproses ${mediaPath ? "JPM teks & foto" : "JPM teks"} ke ${groupIds.length} grup chat`)
    global.statusjpm = true
    
    for (const groupId of groupIds) {
        if (global.stopjpm) {
        delete global.stopjpm
        delete global.statusjpm
        break
        }
        try {
            await sock.sendMessage(groupId, global.messageJpm, { quoted: FakeChannel })
            successCount++
        } catch (err) {
            console.error(`Gagal kirim ke grup ${groupId}:`, err)
        }
        await sleep(global.JedaJpm)
    }

    if (mediaPath) await fs.unlinkSync(mediaPath)
    delete global.statusjpm
    await sock.sendMessage(senderChat, {
        text: `JPM ${mediaPath ? "teks & foto" : "teks"} berhasil dikirim ke ${successCount} grup.`,
    }, { quoted: m })
}
break

case "jpmht": {
if (!isOwner) return m.reply(mess.owner)
if (!text) return m.reply(`*Contoh :* ${cmd} pesannya & bisa dengan foto juga`)
    let mediaPath
    const mimeType = mime
    if (/image/.test(mimeType)) {
        mediaPath = await sock.downloadAndSaveMediaMessage(qmsg)
    }
    const allGroups = await sock.groupFetchAllParticipating()
    const groupIds = Object.keys(allGroups)
    let successCount = 0
    const messageContent = mediaPath
        ? { image: await fs.readFileSync(mediaPath), caption: text }
        : { text }
    global.messageJpm = messageContent
    const senderChat = m.chat
    await m.reply(`Memproses ${mediaPath ? "JPM teks & foto" : "JPM teks"} hidetag ke ${groupIds.length} grup chat`)
    global.statusjpm = true
    
    for (const groupId of groupIds) {
        if (global.stopjpm) {
        delete global.stopjpm
        delete global.statusjpm
        break
        }
        messageContent.mentions = allGroups[groupId].participants.map(e => e.id)
        try {
            await sock.sendMessage(groupId, global.messageJpm, { quoted: FakeChannel })
            successCount++
        } catch (err) {
            console.error(`Gagal kirim ke grup ${groupId}:`, err)
        }
        await sleep(global.JedaJpm)
    }

    if (mediaPath) await fs.unlinkSync(mediaPath)
    delete global.statusjpm
    await sock.sendMessage(senderChat, {
        text: `JPM ${mediaPath ? "teks & foto" : "teks"} hidetag berhasil dikirim ke ${successCount} grup.`,
    }, { quoted: m })
}
break

case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return m.reply("Kirim foto dengan caption .sticker")
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
var media = await sock.downloadAndSaveMediaMessage(qmsg)
await sock.sendStimg(m.chat, media, m, {packname: "Xskycode."})
}
break

case "public":
case "self": {
    if (!isOwner) return m.reply(mess.owner);
    let path = require.resolve("./settings.js");
    let data = fs.readFileSync(path, "utf-8");

    if (command === "public") {
        global.mode_public = true;
        sock.public = global.mode_public
        let newData = data.replace(/global\.mode_public\s*=\s*(true|false)/, "global.mode_public = true");
        fs.writeFileSync(path, newData, "utf-8");
        return m.reply("✅ Mode berhasil diubah menjadi *Public*");
    }

    if (command === "self") {
        global.mode_public = false;
        sock.public = global.mode_public
        let newData = data.replace(/global\.mode_public\s*=\s*(true|false)/, "global.mode_public = false");
        fs.writeFileSync(path, newData, "utf-8");
        return m.reply("✅ Mode berhasil diubah menjadi *Self*");
    }
}
break;

case "setjeda": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply(`*Contoh :*\n${cmd} push 5000\n${cmd} jpm 6000\n\nKeterangan format waktu:\n1 detik = 1000\n\nJeda waktu saat ini:\nJeda Pushkontak > ${global.JedaPushkontak}\nJeda JPM > ${global.JedaJpm}`);

    let args = text.split(" ");
    if (args.length < 2) return m.reply(`*Contoh :*\n${cmd} push 5000\n${cmd} jpm 6000\n\nKeterangan format waktu:\n1 detik = 1000\n\nJeda waktu saat ini:\nJeda Pushkontak > ${global.JedaPushkontak}\nJeda JPM > ${global.JedaJpm}`);

    let target = args[0].toLowerCase(); // push / jpm
    let value = args[1];

    if (isNaN(value)) return m.reply("Harus berupa angka!");
    let jeda = parseInt(value);

    let fs = require("fs");
    let path = require.resolve("./settings.js");
    let data = fs.readFileSync(path, "utf-8");

    if (target === "push") {
        let newData = data.replace(/global\.JedaPushkontak\s*=\s*\d+/, `global.JedaPushkontak = ${jeda}`);
        fs.writeFileSync(path, newData, "utf-8");
        global.JedaPushkontak = jeda;
        return m.reply(`✅ Berhasil mengubah *Jeda Push Kontak* menjadi *${jeda}* ms`);
    } 
    
    if (target === "jpm") {
        let newData = data.replace(/global\.JedaJpm\s*=\s*\d+/, `global.JedaJpm = ${jeda}`);
        fs.writeFileSync(path, newData, "utf-8");
        global.JedaJpm = jeda;
        return m.reply(`✅ Berhasil mengubah *Jeda JPM* menjadi *${jeda}* ms`);
    }

    return m.reply(`Pilihan tidak valid!\nGunakan: *push* atau *jpm*`);
}
break;

case "pushkontak": case "puskontak": {
if (!isOwner) return m.reply(mess.owner)
if (!text) return m.reply(`*Contoh :* ${cmd} pesannya`)
global.textpushkontak = text
let rows = []
const a = await sock.groupFetchAllParticipating()
if (a.length < 1) return m.reply("Tidak ada grup chat.")
const Data = Object.values(a)
let number = 0
for (let u of Data) {
const name = u.subject || "Unknown"
rows.push({
title: name,
description: `Total Member: ${u.participants.length}`, 
id: `.pushkontak-response ${u.id}`
})
}
await sock.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: `© Powered By ${namaOwner}`,
              rows: rows
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: `\nPilih Target Grup Pushkontak\n`
}, { quoted: m })
}
break

case "pushkontak-response": {
  if (!isOwner) return m.reply(mess.owner)
  if (!global.textpushkontak) return m.reply(`Data teks pushkontak tidak ditemukan!\nSilahkan ketik *.pushkontak* pesannya`);
  const teks = global.textpushkontak
  const jidawal = m.chat
  const data = await sock.groupMetadata(text)
  const halls = data.participants
    .filter(v => v.id.includes("@s.whatsapp.net") ? v.id : v.jid)
    .map(v => v.id.includes("@s.whatsapp.net") ? v.id : v.jid)
    .filter(id => id !== botNumber && id.split("@")[0] !== global.owner); 

  await m.reply(`🚀 Memulai pushkontak ke dalam grup ${data.subject} dengan total member ${halls.length}`);
  
  global.statuspush = true
  
 delete global.textpushkontak
 let count = 0
 
  for (const mem of halls) {
    if (global.stoppush) {
    delete global.stoppush
    delete global.statuspush
    break
    }
    await sock.sendMessage(mem, { text: teks }, { quoted: FakeChannel });
    await global.sleep(global.JedaPushkontak);
    count += 1
  }
  
  delete global.statuspush
  await m.reply(`✅ Sukses pushkontak!\nPesan berhasil dikirim ke *${count}* member.`, jidawal)
}
break

case "pushkontak2": case "puskontak2": {
if (!isOwner) return m.reply(mess.owner)
if (!text || !text.includes("|")) return m.reply(`Masukan pesan & nama kontak\n*Contoh :* ${cmd} pesan|namakontak`)
global.textpushkontak = text.split("|")[0]
let rows = []
const a = await sock.groupFetchAllParticipating()
if (a.length < 1) return m.reply("Tidak ada grup chat.")
const Data = Object.values(a)
let number = 0
for (let u of Data) {
const name = u.subject || "Unknown"
rows.push({
title: name,
description: `Total Member: ${u.participants.length}`, 
id: `.pushkontak-response2 ${u.id}|${text.split("|")[1]}`
})
}
await sock.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: `© Powered By ${namaOwner}`,
              rows: rows
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: `\nPilih Target Grup PushkontakV2\n`
}, { quoted: m })
}
break

case "pushkontak-response2": {
  if (!isOwner) return m.reply(mess.owner)
  if (!global.textpushkontak) return m.reply(`Data teks pushkontak tidak ditemukan!\nSilahkan ketik *.pushkontak2* pesannya|namakontak`);
  const teks = global.textpushkontak
  const jidawal = m.chat
  const data = await sock.groupMetadata(text.split("|")[0])
  const halls = data.participants
    .filter(v => v.id.includes("@s.whatsapp.net") ? v.id : v.jid)
    .map(v => v.id.includes("@s.whatsapp.net") ? v.id : v.jid)
    .filter(id => id !== botNumber && id.split("@")[0] !== global.owner); 

  await m.reply(`🚀 Memulai pushkontak autosave kontak ke dalam grup ${data.subject} dengan total member ${halls.length}`);
  
  global.statuspush = true
  
 delete global.textpushkontak
 let count = 0
 
  for (const mem of halls) {
    if (global.stoppush) {
    delete global.stoppush
    delete global.statuspush
    break
    }    
    const contactAction = {
        "fullName": `${text.split("|")[1]} #${mem.split("@")[0]}`,
        "lidJid": mem, 
        "saveOnPrimaryAddressbook": true
    };
    await sock.sendMessage(mem, { text: teks }, { quoted: FakeChannel });
    await sock.addOrEditContact(mem, contactAction);
    await global.sleep(global.JedaPushkontak);
    count += 1
  }
  
  delete global.statuspush
  await m.reply(`✅ Sukses pushkontak!\nTotal kontak berhasil disimpan *${count}*`, jidawal)
}
break

case "savekontak": case "svkontak": {
if (!isOwner) return m.reply(mess.owner)
if (!text) return m.reply(`Masukan namakontak\n*Contoh :* ${cmd} Xskycode`)
global.namakontak = text
let rows = []
const a = await sock.groupFetchAllParticipating()
if (a.length < 1) return m.reply("Tidak ada grup chat.")
const Data = Object.values(a)
let number = 0
for (let u of Data) {
const name = u.subject || "Unknown"
rows.push({
title: name,
description: `Total Member: ${u.participants.length}`, 
id: `.savekontak-response ${u.id}`
})
}
await sock.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: `© Powered By ${namaOwner}`,
              rows: rows
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: `\nPilih Target Grup Savekontak\n`
}, { quoted: m })
}
break

case "savekontak-response": {
  if (!isOwner) return m.reply(mess.owner)
  if (!global.namakontak) return m.reply(`Data nama savekontak tidak ditemukan!\nSilahkan ketik *.savekontak* namakontak`);
  try {
    const res = await sock.groupMetadata(text)
    const halls = res.participants
      .filter(v => v.id.includes("@s.whatsapp.net") ? v.id : v.jid)
      .map(v => v.id.includes("@s.whatsapp.net") ? v.id : v.jid)
      .filter(id => id !== botNumber && id.split("@")[0] !== global.owner)

    if (!halls.length) return m.reply("Tidak ada kontak yang bisa disimpan.")
    let names = text
    const existingContacts = JSON.parse(fs.readFileSync('./database/contacts.json', 'utf8') || '[]')
    const newContacts = [...new Set([...existingContacts, ...halls])]

    fs.writeFileSync('./database/contacts.json', JSON.stringify(newContacts, null, 2))

    // Buat file .vcf
    const vcardContent = newContacts.map(contact => {
      const phone = contact.split("@")[0]
      return [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${global.namakontak} - ${phone}`,
        `TEL;type=CELL;type=VOICE;waid=${phone}:+${phone}`,
        "END:VCARD",
        ""
      ].join("\n")
    }).join("")

    fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")

    // Kirim ke private chat
    if (m.chat !== m.sender) {
      await m.reply(`Berhasil membuat file kontak dari grup ${res.subject}\n\nFile kontak telah dikirim ke private chat\nTotal ${halls.length} kontak`)
    }

    await sock.sendMessage(
      m.sender,
      {
        document: fs.readFileSync("./database/contacts.vcf"),
        fileName: "contacts.vcf",
        caption: `File kontak berhasil dibuat ✅\nTotal ${halls.length} kontak`,
        mimetype: "text/vcard",
      },
      { quoted: m }
    )
    
    delete global.namakontak

    fs.writeFileSync("./database/contacts.json", "[]")
    fs.writeFileSync("./database/contacts.vcf", "")

  } catch (err) {
    m.reply("Terjadi kesalahan saat menyimpan kontak:\n" + err.toString())
  }
}
break

case "stopjpm": {
if (!isOwner) return m.reply(mess.owner)
if (!global.statusjpm) return m.reply("Jpm sedang tidak berjalan!")
global.stopjpm = true
return m.reply("Berhasil menghentikan jpm ✅")
}
break

case "stoppushkontak": case "stoppush": case "stoppus": {
if (!isOwner) return m.reply(mess.owner)
if (!global.statuspush) return m.reply("Pushkontak sedang tidak berjalan!")
global.stoppush = true
return m.reply("Berhasil menghentikan pushkontak ✅")
}
break

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": 
case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": 
case "unlimited": case "unli": {
    if (!isOwner && !isReseller) {
        return m.reply(`Fitur ini untuk di dalam grup reseller panel`);
    }
    if (!text) return m.reply(`*Contoh :* ${cmd} username,6283XXX`)

    let nomor, usernem;
    let tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = tek.map(t => t.trim());
        if (!users || !nom) return m.reply(`*Contoh :* ${cmd} username,6283XXX`)
        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat
    }

    try {
        var onWa = await sock.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di WhatsApp!");
    } catch (err) {
        return m.reply("Terjadi kesalahan saat mengecek nomor WhatsApp: " + err.message);
    }

    // Mapping RAM, Disk, dan CPU
    const resourceMap = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };
    
    let { ram, disk, cpu } = resourceMap[command] || { ram: "0", disk: "0", cpu: "0" };

    let username = usernem.toLowerCase();
    let email = username + "@gmail.com";
    let name = global.capital(username) + " Server";
    let password = username + "001";

    try {
        let f = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({ email, username, first_name: name, last_name: "Server", language: "en", password })
        });
        let data = await f.json();
        if (data.errors) return m.reply("Error: " + JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;

        let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
            method: "GET",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey }
        });
        let data2 = await f1.json();
        let startup_cmd = data2.attributes.startup;

        let f2 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({
                name,
                description: global.tanggal(Date.now()),
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
                startup: startup_cmd,
                environment: { INST: "npm", USER_UPLOAD: "0", AUTO_UPDATE: "0", CMD_RUN: "npm start" },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] },
            })
        });
        let result = await f2.json();
        if (result.errors) return m.reply("Error: " + JSON.stringify(result.errors[0], null, 2));
        
        let server = result.attributes;
        var orang = nomor
        if (orang !== m.chat) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun terkirim ke nomor ${nomor.split("@")[0]}`)
        }

let teks = `
*Berikut detail akun panel kamu 📦*

📡 Server ID: ${server.id}
👤 Username: \`${user.username}\`
🔐 Password: \`${password}\`
🗓️ Tanggal Aktivasi: ${global.tanggal(Date.now())}

*⚙️ Spesifikasi server panel*
- RAM: ${ram == "0" ? "Unlimited" : ram / 1000 + "GB"}
- Disk: ${disk == "0" ? "Unlimited" : disk / 1000 + "GB"}
- CPU: ${cpu == "0" ? "Unlimited" : cpu + "%"}
- Panel: ${global.domain}

*Rules pembelian panel :*  
- Masa aktif 30 hari  
- Data bersifat pribadi, mohon disimpan dengan aman  
- Garansi berlaku 15 hari (1x replace)  
- Klaim garansi wajib menyertakan *bukti chat pembelian*
`
        await sock.sendMessage(orang, { text: teks }, { quoted: m });
    } catch (err) {
        return m.reply("Terjadi kesalahan: " + err.message);
    }
}
break

case "delpanel": {
    if (!isOwner && !isReseller) {
        return m.reply(mess.owner);
    }
    const rows = []
    rows.push({
title: `Hapus Semua`,
description: `Hapus semua server panel`, 
id: `.delpanel-all`
})            
    try {
        const response = await fetch(`${domain}/api/application/servers`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        const result = await response.json();
        const servers = result.data;

        if (!servers || servers.length === 0) {
            return m.reply("Tidak ada server panel!");
        }

        let messageText = `\n*Total server panel :* ${servers.length}\n`

        for (const server of servers) {
            const s = server.attributes;

            const resStatus = await fetch(`${domain}/api/client/servers/${s.uuid.split("-")[0]}/resources`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${capikey}`,
                },
            });

            const statusData = await resStatus.json();

            const ram = s.limits.memory === 0
                ? "Unlimited"
                : s.limits.memory >= 1024
                ? `${Math.floor(s.limits.memory / 1024)} GB`
                : `${s.limits.memory} MB`;

            const disk = s.limits.disk === 0
                ? "Unlimited"
                : s.limits.disk >= 1024
                ? `${Math.floor(s.limits.disk / 1024)} GB`
                : `${s.limits.disk} MB`;

            const cpu = s.limits.cpu === 0
                ? "Unlimited"
                : `${s.limits.cpu}%`;
            rows.push({
title: `${s.name} || ID:${s.id}`,
description: `Ram ${ram} || Disk ${disk} || CPU ${cpu}`, 
id: `.delpanel-response ${s.id}`
})            
        }                  
        await sock.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: `© Powered By ${namaOwner}`,
              rows: rows
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: `\nPilih Server Panel Yang Ingin Dihapus\n`
}, { quoted: m })

    } catch (err) {
        console.error("Error listing panel servers:", err);
        m.reply("Terjadi kesalahan saat mengambil data server.");
    }
}
break;

case "delpanel-response": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return 
    
    try {
        const serverResponse = await fetch(domain + "/api/application/servers", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey
            }
        });
        const serverData = await serverResponse.json();
        const servers = serverData.data;
        
        let serverName;
        let serverSection;
        let serverFound = false;
        
        for (const server of servers) {
            const serverAttr = server.attributes;
            
            if (Number(text) === serverAttr.id) {
                serverSection = serverAttr.name.toLowerCase();
                serverName = serverAttr.name;
                serverFound = true;
                
                const deleteServerResponse = await fetch(domain + `/api/application/servers/${serverAttr.id}`, {
                    method: "DELETE",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });
                
                if (!deleteServerResponse.ok) {
                    const errorData = await deleteServerResponse.json();
                    console.error("Gagal menghapus server:", errorData);
                }
                
                break;
            }
        }
        
        if (!serverFound) {
            return m.reply("Gagal menghapus server!\nID server tidak ditemukan");
        }
        
        const userResponse = await fetch(domain + "/api/application/users", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey
            }
        });
        const userData = await userResponse.json();
        const users = userData.data;
        
        for (const user of users) {
            const userAttr = user.attributes;
            
            if (userAttr.first_name.toLowerCase() === serverSection) {
                const deleteUserResponse = await fetch(domain + `/api/application/users/${userAttr.id}`, {
                    method: "DELETE",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });
                
                if (!deleteUserResponse.ok) {
                    const errorData = await deleteUserResponse.json();
                    console.error("Gagal menghapus user:", errorData);
                }
                
                break;
            }
        }
        
        await m.reply(`Barhasil Menghapus Sever Panel ✅\nNama Server: ${capital(serverName)}`);
        
    } catch (error) {
        console.error("Error dalam proses delpanel:", error);
        await m.reply("Terjadi kesalahan saat memproses permintaan");
    }
}
break;

case "delpanel-all": {
if (!isOwner) return m.reply(mess.owner)
await m.reply(`Memproses penghapusan semua user & server panel yang bukan admin`)
try {
const PTERO_URL = global.domain
// Ganti dengan URL panel Pterodactyl
const API_KEY = global.apikey// API Key dengan akses admin

// Konfigurasi headers
const headers = {
  "Authorization": "Bearer " + API_KEY,
  "Content-Type": "application/json",
  "Accept": "application/json",
};

// Fungsi untuk mendapatkan semua user
async function getUsers() {
  try {
    const res = await axios.get(`${PTERO_URL}/api/application/users`, { headers });
    return res.data.data;
  } catch (error) {
    m.reply(JSON.stringify(error.response?.data || error.message, null, 2))
    
    return [];
  }
}

// Fungsi untuk mendapatkan semua server
async function getServers() {
  try {
    const res = await axios.get(`${PTERO_URL}/api/application/servers`, { headers });
    return res.data.data;
  } catch (error) {
    m.reply(JSON.stringify(error.response?.data || error.message, null, 2))
    return [];
  }
}

// Fungsi untuk menghapus server berdasarkan UUID
async function deleteServer(serverUUID) {
  try {
    await axios.delete(`${PTERO_URL}/api/application/servers/${serverUUID}`, { headers });
    console.log(`Server ${serverUUID} berhasil dihapus.`);
  } catch (error) {
    console.error(`Gagal menghapus server ${serverUUID}:`, error.response?.data || error.message);
  }
}

// Fungsi untuk menghapus user berdasarkan ID
async function deleteUser(userID) {
  try {
    await axios.delete(`${PTERO_URL}/api/application/users/${userID}`, { headers });
    console.log(`User ${userID} berhasil dihapus.`);
  } catch (error) {
    console.error(`Gagal menghapus user ${userID}:`, error.response?.data || error.message);
  }
}

// Fungsi utama untuk menghapus semua user & server yang bukan admin
async function deleteNonAdminUsersAndServers() {
  const users = await getUsers();
  const servers = await getServers();
  let totalSrv = 0

  for (const user of users) {
    if (user.attributes.root_admin) {
      console.log(`Lewati admin: ${user.attributes.username}`);
      continue; // Lewati admin
    }

    const userID = user.attributes.id;
    const userEmail = user.attributes.email;

    console.log(`Menghapus user: ${user.attributes.username} (${userEmail})`);

    // Cari server yang dimiliki user ini
    const userServers = servers.filter(srv => srv.attributes.user === userID);

    // Hapus semua server user ini
    for (const server of userServers) {
      await deleteServer(server.attributes.id);
      totalSrv += 1
    }

    // Hapus user setelah semua servernya terhapus
    await deleteUser(userID);
  }
await m.reply(`Berhasil menghapus ${totalSrv} user & server panel yang bukan admin.`)
}

// Jalankan fungsi
return deleteNonAdminUsersAndServers();
} catch (err) {
return m.reply(`${JSON.stringify(err, null, 2)}`)
}
}
break

case "listpanel":
case "listserver": {
    if (!isOwner && !isReseller) {
        return m.reply(`Fitur ini hanya untuk di dalam grup reseller panel`);
    }

    try {
        const response = await fetch(`${domain}/api/application/servers`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`,
            },
        });

        const result = await response.json();
        const servers = result.data;

        if (!servers || servers.length === 0) {
            return m.reply("Tidak ada server panel!");
        }

        let messageText = `\n*Total server panel :* ${servers.length}\n`

        for (const server of servers) {
            const s = server.attributes;

            const resStatus = await fetch(`${domain}/api/client/servers/${s.uuid.split("-")[0]}/resources`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${capikey}`,
                },
            });

            const statusData = await resStatus.json();

            const ram = s.limits.memory === 0
                ? "Unlimited"
                : s.limits.memory >= 1024
                ? `${Math.floor(s.limits.memory / 1024)} GB`
                : `${s.limits.memory} MB`;

            const disk = s.limits.disk === 0
                ? "Unlimited"
                : s.limits.disk >= 1024
                ? `${Math.floor(s.limits.disk / 1024)} GB`
                : `${s.limits.disk} MB`;

            const cpu = s.limits.cpu === 0
                ? "Unlimited"
                : `${s.limits.cpu}%`;

            messageText += `
- ID : *${s.id}*
- Nama Server : *${s.name}*
- Ram : *${ram}*
- Disk : *${disk}*
- CPU : *${cpu}*
- Created : *${s.created_at.split("T")[0]}*\n`;
        }                  
        await m.reply(messageText)

    } catch (err) {
        console.error("Error listing panel servers:", err);
        m.reply("Terjadi kesalahan saat mengambil data server.");
    }
}
break;

case "cadmin": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return m.reply(`Masukan username & nomor (opsional)\n*contoh:* ${cmd} sanz,628XXX`)
    let nomor, usernem;
    const tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = tek;
        if (!users || !nom) return m.reply(`Masukan username & nomor (opsional)\n*contoh:* ${cmd} sanz,628XXX`)

        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat;
    }

    const onWa = await sock.onWhatsApp(nomor.split("@")[0]);
    if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di WhatsApp!");

    const username = usernem.toLowerCase();
    const email = `${username}@gmail.com`;
    const name = global.capital(args[0]);
    const password = `${username}001`;

    try {
        const res = await fetch(`${domain}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            },
            body: JSON.stringify({
                email,
                username,
                first_name: name,
                last_name: "Admin",
                root_admin: true,
                language: "en",
                password
            })
        });

        const data = await res.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

        const user = data.attributes;
        const orang = nomor;

        if (nomor !== m.chat) {
            await m.reply(`Berhasil membuat akun admin panel ✅\nData akun terkirim ke nomor ${nomor.split("@")[0]}`);
        }

        const teks = `
*Berikut detail akun admin panel 📦*

📡 Server ID: ${user.id}
👤 Username: \`${user.username}\`
🔐 Password: \`${password}\`
🗓️ Tanggal Aktivasi: ${global.tanggal(Date.now())}
*🌐* ${global.domain}

*Rules pembelian admin panel:*  
- Masa aktif 30 hari  
- Data bersifat pribadi, mohon disimpan dengan aman  
- Garansi berlaku 15 hari (1x replace)  
- Klaim garansi wajib menyertakan *bukti chat pembelian*
        `;

        await sock.sendMessage(orang, { text: teks }, { quoted: m });

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat membuat akun admin panel.");
    }
}
break;

case "deladmin": {
    if (!isOwner) return m.reply(mess.owner);
    try {
        const res = await fetch(`${domain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            }
        });
        const rows = []
        const data = await res.json();
        const users = data.data;

        const adminUsers = users.filter(u => u.attributes.root_admin === true);
        if (adminUsers.length < 1) return m.reply("Tidak ada admin panel.");

        let teks = `\n*Total admin panel :* ${adminUsers.length}\n`
        adminUsers.forEach((admin, idx) => {
            teks += `
- ID : *${admin.attributes.id}*
- Nama : *${admin.attributes.first_name}*
- Created : ${admin.attributes.created_at.split("T")[0]}
`;
rows.push({
title: `${admin.attributes.first_name} || ID:${admin.attributes.id}`,
description: `Created At: ${admin.attributes.created_at.split("T")[0]}`, 
id: `.deladmin-response ${admin.attributes.id}`
})            
        });

        await sock.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: `© Powered By ${namaOwner}`,
              rows: rows
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: `\nPilih Admin Panel Yang Ingin Dihapus\n`
}, { quoted: m })

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat mengambil data admin.");
    }
}
break;

case "deladmin-response": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text) return 
    try {
        const res = await fetch(`${domain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            }
        });

        const data = await res.json();
        const users = data.data;

        let targetAdmin = users.find(
            (e) => e.attributes.id == args[0] && e.attributes.root_admin === true
        );

        if (!targetAdmin) {
            return m.reply("Gagal menghapus akun!\nID user tidak ditemukan");
        }

        const idadmin = targetAdmin.attributes.id;
        const username = targetAdmin.attributes.username;

        const delRes = await fetch(`${domain}/api/application/users/${idadmin}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            }
        });

        if (!delRes.ok) {
            const errData = await delRes.json();
            return m.reply(`Gagal menghapus akun admin!\n${JSON.stringify(errData.errors[0], null, 2)}`);
        }

        await m.reply(`Berhasil Menghapus Admin Panel ✅\nNama User: ${global.capital(username)}`);

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat menghapus akun admin.");
    }
}
break;

case "listadmin": {
    if (!isOwner) return m.reply(mess.owner);

    try {
        const res = await fetch(`${domain}/api/application/users`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${apikey}`
            }
        });

        const data = await res.json();
        const users = data.data;

        const adminUsers = users.filter(u => u.attributes.root_admin === true);
        if (adminUsers.length < 1) return m.reply("Tidak ada admin panel.");

        let teks = `\n*Total admin panel :* ${adminUsers.length}\n`
        adminUsers.forEach((admin, idx) => {
            teks += `
- ID : *${admin.attributes.id}*
- Nama : *${admin.attributes.first_name}*
- Created : ${admin.attributes.created_at.split("T")[0]}
`;
        });

        await m.reply(teks)

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat mengambil data admin.");
    }
}
break;

case "addseller": {
    if (!isOwner) return m.reply(mess.owner);
    if (!text && !m.quoted) return m.reply(`*contoh:* ${cmd} 6283XXX`);

    const input = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    const input2 = input.split("@")[0];

    if (input2 === global.owner || global.db.settings.reseller.includes(input) || input === botNumber)
        return m.reply(`Nomor ${input2} sudah menjadi reseller!`);

    global.db.settings.reseller.push(input);
    m.reply(`Berhasil menambah reseller ✅`);
}
break;

case "listseller": {
    const list = global.db.settings.reseller;
    if (!list || list.length < 1) return m.reply("Tidak ada user reseller");

    let teks = `Daftar reseller:\n`;
    for (let i of list) {
        const num = i.split("@")[0];
        teks += `\n• ${num}\n  Tag: @${num}\n`;
    }

    sock.sendMessage(m.chat, { text: teks, mentions: list }, { quoted: m });
}
break;

case "delseller": {
    if (!isOwner) return m.reply(mess.owner);
    if (!m.quoted && !text) return m.reply(`*Contoh :* ${cmd} 6283XXX`);

    const input = m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.quoted 
            ? m.quoted.sender 
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    const input2 = input.split("@")[0];

    if (input2 === global.owner || input === botNumber)
        return m.reply(`Tidak bisa menghapus owner!`);

    const list = global.db.settings.reseller;
    if (!list.includes(input))
        return m.reply(`Nomor ${input2} bukan reseller!`);

    list.splice(list.indexOf(input), 1);
    m.reply(`Berhasil menghapus reseller ✅`);
}
break;

case "own": case "owner": {
await sock.sendContact(m.chat, [global.owner], global.namaOwner, "Developer Bot", m)
}
break

case "addowner": case "addown": {
    if (!isOwner) return m.reply(mess.owner);

    const input = m.quoted 
        ? m.quoted.sender 
        : m.mentionedJid[0] 
            ? m.mentionedJid[0] 
            : text 
                ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" 
                : null;

    if (!input) return m.reply(`*Contoh penggunaan :*\n${cmd} 6285XXX`);

    const jid = input.split("@")[0];
    const botNumber = sock.user.id.split(":")[0] + "@s.whatsapp.net";

    if (jid == global.owner || input == botNumber) 
        return m.reply(`Nomor ${jid} sudah menjadi ownerbot.`);

    if (global.db.settings.developer.includes(input)) 
        return m.reply(`Nomor ${jid} sudah menjadi ownerbot.`);

    global.db.settings.developer.push(input);
    return m.reply(`Berhasil menambah owner ✅\n- ${jid}`);
}
break;

case "delowner": case "delown": {
    if (!isOwner) return m.reply(mess.owner);

    const input = m.quoted 
        ? m.quoted.sender 
        : m.mentionedJid[0] 
            ? m.mentionedJid[0] 
            : text 
                ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" 
                : null;

    if (!input) return m.reply(`*Contoh penggunaan :*\n${cmd} 6285XXX`);

    if (input.toLowerCase() === "all") {
        global.db.settings.developer = [];
        return m.reply("Berhasil menghapus semua owner ✅");
    }

    if (!global.db.settings.developer.includes(input)) 
        return m.reply("Nomor tidak ditemukan!");

    global.db.settings.developer = global.db.settings.developer.filter(i => i !== input);
    return m.reply(`Berhasil menghapus owner ✅\n- ${input.split("@")[0]}`);
}
break;

case "listowner": case "listown": {
    const Own = global.db.settings.developer;
    if (!Own || Own.length < 1) return m.reply("Tidak ada owner tambahan.");

    let teks = "Daftar owner tambahan:\n";
    for (let i of Own) {
        const num = i.split("@")[0];
        teks += `\n- Number: ${num}\n- Tag: @${num}\n`;
    }
    return sock.sendMessage(m.chat, { text: teks, mentions: Own }, { quoted: m });
}
break;

case "resetdb": case "rstdb": {
if (!isOwner) return m.reply(mess.owner)
global.db = {}
return m.reply("Berhasil mereset database ✅")
}
break
        

          

// batas case
default:
if (
    global.db.groups[m.chat] &&
    global.db.groups[m.chat].autoai === true &&
    m.text &&
    !m.fromMe
) {

    if (m.text.startsWith(global.prefa)) return

    await new Promise(resolve => setTimeout(resolve, global.autoaiDelay || 2000))

    const jawaban = await ambilJawabanAI(m.text)
    if (!jawaban) return

    await sock.sendMessage(m.chat, { text: jawaban }, { quoted: m })
}
        
if (m.isGroup && !m.key.fromMe && m.text && !m.text.startsWith(prefix)) {

    let group = global.db.groups[m.chat];
    if (!group || !group.list || !group.list.length) return;

    let msg = m.text.toLowerCase().trim();

    let find = group.list.find(v => v.key === msg);
    if (!find) return;

    // kirim gambar kalau ada
    if (find.image && fs.existsSync(find.image)) {
        return sock.sendMessage(m.chat, {
            image: fs.readFileSync(find.image),
            caption: find.response
        }, { quoted: m });
    }

    // kalau teks saja
    return m.reply(find.response);
}

if (m.text.toLowerCase().startsWith("xx")) {
    if (!isOwner) return;

    try {
        const result = await eval(`(async () => { ${text} })()`);
        const output = typeof result !== "string" ? util.inspect(result) : result;
        return sock.sendMessage(m.chat, { text: util.format(output) }, { quoted: m });
    } catch (err) {
        return sock.sendMessage(m.chat, { text: util.format(err) }, { quoted: m });
    }
}

if (m.text.toLowerCase().startsWith("x")) {
    if (!isOwner) return;

    try {
        let result = await eval(text);
        if (typeof result !== "string") result = util.inspect(result);
        return sock.sendMessage(m.chat, { text: util.format(result) }, { quoted: m });
    } catch (err) {
        return sock.sendMessage(m.chat, { text: util.format(err) }, { quoted: m });
    }
}

if (m.text.startsWith('$')) {
    if (!isOwner) return;
    
    exec(m.text.slice(2), (err, stdout) => {
        if (err) {
            return sock.sendMessage(m.chat, { text: err.toString() }, { quoted: m });
        }
        if (stdout) {
            return sock.sendMessage(m.chat, { text: util.format(stdout) }, { quoted: m });
        }
    });
}

}

} catch (err) {
console.log(err)
await sock.sendMessage(global.owner+"@s.whatsapp.net", {text: err.toString()}, {quoted: m ? m : null })
}}

//=============================================//

process.on("uncaughtException", (err) => {
console.error("Caught exception:", err);
});


let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.blue(">> Update File:"), chalk.black.bgWhite(__filename));
    delete require.cache[file];
    require(file);
});