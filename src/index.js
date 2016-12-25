'use strict'

import {fetchImageURLS} from './fetchImageURLS'
import {saveImages} from './saveImages'
import {displayHelp} from './help'

let args = process.argv.slice(2)

if (args.length > 0) {
    let path
    let gallery
    let pageNo
    let help
    args.map((a, i) => {
        a.indexOf('--gallery') !== -1 ? gallery = args[i+1] : null
        a.indexOf('--output') !== -1 ? path = args[i+1] : null
        a.indexOf('--pageNumber') !== -1 ? pageNo = args[i+1] : null
        a.indexOf('--help') !== -1 ? help = true : null
    })
    if (gallery) {
        fetchImageURLS(gallery, pageNo)
        .then(response => saveImages(response, path))
    } else if (help) {
        displayHelp()
    } else {
        console.log('Please provide a gallery to pull image from or use --help for help.')
    }
} else if (args.length === 0) {
    console.log('Please provide a Gallery to pull images from or use --help for help.')
}