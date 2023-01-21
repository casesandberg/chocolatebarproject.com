const fs = require('fs')
const piexif = require('piexifjs')

const getBase64DataFromJpegFile = (filename) =>
  fs.readFileSync(filename).toString('binary')

const getExifFromJpegFile = (filename) =>
  piexif.load(getBase64DataFromJpegFile(filename))

const deleteExifFromJpegFile = (filename) => {
  const scrubbed = piexif.remove(getBase64DataFromJpegFile(filename))
  const fileBuffer = Buffer.from(scrubbed, 'binary')
  fs.writeFileSync(filename, fileBuffer)
}

;(async () => {
  try {
    const files = await fs.promises.opendir('./public/bars')
    let filesStripped = 0

    for await (const file of files) {
      if (file.name.includes('.jpg')) {
        const { Exif } = getExifFromJpegFile(`./public/bars/${file.name}`)

        if (Object.keys(Exif).length !== 0) {
          deleteExifFromJpegFile(`./public/bars/${file.name}`)
          filesStripped++
        }
      }
    }

    if (filesStripped) {
      console.log('Files Stripped')
      process.exit(1)
    } else {
      console.log('All Files Clean')
    }
  } catch (error) {
    console.log(error)
  }
})()
