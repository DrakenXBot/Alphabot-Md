const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = false // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "Yuno-Mdོ" //namabot kalian
global.ownername= "᭝᭄𝜬࿆𝑹𝜤𝑵𝑪𝜩 ‹𝜣𝑭› ܰ𝜢𝜩𝑳𝑳ܱ" //nama kalian
global.myweb ="https://api-alphabot.herokuapp.com/" //bebas asal jan hapus
global.youtube = "https://youtube.com/c/ZeeoneOfc" //bebas asal jan hapus
global.github = "https://zeeone-ofc.github.io/" //bebas
global.email = "sam.idkhh@gmail.com" //bebas
global.region = "Morroco" //bebas
global.ownernomer = "212655892921" // nomor wa kalian
global.ownernomerr = "393509549696" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/f566e65896efcfc6e6180.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["212655892921","212655892921","393509549696"] //ganti agar fitur owner bisa di gunakan
global.packname = '© Yuno-Mdོ' //sticker wm ubah
global.author = 'sam' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','/','#','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'only admins can use that command !',
    botAdmin: 'Bot is not admin !',
    owner: 'only owner can use that command !',
    group: 'This Command Can Only Be Used In Groups !',
    private: 'This Command Can Only Be Used In Private !',
	bot: 'Bot Number User-Specific Features',
    errtoimg: 'Sorry Currently Not Support sticker Gif !',
    wait: '⏳ In Progress',
	lockCmd: 'Features Not Enabled By Owner!',
	example1: 'Welcome @user Di Group @subject Dont Forget To Read Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
