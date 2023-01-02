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

    for await (const file of files) {
      if (file.name.includes('.jpg')) {
        deleteExifFromJpegFile(`./public/bars/${file.name}`)
      }
    }
    console.log('Success')
  } catch (error) {
    console.log(error)
  }
})()
