//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078,2349076810086,2348109243618";
global.owner = process.env.OWNER_NUMBER || "2349112171078,2349076810086";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1A4TncrMlQwY20wVnllY1dLcXZkMUdHSU1LSXl2dlcreEloYmwwalJHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMTV2WXJYY0JIelJ0MmRETTVPT3RHRVZEVjVDcHNzaytBNEZOVGlXQTQwZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTjY1THV4SkZYeDBBN1pOQVRoZk5EUWF1c0s5VzJoakNUNnhHVWJTZ1hrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVcHRKRU1zUkxTYmp3Z2R6RnRRR0laVGppTUFNaC95anY1cEkvQXY2NkRjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNejhiRFJ6d1JKVHd4eXJmMmk1UHdoYTZPUzJKWmQ1aEtXZ1BVK3cvMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMwaXkweVlJSE0yVE1sQjZ5NjF1TkJ0R0NwS2N6eFZnOHllV2ZGODU4ajg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBQS3FKQ2luZnVvMEtIK0k2SHQ2cnhNQlVlSjJLZUl4bGpoT3QxNTZXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0xqczdnSEtqUzk0QmEyMmpBSUhOeDAzY0NDdG1ZUTBHWE5WS25LZTd3cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUxbWhNdVk0M1ViKzFxem96SDFsSFRwT28vWDg0cGFkV0xjYVdWd0dSbHJHaDB0czlzWWdreks3TTFhUS93SXVjTWJjWWtKMll1am50aUl6VmFXQUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6IjM3QnpXREx4dk96N1RmcE1XNXFaQnltTlprV1Z2d2dKUUJaZ0R6bGFGSms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA3NjgxMDA4NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNDNGMTZGNTUxODNCMUJGNjU5QzBCNTU2NERCNjJDMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM3NDg3OTEyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlS1plNE1vOFFRbXZlTVpMLXNjckJRIiwicGhvbmVJZCI6IjM4MDM4MTE1LTE5NzAtNGM4Yy04NWU4LTJjNTIyZWE3M2E1OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFVEd0QTJTQlVmOVlhWGt3eVJuU2ZHUVNkTHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkFDZ0FsNlpER1lJRVhydUF2eTR0K0xwMzZNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJYQTZIWVk1IiwibWUiOnsiaWQiOiIyMzQ5MDc2ODEwMDg2OjEzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQejRtbzhDRUpic3Y3d0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFU29mWXJTbWVJVnNtdE5BbGJGeDA2VGNIL095WGJIaGpzSUpLL0xqSXdvPSIsImFjY291bnRTaWduYXR1cmUiOiJSYlN2cG9tMFVucUJQR3JyRzlwTG5GRkxxUWdlZzJaQzY3UTJJMXcrNGJMRXl6NmgySzV1OThlcCs3d1BKU1dUV1N1cE1wRWRwV0FiOE95VXc5RFJCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOUhycDVGUnB1QXorOUxrdFlMT1F6ZzRyK2NuZFVXVDJrVnBmeFBkVURpVHVLOGJ2STRMNTJOWDMyVjZnRWEvbnVHZTllOCsxblN0eW9tM2pzNzFBQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDc2ODEwMDg2OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJFcUgySzBwbmlGYkpyVFFKV3hjZE9rM0IvenNsMng0WTdDQ1N2eTR5TUsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzc0ODc5MDcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVRGIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "ʜɪᴍ𓃵⁩",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "ʜɪᴍ𓃵⁩",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
