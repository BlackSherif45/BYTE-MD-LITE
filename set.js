
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ZFckJMSi9CRzFxamh1azhJMzZXT1lyd3lSTDg5aDBDMFhwUG9tVVZIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGYzejYwZWhhb2NLWExQODMyY2pmYWFOZlYrdHhNZmJiSC9vcm5EQ0t3dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TXQ0Q3NydEZEUkI4V0lLNTRtM2ZrWHF5WEhhWVFOMG44WGdaUlZyOEg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtdHl1RFVWdVJQNWJyYkZQNVpRdkhoZ1RtMlNFZHZ1OUdzRVNqeHpRZ0U0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklMc3lXaE1NNDZLN0ZWVEJKT1pVM2JQUHY0alhDSnpZc25lUzZpUlR5VjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ5eGcrVHRvamlwL0dPNjJnY3BPS0xLMis4Y1lnc3ZLNFk1aHA3VkZVQkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUR1WTNxdTd4VHdNTjJ4UFhlRjBuRjVlZDY0MzRmeVU3QnY4OXB4L1IxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3hZUE16bTYwcjBBYWJBcEVmOUFzQ2xMMVR3T1hPNkNIK2VFeC9NVWpIZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKMm9JMWs0VUVqaU1jYnVNMXBrRXVydzd6QjUrcGVJMk9NY3kyRXh5MGRCWG4yMjlIK0ovd0pwTG96WDh6S090RnVQYUFIZ1B4TkV4U2RiSlVCNUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiJVdUhnSlMzdGsxdzBtSUd4QU1BMmwvZjMyWWdrcWZHWTVRWFdSV3ZXQ284PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUNkVRa0dwR1NaT0I4YjRzdmxUS21RIiwicGhvbmVJZCI6IjI5NmIzNDNkLTNhMWMtNDFhNy1hYTUyLWIyMTYxOGJjODFkZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOMUJVUDRYSngxV3FhdEQ1YVhqM1ZYdDBUNUk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImoxV1dldUxIcG5HRGR6S0ZialpiakF1Zm02az0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01ucCtQQUNFSjZvcmJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVISFN3Mm1wTVZjU1c0Tk1OUzNkK3FjdVl3eXY0bUVxanNGSVhhNkJTejQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkYvTCt4a08vNmJqb1lhWjZ0OHQ3VG9ra2JML2JBWlZmYmR1WW5pUVFmVENuQVNncWdyWENkR0tVbE1neS9NQkR2MTFPTEtiS2wzUzU4WlNLSFJKaERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0dEc4V1NyZkczeS9qYmJScUZFblk2K2h2SW03THNvRENsazhYb3gwUjZLaEU3ZnJsR21wV3ZVNTdOMmJZV1ZDaW1xeU0xTDVrWWNlRmROMzVyMmpDdz09In0sIm1lIjp7ImlkIjoiMjYzNzEyMTk2MTUyOjk3QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxMjE5NjE1Mjo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiaHgwc05wcVRGWEVsdURURFV0M2ZxbkxtTU1yK0poS283QlNGMnVnVXMrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTA0MjUwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUptNSJ9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "MILTON",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "263715907468",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'MILTON-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Update ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
