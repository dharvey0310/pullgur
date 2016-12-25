'use strict'

import fs from 'fs'
import http from 'http'

export const saveImages = (images, path) => {
    let defaultPath = __dirname + '\\..\\images\\'
    images.map(i => {
        let imageData
        let nameArr = i.link.split('/')
        if (nameArr.length < 5) {
            let request = http.get(i.link, res => {
                let file = fs.createWriteStream(path ? path + nameArr[3] : defaultPath + nameArr[3])
                res.pipe(file)
            })
            request.on('error', err => {
                if (err) throw err
            })
            request.end()
        }
    })
    if (path) {
        console.log('Images saved to ' + path)
    } else {
        console.log('Images saved to ' + defaultPath.replace('\\dist\\..\\', '\\'))
    }
}
