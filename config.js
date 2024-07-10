const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '923072380380'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'talkdrove@gmail.com'
global.github = 'https://github.com/HyHamza/BYTE-MD-LITE'
global.location = 'Earth'
global.gurl = 'https://instagram.com/talkdrove' // add your username
global.sudo = process.env.SUDO || "923072380380"
global.devs = '923072380380';
global.website = 'HyHamza.vercel.app' //wa.me/+92000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUU0UFg5NVFmZGM3YnpGV1ZYWXd6ZHhHOUFCSEtBa1p2RjdwVkh4aHdXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0tuNUFqZjA1S1B5NjBKS1hTMnBFQks3a2RSd3I5YkliVTBZeUFBNDd4cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzR2l5TUhZOFVRTHRCcUVMUUUrT2FiaGpSNnliZEhYdENYcVhIZkt2SmtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNYnluTWMwZEduWjMwaE56MStQL1NUYWFNTHh5Q3JUWEV1T3VjVm4xU1JBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQVVkvVWhaR2JDSm1XenY0QjlmNmwvUXRCbXdNUmkyd1dWeGZYS0NWR009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdtYkFjTHNjU01vNlVuRnBRbGdKUDRobWJ4Y1lTSXpIMlovTm1VQisydzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1rdTlZaWRaSVAxOGRiME84bEt5ZWIyS0JLM3UvelgvL2Vvc01uK0pVUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNBZTlpSGY2azZqaHZjek1TTFRRUjZybllkeFAwdURha1NnUnp3dnhRZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNpaXUzdElqMWFEUGJLMkNscXJwa3lzbC93bXU2SGxUeGZBMndDZXFKOHErWDZxdXZJRkJGbm94Y0tBSFlwd2o4SHVIMmh3bWlVeWI5S0YyVG5URUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiK2pVd2ZLdXVwRm9zby95b0pBM3pMQ1N6b3drOHBGbmFCb3FMWXpBazM4dz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVTdzUlYwTXFRZVNBa3NNampQQ3RRQSIsInBob25lSWQiOiI0NDQ4NjUyMS0wZDFhLTQ4YTItYmFjNC1iOTdiN2Q1MDUyOTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVV5dXVOMUdzS0Evb1J3RHl4T3FNZFN4ZWY0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxXNjR3UVhBNlBrNTFLYm5SL0V3SWh1R3VVbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNOVlaTjE3SCIsIm1lIjp7ImlkIjoiMjYzNzE1OTA3NDY4OjM4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOL0UrdThIRUw2Y2xiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJERXJQcW5VOURrTDZvd1JzWVJ4NVhpRVFkOTBlRDhrcGwxMnI2cXZFdWp3PSIsImFjY291bnRTaWduYXR1cmUiOiJNQ2wrWHhWYWxCK0N6dUVTWGdYZk5zeEE0VGFZWHJzR09TMnhmMy92OS9IaTdMbENJcC95UFc2ZHZJMjVFTEo0NVNMWnZaMUYrZnc5a0hKTWpVM0dBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidjN6RHRGUDZZN25UbkY0Q0t5ekpPUmMwMWNtQ0ttdDg4dE9WRXpXVjVHL3dvNlIwMjN3dkdmSmlXYnVTclArNjZtamU4bURlWlcwbG1ONm5nWHVRQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTU5MDc0Njg6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXhLejZwMVBRNUMrcU1FYkdFY2VWNGhFSGZkSGcvSktaZGRxK3FyeExvOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDAxMjM2NX0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BYTE-MD',
  packname:  process.env.PACK_NAME || 'POWERED BY TALKDROVE',
  
  botname:   process.env.BOT_NAME === undefined ? "BYTE-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Arthur' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'love' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '233' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ',' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'all' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'ping' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*POWERED BY TALKDROVE* ",   
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? '0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'BYTE-MD-LITE',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
