const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348164981506";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_06_03_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDg4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDUxLFxuICAgICAgICA4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDg5LFxuICAgICAgICAzOSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxODMsXG4gICAgICAgIDkyLFxuICAgICAgICA2LFxuICAgICAgICAxMTksXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICA5NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV2pVRVljR1RzcUJaS2pRbUtpM2c2YW53Z0VxZnBJYVFBZ2lNZG5zV3RyZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiekxCelo4TnhTT2Voa0NLM3cxTGNuQVwiLFxuICBcInBob25lSWRcIjogXCI4OWUzMWNjOC03ZmI4LTRlODktOTE0OC1iNDljZWM4YzA4YTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICA0NixcbiAgICAgIDE5NyxcbiAgICAgIDI0NyxcbiAgICAgIDE1NixcbiAgICAgIDIyNCxcbiAgICAgIDY0LFxuICAgICAgMTc1LFxuICAgICAgMjQwLFxuICAgICAgMjM4LFxuICAgICAgNTMsXG4gICAgICAxNzcsXG4gICAgICAzLFxuICAgICAgNjcsXG4gICAgICAxMjIsXG4gICAgICAyNTEsXG4gICAgICAyMzAsXG4gICAgICAyNDYsXG4gICAgICAxODQsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICA5NixcbiAgICAgIDk0LFxuICAgICAgMTk0LFxuICAgICAgMTg1LFxuICAgICAgMTgxLFxuICAgICAgNyxcbiAgICAgIDkyLFxuICAgICAgMTY5LFxuICAgICAgMTM4LFxuICAgICAgMyxcbiAgICAgIDE1NCxcbiAgICAgIDMyLFxuICAgICAgMjE0LFxuICAgICAgMTkwLFxuICAgICAgMjMsXG4gICAgICAyNTUsXG4gICAgICAyMDIsXG4gICAgICA5NCxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjc1NjJYSkw2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY0OTgxNTA2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NTM4OTY2MjQxMzA1NTo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05TZWxMUUNFTVd4aGI4R0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNDIrR1EyTVRJRTg1a0FBVm5vS2ZIVmt1dUJlYXhkSVZOY2NlaGFCL0RDVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZaUhQcjVJZmtRZ1JJMDJPQlh5T0dHZVJNMEpwYlZvbGh4bkYyQmM0M3NRT1Z5VmhzT1BJcXpxak0rdzlnZUJiQ1RMeEtackl0Vm1PeTNnaDEwVUJEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIva0lJUmhDSHdZS3JKY0hLNVVwbWRZSDlNUmhEYlczOFg2YzRtWU5tMXdRSXJ4NlVSbmYxUU4vV1ZRcDhrZ09YUU5maUVWdStWUTZTQTl0dlRYUC9Ddz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY0OTgxNTA2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDI4MjE1Nzdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
