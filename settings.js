const chalk = require("chalk")
const fs = require("fs")

//owmner v card
//domain && apikey && capikey && egg sesuai panel klian ya
// subrek channel Urus Tech Hub
global.owner = ['254752146910'] //ur owner number
global.ownernomer = "966567393013" //ur owner number2
global.ownername = "I am Urus" //ur owner name
global.ytname = "YT: Urus Tech Hub" //ur yt chanel name
global.socialm = "IG: @uruscoolio" //ur github or insta name
global.location = "Kenya" //ur location
global.codeInvite = "K3l39TQDEtw4Kn46zKX4sr"
global.domain = '_' // isi dengan domain panel lu
global.apikey = '_' // Isi Apikey Plta Lu
global.capikey = '_' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//new
global.ownergc = "Urus"
global.botname = "Tiffany AI"
global.ownerNumber = ["254799355427@s.whatsapp.net"]
global.ownerweb = "https://whatsapp.com/channel/0029Vac57JjFHWqAIPZ3hj3t"
global.themeemoji = '🪀'
global.wm = "Urus Tech Hub"
global.packname = "Urus"
global.author = "I am\n\n"
global.prefa = ['','!','.','#','&']
global.sessionName = 'urus'
global.tekspushkon = ''
global.keyopenai ='iigf'

global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'https://img0.pixhost.to/images/653/527598843_skyzopedia.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
