const fetch = require("node-fetch");

const mfdl = async function (mfUrl){
    const r = await fetch(mfUrl,{
        headers : {
            "accept-encoding" : "gzip, deflate, br, zstd"
        }
    })
    if(!r.ok) throw Error (`${r.status} ${r.statusText}`)
    const html = await r.text()
    const url = html.match(/href="(.+?)" +id="downloadButton"/)?.[1]
    if(!url) throw Error (`gagal menemukan match url`)

    const ft_m = html.match(/class="filetype"><span>(.+?)<(?:.+?) \((.+?)\)/)
    const fileType = `${ft_m?.[1] || '(no ext)'} ${ft_m?.[2] || '(no ext)'}`

    const d_m = html.match(/<div class="description">(.+?)<\/div>/s)?.[1]
    const titleExt = d_m.match(/subheading">(.+?)</)?.[1] || '(no title extension)'
    const descriptionExt = d_m.match(/<p>(.+?)<\/p>/)?.[1] || '(no about extension)'

    const fileSize = html.match(/File size: <span>(.+?)<\/span>/)?.[1] || '(no file size)'
    const uploaded = html.match(/Uploaded: <span>(.+?)<\/span>/)?.[1] || '(no date)'
    const fileName = html.match(/class="filename">(.+?)<\/div>/)?.[1] || '(no file name)'
    const result = {fileName, fileSize, url, uploaded, fileType, titleExt, descriptionExt}

    return result
}

module.exports = mfdl

/* output
{
  fileName: 'qioV19(Beal).zip',
  fileSize: '13.35MB',
  url: 'https://download2296.mediafire.com/6bu1gpy........eal%29.zip',
  uploaded: '2024-12-10 13:41:44',
  fileType: "Compressed Archive .ZIP",
  titleExt: 'About Compressed Archive Formats',
  descriptionExt: 'Compressed archives combine multiple files into a single file to make them easier to transport or save on diskspace.  Archiving software may also provide options for encryption, file spanning, checksums, self-extraction, and self-installation. Zip is the most-widely used format, used by the Windows operating system and more recently by OSX as well. RAR is also a very popular and flexible format. Unix uses the tar file format, while Linux uses the tar and gz format.'
}
  
*/