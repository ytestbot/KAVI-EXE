const {cmd , commands} = require('../command')
const fg = require(`api-dylux`)
const yts = require(`yt-search`)
cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
KAVI_EXE_V1_SONG_DOWNLOADER_🎧


▬▬▬▬▬▬▬▬▬▬▬▬◆
▋➥ *title*: ${data.title}
▋➥ *description*: ${data.description}
▌➥ *time*: ${data.timestamp}
▋➥ *ago*: ${data.ago}
▌➥ *views*: ${data.views}
▋➥ *ago*: ${data.ago}
▋➥ *Author*:${data.Author}
▬▬▬▬▬▬▬▬▬▬▬▬◆




use prefix {.}  example {.song new rap,video new rap}




▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▋ *_POWER BY KAVI_EXE_*  ▌
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬


`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url


//send audio+ document  message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document : {url:downloadUrl},mimetype:"audio/mpeg",filName:data.title + ".mp3",caption:"✅MADE BY MR.NADUWA-V1✅"},{quoted:mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})



//=============video-dl===============

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
KAVI_EXE_V1_VIDEO_DOWNLOADER_🎬 



▬▬▬▬▬▬▬▬▬▬▬▬◆
▋➥ *title*: ${data.title}
▋➥ *description*: ${data.description}
▌➥ *time*: ${data.timestamp}
▋➥ *ago*: ${data.ago}
▌➥ *views*: ${data.views}
▋➥ *ago*: ${data.ago}
▋➥ *Author*:${data.Author}
▬▬▬▬▬▬▬▬▬▬▬▬◆




use prefix {.}  example {.song new rap,video new rap}




▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
▋ *_POWER BY KAVI_EXE_*  ▌
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url


//send video+ document message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document : {url:downloadUrl},mimetype:"video/mp4",filName:data.title + ".mp4",caption:"✅MADE BY MR.NADUWA-V1"},{quoted:mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
