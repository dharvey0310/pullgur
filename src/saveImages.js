'use strict'

import fs from 'fs'
import http from 'http'

const checkPathExists = (path) => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path)
    }
}

export const saveImages = (images, path) => {
    let defaultPath = __dirname + '\\..\\images\\'
    let iterations = 0
    path ? checkPathExists(path) : checkPathExists(defaultPath)
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
        iterations ++
    })
    if (iterations === images.length) {
        if (path) {
            return path
        } else {
            return defaultPath.replace('\\dist\\..\\', '\\')
        }
    }
}
