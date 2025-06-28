require('./settings')
const { modul } = require('./module')
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, PhoneNumber, process, moment, ms, speed, syntaxerror, util, openai } = modul
const { exec, spawn, execSync } = child_process
const { Configuration, OpenAIApi } = openai
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const delay = (ms) => new Promise(res => setTimeout(res, ms));
const acrcloud = require ('acrcloud');
const pingSt = new Date();
const voiceStyles = {
  default: 'default',
  goku: 'anime',
  naruto: 'anime',
  anime: 'anime',
  girl: 'female',
  boy: 'male',
  female: 'female',
  male: 'male',
  robot: 'ai',
  ai: 'ai',
  deep: 'deep',
  child: 'kid'
}
const fs = require('fs');
const mailPath = './database/mymails.json';

if (!fs.existsSync(mailPath)) {
  fs.writeFileSync(mailPath, '{}');
}
const acr = new acrcloud({
    host: 'identify-eu-west-1.acrcloud.com',
    access_key: 'c33c767d683f78bd17d4bd4991955d81',
    access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
});
const { uptotelegra } = require('./lib/upload.json')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader.json')
const { rentfromurus, conns } = require('./rentbot.json');
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const yts = require('yt-search')
const ytdl = require('youtubedl-core')

let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []

const testimoni = JSON.parse(fs.readFileSync('./database/testimoni.json'))

module.exports = saitama = async (saitama, m, msg, chatUpdate, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = prefa;
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
const messagesC = pes.slice(0).trim()
const content = JSON.stringify(m.message)
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "I am Urus"
const botNumber = await saitama.decodeJid(saitama.user.id)
const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const UrusTheDeveloper = m.sender == botNumber ? true : false
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isGroup = from.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]
const groupMetadata = m.isGroup ? await saitama.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = user.includes(sender)
const banUser = await saitama.fetchBlocklist()
const isBanned = banUser ? banUser.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
const isEval = body.startsWith('=>')
const userss = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))

// Database
const prem = JSON.parse(fs.readFileSync("./database/premium.json"))

// Cek database
const isPremium = prem.includes(sender)
function formatUptime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return `${days}d ${hours}h ${minutes}m ${secs}s`;
}
    
//TIME
const xtime = moment.tz('Africa/Lagos').format('HH:mm:ss')
const xdate = moment.tz('Africa/Lagos').format('DD/MM/YYYY')
const time2 = moment().tz('Africa/Lagos').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var urustimewisher = `*Heyyo👋${pushname}*`
 }
 if(time2 < "19:00:00"){
var urustimewisher = `*Heyyo👋${pushname}*`
 }
 if(time2 < "18:00:00"){
var urustimewisher = `*Heyyo👋${pushname}*`
 }
 if(time2 < "15:00:00"){
var urstimewisher = `*Heyyo👋${pushname}*`
 }
 if(time2 < "10:00:00"){
var urustimewisher = `*Heyyo👋${pushname}*`
 }
 if(time2 < "04:00:00"){
var urustimewisher = `*Heyyo👋${pushname}*`
 } 
async function loading () {
var saitama = [
"I",
" ",
"AM",
" ",
"URUS",
"Loading Complete"
]
let { key } = await saitama.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < saitamaofc; i++) {
/*await delay(10)*/
await saitama.sendMessage(from, {text: saitamaofc[i], edit: key });//PESAN LEPAS
}
}
let d = new Date(new Date + 3600000)
let locale = 'id'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const isContacts = contacts.includes(sender)

if (!saitama.public) {
if (!m.key.fromMe) return
}
    
    //Fake
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "966567393013-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=${ownernomer}:${ownernomer}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": thumb,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

const reply = (teks) => {
saitama.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : fdoc })
}
if (isCmd && isBanned) {
return
}

let list = []
for (let i of owner) {
list.push({
displayName: await saitama.getName(i),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await saitama.getName(i)}\nFN:${await saitama.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}   
//GAME
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakgambar[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete kuismath[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakasahotak[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakbendera2[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkimia[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaktekateki[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktekateki[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaklagu[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebakkalimat[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaklirik[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await reply('*Anda Telah menyerah*')
                delete tebaktebakan[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await saitama.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
    
//chat counter (console log)
if (isCmd && m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); 
}

if (isCmd && !m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); 
}

if (isCmd && !isUser) {
user.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(user, null, 2))
}

saitama.sendPresenceUpdate('unavailable', from)


async function sendsaitamaMessage(chatId, message, options = {}){
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await saitama.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

async function doReact(texxt) {
saitama.sendMessage(from, { react: { text: text, key: m.key }})
}

for (let Testimonii of testimoni){
if (budy === Testimonii){
let imagebuffy = fs.readFileSync(`./database/image/${Testimonii}.jpg`)
saitama.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
saitama.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
saitama.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}

/*try {
ppuser = await saitama.profilePictureUrl(sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}*/

//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"
if (budy.match(`admin panel`)) {
reply(`kalo mau promosi jangan di sini ya anj`)
}
//UrusTech    
switch (command) {
  case 'tiffany': {
    const owned = owner.includes('@s.whatsapp.net') ? owner : `${owner}@s.whatsapp.net`;
    const senderJid = sender.includes('@s.whatsapp.net') ? sender : `${sender}@s.whatsapp.net`;

    const text12 = `*Hello, @${senderJid.split("@")[0]}*
This is Tiffany Bot — a simple bot with a few features, and more are being added regularly. Enjoy for now!
┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉
> Base Owner : Urus
> Co-owner   : Saitama
┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉

*〔 General Commands 〕*
➵ ${prefix}menu
➵ ${prefix}public
➵ ${prefix}self
➵ ${prefix}owner

*〔 Owner Commands 〕*
➵ .addprem
➵ .delprem
➵ .payment

*〔 Other Commands 〕*
➵ ${prefix}remini
➵ ${prefix}rate
➵ ${prefix}trt

And many more commands!
If you're experiencing issues, contact:
1. Urus - https://t.me/Ma_Xie
2. Hakimi `;

    await saitama.sendMessage(m.chat, {
      text: text12,
      mentions: [senderJid, owned],
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: `TIFFANY AI`,
          body: `𝐔𝐑𝐔𝐒 𝐓𝐄𝐂𝐇 🄷🅄🄱💨🤖`,
          thumbnail: fs.readFileSync('./tiffany.jpg'),
          sourceUrl: 'https://whatsapp.com/channel/0029Vac57JjFHWqAIPZ3hj3t',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

    break;
  }
}
case 'menu': {
    const menuText = `
┌───⭓ *Tiffany AI Bot Menu*
│
│ 🔗 *Channel:* 
│ https://whatsapp.com/channel/0029Vac57JjFHWqAIPZ3hj3t
│
│ 🧩 *Bot Control*
│ rentbot, public, self, owner, payment
│ addowner, delowner, botpp, setstatus
│
│ 🧠 *AI Features*
│ chatgpt, imagine, dalle, aiimage, style
│ voiceai, toanime
│
│ 💡 *Media & Fun*
│ sticker, toimg, smeme, pin, pindownload
│ video, song, lyrics, play, stream, ytmp4
│ whatsong, fbdl, igreels, igs, ssf
│ google, news, couple, wallpaper, wallpaperdl
│
│ 📲 *Utilities*
│ apk, wanumber, tgs, fetch, tourl
│ gdrive, xnxxdl, script, repo
│ truecaller, subfinder, mail, checkmail, mymail
│ delmail, clearmail
│
│ ⚙️ *Group Tools*
│ welcome, revoke, listpc, listgc, liston
│ hidetag, tagall, tagadmin, join, leave
│ antilink, kick, promote, demote, mute, unmute, admin
│
│ 🏆 *Rating System*
│ rate, toprates, clearrateboard, trt
│
│ 👑 *Premium*
│ buypremium, premiumuser, addprem, delprem, listprem
│
│ 📸 *Image Tools*
│ remini, upscale, hd, enhance, toimage
│ img, ss, ssf, openin, closein, cancelin
│
│ 📣 *Broadcast & Tags*
│ broadcastvideo, hidetag, tagall, tagadmin
│
│ 📥 *Downloaders*
│ fbdl, ytmp4, igs, igreels, pindownload
│
│ 📚 *Miscellaneous*
│ runtime, alive, ping, linkgroup, github, ghsearch, yts
│ eval, compile-c, compile-c++, compile-py
│ enc, jpm, post, subject, weather, nsfw, nsfwmenu
│
│ 🔐 *Responses & Security*
│ addresponse, delresponse, respondlist
│ banchat, unbanchat, listbanchat
│ block, unblock, delete
└────⭓ *TiffanyAI ✨*
    `

    const buttons = [
        { buttonId: 'owner', buttonText: { displayText: '👑 Owner' }, type: 1 },
        { buttonId: 'premiumuser', buttonText: { displayText: '💎 Buy Premium' }, type: 1 },
        { buttonId: 'channel', buttonText: { displayText: '📢 Join Channel' }, type: 1 }
    ]

    const thumb = await getBuffer('https://telegra.ph/file/0d6c3f232b09ea0b9b9be.jpg') // Channel thumb

    await saitama.sendMessage(m.chat, {
        image: thumb,
        caption: menuText.trim(),
        footer: 'Tiffany AI Menu • Powered by UrusTech 💫',
        buttons,
        headerType: 4
    }, { quoted: m })
}
break;
  case 'rentbot': {
    rentfromurus(saitama, m, m.from, args);
}   
 case "owner": {
  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;Urus;;;
FN:✦𝐔𝐫𝐮𝐬✦ ( ͡° ͜ʖ ͡°)
TEL;type=CELL;type=VOICE;waid=254752146910:+254 752 146910
END:VCARD`;

  saitama.sendMessage(m.chat, {
    contacts: {
      displayName: "✦𝐔𝐫𝐮𝐬✦ ( ͡° ͜ʖ ͡°)",
      contacts: [{
        vcard
      }]
    }
  }, {
    quoted: m
  });

  break;
}
           case "payment": {
  const owned = owner.includes('@s.whatsapp.net') ? owner : `${owner}@s.whatsapp.net`;
  const senderJid = sender.includes('@s.whatsapp.net') ? sender : `${sender}@s.whatsapp.net`;

  const text12 = `*Hi @${senderJid.split("@")[0]} 👋*
You can pay via GlobalPay, PayPal, Western Union, or M-Pesa.
Please contact my owner to get the payment details of your choice.`;

  saitama.sendMessage(from, {
    text: text12,
    contextInfo: {
      mentionedJid: [senderJid, owned],
      forwardingScore: 9999,
      isForwarded: true
    }
  }, { quoted: m });

  break;
}
case 'public': {
  if (!isOwner) return m.reply('Only the owner can use this command.');

  saitama.public = true;
  m.reply('✅ *Bot is now in Public Mode*');
  break;
}
        case 'self': {
  if (!isOwner) return m.reply('Only the owner can use this command.');

  saitama.public = false;
  m.reply('🔒 *Self Mode Activated*');

  break;
}
case "jpm":
case "post": {
  if (!isOwner) return reply(mess.owner);

  if (!text || !text.includes("|")) {
    return reply(`*Incorrect usage!*\n\nUse like:\n${prefix + command} <message>|<delay_in_ms>\n\n_Reply to an image/video/document to broadcast media._`);
  }

  const [broadcastText, delayMsRaw] = text.split("|");
  const delayMs = parseInt(delayMsRaw.trim());

  if (isNaN(delayMs)) return reply("*Invalid delay!* Use milliseconds (e.g. 1000 = 1 second)");

  await reply("_⏳ Starting broadcast to all groups..._");

  const allGroups = await saitama.groupFetchAllParticipating();
  const groupIds = Object.keys(allGroups);
  const messageText = broadcastText.trim();

  let mediaPath = null;
  let messageType = null;

  if (quoted) {
    if (/image/.test(mime)) {
      mediaPath = await saitama.downloadAndSaveMediaMessage(quoted);
      messageType = "image";
    } else if (/video/.test(mime)) {
      mediaPath = await saitama.downloadAndSaveMediaMessage(quoted);
      messageType = "video";
    } else if (/document/.test(mime)) {
      mediaPath = await saitama.downloadAndSaveMediaMessage(quoted);
      messageType = "document";
    }
  }

  for (const groupId of groupIds) {
    const metadata = await saitama.groupMetadata(groupId);
    const participants = metadata.participants.map(p => p.id);

    let msg = {};

    if (mediaPath && messageType === "image") {
      const mediaUrl = await TelegraPh(mediaPath);
      msg = {
        image: { url: mediaUrl },
        caption: messageText,
        mentions: participants
      };
    } else if (mediaPath && messageType === "video") {
      const mediaUrl = await TelegraPh(mediaPath);
      msg = {
        video: { url: mediaUrl },
        caption: messageText,
        mentions: participants
      };
    } else if (mediaPath && messageType === "document") {
      const mediaUrl = await TelegraPh(mediaPath);
      msg = {
        document: { url: mediaUrl },
        fileName: "BroadcastedDoc",
        mimetype: mime,
        caption: messageText,
        mentions: participants
      };
    } else {
      msg = {
        text: messageText,
        mentions: participants
      };
    }

    await saitama.sendMessage(groupId, msg);
    await sleep(delayMs);
  }

  reply("*✅ Broadcast to all groups completed successfully.*");
  break;
}
const fs = require('fs');
const path = './rateboard.json';

case 'rate': {
  if (!text && !quoted) return reply(`Use it like:\n${prefix + command} Your profile\nor reply to a message/image.`);

  const subject = quoted ? 'that image' : text.trim();
  const rating = Math.floor(Math.random() * 100) + 1;

  // Emoji-based reaction
  let comment = '';
  if (rating >= 90) comment = '🔥 *PERFECTION!*';
  else if (rating >= 75) comment = '✅ *Looking sharp!*';
  else if (rating >= 50) comment = '🤔 *Not bad, not great.*';
  else if (rating >= 25) comment = '😬 *Kinda meh...*';
  else comment = '💀 *Yikes, we’re gonna need a redo.*';

  const result = `*Rating for:* ${subject}\n*Score:* ${rating}%\n${comment}`;

  // Log to leaderboard
  let board = {};
  if (fs.existsSync(path)) board = JSON.parse(fs.readFileSync(path));
  const user = sender;

  if (!board[user]) board[user] = [];
  board[user].push({ subject, rating, timestamp: new Date().toISOString() });
  fs.writeFileSync(path, JSON.stringify(board, null, 2));

  saitama.sendMessage(from, { text: result }, { quoted: m });
  break;
}
case 'toprates': {
  const fs = require('fs');
  const path = './rateboard.json';
  if (!fs.existsSync(path)) return reply('No rating data yet.');

  const board = JSON.parse(fs.readFileSync(path));
  const top = Object.entries(board)
    .map(([jid, rates]) => {
      const maxRate = Math.max(...rates.map(r => r.rating));
      return { jid, maxRate };
    })
    .sort((a, b) => b.maxRate - a.maxRate)
    .slice(0, 5);

  let msg = '*🏆 Top Rated Users:*\n';
  for (let i = 0; i < top.length; i++) {
    msg += `${i + 1}. @${top[i].jid.split('@')[0]} – *${top[i].maxRate}%*\n`;
  }

  saitama.sendMessage(from, { text: msg.trim(), mentions: top.map(u => u.jid) }, { quoted: m });
  break;
}
case 'myratings': {
  const fs = require('fs');
  const path = './rateboard.json';
  if (!fs.existsSync(path)) return reply('No ratings found.');

  const board = JSON.parse(fs.readFileSync(path));
  const logs = board[sender];

  if (!logs || logs.length === 0) return reply('You have no ratings yet.');

  let msg = '*📊 Your Rating History:*\n';
  const recent = logs.slice(-5); // last 5
  recent.forEach((r, i) => {
    msg += `${i + 1}. *${r.subject}* — ${r.rating}%\n`;
  });

  reply(msg.trim());
  break;
}
case 'clearrateboard': {
  const fs = require('fs');
  const path = './rateboard.json';
  const backupPath = `./backup_rateboard_${Date.now()}.json`;

  if (!isOwner) return reply('Only the owner can clear the rateboard.');

  // Confirm before deletion
  if (text.trim().toLowerCase() !== 'yes') {
    return reply(`⚠️ Are you sure you want to clear all ratings?\nSend *${prefix + command} yes* to confirm.`);
  }

  if (!fs.existsSync(path)) return reply('No rateboard file found.');

  // Backup before wiping
  fs.copyFileSync(path, backupPath);
  fs.writeFileSync(path, JSON.stringify({}, null, 2));

  reply(`✅ All ratings cleared.\nBackup created: *${backupPath}*`);
  break;
}
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': 
case 'bite': case 'yeet': case 'bully': case 'bonk': case 'wink': case 'poke': 
case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': 
case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': 
case 'cuddle': case 'highfive': case 'shinobu': case 'handhold': {
  try {
    const res = await axios.get(`https://api.waifu.pics/sfw/${command}`);
    const stickerUrl = res.data.url;

    // Detect if user replied to someone or tagged someone
    let target;
    if (m.quoted && m.quoted.sender) {
      target = m.quoted.sender;
    } else if (m.mentionedJid && m.mentionedJid.length > 0) {
      target = m.mentionedJid[0];
    }

    let message;
    if (target && target !== sender) {
      message = `@${sender.split('@')[0]} *${command}ed* @${target.split('@')[0]}`;
    } else {
      message = `@${sender.split('@')[0]} *${command}ed* alone...`;
    }

    await saitama.sendMessage(m.chat, { text: message, mentions: [sender, target].filter(Boolean) }, { quoted: m });
    await saitama.sendImageAsSticker(m.chat, stickerUrl, m, {
      packname: packname || "Saitama",
      author: author || "Bot"
    });
  } catch (err) {
    console.error(err);
    reply("❌ Couldn't get the image. Please try again.");
  }
  break;
}
   
case 'translate': case 'trt': {
  try {
    
    if (!text) return m.reply( 'Usage: .trt <language code> <text> or reply message');
    if (text && m.quoted && m.quoted.text) {
      let lang = text.slice(0, 2);
      try {
        let data = m.quoted.text;
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    } else if (text) {
      let lang = text.slice(0, 2);
      try {
        let data = text.substring(2).trim();
        let result = await translate(`${data}`, {
          to: lang
        });
        m.reply(result[0]);
      } catch {
        return m.reply(` Language code not supported.`);
      }
    }
  } catch (error) {
    console.error("Error in 'translate' command:", error);
    m.reply(` An error occurred while translating.`);
  }
}
  break
  // Example: Add this near the top of your file
const prompts = [
  'A futuristic Tokyo at night',
  'A cat piloting a robot',
  'Fantasy castle floating in the sky',
  'Cyberpunk dragon rider',
  'Beautiful galaxy landscape',
  'Astronaut surfing on Saturn rings',
  'Anime-style hero in a neon city',
  'Steampunk airship battle'
];

// Optional simple cooldown tracking
// const userCooldowns = {};

case 'imagine':
case 'dalle':
case 'aiimage': {
  if (!text) throw `*This command generates images from text prompts*\n\n*Examples:*\n◉ ${prefix + command} ${prompts[0]}\n◉ ${prefix + command} ${prompts[1]}`;

  const bannedWords = ['nude', 'nsfw', 'sex', 'hentai', 'boobs'];
  const isBlocked = bannedWords.some(word => text.toLowerCase().includes(word));
  if (isBlocked) return m.reply('*NSFW prompts are not allowed in this bot.*');

  // Cooldown logic (optional)
  // const cooldown = 10000; // 10 seconds
  // const now = Date.now();
  // if (userCooldowns[sender] && now - userCooldowns[sender] < cooldown) {
  //   return m.reply(`⏳ Please wait ${(cooldown - (now - userCooldowns[sender])) / 1000}s before using again.`);
  // }
  // userCooldowns[sender] = now;

  try {
    m.reply('*Please wait, generating image...*');

    const endpoint = `https://rest-api.akuari.my.id/ai/bing-ai2?text=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    if (!response.ok) throw '*Image generation failed.*';

    const imageBuffer = await response.buffer();
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    await saitama.sendMessage(m.chat, {
      image: imageBuffer,
      caption: `*Prompt:* ${text}`,
      buttons: [
        {
          buttonId: `${prefix + command} ${text}`,
          buttonText: { displayText: '🔁 Generate Again' },
          type: 1
        },
        {
          buttonId: `${prefix + command} ${randomPrompt}`,
          buttonText: { displayText: '🎲 Try Random Prompt' },
          type: 1
        }
      ],
      footer: 'AI Image by Tiffany Bot'
    }, { quoted: m });

  } catch (error) {
    console.error('AI Image Error:', error);
    m.reply('*Oops! Image generation failed. Try again later.*');
  }
}
break;

// At the top of your file (global or bot context)
const whenCooldowns = {}; // user cooldown tracker
const whenCooldownTime = 30 * 1000; // 30 seconds

case 'when': {
  if (!text) return reply(`Use text, Example: ${prefix + command} will I get married?`);

  const now = Date.now();
  const lastUsed = whenCooldowns[sender] || 0;

  if (now - lastUsed < whenCooldownTime) {
    const timeLeft = ((whenCooldownTime - (now - lastUsed)) / 1000).toFixed(1);
    return reply(`⏳ Please wait *${timeLeft}s* before using this command again.`);
  }

  whenCooldowns[sender] = now; // update usage time

  const whenList = [
    '5 More Days', '10 More Days', '15 More Days', '20 More Days', '25 More Days',
    '30 More Days', '35 More Days', '40 More Days', '45 More Days', '50 More Days',
    '55 More Days', '60 More Days', '65 More Days', '70 More Days', '75 More Days',
    '80 More Days', '85 More Days', '90 More Days', '100 More Days',
    '5 Months More', '10 Months More', '15 Months More', '20 Months More', '25 Months More',
    '30 Months More', '35 Months More', '40 Months More', '45 Months More', '50 Months More',
    '55 Months More', '60 Months More', '65 Months More', '70 Months More', '75 Months More',
    '80 Months More', '85 Months More', '90 Months More', '100 Months More',
    '1 More Year', '2 More Years', '3 More Years', '4 More Years', '5 More Years',
    'Tomorrow', 'The Day After Tomorrow',
    `After this command, you too ${text.trim()}`
  ];

  const answer = whenList[Math.floor(Math.random() * whenList.length)];
  const question = text.charAt(0).toUpperCase() + text.slice(1);

  saitama.sendMessage(from, {
    text: `*Question:* ${question}\n*Answer:* ${answer}`,
    mentions: [sender]
  }, { quoted: m });
}
break;
case "chatgpt": {
    const now = Date.now();
    const userId = m.sender;

    if (chatCooldowns.has(userId) && now - chatCooldowns.get(userId) < COOLDOWN_MS) {
        const waitTime = Math.ceil((COOLDOWN_MS - (now - chatCooldowns.get(userId))) / 1000);
        return m.reply(`Please wait ${waitTime} seconds before using this command again.`);
    }

    chatCooldowns.set(userId, now); // Set cooldown

    if (!text) {
        await doReact("❌");
        return m.reply(`*Provide me a query,* e.g., "Who made ChatGPT?"`);
    }

    try {
        const apiUrl = `https://chatgpt.apinepdev.workers.dev/?question=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);

        if (!res.ok) {
            await doReact("❌");
            return m.reply(`Invalid response from the API. Status code: ${res.status}`);
        }

        const data = await res.json();
        const replyText = data?.answer?.trim();

        if (!replyText) {
            await doReact("❌");
            return m.reply("No valid answer received from the API.");
        }

        await saitama.sendMessage(m.chat, {
            text: replyText,
            contextInfo: {
                externalAdReply: {
                    title: "TIFFANY AI GPT",
                    body: "Powered by apinepdev",
                    mediaType: 1,
                    thumbnail: fs.readFileSync('./tiffany.jpg'),
                    renderLargerThumbnail: true,
                    sourceUrl: "https://github.com/apinepdev"
                },
            },
        }, { quoted: m });

        await doReact("✅");
    } catch (error) {
        console.error("GPT Error:", error);
        await doReact("❌");
        return m.reply("An error occurred while processing your request.");
    }
}
break;
case "apk": {
    if (!text) return m.reply(`I need an apk name to download.`);

    const getRandomName = (ext) => `${Math.floor(Math.random() * 10000)}${ext}`;
    const randomApkName = getRandomName(".apk");
    const apkPath = `./${randomApkName}`;

    try {
        const searchResults = await search(text);
        if (!searchResults.length) return m.reply("App not found!");

        const data = await download(searchResults[0].id);
        const url = data.dllink;
        const iconUrl = data.icon;

        const info = `╭───〈 *${data.name}* 〉───◆
▯╭─────────────···▸
┴│▸
▮➣ *App Name:* ${data.name}
▮➣ *App Id:* ${data.package}
▮➣ *Last Update:* ${data.lastup}
▮➣ *App Size:* ${data.size}
▮➣ *App Version:* ${data.version}
┃✵╰──────────────
╰━━━━━━━━━━━━━━━┈⊷`;

        const iconPath = `./${getRandomName(".png")}`;
        const iconRes = await axios.get(iconUrl, { responseType: 'stream' });

        await new Promise((resolve, reject) => {
            const writer = fs.createWriteStream(iconPath);
            iconRes.data.pipe(writer);
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        await saitama.sendMessage(m.chat, {
            image: fs.readFileSync(iconPath),
            caption: info
        }, { quoted: m });

        fs.unlink(iconPath, err => {
            if (err) console.error('Failed to delete icon:', err);
        });

        const apkRes = await axios.get(url, { responseType: 'stream' });

        await new Promise((resolve, reject) => {
            const writer = fs.createWriteStream(apkPath);
            apkRes.data.pipe(writer);
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        await saitama.sendMessage(m.chat, {
            document: fs.readFileSync(apkPath),
            mimetype: 'application/vnd.android.package-archive',
            fileName: `${data.name}.apk`
        }, { quoted: m });

        fs.unlink(apkPath, err => {
            if (err) console.error('Failed to delete apk:', err);
        });

    } catch (error) {
        console.error(error);
        m.reply("*Failed to download the APK. Try another app name.*");
        if (fs.existsSync(apkPath)) fs.unlinkSync(apkPath);
    }
}
break;
const cooldowns = new Map();

case "wanumber": {
  const cooldownTime = 10 * 60 * 1000; // 10 minutes cooldown

  if (!text) return reply(`Enter a number ending with 'x'\n\nExample: ${prefix + command} 254752146xxx`);

  const userId = m.sender;
  const now = Date.now();

  if (cooldowns.has(userId)) {
    const expirationTime = cooldowns.get(userId) + cooldownTime;
    if (now < expirationTime) {
      const timeLeft = Math.ceil((expirationTime - now) / 1000);
      return reply(`Please wait ${timeLeft} more seconds before using this command again.`);
    }
  }

  cooldowns.set(userId, now);

  const inputnumber = text.split(" ")[0];

  reply(`Exploring WhatsApp accounts within the range... This might take a while.`);

  function countInstances(string, word) {
    return string.split(word).length - 1;
  }

  const number0 = inputnumber.split('x')[0];
  const number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] || '';
  const random_length = countInstances(inputnumber, 'x');

  let randomxx = 0;
  if (random_length === 1) randomxx = 10;
  else if (random_length === 2) randomxx = 100;
  else if (random_length === 3) randomxx = 1000;
  else if (random_length === 4) randomxx = 10000;

  let text66 = `*WhatsApp Numbers Directory*\n\n`;
  let nobio = `\n*Bio:* || \nIf this world were mine🌝e\n`;
  let nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`;

  for (let i = 0; i < randomxx; i++) {
    let replacement = i.toString().padStart(random_length, '0');
    let fullNumber = `${number0}${replacement}${number1}@s.whatsapp.net`;

    try {
      const anu = await saitama.onWhatsApp(fullNumber);
      if (!anu.length) {
        nowhatsapp += `${fullNumber.split("@")[0]}\n`;
        continue;
      }

      let status = '401';
      try {
        status = await saitama.fetchStatus(anu[0].jid);
      } catch {
        status = '401';
      }

      if (status == '401' || !status.status || status.status.length === 0) {
        nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`;
      } else {
        text66 += `*Number:* wa.me/${anu[0].jid.split("@")[0]}\n*Bio:* ${status.status}\n*Last update:* ${moment(status.setAt).tz('Africa/Nairobi').format('HH:mm:ss DD/MM/YYYY')}\n\n`;
      }
    } catch {
      nowhatsapp += `${fullNumber.split("@")[0]}\n`;
    }

    // Send progress update every 10 numbers
    if (i > 0 && i % 10 === 0) {
      await saitama.sendMessage(m.chat, { text: `Checked ${i} of ${randomxx} numbers...` }, { quoted: m });
    }
  }

  reply(`${text66}${nobio}${nowhatsapp}`);

  // Remove cooldown after execution
  setTimeout(() => cooldowns.delete(userId), cooldownTime);
}
break;
case 'tgs': {
  if (args[0] && /(https:\/\/t.me\/addstickers\/.+)/gi.test(args[0])) {
    try {
      const mariaresources = await Telesticker(args[0]);
      await reply(`Sending ${mariaresources.length} stickers...`);
      
      if (m.isGroup && mariaresources.length > 30) {
        await reply('Number of stickers exceeds 30, sending them in private chat...');
        for (const sticker of mariaresources) {
          await saitama.sendMessage(m.sender, { sticker: { url: sticker.url } });
        }
      } else {
        for (const sticker of mariaresources) {
          await saitama.sendMessage(m.chat, { sticker: { url: sticker.url } });
        }
      }
    } catch (error) {
      console.error(error);
      reply('Failed to fetch or send stickers. Please check the link and try again.');
    }
  } else {
    reply(`Please provide a valid Telegram sticker pack link.\nExample: ${prefix + command} https://t.me/addstickers/FriendlyDeath`);
  }
}
break;
// Outside your command handler, declare a cooldown map:
const cooldowns = new Map();

case "ai-image": {
  try {
    const cooldownTime = 30 * 1000; // 30 seconds cooldown
    const user = m.sender;

    if (cooldowns.has(user)) {
      const lastUsed = cooldowns.get(user);
      const now = Date.now();
      const diff = now - lastUsed;
      if (diff < cooldownTime) {
        const timeLeft = Math.ceil((cooldownTime - diff) / 1000);
        return reply(`Please wait ${timeLeft} second(s) before using this command again.`);
      }
    }

    if (!keyopenai) return reply('OpenAI API key is not configured.');
    if (!text) return reply(`Tiffany AI.\n\nExample:\n${prefix}${command} Wooden house on snow mountain`);

    const configuration = new Configuration({ apiKey: keyopenai });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createImage({
      prompt: text,
      n: 1,
      size: "512x512",
    });

    const imageUrl = response.data.data[0].url;
    await saitama.sendMessage(from, { image: { url: imageUrl }, caption: text }, { quoted: m });

    // Set cooldown timestamp
    cooldowns.set(user, Date.now());

  } catch (error) {
    if (error.response) {
      console.log('OpenAI API Error:', error.response.status, error.response.data);
      reply(`OpenAI API error: ${error.response.status}\n${error.response.data.error.message || ''}`);
    } else {
      console.log('Error:', error);
      reply(`An error occurred: ${error.message}`);
    }
  }
}
break;
case "sticker": {
  try {
    if (!qmsg) return m.reply(`Please reply to an image or short video with the caption ${prefix + command}`);

    if (/image/.test(mime)) {
      const media = await saitama.downloadMediaMessage(qmsg);
      const encmedia = await saitama.sendImageAsSticker(m.chat, media, m, { packname: packname, author: author });
      if (encmedia) await fs.promises.unlink(encmedia).catch(() => {});
    } else if (/video/.test(mime)) {
      if (qmsg.seconds > 11) return m.reply('Video is too long for conversion! Maximum 10 seconds allowed.');
      m.reply("Please wait...");
      const media = await saitama.downloadMediaMessage(qmsg);
      const encmedia = await saitama.sendVideoAsSticker(m.chat, media, m, { packname: packname, author: author });
      if (encmedia) await fs.promises.unlink(encmedia).catch(() => {});
    } else {
      m.reply(`Send an image or short video with the caption ${prefix + command}`);
    }
  } catch (error) {
    console.error(error);
    m.reply('Failed to create sticker. Please try again.');
  }
}
break;
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder': {
  if (!text) return reply(`Example: ${prefix + command} Urus`);
  try {
    await saitama.sendMessage(from, {
      image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=cde5404984da80591a2692b6&text=${encodeURIComponent(text)}` }
    });
  } catch (error) {
    console.error(error);
    reply('Failed to generate the image. Please try again later.');
  }
}
break;

case 'shadow':
case 'write':
case 'romantic':
case 'burnpaper':
case 'smoke':
case 'narutobanner':
case 'love':
case 'undergrass':
case 'doublelove':
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext': {
  if (!q) return reply(`Example: ${prefix + command} Urus`);

  const photooxyLinks = {
    stonetext: 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html',
    writeart: 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html',
    summertext: 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html',
    wolfmetaltext: 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html',
    nature3dtext: 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html',
    rosestext: 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html',
    naturetypography: 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html',
    quotesunder: 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html',
    shinetext: 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html',
    shadow: 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html',
    write: 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html',
    romantic: 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html',
    burnpaper: 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html',
    smoke: 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html',
    narutobanner: 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html',
    love: 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html',
    undergrass: 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html',
    doublelove: 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html',
    coffecup: 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html',
    underwaterocean: 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html',
    smokyneon: 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html',
    starstext: 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html',
    rainboweffect: 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html',
    balloontext: 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html',
    metalliceffect: 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html',
    embroiderytext: 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html',
    flamingtext: 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
  };

  const link = photooxyLinks[command];
  if (!link) return reply('Invalid command or no link available.');

  try {
    let dehe = await photooxy.photoOxy(link, q);
    await saitama.sendMessage(m.chat, { image: { url: dehe }, caption: "*done!*" }, { quoted: m });
  } catch (error) {
    console.error(error);
    reply('Failed to generate the text effect. Please try again later.');
  }
}
break;
// At the top of your file or in your global scope, add:
const thumbnailCache = {};

// Then update your case like this:
case "fbdl": {
  if (!text) return reply(`Please provide the link!\n\nExample: ${prefix}fbdl https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`);
  if (!isUrl(args[0]) || !args[0].includes('facebook.com')) return reply(`Invalid link!`);

  try {
    const bocil = require('@bochilteam/scraper');
    const data = await bocil.facebookdlv2(text);

    let txt = `「 _Facebook Downloader_ 」\n\n`;
    txt += `*Title:* ${data.title}\n`;
    txt += `*Quality:* ${data.result[0].quality}\n`;
    txt += `*Description:* ${data.description}\n`;
    txt += `*URL:* ${text}\n\n`;

    let buf;
    // Check if thumbnail buffer is cached
    if (thumbnailCache[data.thumbnail]) {
      buf = thumbnailCache[data.thumbnail];
    } else {
      buf = await getBuffer(data.thumbnail);
      thumbnailCache[data.thumbnail] = buf; // cache it
    }

    // Send thumbnail with details
    await saitama.sendMessage(m.chat, { 
      image: { url: data.thumbnail }, 
      jpegThumbnail: buf, 
      caption: txt 
    }, { quoted: m });

    // Send all video qualities
    for (const video of data.result) {
      await saitama.sendMessage(m.chat, { 
        video: { url: video.url }, 
        jpegThumbnail: buf, 
        caption: `*Quality:* ${video.quality}` 
      }, { quoted: m });
    }
  } catch (err) {
    console.error(err);
    reply('An error occurred while processing your request.');
  }
}
break;
    case 'whatsong':
case 'find':
case 'shazam': {
    if (!m.quoted) return reply('Please quote an audio or short video message to identify the song.');

    if (!/audio|video/.test(mime)) {
        return reply('Unsupported format. Quote an audio or video message.');
    }

    try {
        // Prepare temp directory and file path
        const tmpDir = './tmp';
        if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

        const ext = mime.split('/')[1];
        const fileName = `${m.sender}-${Date.now()}.${ext}`;
        const filePath = `${tmpDir}/${fileName}`;

        // Download and save media
        const media = await m.quoted.download();
        fs.writeFileSync(filePath, media);

        reply('Tiffany AI (Shazam) is analyzing the audio, please wait...');

        const res = await acr.identify(fs.readFileSync(filePath));
        const { code, msg } = res.status;

        if (code !== 0 || !res.metadata?.music?.length) {
            fs.unlinkSync(filePath);
            return reply(`Could not identify the song.\nError: ${msg || 'Unknown error'}`);
        }

        const music = res.metadata.music[0];
        const title = music.title || 'Not found';
        const artists = music.artists?.map(v => v.name).join(', ') || 'Not found';
        const album = music.album?.name || 'Not found';
        const genres = music.genres?.map(v => v.name).join(', ') || 'Not found';
        const releaseDate = music.release_date || 'Not found';

        const resultText = `
*— Song Identified —*
• *Title:* ${title}
• *Artist:* ${artists}
• *Album:* ${album}
• *Genre:* ${genres}
• *Release Date:* ${releaseDate}
        `.trim();

        fs.unlinkSync(filePath);
        reply(resultText);
    } catch (error) {
        console.error('Shazam error:', error);
        reply('An error occurred while identifying the song. Please try again.');
    }
}
break;
 const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

case 'toimg':
case 'toimage': {
    if (!quoted) return reply('Please reply to a sticker.');
    if (!/webp/.test(mime)) return reply(`Tag a *sticker* with the caption *${prefix + command}*`);

    reply('Converting sticker to image, please wait...');

    try {
        const mediaPath = await saitama.downloadAndSaveMediaMessage(quoted);
        const outputPath = getRandom('.png');

        await exec(`ffmpeg -i ${mediaPath} ${outputPath}`);
        
        const buffer = fs.readFileSync(outputPath);
        await saitama.sendMessage(m.chat, { image: buffer }, { quoted: m });

        fs.unlinkSync(mediaPath);
        fs.unlinkSync(outputPath);
    } catch (err) {
        console.error(err);
        reply('Failed to convert sticker to image.');
    }
}
break;
            case 'smeme': {
    const usage = `Reply to an image or sticker and use this format:\n${prefix + command} Top Text | Bottom Text | [optional: font=lobster&style=bold]`;
    if (!qmsg || !/image/.test(mime)) return reply(usage);
    if (!text.includes('|')) return reply(usage);

    let [top, bottom, options] = text.split('|').map(v => v.trim());
    if (!top) top = '-';
    if (!bottom) bottom = '-';

    try {
        const mediaPath = await saitama.downloadAndSaveMediaMessage(qmsg);
        const imageUrl = await TelegraPh(mediaPath);

        let memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(top)}/${encodeURIComponent(bottom)}.png?background=${imageUrl}`;
        if (options) memeUrl += `&${options}`;

        const stickerPath = await saitama.sendImageAsSticker(m.chat, memeUrl, m, {
            packname,
            author
        });

        fs.unlinkSync(mediaPath);
        fs.unlinkSync(stickerPath);
    } catch (err) {
        console.error(err);
        reply('Failed to create meme sticker.');
    }
}
break;
         case 'pinterest':
case 'pin': {
    if (!text) return reply(`${pushname}, please provide a search term.\n\nExample: ${prefix + command} aesthetic girl`);
    
    reply('🔍 Searching Pinterest images...');

    try {
        const { pinterest } = require('./lib/scraper');
        const results = await pinterest(text);

        if (!results || results.length === 0) return reply('❌ No results found.');

        // Shuffle and select unique 5 images
        const shuffled = [...new Set(results.sort(() => 0.5 - Math.random()))];
        const selected = shuffled.slice(0, 5);

        for (let i = 0; i < selected.length; i++) {
            const imageUrl = selected[i];
            const caption = `🖼️ *Pinterest Result*\n🔎 Search: *${text}*\n📸 Image ${i + 1} of ${selected.length}`;

            const buttons = [
                {
                    buttonId: `${prefix}pindownload ${imageUrl}`,
                    buttonText: { displayText: '⬇️ Download Image' },
                    type: 1,
                }
            ];

            await saitama.sendMessage(
                m.chat,
                {
                    image: { url: imageUrl },
                    caption,
                    buttons,
                    footer: 'Pinterest Image Search',
                },
                { quoted: m }
            );
        }

    } catch (err) {
        console.error(err);
        reply('❌ Failed to fetch Pinterest images.');
    }
}
break;
        case 'pindownload': {
    if (!args[0] || !isUrl(args[0])) return reply('❌ Invalid image URL!');
    await saitama.sendMessage(m.chat, { image: { url: args[0] }, caption: '✅ Here is your image!' }, { quoted: m });
}
break;
case 'welcome': {
if (/on/.test(text)) {
 if (global.welcome) {
   m.reply("Already activated");
 } else {
 global.welcome = true;
m.reply("Activated welcome message");
}
} else if (/off/.test(text)) {
if (!global.welcome) {
   m.reply("Already deactivated");
 } else {
 global.welcome = false;
m.reply("Deactivated welcome message");
}
} else m.reply(`Type ${prefix+command} on|off`);
}
break;  
case 'wallpaper': {
  if (!text) return reply('📌 Please enter a search query!\n\nExample:\n' + `${prefix + command} mountain landscape`);

  try {
    const { wallpaper } = require('./lib/scraper');
    const results = await wallpaper(text);

    if (!results || results.length === 0) return reply('❌ No wallpapers found for that query.');

    const result = results[Math.floor(Math.random() * results.length)];
    const imageUrl = result.image[2] || result.image[1] || result.image[0];

    const caption = `🖼️ *Wallpaper Found!*\n\n📌 *Title:* ${result.title}\n📂 *Category:* ${result.type}\n🔗 *Source:* ${result.source}\n🌐 *Image URL:* ${imageUrl}`;

    const buttons = [
      {
        buttonId: `${prefix}wallpaperdl ${imageUrl}`,
        buttonText: { displayText: '⬇️ Download Image' },
        type: 1,
      }
    ];

    await saitama.sendMessage(
      m.chat,
      {
        image: { url: imageUrl },
        caption,
        buttons,
        footer: 'Wallpaper Search Result',
      },
      { quoted: m }
    );
  } catch (e) {
    console.error(e);
    reply('❌ Failed to fetch wallpaper.');
  }
}
break;
case 'wallpaperdl': {
  if (!args[0] || !isUrl(args[0])) return reply('❌ Invalid or missing image URL!');
  await saitama.sendMessage(m.chat, { image: { url: args[0] }, caption: '✅ Here is your wallpaper!' }, { quoted: m });
}
break;
 case 'fetch':
case 'get': {
  if (!/^https?:\/\//.test(text)) return reply('❌ URL must start with *http://* or *https://*');

  try {
    const _url = new URL(text);
    const cleanUrl = `${_url.origin}${_url.pathname}${_url.search ? '?' + _url.searchParams.toString() : ''}`;
    const res = await fetch(cleanUrl);

    const contentType = res.headers.get('content-type') || '';
    const contentLength = parseInt(res.headers.get('content-length') || '0');

    if (contentLength > 100 * 1024 * 1024) {
      return reply(`❌ File too large to fetch. Limit is 100 MB.\nReceived: ${(contentLength / 1024 / 1024).toFixed(2)} MB`);
    }

    if (!/text|json|xml|html/.test(contentType)) {
      // Send as file or media
      return saitama.sendMedia(m.chat, cleanUrl, 'file', `📁 File fetched from URL`, m);
    }

    // Fetch and parse as text or JSON
    let content = Buffer.from(await res.arrayBuffer());

    try {
      const parsed = JSON.parse(content);
      content = JSON.stringify(parsed, null, 2);
    } catch (e) {
      content = content.toString('utf-8');
    }

    if (content.length > 65536) {
      content = content.slice(0, 65530) + '\n\n...Output truncated';
    }

    m.reply(`📥 *Fetched Response:*\n\n` + '```' + content + '```');
  } catch (err) {
    console.error(err);
    reply(`❌ Error fetching URL:\n${err.message}`);
  }
}
break;
  
 //owner commands
case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST OF PERSONAL CHATS*\n\nTotal Chat : ${anu.length} Chats\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Name :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 saitama.sendTextWithMentions(m.chat, teks, m)
             }
             break;
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let teks = `⬣ *LIST OF GROUP CHATS*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await saitama.groupMetadata(i)
                     teks += `⬡ *Name :* ${metadata.subject}\n⬡ *Owner :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Created on :* ${moment(metadata.creation * 1000).tz('Africa/Nairobi').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Members :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 saitama.sendTextWithMentions(m.chat, teks, m)
             }
            
             break;
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    saitama.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }           
             break;
case 'add': {
                if (!m.isGroup) throw group
                if (!isBotAdmins) throw botAdmin
                if (!isAdmins) throw admin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await saitama.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
        }
        break;
          case 'revoke':
case 'newlink':
case 'reset': {
  if (!m.isGroup) return reply(new Error('❌ This command only works in groups.'));
  if (!isAdmins) return reply(new Error('❌ Only group admins can use this command.'));
  if (!isBotAdmins) return reply(new Error('❌ I need admin rights to revoke the link.'));

  await saitama.groupRevokeInvite(m.chat);
  await saitama.sendText(m.chat, '✅ Group invite link has been *revoked*!', m);

  const newCode = await saitama.groupInviteCode(m.chat);
  const newLink = `https://chat.whatsapp.com/${newCode}`;
  const groupMeta = await saitama.groupMetadata(m.chat);

  await saitama.sendText(m.sender, `🔗 *New Group Link for "${groupMeta.subject}":*\n${newLink}`, m, { detectLink: true });
  await saitama.sendText(m.chat, `📨 *New group link sent to your inbox!*`, m);
}
break;
const fs = require('fs');
const fetch = require('node-fetch');
const moment = require('moment-timezone');

// ✅ Define Owner Number Globally
global.owner = ['254799355427];
global.link = `https://wa.me/${global.owner[0]}`;

// Command handlers follow here...
case 'buypremium':
case 'premiumuser': {
  const teks = `Hi ${pushname} 👋\n\n✨ Want to upgrade to *Premium*?\n💬 Just tap the button below to *chat with the owner* and get started!\n\n🛍️ *Price:* 2K / Week`;

  const ownerNumber = global.owner[0]; // Ensure global.owner = ['2547xxxxxxx'] in your config

  await saitama.sendMessage(m.chat, {
    text: teks,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        title: 'BUY PREMIUM ACCESS',
        body: 'Upgrade now and unlock premium commands!',
        thumbnailUrl: 'https://files.catbox.moe/h5cwfe.jpeg', // Or use your own hosted image
        sourceUrl: `https://wa.me/${ownerNumber}`, // Click to chat
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, {
    quoted: m
  });

  // Optional: Add interactive button to contact directly
  await saitama.sendMessage(m.chat, {
    text: '👇 Tap the button below to contact the owner.',
    buttons: [
      {
        buttonId: `.owner`,
        buttonText: { displayText: '📩 Contact Owner' },
        type: 1
      }
    ],
    headerType: 1
  }, { quoted: m });
}
break;
case 'remini':
case 'upscale':
case 'enhance':
case 'hd': {
    if (!quoted) return reply(`⚠️ Please reply to an image.`);
    if (!/image/.test(mime)) return reply(`⚠️ Tag an image with caption *${prefix + command}*`);

    reply('🔧 Enhancing your image...');

    const { remini } = require('./lib/remini');
    try {
        const media = await quoted.download();
        const output = await remini(media, "enhance");

        await saitama.sendMessage(m.chat, {
            image: output,
            caption: "✨ Enhanced by Tiffany AI"
        }, { quoted: m });

    } catch (err) {
        console.error('Remini Error:', err);
        reply(`❌ An error occurred while enhancing the image.\n\n${err.message || err}`);
    }
    break;
}

case 'toanime': {
    if (!quoted) return reply(`⚠️ Please reply to an image.`);
    if (!/image/.test(mime)) return reply(`⚠️ Tag an image with caption *${prefix + command}*`);

    reply('🧬 Converting image to anime...');

    try {
        const data = await quoted.download();
        const image = await uploadImage(data);

        const lolhuman = `https://api.lolhuman.xyz/api/imagetoanime?apikey=cde5404984da80591a2692b6&img=${image}`;
        const caliph = `https://api.caliph.biz.id/api/animeai?apikey=caliphkey&img=${image}`;

        try {
            await saitama.sendMedia(m.chat, lolhuman, 'anime.jpg', '🧪 Generated by Tiffany AI', m);
        } catch (err1) {
            console.warn('Fallback to Caliph:', err1.message);
            try {
                await saitama.sendMedia(m.chat, caliph, 'anime.jpg', '🧪 Generated by Tiffany AI', m);
            } catch (err2) {
                throw new Error(`All anime generation services failed.\n\nLolhuman: ${err1.message}\nCaliph: ${err2.message}`);
            }
        }
    } catch (e) {
        console.error('ToAnime Error:', e);
        reply(`❌ Error:\n${e.message || e}`);
    }
    break;
}
// Define this once in your main file or a config file
const cooldowns = new Map();

const isCooldown = (id, duration = 10 * 1000) => {
  if (cooldowns.has(id)) {
    const remaining = cooldowns.get(id) - Date.now();
    if (remaining > 0) return remaining;
  }
  cooldowns.set(id, Date.now() + duration);
  setTimeout(() => cooldowns.delete(id), duration);
  return false;
};

case 'tiktok':
case 'tt':
case 'tiktoknowm': {
  if (!text) return reply('❗ Please provide a TikTok link.');

  const waitTime = isCooldown(m.sender);
  if (waitTime) return reply(`⏳ Please wait ${Math.ceil(waitTime / 1000)}s before using this again.`);

  reply('⏳ Downloading TikTok video...');

  const lolApi = `https://api.lolhuman.xyz/api/tiktok2?apikey=GataDios&url=${encodeURIComponent(text)}`;
  const caliphApi = `https://api.caliph.biz.id/api/tiktokdl?url=${encodeURIComponent(text)}&apikey=caliphkey`;

  let videoUrl;

  try {
    const { status, result, message } = await fetchJson(lolApi);
    if (status === 200 && message === 'success') {
      videoUrl = result;
    } else {
      throw new Error('Lolhuman failed, trying fallback...');
    }
  } catch {
    try {
      const { status, result } = await fetchJson(caliphApi);
      if (status && result?.nowm) {
        videoUrl = result.nowm;
      } else {
        throw new Error('Fallback API failed');
      }
    } catch (e) {
      console.error('TikTok API error:', e);
      return reply('❌ Both APIs failed. Try another link.');
    }
  }

  try {
    const { data } = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    await saitama.sendMessage(m.chat, {
      video: Buffer.from(data),
      caption: '✅ Downloaded by *Tiffany AI*',
      mimetype: 'video/mp4'
    }, { quoted: m });
  } catch (err) {
    console.error('Send video error:', err);
    reply('❌ Failed to send video.');
  }

  break;
}
case 'tiktokaudio': {
  if (!text) return reply('❗ Please provide a TikTok link.');

  reply('🎧 Fetching audio from TikTok...');

  try {
    const url = `https://api.lolhuman.xyz/api/tiktokmusic?apikey=GataDios&url=${encodeURIComponent(text)}`;
    const { result } = await fetchJson(url);

    if (!result || !result.link) throw new Error('No audio found');

    await saitama.sendMessage(m.chat, {
      audio: { url: result.link },
      mimetype: 'audio/mpeg',
      fileName: 'tiktok_audio.mp3'
    }, { quoted: m });

  } catch (e) {
    console.error('Audio error:', e);
    reply('❌ Could not fetch TikTok audio.');
  }

  break;
}

case 'addprem':{
                if (!isOwner) return reply('Owner command')
                if (args.length < 2)
                    return reply(`Usage:\n*#addprem* @tag tag\n*#addprem* tag time\n\nExample: #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    reply("Successfully added toPremium")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    reply("Success Via Number")
                }
}                
            break;
            case 'delprem':{
                if (!isOwner) return reply('Owner command')
                if (args.length < 1) return reply(`Usage :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    reply("Success Delete")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    reply("Success Via Number")
                }
}                
            break
            case 'listprem': {
    if (!isOwner) return reply('Owner command');
    let data = require("./database/premium.json");
    let ptxt = `*------「 LIST PREMIUM 」------*\n\n`;

    for (let premiumData of data) {
        ptxt += `Name : ${premiumData.id}\n`;
        ptxt += `Expired : ${premiumData.expired} Second\n\n`;
    }

    saitama.sendMessage(m.chat, { text: ptxt }, { quoted: m });
}
break;


case 'true':
case 'truecaller': {
  try {
    if (!text) return reply('📞 *Please provide a phone number.*');

    const installationId = 'a1i0g--k3toNiVP-9swCenahQhhokTiqfXRFw2LossLOsZLDh3P-fLD0b75S8iF7';
    const apiUrl = `https://sid-bhai.vercel.app/api/truecaller?phone=${encodeURIComponent(text)}&id=${installationId}`;

    const { data } = await axios.get(apiUrl);
    const { name = 'Not Found', alternateName, addresses = [], email = 'Not Found', countryDetails } = data;

    let info = `╭––『 *Phone Details* 』\n`;
    info += `┆ ✦ *Name:* ${name}\n`;
    if (alternateName) info += `┆ ✦ *Alt Name:* ${alternateName}\n`;

    if (addresses.length > 0) {
      const a = addresses[0];
      info += `┆ ✦ *City:* ${a.city || 'N/A'}\n`;
      info += `┆ ✦ *Street:* ${a.street || 'N/A'}\n`;
      info += `┆ ✦ *Pin:* ${a.zipCode || 'N/A'}\n`;
      info += `┆ ✦ *TimeZone:* ${a.timeZone || 'N/A'}\n`;
      info += `┆ ✦ *Country:* ${a.countryCode || 'N/A'}\n`;
    }

    info += `┆ ✦ *Email:* ${email}\n`;
    info += `╰–––––––––––––––༓\n`;

    if (countryDetails) {
      info += `╭––『 *Country Details* 』\n`;
      info += `┆ ✦ *Name:* ${countryDetails.name}\n`;
      info += `┆ ✦ *Native:* ${countryDetails.native}\n`;
      info += `┆ ✦ *Phone Code:* +${countryDetails.phone?.[0]}\n`;
      info += `┆ ✦ *Continent:* ${countryDetails.continent}\n`;
      info += `┆ ✦ *Capital:* ${countryDetails.capital}\n`;
      info += `┆ ✦ *Currency:* ${countryDetails.currency?.join(', ') || 'N/A'}\n`;
      info += `┆ ✦ *Languages:* ${countryDetails.languages?.join(', ') || 'N/A'}\n`;
      info += `┆ ✦ *Flag:* ${countryDetails.flag}\n`;
      info += `╰–––––––––––––––༓\n`;
    }

    info += `✨ _Info powered by Tiffany AI_`;

    await saitama.sendMessage(m.chat, { text: info }, { quoted: m });
  } catch (error) {
    console.error('Truecaller Error:', error);
    reply(`❌ *Unable to fetch Truecaller data.*\nMake sure the number is valid and try again.`);
  }
  break;
}
case 'subfinder': {
  if (!isOwner) return reply('🚫 Owner-only command.');
  if (!q) return reply('🌐 Please provide a domain.\nExample: *.subfinder example.com*');
  await loading(); // If you have a loading() function defined

  try {
    let feta = await fetchJson(`https://api.caliph.biz.id/api/scan/subdomain?host=${q}&apikey=fZ69bJCk`);

    if (!feta || !feta.status || !Array.isArray(feta.result)) {
      return reply('❌ Failed to fetch subdomains. Please check the domain or try again later.');
    }

    if (feta.result.length === 0) {
      return reply('⚠️ No subdomains found for this domain.');
    }

    let list = `🔍 *Subdomains of ${q}*\n\n`;
    for (let L of feta.result) {
      list += `• 🌐 *Domain:* ${L.domain}\n`;
      list += `• 🧭 *DNS:* ${L.dns}\n`;
      list += `• 🛡️ *Cloudflare Proxy:* ${L.cf_proxy ? '✅ Enabled' : '❌ Disabled'}\n\n`;
    }

    saitama.sendMessage(m.chat, { text: list.trim() }, { quoted: m });

  } catch (err) {
    console.error('Subfinder Error:', err);
    reply('🚫 An error occurred while trying to fetch subdomains.');
  }

  break;
}
 case 'tempmail':
case 'mail': {
  const maxEmails = 10;
  const count = Math.min(parseInt(args[0]) || 1, maxEmails);
  const apiUrl = `https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=${count}`;

  try {
    const response = await axios.get(apiUrl, { timeout: 10000 });
    const emails = response.data;

    if (emails && emails.length > 0) {
      const tempMails = emails.map((mail, i) => `📮 ${i + 1}. ${mail}`).join('\n');
      reply(`*Temporary Email(s) Generated:*\n\n${tempMails}\n\nUse *checkmail <email>* to view inbox.`);

      // Store emails
      let db = require('./database/mymails.json');
      const userId = m.sender;

      if (!db[userId]) db[userId] = [];
      db[userId].push(...emails);

      fs.writeFileSync('./database/mymails.json', JSON.stringify(db, null, 2));
    } else {
      reply(`❌ Failed to generate ${count} temporary email address(es).`);
    }
  } catch (error) {
    console.error('Tempmail Error:', error.message || error);
    reply('🚫 Failed to fetch temporary email addresses.');
  }
  break;
}
case 'checkmail': {
  if (!text) return reply('📥 Provide an email to check inbox.\n\nExample: *checkmail abc@1secmail.com*');

  const [login, domain] = text.split('@');
  if (!login || !domain) return reply('❌ Invalid email format.');

  const messagesUrl = `https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`;

  try {
    const inbox = await axios.get(messagesUrl, { timeout: 10000 });

    if (inbox.data && inbox.data.length > 0) {
      const { id } = inbox.data[0];
      const readUrl = `https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${id}`;

      const message = await axios.get(readUrl, { timeout: 10000 });
      const { from, subject = 'No Subject', date, textBody } = message.data;

      const replyText = `📬 *Email in:* ${text}\n\n*From:* ${from}\n*Subject:* ${subject}\n*Date:* ${date}\n\n📝 *Message:*\n${textBody || 'No content'}`;
      reply(replyText);
    } else {
      reply(`📭 No messages found in ${text}.`);
    }
  } catch (error) {
    console.error('Checkmail Error:', error.message || error);
    reply(`🚫 Failed to check email for ${text}.`);
  }
  break;
}

case 'mymail': {
  let db = require('./database/mymails.json');
  const userId = m.sender;

  if (!db[userId] || db[userId].length === 0) {
    return reply('📭 You have not generated any temporary email addresses yet.\nUse *.tempmail* to create one.');
  }

  let list = `📧 *Your Temporary Emails:*\n\n`;
  db[userId].forEach((mail, i) => {
    list += `${i + 1}. ${mail}\n`;
  });

  reply(list.trim());
  break;
}
case 'delmail': {
  let db = require('./database/mymails.json');
  const userId = m.sender;

  if (!db[userId] || db[userId].length === 0) {
    return reply('📭 You have no saved temporary emails.');
  }

  const index = parseInt(args[0]);
  if (isNaN(index) || index < 1 || index > db[userId].length) {
    return reply(`⚠️ Invalid index.\nUse *.mymail* to see the list and then run *.delmail <number>*`);
  }

  const removed = db[userId].splice(index - 1, 1);
  fs.writeFileSync('./database/mymails.json', JSON.stringify(db, null, 2));
  reply(`🗑️ Deleted:\n${removed[0]}`);
  break;
}

case 'clearmail': {
  let db = require('./database/mymails.json');
  const userId = m.sender;

  if (!db[userId] || db[userId].length === 0) {
    return reply('📭 You have no saved temporary emails to clear.');
  }

  delete db[userId];
  fs.writeFileSync('./database/mymails.json', JSON.stringify(db, null, 2));
  reply(`✅ All your saved temp emails have been cleared.`);
  break;
}
case 'voiceai': {
    if (!isOwner) return reply(NotOwner)
    if (!q) return reply('What should I say? Use: .voiceai message | style')

    let [query, rawStyle] = q.split('|').map(x => x.trim());
    let styleKey = rawStyle ? rawStyle.toLowerCase() : 'default'
    let style = voiceStyles[styleKey] || 'default'

    try {
        const apiUrl = `https://api.yanzbotz.my.id/api/ai/gptvoice?query=${encodeURIComponent(query)}&style=${encodeURIComponent(style)}`
        const audioBuffer = await getBuffer(apiUrl)

        await saitama.sendMessage(from, {
            audio: audioBuffer,
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: m })

    } catch (error) {
        console.error('VoiceAI Error:', error)
        reply('❌ Failed to generate voice. Please try again or check the style.')
    }
}
break;
case 'tourl': {
    if (!quoted) return reply('Please reply to an image, video, or file.');

    m.reply('🔄 Uploading, please wait...');

    try {
        const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader');
        const media = await saitama.downloadAndSaveMediaMessage(quoted);
        let link;

        if (/image/.test(mime)) {
            try {
                link = await TelegraPh(media);
            } catch (e) {
                console.error('Telegraph upload failed:', e);
                link = await UploadFileUgu(media); // fallback
            }
        } else {
            link = await UploadFileUgu(media);
        }

        m.reply(`✅ *Uploaded successfully:*\n\n${link}`);
        await fs.unlinkSync(media); // cleanup temp file
    } catch (err) {
        console.error('tourl error:', err);
        reply('❌ Failed to upload media.');
    }
}
break;       
           // add respond
    case 'addresponse': {
    if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature.');
    if (!args[0]) return reply(`Use *${prefix}addresponse* Hello|Hi back`);

    let [trigger, response] = arg.split('|');
    if (!trigger || !response) return reply('Please use `Trigger|Response` format.');

    if (checkCommands(trigger, commandsDB)) return reply(`Already exists in response DB.`);
    
    addCommands(trigger.trim(), response.trim(), sender, commandsDB);
    reply(`✅ Successfully added response:\n\n*Ask:* ${trigger}\n*Reply:* ${response}`);
}
break;

case 'delresponse': {
    if (!isOwner && !mek.key.fromMe) return reply('Only owner can use this feature.');
    let trigger = args[0];
    if (!trigger) return reply(`Use *${prefix}delresponse* hello`);

    if (!checkCommands(trigger, commandsDB)) return reply(`❌ Not found in database.`);
    
    deleteCommands(trigger, commandsDB);
    reply(`✅ Successfully deleted response: *${trigger}*`);
}
break;

case 'respondlist': {
    if (!isPrem) return reply('❌ Premium command only.');

    if (!commandsDB || commandsDB.length === 0) return reply('📭 No responses saved yet.');

    let teks = `\`\`\`「 RESPONSE LIST 」\`\`\`\n\n`;
    for (let cmd of commandsDB) {
        teks += `❏ *Ask:* ${cmd.pesan}\n`;
        teks += `❏ *Reply:* ${cmd.balasan}\n`;
        teks += `❏ *Creator:* ${cmd.creator}\n\n`;
    }

    reply(teks.trim());
}
break;
        // banchat fixed by urus
case 'banchat': {
    if (!m.isGroup) return reply('❌ This command can only be used in groups.');
    if (!itsMe && !isOwner && !isAdmins)
        return mentions(`*Only @${ownerN} can use this command!*`, [`${ownerN}@s.whatsapp.net`], true);

    if (bancht.includes(from)) return reply(`✅ This group is already banned from using the bot.`);

    bancht.push(from);
    fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht));
    reply('✅ Bot has been banned from interacting in this group.');
}
break;

case 'unbanchat': {
    if (!itsMe && !isOwner) return reply('❌ Only the owner can use this command.');
    if (!bancht.includes(from)) return reply('⚠️ This group is not banned.');

    bancht.splice(bancht.indexOf(from), 1);
    fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht));
    reply('✅ Bot has been unbanned in this group.');
}
break;

case 'listbanchat':
case 'listbc': {
    if (!isOwner) return reply('❌ Only the owner can use this command.');
    if (bancht.length === 0) return reply('*📭 No banned groups found.*');

    let teks = `*📛 List of Banned Groups*\n_Total: ${bancht.length}_\n\n`;

    for (let id of bancht) {
        try {
            const metadata = await saitama.groupMetadata(id);
            teks += `📍 *Group Name:* ${metadata.subject}\n🆔 *ID:* ${id}\n\n`;
        } catch {
            teks += `🆔 *ID:* ${id} (unable to fetch metadata)\n\n`;
        }
    }

    reply(teks.trim());
}
break;
case 'img': {
    if (!text) return reply(`📸 *Usage:* ${prefix + command} Snoop Dogg`);

    try {
        const apiUrl = `https://api.akuari.my.id/search/googleimage?query=${encodeURIComponent(text)}`;
        const response = await fetchJson(apiUrl);

        if (!response.result || response.result.length === 0) {
            return reply('❌ No images found for your query.');
        }

        const imageList = response.result;
        const selectedImage = imageList[Math.floor(Math.random() * imageList.length)];

        const caption = `*─────「 🌐 GOOGLE IMAGE 」─────*\n` +
                        `🔍 *Query:* ${text}\n` +
                        `📎 *Media URL:* ${selectedImage}`;

        await saitama.sendMessage(
            m.chat,
            { image: { url: selectedImage }, caption },
            { quoted: m }
        );
    } catch (err) {
        console.error('Error fetching image:', err);
        reply('⚠️ An error occurred while fetching the image. Please try again later.');
    }
}
break;
let groupTimers = {}; // { groupId: { timer: TimeoutObject, type: 'openin' | 'closein' } }
case 'openin': 
case 'closein': {
    if (!m.isGroup) return reply('❌ Group-only command.');
    if (!isAdmins) return reply('🚫 You must be an *admin*.');
    if (!isBotAdmins) return reply('🤖 I need *admin rights*.');

    const time = parseInt(args[0]);
    const unit = (args[1] || '').toLowerCase();
    const validUnits = { second: 1000, minute: 60000, hour: 3600000, day: 86400000 };

    if (isNaN(time) || !validUnits[unit]) {
        return reply(`❗ *Invalid format*\nUse: \`${prefix + command} 10 minute\``);
    }

    if (groupTimers[from]) {
        clearTimeout(groupTimers[from].timer);
        delete groupTimers[from];
    }

    const ms = time * validUnits[unit];
    const isOpen = command === 'openin';
    const mode = isOpen ? 'not_announcement' : 'announcement';
    const actionText = isOpen ? 'opened' : 'closed';
    const description = isOpen 
        ? `✅ Group has been opened!\nMembers can now send messages.` 
        : `🔒 Group has been closed!\nOnly *admins* can send messages.`;

    reply(`⏳ Group will be *${actionText}* in ${time} ${unit}(s)...\nSend *.cancelin* to cancel.`);

    let timer = setTimeout(async () => {
        await saitama.groupSettingUpdate(from, mode);
        reply(description);
        delete groupTimers[from];
    }, ms);

    groupTimers[from] = {
        timer,
        type: command
    };
}
break;
case 'cancelin': {
    if (!m.isGroup) return reply('❌ Group-only command.');
    if (!isAdmins) return reply('🛑 Admin-only command.');

    if (!groupTimers[from]) return reply('⏳ No active scheduled open/close found for this group.');

    clearTimeout(groupTimers[from].timer);
    const cancelled = groupTimers[from].type;
    delete groupTimers[from];

    reply(`✅ *Cancelled* the scheduled ${cancelled} for this group.`);
}
break;
                            case 'broadcastig':
case 'bcimage':
case 'broadcastvideo':
case 'broadcastvid': {
    if (!isOwner) throw NotOwner;
    if (!quoted) return reply(`❗Please *reply* to an image or video with a caption.`);

    let getGroups = await saitama.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).map(entry => entry[1]);
    let xeoncast = groups.map(v => v.id);

    let mime = quoted.mimetype || '';
    let isImage = /image/.test(mime);
    let isVideo = /video/.test(mime);
    if (!isImage && !isVideo) return reply('⚠️ Media must be *image* or *video*!');

    let media = await quoted.download();
    let txt = `${ownername}'s Broadcast 📢\n\n*Message:* ${q || 'No caption provided.'}`;
    
    reply(`📡 Broadcasting to ${xeoncast.length} group(s)...`);

    for (let groupId of xeoncast) {
        try {
            await saitama.sendMessage(
                groupId,
                isImage
                    ? { image: media, caption: txt }
                    : { video: media, caption: txt },
                { quoted: m }
            );
            await delay(1500); // ~1.5 sec delay per group to avoid rate-limits
        } catch (err) {
            console.error(`❌ Failed to send to ${groupId}:`, err.message);
        }
    }

    reply(`✅ Broadcast sent to ${xeoncast.length} group(s).`);
}
break;
case 'tovv':
case 'toviewonce': {
    if (!quoted) return reply('❗Please reply to an image or video.');
    const mime = quoted.mimetype || '';
    const isImage = /image/.test(mime);
    const isVideo = /video/.test(mime);

    if (!isImage && !isVideo) return reply('⚠️ Media must be image or video.');

    try {
        const mediaPath = await saitama.downloadAndSaveMediaMessage(quoted);

        let messageData = {
            caption: 'Here you go!',
            viewOnce: true
        };

        if (isImage) {
            messageData.image = { url: mediaPath };
            messageData.fileLength = 999;
        } else {
            messageData.video = { url: mediaPath };
            messageData.fileLength = 99999999;
        }

        await saitama.sendMessage(m.chat, messageData, { quoted: m });
    } catch (err) {
        console.error('tovv error:', err);
        reply('❌ Failed to convert to view-once.');
    }
}
break;
case 'fromvv': {
    if (!quoted) return reply('❗Please reply to a *view-once* image or video.');
    const mime = quoted.mimetype || '';
    const isImage = /image/.test(mime);
    const isVideo = /video/.test(mime);

    if (!isImage && !isVideo) return reply('⚠️ Media must be image or video.');

    try {
        const mediaPath = await saitama.downloadAndSaveMediaMessage(quoted);

        let messageData = {
            caption: '🌀 View-once removed!',
        };

        if (isImage) {
            messageData.image = { url: mediaPath };
        } else {
            messageData.video = { url: mediaPath };
        }

        await saitama.sendMessage(m.chat, messageData, { quoted: m });
    } catch (err) {
        console.error('fromvv error:', err);
        reply('❌ Failed to remove view-once.');
    }
}
break;
case 'instastalk':
case 'igs': {
    if (!args[0]) return reply(`🔍 *Enter an Instagram username!*\n\n📌 Example: ${prefix + command} uruscoolio`);

    const username = args[0].replace(/^@/, '');
    const igs = require('api-dylux');

    await reply('🔄 Fetching Instagram profile info...');

    try {
        let res = await igs.igStalk(username);
        let caption = `
╭─❒ *Instagram Profile Info*
│📛 *Name:* ${res.name}
│🔖 *Username:* ${res.username}
│🔵 *Verified:* ${res.verified ? '✅ Yes' : '❌ No'}
│🔐 *Private:* ${res.private ? '🔒 Yes' : '🌍 No'}
│📷 *Posts:* ${res.postsH}
│👥 *Followers:* ${res.followersH}
│👤 *Following:* ${res.followingH}
│📝 *Bio:* ${res.description || '—'}
│🔗 *Link:* https://instagram.com/${res.username.replace(/^@/, '')}
╰────────────`;

        await saitama.sendMessage(m.chat, {
            image: { url: res.profilePic },
            caption
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        reply('❌ Failed to fetch Instagram profile. Please ensure the username is correct and the account is public.');
    }
}
break;
case 'snapshotfull':
case 'ssf': {
  try {
    if (!text) return reply("❌ *Please provide a valid URL!*");

    const match = text.match(/\bhttps?:\/\/\S+/gi);
    if (!match) return reply("🔗 *Invalid or missing URL!*");

    let snapshotUrl = `https://image.thum.io/get/fullpage/${encodeURIComponent(match[0])}`;
    let media = await getBuffer(snapshotUrl);
    return await saitama.sendMessage(m.chat, { image: media }, { quoted: m });
  } catch (err) {
    console.error(err);
    return reply("❌ *Error while fetching full snapshot. Try again later!*");
  }
}
break;

case 'snapshot':
case 'ss': {
  try {
    if (!text) return reply("❌ *Please provide a valid URL!*");

    const match = text.match(/\bhttps?:\/\/\S+/gi);
    if (!match) return reply("🔗 *Invalid or missing URL!*");

    let apiKey = 'c04d3a'; // Consider moving to a config/env variable
    let snapshotUrl = `https://api.screenshotmachine.com/?key=${apiKey}&url=${encodeURIComponent(match[0])}&dimension=720x720`;
    let media = await getBuffer(snapshotUrl);
    return await saitama.sendMessage(m.chat, { image: media }, { quoted: m });
  } catch (err) {
    console.error(err);
    return reply("❌ *Error while fetching snapshot. Try again later!*");
  }
}
break;
 case "hidetag": {
    if (!m.isGroup) return reply('🚫 Group-only command');
    if (!isBotAdmins) return reply('⚠️ I need to be a group admin!');
    if (!isAdmins) return reply('👮 Only admins can use this command!');

    const mentionsList = participants.map(a => a.id);

    if (quoted && quoted.mtype) {
        let mediaMsg = await quoted.download();
        let type = quoted.mtype;

        let payload = { mentions: mentionsList };

        if (/image/.test(type)) {
            payload.image = mediaMsg;
            if (q) payload.caption = q;
        } else if (/video/.test(type)) {
            payload.video = mediaMsg;
            if (q) payload.caption = q;
        } else if (/audio/.test(type)) {
            payload.audio = mediaMsg;
            payload.mimetype = 'audio/mp4';
            payload.ptt = true;
        } else if (/sticker/.test(type)) {
            payload.sticker = mediaMsg;
        } else {
            return reply('❌ Unsupported media type');
        }

        await saitama.sendMessage(m.chat, payload, { quoted: m });
    } else {
        // fallback to text
        await saitama.sendMessage(m.chat, { 
            text: q ? q : '☞︎︎︎ YOU ARE TAGGED ☜︎︎︎', 
            mentions: mentionsList 
        }, { quoted: m });
    }
}
break;

case "tagall": {
    if (!m.isGroup) return reply('🚫 Group-only command');
    if (!isBotAdmins) return reply('⚠️ I need to be a group admin!');
    if (!isAdmins) return reply('👮 Only admins can use this command!');

    const mentionsList = participants.map(a => a.id);

    if (quoted && quoted.mtype) {
        let mediaMsg = await quoted.download();
        let type = quoted.mtype;

        let payload = { mentions: mentionsList };

        if (/image/.test(type)) {
            payload.image = mediaMsg;
            if (q) payload.caption = q;
        } else if (/video/.test(type)) {
            payload.video = mediaMsg;
            if (q) payload.caption = q;
        } else if (/audio/.test(type)) {
            payload.audio = mediaMsg;
            payload.mimetype = 'audio/mp4';
            payload.ptt = true;
        } else if (/sticker/.test(type)) {
            payload.sticker = mediaMsg;
        } else {
            return reply('❌ Unsupported media type');
        }

        await saitama.sendMessage(m.chat, payload, { quoted: m });
    } else {
        let teks = `📢 *Group Mention*\n`;
        if (q) teks += `📝 *Message:* ${q}\n\n`;

        for (let mem of participants) {
            teks += `👤 @${mem.id.split('@')[0]}\n`;
        }

        await saitama.sendMessage(m.chat, { 
            text: teks, 
            mentions: mentionsList 
        }, { quoted: m });
    }
}
break;
case 'tagadmin': {
    if (!m.isGroup) return reply('🚫 Group-only command');
    if (!isBotAdmins) return reply('⚠️ I need to be a group admin!');
    if (!isAdmins) return reply('👮 Only admins can use this command!');

    // Get list of admin WhatsApp IDs
    let adminJids = participants.filter(p => p.admin).map(p => p.id);

    if (quoted && quoted.mtype) {
        let mediaMsg = await quoted.download();
        let type = quoted.mtype;

        let payload = { mentions: adminJids };

        if (/image/.test(type)) {
            payload.image = mediaMsg;
            if (q) payload.caption = q;
        } else if (/video/.test(type)) {
            payload.video = mediaMsg;
            if (q) payload.caption = q;
        } else if (/audio/.test(type)) {
            payload.audio = mediaMsg;
            payload.mimetype = 'audio/mp4';
            payload.ptt = true;
        } else if (/sticker/.test(type)) {
            payload.sticker = mediaMsg;
        } else {
            return reply('❌ Unsupported media type');
        }

        await saitama.sendMessage(m.chat, payload, { quoted: m });
    } else {
        let teks = `👮 *Group Admins Tag*\n`;
        if (q) teks += `📝 *Message:* ${q}\n\n`;

        for (let adm of adminJids) {
            teks += `👑 @${adm.split('@')[0]}\n`;
        }

        await saitama.sendMessage(m.chat, {
            text: teks,
            mentions: adminJids
        }, { quoted: m });
    }
}
break;

          case "block": { 
    if (!isOwner) throw NotOwner;
    
    let targets = [];

    // From mentions
    if (m.mentionedJid.length > 0) {
        targets.push(...m.mentionedJid);
    }

    // From quoted
    if (m.quoted) {
        targets.push(m.quoted.sender);
    }

    // From raw text input (comma-separated numbers)
    if (text) {
        let rawNums = text.match(/\d+/g);
        if (rawNums) {
            for (let num of rawNums) {
                targets.push(num.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
            }
        }
    }

    if (targets.length === 0) return reply("❗ Tag, reply to, or enter the numbers of users to block.");

    for (let user of [...new Set(targets)]) {
        await saitama.updateBlockStatus(user, 'block');
    }

    reply(`✅ Blocked:\n${targets.map(u => `• @${u.split('@')[0]}`).join('\n')}`, null, { mentions: targets });
}
break;
case "unblock": { 
    if (!isOwner) throw NotOwner;

    let targets = [];

    if (m.mentionedJid.length > 0) {
        targets.push(...m.mentionedJid);
    }

    if (m.quoted) {
        targets.push(m.quoted.sender);
    }

    if (text) {
        let rawNums = text.match(/\d+/g);
        if (rawNums) {
            for (let num of rawNums) {
                targets.push(num.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
            }
        }
    }

    if (targets.length === 0) return reply("❗ Tag, reply to, or enter the numbers of users to unblock.");

    for (let user of [...new Set(targets)]) {
        await saitama.updateBlockStatus(user, 'unblock');
    }

    reply(`✅ Unblocked:\n${targets.map(u => `• @${u.split('@')[0]}`).join('\n')}`, null, { mentions: targets });
}
break;

          case 'join': {
    if (!isOwner) throw NotOwner;
    if (!text) return reply("Provide a WhatsApp group invite link.");

    // Extract invite code from link
    const linkMatch = text.match(/(chat\.whatsapp\.com\/|join\/)([A-Za-z0-9]{20,24})/i);
    if (!linkMatch) return reply("❌ Invalid group invite link.");

    const inviteCode = linkMatch[2];

    try {
        let res = await saitama.groupAcceptInvite(inviteCode);
        if (!text.includes('--silent')) {
            reply(`✅ Successfully joined group:\n${res}`);
        }
    } catch (err) {
        console.error(err);
        reply(`❌ Failed to join group. Maybe the link is invalid or expired.`);
    }
}
break;
case 'leave': {
    if (!isOwner) return reply(NotOwner);

    let targetGroup = m.isGroup ? m.chat : text.trim();
    if (!targetGroup) return reply('❌ Provide a group ID or use this in a group.');

    try {
        // Send a goodbye message before leaving
        await saitama.sendMessage(targetGroup, { text: '👋 Tiffany AI is leaving this group chat.' });

        // Leave the group
        await saitama.groupLeave(targetGroup);

        if (!m.isGroup) reply(`✅ Tiffany AI left the group: ${targetGroup}`);
    } catch (e) {
        console.error(e);
        reply(`❌ Failed to leave the group. Make sure the ID is correct.`);
    }
}
break;
   case 'igvideo':
case 'igreels': {
    if (!args[0]) return reply(`📌 Example:\n${prefix + command} https://www.instagram.com/reel/xyz123`);

    try {
        const res = await axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=cde5404984da80591a2692b6&url=${args[0]}`);
        
        if (!res.data || !res.data.result) return reply('❌ Failed to fetch the video.');

        await saitama.sendMessage(
            from,
            {
                video: { url: res.data.result },
                mimetype: 'video/mp4',
                caption: '🎬 By Tiffany'
            },
            { quoted: m }
        );
    } catch (error) {
        console.error(error);
        reply('⚠️ Error while fetching Instagram video. Check the link or try again.');
    }
}
break;
case 'google': {
    saitama.sendMessage(from, { react: { text: "🔎", key: m.key } });

    if (!q) return reply(`📌 Example:\n${prefix + command} Who is Ma_Xie`);

    try {
        const googleIt = require('google-it');
        const results = await googleIt({ query: q });

        if (!results || results.length === 0) return reply("❌ No results found.");

        let textResult = `🔍 *Google Search Results for:* ${q}\n\n`;

        for (let i = 0; i < Math.min(5, results.length); i++) {
            const g = results[i];
            textResult += `📌 *${g.title}*\n`;
            textResult += `📄 ${g.snippet}\n`;
            textResult += `🔗 ${g.link}\n`;
            textResult += `────────────────────\n\n`;
        }

        reply(textResult.trim());
    } catch (err) {
        console.error(err);
        reply("⚠️ An error occurred while performing the search.");
    }
}
break;
case 'news': {
  try {
    const query = text || 'latest';
    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=5&apikey=9cb9e5bc5cb10b746372d9c8588d51ee`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data.articles || data.articles.length === 0) return reply("❌ No news found.");

    for (let article of data.articles) {
      const caption = `📰 *${article.title}*\n` +
                      `📍 *Source:* ${article.source.name}\n` +
                      `🕐 *Published:* ${new Date(article.publishedAt).toLocaleString()}\n\n` +
                      `📝 ${article.description || 'No description.'}\n\n` +
                      `🔗 *Link:* ${article.url}`;

      await saitama.sendMessage(m.chat, {
        image: { url: article.image || 'https://via.placeholder.com/600x400.png?text=No+Image' },
        caption,
        footer: "Powered by Tiffany AI",
        buttons: [
          {
            buttonId: article.url,
            buttonText: { displayText: "🌐 Visit Article" },
            type: 1
          }
        ],
        headerType: 4
      }, { quoted: m });
    }

  } catch (err) {
    console.error(err);
    reply('⚠️ Failed to fetch news. Try again later.');
  }
}
break;
case "couple": {
  if (!m.isGroup) return reply('👥 Group only command');

  if (participants.length < 2) return reply('Need at least 2 participants');

  let member = participants.map(u => u.id);
  let orang = member[Math.floor(Math.random() * member.length)];
  let jodoh;

  // Ensure unique pair
  do {
    jodoh = member[Math.floor(Math.random() * member.length)];
  } while (orang === jodoh && member.length > 1);

  let textCouple = `💘 *Match Made in Heaven!*\n\n@${orang.split("@")[0]} ❤️ @${jodoh.split("@")[0]}\n\nCieee 👀💖`;

  await saitama.sendMessage(m.chat, {
    text: textCouple,
    contextInfo: {
      mentionedJid: [orang, jodoh],
      forwardingScore: 999999,
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        containsAutoReply: true,
        title: `💡 TIFFANY-AI`,
        body: `Random Couple Generator 💘`,
        previewType: "PHOTO",
        thumbnail: fs.readFileSync(`./chucky.jpg`), // fallback image
        sourceUrl: `https://whatsapp.com/channel/0029Vac57JjFHWqAIPZ3hj3t`
      }
    }
  }, { quoted: m });
}
break;
            
          case "subject":
case "changesubject": {
  if (!m.isGroup) return reply('❗ This command only works in groups.');
  if (!isBotAdmins) return reply('🛠️ I need to be an admin to do that.');
  if (!isAdmins) return reply('👑 Only group admins can change the subject.');
  if (!text) return reply('✏️ Please provide a new group name.\n\n*Example:* .subject Coding Legends');

  try {
    await saitama.groupUpdateSubject(m.chat, text);
    m.reply(`✅ Group subject successfully changed to:\n*${text}*`);
  } catch (e) {
    console.error(e);
    reply('❌ Failed to change group subject. Make sure I have the required permissions.');
  }
}
break;
 
case 'nsfw': {
    if (!m.isGroup) return reply('🚫 This feature is only for group chats.');
    if (!isOwner && !isAdmins) return reply('👑 Only group admins can use this feature.');
    if (!args[0]) return reply(`ℹ️ Usage: *${prefix}nsfw 1* to enable, *${prefix}nsfw 0* to disable.`);

    const setting = Number(args[0]);

    if (setting === 1) {
        if (isNsfw) return reply('✅ NSFW is already *enabled* in this group.');
        nsfw.push(from);
        fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw, null, 2));
        reply('🔞 NSFW feature has been *enabled*.');
        saitama.sendMessage(from, { text: `You're now free to use *xnxxsearch* 😏` }, { quoted: m });
    } 
    else if (setting === 0) {
        if (!isNsfw) return reply('❌ NSFW is already *disabled*.');
        const index = nsfw.indexOf(from);
        nsfw.splice(index, 1);
        fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw, null, 2));
        reply('🛑 NSFW feature has been *disabled*.');
    } 
    else {
        reply(`❓ Invalid option. Use:\n*${prefix}nsfw 1* (enable)\n*${prefix}nsfw 0* (disable)`);
    }
}
break;

case 'runtime':
case 'alive': {
    const uptime = os.uptime();
    const formatUptime = (seconds) => {
        const pad = (s) => (s < 10 ? '0' + s : s);
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    };

    let botInfo = `🤖 *Tiffany-AI is Alive!*\n\n`
    botInfo += `⏱ *Uptime:* ${formatUptime(uptime)}\n`;
    botInfo += `👑 *Owner:* ${ownername}\n`;
    botInfo += `📦 *Version:* v1.0.0\n`;
    botInfo += `📡 *Status:* Online & Running`;

    await saitama.sendMessage(m.chat, {
        image: fs.readFileSync('./database/media/alive.jpg'),
        caption: botInfo,
        contextInfo: {
            externalAdReply: {
                title: `TIFFANY IS ONLINE`,
                body: `Urus Tech Bot Engine`,
                thumbnailUrl: ``,
                sourceUrl: `https://t.me/Ma_Xie`,
                showAdAttribution: false,
                mediaType: 1,
                renderLargerThumbnail: true,
            },
        },
    }, { quoted: m });
}
break;
case 'ping': {
    await doReact("🕘");
    const startTime = new Date();
    const pingMsg = await saitama.sendMessage(m.chat, { text: '*Measuring response speed...*' });

    const latency = new Date() - startTime;

    // Uptime
    const formatUptime = (seconds) => {
        const pad = (s) => (s < 10 ? '0' + s : s);
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    };

    const uptime = os.uptime();

    // Speed bar visualization
    let speedBar = '⚡';
    if (latency < 100) speedBar = '🚀🚀🚀';
    else if (latency < 300) speedBar = '🚀🚀';
    else if (latency < 500) speedBar = '🚀';
    else speedBar = '🐢';

    const response = `*🏓 Ping Result*\n\n📶 *Speed:* ${latency} ms ${speedBar}\n⏱ *Uptime:* ${formatUptime(uptime)}\n🧠 *Bot:* Tiffany-AI`;

    await saitama.relayMessage(m.chat, {
        protocolMessage: {
            key: pingMsg.key,
            type: 14,
            editedMessage: {
                conversation: response
            }
        }
    }, {});

    await doReact("📍");
}
break;
          case "linkgroup": case "link": { 
                 if (!m.isGroup) return reply('Group Command') 
                 if (!isBotAdmins) return reply('Bot Admin Command') 
                 let response = await saitama.groupInviteCode(m.chat); 
                 saitama.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup link for  ${groupMetadata.subject}`, m, { detectLink: true }); 
             } 
 break;

if (body === prefix) {
  await saitama.sendMessage(m.chat, {
    react: { text: "✨", key: m.key }
  });

  return await saitama.sendMessage(m.chat, {
    image: fs.readFileSync('./assets/botbanner.jpg'), // <-- your image path
    caption: `👋 Hello *${pushname}*,\n\nYou used my prefix *${prefix}*.\n\n📜 Tap the button below to see my full command list.`,
    buttons: [
      { buttonId: `${prefix}help`, buttonText: { displayText: "📘 Show Commands" }, type: 1 }
    ],
    headerType: 4
  }, { quoted: m });
}
case 'ghstalk':
case 'githubstalk':
case 'github': {
    saitama.sendMessage(from, { react: { text: "🔍", key: m.key }});

    if (!q) return reply(`Give me a GitHub username like *${prefix}github Ma-Xie*`);

    try {
        const gitdata = await githubstalk.githubstalk(q); // assumes you have a module named githubstalk with this method

        const caption = `*ㅤㅤㅤ|ㅤㅤㅤGitHub Infoㅤㅤㅤ|*\n\n` +
        `👤 *ID:* ${gitdata.id}\n` +
        `🧑‍💻 *Name:* ${gitdata.nickname || '-'}\n` +
        `🔧 *Username:* ${gitdata.username}\n` +
        `📝 *Bio:* ${gitdata.bio || '-'}\n` +
        `🏢 *Company:* ${gitdata.company || '-'}\n` +
        `📍 *Location:* ${gitdata.location || '-'}\n` +
        `📧 *Email:* ${gitdata.email || '-'}\n` +
        `📦 *Public Repos:* ${gitdata.public_repo}\n` +
        `🧪 *Public Gists:* ${gitdata.public_gists}\n` +
        `👥 *Followers:* ${gitdata.followers}\n` +
        `👤 *Following:* ${gitdata.following}\n` +
        `🔗 *Profile:* https://github.com/${gitdata.username}`;

        await saitama.sendMessage(m.chat, {
            image: { url: gitdata.profile_pic },
            caption: caption
        }, { quoted: m });
    } catch (e) {
        console.error(e);
        reply(`❌ Failed to fetch GitHub profile. Make sure the username is valid.`);
    }
}
break;
case 'ytsearch':
case 'yts': {
    if (!text) return reply('Provide a search term!\nE.g: Plutoski by Future');

    const { videos } = await yts(text);
    if (!videos || videos.length === 0) return reply(`No videos found for: *${text}*`);

    let result = `🔎 *YouTube Search Result*\n📌 Query: ${text}\n\n`;
    videos.slice(0, 10).forEach((v, i) => {
        result += `🎞️ *${i + 1}. ${v.title}*\n📺 Channel: ${v.author.name}\n🔗 Link: ${v.url}\n\n`;
    });

    reply(result);
}
break;

case 'play':
case 'stream': {
    if (!text) return reply(`Provide a search term!\nE.g: ${prefix}play Plutoski by Future.`);

    try {
        const { videos } = await yts(text);
        if (!videos || videos.length === 0) return reply(`No results found for *${text}*`);

        const url = videos[0].url;
        const api = `https://api.davidcyriltech.my.id/download/ytmp3?url=${url}`;
        const res = await fetch(api);
        const json = await res.json();

        if (!json.success || json.status !== 200) return reply("❌ Couldn't fetch audio.");

        const { title, download_url } = json.result;

        reply(`
╭═════════•∞•══╮
│⿻ *TIFFANY'S MUSIC HQ*
│🎵 Title: ${title}
│🙋‍♂️ Requested by: ${m.pushName}
│🤖 URUS TECH HUB
╰══•∞•═════════╯`);

        const buffer = await (await fetch(download_url)).buffer();
        const sizeMB = buffer.byteLength / (1024 * 1024);

        if (sizeMB <= 200) {
            await saitama.sendMessage(from, {
                document: buffer,
                mimetype: "audio/mpeg",
                fileName: `${title}.mp3`
            }, { quoted: m });
        } else {
            reply("❗ Audio file is too large to send.");
        }
    } catch (e) {
        reply(`❌ Error: ${e.message}`);
    }
}
break;

case 'ytmp4':
case 'ytvideo':
case 'ytv': {
    if (!args[0]) return reply(`Send a YouTube URL.\nExample: *${prefix}ytmp4 https://youtu.be/videoId*`);

    const url = args[0];
    if (!url.startsWith("http")) return reply("❌ Invalid URL.");

    try {
        const api = `https://api.davidcyriltech.my.id/download/ytmp4?url=${url}`;
        const res = await fetch(api);
        const json = await res.json();

        if (!json.success || json.status !== 200) return reply("❌ Couldn't fetch video data.");

        const { title, download_url, quality } = json.result;

        reply(`
╭═════════•∞•══╮
│⿻ *TIFFANY'S VIDEO HQ*
│🎞️ Title: ${title}
│📽️ Quality: ${quality}
│🙋‍♂️ Requested by: ${m.pushName}
│🤖 URUS TECH HUB
╰══•∞•═════════╯`);

        const buffer = await (await fetch(download_url)).buffer();
        const sizeMB = buffer.byteLength / (1024 * 1024);

        if (sizeMB <= 1024) {
            await saitama.sendMessage(from, {
                video: buffer,
                caption: title
            }, { quoted: m });
        } else {
            reply("❗ Video file is too large to send.");
        }
    } catch (e) {
        reply(`❌ Error: ${e.message}`);
    }
}
break;
            case 'style':
case 'styletext': {
    if (!text) return reply('✍️ Please provide some text!\n\nExample:\n*' + prefix + 'style Hello World!*');

    try {
        const { styletext } = require('./lib/scraper');
        const styles = await styletext(text);

        if (!styles || styles.length === 0) return reply("❌ Couldn't style your text. Try something else!");

        let styledMsg = `🎨 *Stylized Text Variations*\n📝 Input: ${text}\n\n`;
        for (let style of styles) {
            styledMsg += `✨ *${style.name}*: ${style.result}\n\n`;
        }

        reply(styledMsg.trim());
    } catch (e) {
        console.error(e);
        reply('❌ Error generating styles. Please try again later.');
    }
}
break;

  case 'video': {
    if (!text) {
        return reply(`❗ Provide a YouTube URL or search term!\n\n📌 Example: *${prefix}video Alan Walker Play*`);
    }

    try {
        // Search YouTube for video info
        const { videos } = await yts(text);
        if (!videos || videos.length === 0) {
            return reply(`❌ No videos found for: *${text}*`);
        }

        // Get first video details
        const ytVideo = videos[0];
        const urlYt = ytVideo.url;

        // Fetch video download data
        const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp4?url=${urlYt}`;
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.status !== 200 || !data.success) {
            return reply("⚠️ Failed to fetch video. Try again later.");
        }

        const { title, thumbnail, download_url, quality } = data.result;

        // Notify user
        reply(`
╭════◇◇◇════╮
│ 🎥 *TIFFANY'S VIDEO HQ*
│ ⿻ *Title:* ${title}
│ ⿻ *Quality:* ${quality}
│ ⿻ *Requested by:* ${m.pushName}
│ ⿻ *𝐔𝐑𝐔𝐒 𝐓𝐄𝐂𝐇 🄷🅄🄱💨🤖*
╰════◇◇◇════╯
        `.trim());

        // Download the video
        const videoBuffer = await (await fetch(download_url)).buffer();
        const fileSizeMB = videoBuffer.byteLength / (1024 * 1024);

        if (fileSizeMB <= 1024) {
            await saitama.sendMessage(
                from,
                {
                    video: videoBuffer,
                    caption: `${title}`,
                },
                { quoted: m }
            );
        } else {
            reply("⚠️ Video is too large to send via WhatsApp (limit is 1024MB).");
        }
    } catch (err) {
        console.error(err);
        reply("❌ An error occurred. Please try again later.");
    }
}
break;
          case 'lyrics': {
    try {
        if (!text) return reply("🎵 Please provide a song name!\n\n📌 Example: *lyrics Someone Like You*");

        // Add emoji reaction
        saitama.sendMessage(from, { react: { text: "🔍", key: m.key } });

        // Search the song
        const searches = await saitama.songs.search(text);
        if (!searches || searches.length === 0) {
            return reply(`❌ No results found for: *${text}*`);
        }

        const song = searches[0];
        const lyrics = await song.lyrics();

        // Construct caption with extra details
        let caption = `🎧 *Lyrics Found!*\n\n`;
        caption += `🎵 *Title:* ${song.name || 'N/A'}\n`;
        caption += `👤 *Artist:* ${song.artist?.name || 'N/A'}\n`;
        if (song.album) caption += `💽 *Album:* ${song.album?.name || 'N/A'}\n`;
        if (song.release_date) caption += `📅 *Released:* ${song.release_date}\n`;
        if (song.url) caption += `🔗 *Link:* ${song.url}\n`;
        caption += `\n📝 *Lyrics:*\n${lyrics || 'No lyrics found.'}`;

        await saitama.sendMessage(from, { text: caption }, { quoted: m });

        // Optional: Send artist bio
        const artistId = song.artist?.id;
        if (artistId) {
            const artist = await saitama.artists.get(artistId);
            if (artist?.bio) {
                await saitama.sendMessage(from, {
                    text: `🎤 *About ${artist.name}:*\n\n${artist.bio}`
                }, { quoted: m });
            }
        }

    } catch (error) {
        console.error("LYRICS CMD ERROR:", error);
        reply(`❌ Couldn't find lyrics for *${text}*. Try another song.`);
    }
    break;
}
          case 'yta':
case 'song': {
    try {
        if (!text) {
            reply('❌ Please provide a YouTube link or search query!');
            await doReact("❌");
            return;
        }

        await reply('⏳ Fetching your song...');
        await doReact("🔎");

        const isUrl = ytdl.validateURL(text);
        let urlYt = text;

        // If it's not a URL, use yts to search
        if (!isUrl) {
            const { videos } = await yts(text);
            if (!videos || videos.length === 0) {
                reply(`❌ No matching results found for: *${text}*`);
                await doReact("❌");
                return;
            }
            urlYt = videos[0].url;
        }

        // Use API to fetch MP3
        const apiUrl = `https://api.davidcyriltech.my.id/download/ytmp3?url=${urlYt}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status !== 200 || !data.success) {
            reply('❌ Failed to fetch audio. Please try again later.');
            await doReact("❌");
            return;
        }

        const { title, download_url, thumbnail } = data.result;

        const audioBuffer = await (await fetch(download_url)).buffer();
        const fileSizeMB = (audioBuffer.length / (1024 * 1024)).toFixed(2);

        // Send thumbnail & details
        await saitama.sendMessage(m.chat, {
            image: { url: thumbnail },
            caption: `
╭══🎶 *TIFFANY'S MUSIC HQ* 🎶══╮
│ 🎧 *Title:* ${title}
│ 💾 *Size:* ${fileSizeMB} MB
│ 🧠 *Requested by:* ${m.pushName}
╰════════════════════════╯
            `.trim()
        }, { quoted: m });

        // Send audio
        await saitama.sendMessage(m.chat, {
            document: audioBuffer,
            mimetype: 'audio/mpeg',
            fileName: `${title}.mp3`
        }, { quoted: m });

        await doReact("✅");
    } catch (error) {
        console.error('YTA Error:', error);
        reply('⚠️ Unexpected error occurred. Please try again.');
        await doReact("❌");
    }
    break;
}
        
              case "script":
case "repo": {
  try {
    const thumb = fs.readFileSync("./script.jpg"); // make sure the file exists
    const caption = `
╭─❒ *SCRIPT DETAILS*
│◦ 👤 Owner: Urus
│◦ 👨‍💻 Co-Owner: Leo Hakimi
│◦ 🤖 *𝐔𝐑𝐔𝐒 𝐓𝐄𝐂𝐇 🄷🅄🄱💨*
├─────────────
│🔗 *GitHub:* 
│➛ https://github.com/M-axie/Tiffany-AI
│📢 *Channel:* 
│➛ https://whatsapp.com/channel/0029Vac57JjFHWqAIPZ3hj3t
╰────────────────────❒
    `.trim();

    await saitama.sendMessage(m.chat, {
      text: caption,
      contextInfo: {
        externalAdReply: {
          title: "✨ TIFFANY-AI • WhatsApp Bot",
          body: "Open source at your fingertips.",
          thumbnail: thumb,
          sourceUrl: "https://github.com/M-axie/Tiffany-AI",
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true,
        }
      }
    }, { quoted: m });

  } catch (error) {
    console.error("Error in /script command:", error);
    reply("⚠️ Failed to load script info. Please try again later.");
  }
  break;
}
case "enc": {
  try {
    const JavaScriptObfuscator = require('javascript-obfuscator');

    // Get text from quote or argument
    const codeToEncrypt = m.quoted?.text || text || '';
    if (!codeToEncrypt) return reply("⚠️ Quote or provide JavaScript code to encrypt.");

    const obfuscationResult = JavaScriptObfuscator.obfuscate(codeToEncrypt, {
      compact: false,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1,
      numbersToExpressions: true,
      simplify: true,
      stringArrayShuffle: true,
      splitStrings: true,
      stringArrayThreshold: 1
    });

    const encryptedCode = obfuscationResult.getObfuscatedCode();
    console.log("Code successfully obfuscated.");

    // Send as code block
    reply("🔐 *Obfuscated JavaScript Code:*\n\n```js\n" + encryptedCode + "\n```");

  } catch (err) {
    console.error("Obfuscation error:", err);
    reply("❌ Failed to encrypt. Ensure the code is valid JavaScript.");
  }
  break;
}
case "compile-c": {
  try {
    const code = m.quoted?.text || text || '';
    if (!code) return reply("⚠️ Quote or provide valid *C* code to compile.");

    const result = await c.runSource(code);

    let output = '';
    if (result.stdout) output += `✅ *Output:*\n\`\`\`\n${result.stdout}\n\`\`\`\n`;
    if (result.stderr) output += `⚠️ *Error:*\n\`\`\`\n${result.stderr}\n\`\`\``;

    reply(output.trim() || "No output.");
  } catch (err) {
    console.error("C compile error:", err);
    reply("❌ Compilation failed. Ensure the code is valid.");
  }
  break;
}

case "compile-c++": {
  try {
    const code = m.quoted?.text || text || '';
    if (!code) return reply("⚠️ Quote or provide valid *C++* code to compile.");

    const result = await cpp.runSource(code);

    let output = '';
    if (result.stdout) output += `✅ *Output:*\n\`\`\`\n${result.stdout}\n\`\`\`\n`;
    if (result.stderr) output += `⚠️ *Error:*\n\`\`\`\n${result.stderr}\n\`\`\``;

    reply(output.trim() || "No output.");
  } catch (err) {
    console.error("C++ compile error:", err);
    reply("❌ Compilation failed. Ensure the code is valid.");
  }
  break;
}
case "eval": {
  if (!isOwner) throw NotOwner;
  if (!text) throw '⚠️ Provide a valid JavaScript expression to evaluate.';

  try {
    let evaled = await eval(text); // or budy.slice(2) if using => .eval <code>
    if (typeof evaled !== "string") {
      evaled = require("util").inspect(evaled);
    }
    reply("🧠 *Evaluated Result:*\n```js\n" + evaled + "\n```");
  } catch (err) {
    reply("❌ *Error:*\n```js\n" + String(err) + "\n```");
  }
  break;
}
case "compile-py": {
  try {
    const code = m.quoted?.text || text || '';
    if (!code) throw "⚠️ Quote or provide Python code to compile.";

    const result = await python.runSource(code);

    let output = '';
    if (result.stdout) output += `✅ *Output:*\n\`\`\`\n${result.stdout}\n\`\`\`\n`;
    if (result.stderr) output += `⚠️ *Error:*\n\`\`\`\n${result.stderr}\n\`\`\``;

    reply(output.trim() || "No output.");
  } catch (err) {
    console.error("Python compile error:", err);
    reply("❌ Compilation failed. Ensure the code is valid Python.");
  }
  break;
}

//Heroku Settings

          break;
case "getvar": 
 if (!isOwner) throw NotOwner;  
     const heroku = new Heroku({  
         token: herokuapi, // Replace 'heroku' with your actual Heroku token 
     });  
     let baseUR = "/apps/" + appname;  
     let h9 = await heroku.get(baseUR + '/config-vars');  
     let stoy = '*Tiffany Variables*\n\n';  
     for ( vrt in h9) { // Added 'const' to declare 'vr' 
         stoy += vrt + '=' + h9[vrt] + '\n\n'; // Fixed variable name 'str' to 'sto' 
     }  
     reply(stoy); 

     break; 
 case "setvar": 
 if (!isOwner) throw NotOwner;  
 if(!text.split('=')[1]) return reply('Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE')  
 const herok = new Heroku({  
            token: herokuapi,  
          });  
          let baseURI = "/apps/" + appname;  
 await herok.patch(baseURI + "/config-vars", {  
            body: {  
                    [text.split('=')[0]]: text.split('=')[1],  
            },  
 });  
          await reply(`✅ The variable ${text.split('=')[0]} = ${text.split('=')[1]} has been set Successfuly.\nWait 20s for changes to effect!`);  



 break;

//Goup Commands 

          case "admin": {
  if (!m.isGroup) return reply("🛑 Group-only command.");
  if (!isBotAdmins) return reply("🤖 I need to be admin first.");
  if (!isOwner) throw NotOwner;

  await saitama.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  reply("✅ You've been promoted to admin!");
}
break;
case "kick":
case "remove": {
  if (!m.isGroup) return reply("🛑 Group-only command.");
  if (!isBotAdmins) return reply("🤖 I need admin rights.");
  if (!isAdmins) return reply("🛑 Admin-only command.");

  let users = m.mentionedJid.length
    ? m.mentionedJid
    : m.quoted
    ? [m.quoted.sender]
    : text
    ? [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"]
    : [];

  if (!users.length) return reply("⚠️ Tag or mention a user to remove.");
  if (users.includes(saitama.decodeJid(saitama.user.id)))
    return reply("❌ I can't remove myself.");
  if (users.includes(Owner)) return reply("🚫 I can't remove my owner.");

  await saitama.groupParticipantsUpdate(m.chat, users, 'remove');
  reply("✅ User has been removed.");
}
break;
case "mute": {
  if (!m.isGroup) return reply("🛑 Group-only command.");
  if (!isBotAdmins) return reply("🤖 I need admin rights.");
  if (!isAdmins) return reply("🛑 Admin-only command.");

  await saitama.groupSettingUpdate(m.chat, 'announcement');
  reply("🔒 Group has been muted (admins only).");
}
break;
case "unmute": {
  if (!m.isGroup) return reply("🛑 Group-only command.");
  if (!isBotAdmins) return reply("🤖 I need admin rights.");
  if (!isAdmins) return reply("🛑 Admin-only command.");

  await saitama.groupSettingUpdate(m.chat, 'not_announcement');
  reply("🔓 Group has been unmuted (everyone can chat).");
}
break;
case "promote": {
  if (!m.isGroup) return reply("🛑 Group-only command.");
  if (!isBotAdmins) return reply("🤖 I need admin rights.");
  if (!isAdmins) return reply("🛑 Admin-only command.");

  if (!m.quoted && !m.mentionedJid.length)
    throw "⚠️ Tag or reply to someone to promote.";

  let users = m.mentionedJid[0]
    ? m.mentionedJid
    : m.quoted
    ? [m.quoted.sender]
    : [text.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];

  await saitama.groupParticipantsUpdate(m.chat, users, 'promote');
  reply("👑 User has been promoted.");
}
break;
case "demote": {
  if (!m.isGroup) return reply("🛑 Group-only command.");
  if (!isBotAdmins) return reply("🤖 I need admin rights.");
  if (!isAdmins) return reply("🛑 Admin-only command.");

  if (!m.quoted && !m.mentionedJid.length)
    throw "⚠️ Tag or reply to someone to demote.";

  let users = m.mentionedJid[0]
    ? m.mentionedJid
    : m.quoted
    ? [m.quoted.sender]
    : [text.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];

  await saitama.groupParticipantsUpdate(m.chat, users, 'demote');
  reply("🎗️ User has been demoted.");
}
break;


//Anime and Manga

case 'anime': {
  if (!m.isGroup) return reply('Use this command in a group');
  if (!text) return reply(`Please provide a search term!\n\n*Example:* ${prefix}anime naruto`);

  saitama.sendMessage(from, { react: { text: "🍁", key: m.key }});
  const malScraper = require('mal-scraper');

  reply('Please wait...');
  const anime = await malScraper.getInfoFromName(text).catch(() => null);

  if (!anime) return reply('Could not find your search');

  let animetxt = `
*📺 Title:* ${anime.title}
*📦 Type:* ${anime.type}
*🗓 Premiered:* ${anime.premiered}
*🎞 Episodes:* ${anime.episodes}
*📊 Status:* ${anime.status}
*🎭 Genres:* ${anime.genres}
*🏢 Studio:* ${anime.studios}
*⭐ Score:* ${anime.score}
*🔞 Rating:* ${anime.rating}
*🥇 Rank:* ${anime.ranked}
*🔥 Popularity:* ${anime.popularity}
🎥 *Trailer:* ${anime.trailer}
🌐 *URL:* ${anime.url}

📝 *Synopsis:* ${anime.synopsis}
`;

  await saitama.sendMessage(m.chat, {
    image: { url: anime.picture },
    caption: animetxt.trim()
  }, { quoted: m });
}
break;

case 'manga': {
  if (!m.isGroup) return reply('Use this command in a group');
  if (!text) return reply(`Please provide a search term!\n\n*Example:* ${prefix}manga naruto`);

  saitama.sendMessage(from, { react: { text: "🍁", key: m.key }});
  reply('Please wait...');

  const { Manga } = require('@shineiichijo/marika');
  const mangaClient = new Manga();
  const search = await mangaClient.searchManga(text);

  const data = search.data[0];
  if (!data) return reply('Could not find your search');

  let mang = `*📚 Title:* ${data.title}
*📊 Status:* ${data.status}
*📖 Volumes:* ${data.volumes}
*📘 Chapters:* ${data.chapters}
*🎭 Genres:* ${data.genres.map(g => g.name).join(', ')}
*📅 Published:* ${data.published.from}
*⭐ Score:* ${data.scored}
*🔥 Popularity:* ${data.popularity}
*💖 Favorites:* ${data.favorites}
*✍️ Authors:* ${data.authors.map(a => `${a.name} (${a.type})`).join(', ')}

🌐 *URL:* ${data.url}
📝 *Description:* ${data.synopsis?.replace(/.*?/g, '')}
`;

  await saitama.sendMessage(m.chat, {
    image: { url: data.images.jpg.large_image_url },
    caption: mang.trim()
  }, { quoted: m });
}
break;
case 'gdrive': {
  if (!args[0]) return reply(`Please enter a Google Drive link`);

  reply('Please wait...');
  const fg = require('api-dylux');
  try {
    let res = await fg.GDriveDl(args[0]);
    await reply(`
≡ *Google Drive Download*
▢ *Name:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}
    `);

    await saitama.sendMessage(m.chat, {
      document: { url: res.downloadUrl },
      fileName: res.fileName,
      mimetype: res.mimetype
    }, { quoted: m });

  } catch (e) {
    reply('❌ Error: Check the link or try another one.');
  }
}
break;
case "xnxxdl": {
  if (!isNsfw) return reply(`NSFW is not enabled.\nType *${prefix}nsfw 1* to activate it.`);
  if (!m.isGroup) return reply('This command works only in groups.');
  if (!text) return reply('Please provide an XNXX link.');
  if (!text.includes('xnxx.com')) return reply('Invalid link. Please enter a valid XNXX URL.');

  reply('Please wait...');
  const fg = require('api-dylux');
  try {
    let xn = await fg.xnxxdl(text);
    await saitama.sendMessage(m.chat, {
      caption: `≡ *XNXX Downloader*

▢ *Title:* ${xn.title}
▢ *Duration:* ${xn.duration}
▢ *Quality:* ${xn.quality}
      `,
      video: { url: xn.url_dl }
    }, { quoted: m });
  } catch {
    reply('❌ Failed to fetch video. Check the link.');
  }
}
break;
case 'xnxxsearch': {
  if (!isNsfw) return reply(`NSFW is not enabled.\nType *${prefix}nsfw 1* to activate it.`);
  if (!m.isGroup) return reply('This command works only in groups.');
  if (!text) return reply('Please enter a search query.');

  reply('Searching...');
  const fg = require('api-dylux');
  try {
    let res = await fg.xnxxSearch(text);
    if (res.status && res.result.length > 0) {
      let resultText = res.result.map((v, i) => 
        `${i + 1}. *${v.title}*\n🔗 ${v.link}\n`).join('\n');
      reply(resultText);
    } else {
      reply('No results found.');
    }
  } catch {
    reply('Error fetching results. Try again later.');
  }
}
break;
case 'ttc':
case 'ttt':
case 'tictactoe': {
  let TicTacToe = require('./lib/tictactoe');
  this.game = this.game ? this.game : {};

  // Check if player is already in a game
  if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && 
    [room.game.playerX, room.game.playerO].includes(m.sender))) {
    return reply('❗ You are already in a game!');
  }

  let room = Object.values(this.game).find(room =>
    room.state === 'WAITING' && (text ? room.name === text : true));

  if (room) {
    reply('✅ Partner joined!');
    room.o = m.chat;
    room.game.playerO = m.sender;
    room.state = 'PLAYING';

    let arr = room.game.render().map(v => ({
      X: '❌', O: '⭕', 1: '1️⃣', 2: '2️⃣', 3: '3️⃣', 4: '4️⃣', 5: '5️⃣', 6: '6️⃣', 7: '7️⃣', 8: '8️⃣', 9: '9️⃣'
    })[v]);

    let board = `
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Current Turn: @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up.
    `;
    await saitama.sendText(room.x, board, m, { mentions: parseMention(board) });
    await saitama.sendText(room.o, board, m, { mentions: parseMention(board) });

  } else {
    // Create new room
    room = {
      id: 'tictactoe-' + (+new Date),
      x: m.chat,
      o: '',
      game: new TicTacToe(m.sender, 'o'),
      state: 'WAITING'
    };
    if (text) room.name = text;
    reply(`🕹 Waiting for a partner...${text ? `\nType: ${prefix}${command} ${text}` : ''}`);
    this.game[room.id] = room;
  }
}
break;
case 'addowner': {
  if (!isOwner) return reply('❌ This command is for the bot owner only.');
  if (!args[0]) return reply(`📌 Usage: ${prefix + command} number\nExample: ${prefix + command} 254799355427`);

  let number = q.split("|")[0].replace(/[^0-9]/g, '');
  let cek = await saitama.onWhatsApp(number);
  if (cek.length === 0) return reply(`❗ That number is not registered on WhatsApp.`);

  if (owner.includes(number)) return reply(`✅ Number ${number} is already an owner.`);
  owner.push(number);
  fs.writeFileSync('./database/owner.json', JSON.stringify(owner, null, 2));
  reply(`✅ Number ${number} has been added as an owner.`);
}
break;
case 'delowner': {
  if (!isCreator) return reply('❌ This command is for the *bot creator* only.');
  if (number === creatorNumber) return reply(`⚠️ You cannot remove the bot creator.`);
  if (!args[0]) return reply(`📌 Usage: ${prefix + command} number\nExample: ${prefix + command} 254799355427`);

  let number = q.split("|")[0].replace(/[^0-9]/g, '');
  let index = owner.indexOf(number);
  
  if (index === -1) return reply(`⚠️ Number ${number} is not an owner.`);

  owner.splice(index, 1);
  fs.writeFileSync('./database/owner.json', JSON.stringify(owner, null, 2));
  reply(`✅ Number ${number} has been removed from the owner list.`);
}
break;
case 'botpp': {
    if (!isOwner) return reply('Only the bot owner can use this command.');

    if (!quoted) return reply(`Tag an image with *${prefix + command}* to set as the bot profile picture.`);
    if (!/image/.test(mime)) return reply(`The tagged file must be an image.`);
    if (/webp/.test(mime)) return reply(`WebP format is not supported. Please use JPEG or PNG.`);

    try {
        let media = await saitama.downloadAndSaveMediaMessage(quoted);
        await saitama.updateProfilePicture(botNumber, { url: media });
        fs.unlinkSync(media); // Clean up after updating
        reply(`✅ Bot's profile picture updated successfully!`);
    } catch (err) {
        reply(`❌ Failed to update profile picture. Try again.`);
    }
}
break;
case 'git':
case 'gitclone': {
    if (!args[0]) return reply(`Where is the GitHub link?\nExample:\n${prefix}${command} https://github.com/M-axie/Tiffany-AI`);

    if (!isUrl(args[0]) || !args[0].includes('github.com')) return reply(`❌ Invalid GitHub link!`);

    const regex = /https:\/\/github\.com\/([^\/]+)\/([^\/]+)/i;
    const match = args[0].match(regex);
    if (!match) return reply(`❌ Could not parse the GitHub URL.`);

    let [_, user, repo] = match;
    repo = repo.replace(/.git$/, '');

    try {
        const zipUrl = `https://api.github.com/repos/${user}/${repo}/zipball`;
        const res = await fetch(zipUrl, { method: 'HEAD' });
        const filename = res.headers.get('content-disposition')?.match(/filename=(.+)/)?.[1] || `${repo}.zip`;

        await saitama.sendMessage(m.chat, {
            document: { url: zipUrl },
            fileName: filename,
            mimetype: 'application/zip'
        }, { quoted: m });

    } catch (err) {
        reply('❌ Error occurred while fetching GitHub repository.');
    }
}
break;
            
          case 'gpp': {
    if (!m.isGroup) return reply('❌ This command can only be used in groups.');
    if (!isAdmins) return reply('❌ Only group admins can use this command.');
    if (!isBotAdmins) return reply('❌ I need to be an admin to change the group icon.');
    
    if (!quoted) return reply(`📌 Tag or reply to an image with the caption *${prefix + command}*`);
    if (!/image/.test(mime)) return reply('❌ The tagged file must be an image.');
    if (/webp/.test(mime)) return reply('❌ WebP images are not supported. Use JPEG or PNG.');

    try {
        let media = await saitama.downloadAndSaveMediaMessage(quoted);
        await saitama.updateProfilePicture(m.chat, { url: media });
        fs.unlinkSync(media); // Clean up
        reply('✅ Group profile picture updated successfully!');
    } catch (err) {
        console.error(err);
        reply('❌ Failed to update group profile picture.');
    }
}
break;
          
          case "delete":
case "del": {
    if (!m.isGroup) return reply('❌ This command can only be used in groups.');
    if (!isAdmins) return reply('❌ Only *group admins* can use this command.');
    if (!isBotAdmins) return reply('❌ I need to be an admin to delete messages.');

    if (!m.quoted) return reply('❌ Please *reply to a message* you want to delete.');

    let { id, fromMe, isBaileys, chat, sender } = m.quoted;

    if (isBaileys) return reply('❌ I cannot delete my own messages or messages from another bot.');

    try {
        await saitama.sendMessage(m.chat, {
            delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: id,
                participant: m.quoted.sender
            }
        });
    } catch (err) {
        console.error(err);
        reply('⚠️ Failed to delete the message. It might be too old or invalid.');
    }
}
break;
case 'antilink': {
    if (!m.isGroup) return reply('❌ This command can only be used in groups.');
    if (!isAdmins && !isOwner) return reply('❌ Only group admins can use this command.');
    if (!isBotAdmins) return reply('❌ I need to be an *admin* to activate antilink!');

    if (!args[0]) {
        return reply(`⚠️ Please specify an option:\n\n${prefix + command} on\n${prefix + command} off`);
    }

    if (args[0].toLowerCase() === "on") {
        if (ntilinkall.includes(from)) return reply('✅ Antilink is already enabled in this group.');

        ntilinkall.push(from);
        fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilinkall));

        reply('✅ Antilink has been *enabled* in this group.');

        let groupMeta = await saitama.groupMetadata(from);
        let mentions = groupMeta.participants.map(p => p.id);

        saitama.sendMessage(from, {
            text: `\`\`\`「 ⚠️ WARNING ⚠️ 」\`\`\`\n\nNon-admins who send links will be removed from the group.`,
            contextInfo: { mentionedJid: mentions }
        }, { quoted: m });

    } else if (args[0].toLowerCase() === "off") {
        if (!ntilinkall.includes(from)) return reply('❌ Antilink is not active in this group.');

        let index = ntilinkall.indexOf(from);
        ntilinkall.splice(index, 1);
        fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilinkall));

        reply('✅ Antilink has been *disabled* in this group.');

    } else {
        return reply(`⚠️ Invalid option.\n\nUsage:\n${prefix + command} on\n${prefix + command} off`);
    }
}
break;
case 'weather': {
    saitama.sendMessage(from, { react: { text: "🛰️", key: m.key } });

    let lat, lon, locationName;

    if (m.message.locationMessage) {
        // User shared live/static location
        lat = m.message.locationMessage.degreesLatitude;
        lon = m.message.locationMessage.degreesLongitude;

        // Get city name from reverse geocoding
        const locationRes = await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=e409825a497a0c894d2dd975542234b0`);
        locationName = locationRes.data[0]?.name || 'your area';
    } else if (args[0]) {
        // User typed a location
        const city = args.join(" ");
        const geoRes = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=e409825a497a0c894d2dd975542234b0`);
        if (!geoRes.data.length) return reply("❌ Invalid location. Try again with a valid city name.");

        lat = geoRes.data[0].lat;
        lon = geoRes.data[0].lon;
        locationName = geoRes.data[0].name;
    } else {
        return reply("📍 Send your location or type a city name.\n\nExample:\n`.weather Nairobi`\n_or send a location message_");
    }

    // Fetch weather data
    const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=e409825a497a0c894d2dd975542234b0&lang=en`);
    const data = weather.data;

    const weatherText = `🌤️ *Weather Report for ${locationName}, ${data.sys.country}*\n\n` +
        `🌦️ *Condition:* ${data.weather[0].description}\n` +
        `🌡️ *Temperature:* ${data.main.temp}°C\n` +
        `🔻 *Min Temp:* ${data.main.temp_min}°C\n` +
        `🔺 *Max Temp:* ${data.main.temp_max}°C\n` +
        `💧 *Humidity:* ${data.main.humidity}%\n` +
        `💨 *Wind:* ${data.wind.speed} km/h`;

    await saitama.sendMessage(from, {
        video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' },
        gifPlayback: true,
        caption: weatherText
    }, { quoted: m });
}
break;
      case 'nsfwmenu':
        if (!isNsfw) return reply(NotNsfw);
        if (!m.isGroup) return reply(group);

        const nsfwmenu=`┌──⊰ _*🔞NSFW 🔞*_
│⊳   ${prefix}blowjob
│⊳   ${prefix}cum
│⊳   ${prefix}foot
│⊳   ${prefix}gangbang
│⊳   ${prefix}hentai
│⊳   ${prefix}pussy
│⊳   ${prefix}ass
│⊳   ${prefix}trap
│⊳   ${prefix}maal
│⊳   ${prefix}ʀɪʙʙᴏɴꜱ
│⊳   ${prefix}ʜᴀᴛꜱᴜɴᴇᴍɪᴋᴜ
│⊳   ${prefix}ʜᴇᴀᴅʙᴀɴᴅ
│⊳   ${prefix}ꜰᴏxɢɪʀʟ
│⊳   ${prefix}ᴀɴɪᴍᴀʟᴇᴀʀꜱ
│⊳   ${prefix}ʙʀᴀ
│⊳   ${prefix}ꜱᴋɪʀᴛ
│⊳   ${prefix}ʙʀᴇᴀꜱᴛꜱ
│⊳   ${prefix}ᴛᴀᴛᴛᴏᴏ
│⊳   ${prefix}ᴄʜᴀɪɴ
└──────────⊰ 
`
   saitama.sendMessage(m.chat, { image: { url: "./tiffany.jpg" }, caption: nsfwmenu }, { quoted: m });
        break;
case 'chain':
case 'tattoo':
case 'breasts':
case 'skirt':
case 'bra':
case 'animalears':
case 'foxgirl':
case 'headband':
case 'hatsunemiku':
case 'ribbons':
    if (!m.isGroup) return reply(group);
    if (!isNsfw) return reply(NotNsfw);
    const waifpoudd = await axios.get(`https://fantox-apis.vercel.app/${command}`);
    saitama.sendMessage(m.chat, { caption: 'OMG🥵', image: { url: waifpoudd.data.url } }, { quoted: m });
    break;

case 'maal': {
  if (!isNsfw) return reply(NotNsfw);
  if (!m.isGroup) return reply(group);
  reply('Please wait..');
  await saitama.sendMessage(m.chat, {
    image: await getBuffer('https://ayushhh.onrender.com'),
    caption: 'OMG 🥵',
  }, { quoted: m });
}
break;
case 'ghsearch': 
       case 'githubsearch': 
       case 'searchgithub':
             if (!q) return reply('*What are you looking for?*')
             let pomi = await fetch('https://api.github.com/search/repositories?q='+q)
            let dhumi = await pomi.json()
             if (pomi.status !== 200) throw dhumi
             str = dhumi.items.map((repo, index) => {
             return `
${1 + index}. *${repo.full_name}*${repo.fork ? '*FORKS*' : ''}
${repo.html_url}
*CREATED ON:* ${formatDate(repo.created_at)}
*LAST UPDATED ON:* ${formatDate(repo.updated_at)}
  ${repo.watchers}   🍴  ${repo.forks}    ${repo.stargazers_count}
${repo.open_issues} *ISSUES:*${repo.description ? `
*DESCRIPTION:*\n${repo.description}` : ''}
*CLONE:* $ git clone ${repo.clone_url}
`.trim()
}).join('\n\n')
            reply(str)               
case 'checkdeath':
             if (!text) return reply(`Use Someone's Name, Example : ${prefix + command} Urus `)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break;
        default: {
                                if (budy.startsWith('=>')) {
                    if (!isOwner) return reply(NotOwner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isOwner) return reply(NotOwner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isOwner) return reply(NotOwner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(`${err}`)
                        if (stdout) return reply(stdout)
                    })
                }
      if(isCmd){
          saitama.sendMessage(from, { react: { text: "❌", key: m.key }}) 
          reply (` Urus has not programmed me with such a Command!!, *${pushname}* .Type ${prefix} owner to contact my owner. Type *${prefix}help* to get my full command list!`)

      }                                 


          if (isCmd && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if ((isCmd && !m.isGroup)) {
              // saitama.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            } else if ((isCmd && m.isGroup)) {
              // saitama.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            }
          }
        }
      }
    
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
