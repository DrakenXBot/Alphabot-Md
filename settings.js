const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan le owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'your apikey',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
//global.autorecording = true //status auto merekam ( auto record )
//global.autoketik = false //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "Draken-Bot" //namabot kalian
global.ownername= "Draken" //nama kalian
global.myweb ="https://api.zeeoneofc.xyz" //bebas asal jan hapus
global.youtube = "https://youtube.com/c/ZeeoneOfc" //bebas asal jan hapus
global.github = "https://zeeone-ofc.github.io/" //bebas
global.email = "zeeoneofc@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.ownernomer = "213672551056" // nomor wa kalian
global.ownernomerr = "+213672551056" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/Draken-05-24" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["62887435047326","62887435047326","918156874290"] //ganti agar fitur owner bisa di gunakan
global.packname = 'Draken Sama' //sticker wm ubah
global.author = 'حقوق دراكين 🕸️' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: 'تم🕸️~',
    admin: 'لا يمكن استخدام هذا الأمر إلا من قبل المسؤول !',
    botAdmin: 'لا يمكن استخدام هذا الأمر إلا عندما يصبح الروبوت مسؤولاً !',
    owner: 'لا يمكن استخدام هذا الأمر إلا من قبل المالك!',
    group: 'لا يمكن استخدام هذا الأمر إلا في مجموعات!',
    private: 'لا يمكن استخدام هذا الأمر إلا في الخاص!',
	bot: 'الميزات الخاصة لمستخدم رقم البوت',
    errtoimg: 'آسف حاليا لا تدعم ملصق Gif!',
    wait: 'تحت المعالجة⏳',
	lockCmd: 'الميزات التي لم يتم تفعيلها من قبل المالك',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
