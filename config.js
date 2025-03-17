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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_35_03_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTczLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgODksXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICA0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICA2NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDk5LFxuICAgICAgICAxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY2LFxuICAgICAgICA3NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE4LFxuICAgICAgICAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2LFxuICAgICAgICA0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzLFxuICAgICAgICA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTExLFxuICAgICAgICA3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSlZEZmR3aSttS1NTd3RBT1R3d0F0bXg0NHBIOXpsSlVWK0Vvc2pUTUNrTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQXZTX2QwaGxSZHE1bUo2VkJuVHlXZ1wiLFxuICBcInBob25lSWRcIjogXCI2NDliNmQzYi04MjU5LTRjYzAtYTZiMi01Y2Q3NDdhZmI4ZThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgMjI1LFxuICAgICAgMTc0LFxuICAgICAgMTIxLFxuICAgICAgMTU2LFxuICAgICAgMTg5LFxuICAgICAgMjUyLFxuICAgICAgMTU0LFxuICAgICAgMTU5LFxuICAgICAgMTI2LFxuICAgICAgMTU2LFxuICAgICAgMTI5LFxuICAgICAgMjQ4LFxuICAgICAgMTc2LFxuICAgICAgNTMsXG4gICAgICA0MyxcbiAgICAgIDEyMCxcbiAgICAgIDEwNCxcbiAgICAgIDIwMyxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAxNTgsXG4gICAgICAxMzMsXG4gICAgICAxNDksXG4gICAgICAyMjYsXG4gICAgICAxNTcsXG4gICAgICAxOTEsXG4gICAgICAxODYsXG4gICAgICA2MyxcbiAgICAgIDE1OCxcbiAgICAgIDEzMyxcbiAgICAgIDE2MCxcbiAgICAgIDYsXG4gICAgICA4OSxcbiAgICAgIDE3OCxcbiAgICAgIDE0MSxcbiAgICAgIDE2OSxcbiAgICAgIDg3LFxuICAgICAgODUsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEtXREtOS1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjQ5ODE1MDY6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc1Mzg5NjYyNDEzMDU1OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlNlbExRQ0VKaVA0cjRHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0MitHUTJNVElFODVrQUFWbm9LZkhWa3V1QmVheGRJVk5jY2VoYUIvRENVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZvVy96aWFZVENRaUFsT3h2QWo3R2NZSUxuSHlJZ3ByMStpd0F5MHdKT0M1K3F4RVd6RGtLRHNZWlhXK0Vxd1RqcVp1Q2hrRlZqQ3lFSTNBa21oMUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNCb0I4ODJhTS9jbXBDY3J5K09wVGIzUHZWeStmZWF4aWlyb1RRNWZ4dWtqZk43REZNNE1EQ0RrMFl2enNrQ3VzajNUL3F0Q2pIWWZJdGN4aEdNSGl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjQ5ODE1MDY6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MjI0Mzc0MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
