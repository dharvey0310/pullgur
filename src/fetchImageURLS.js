'use strict'

import {polyfill} from 'es6-promise'
import fetch from 'isomorphic-fetch'

polyfill()

const parseResponse = response => {
    let data = []
    response.data.map(r => {
        data.push({
            link: r.link,
            title: r.title
        })
    })
    return data
}

export const fetchImageURLS = (gallery, pageNo) => {
    const headers = new Headers()
    headers.append('content-type', 'application/json')
    headers.append('Authorization', 'Client-ID b68d6fbd258b5ac')
    return fetch(`https://api.imgur.com/3/gallery/${gallery}${pageNo ? '/' + pageNo : ''}`, {
        method: 'GET',
        headers: headers
    }).then(response => {
        if (response.status === 200) {
            return response.json()
        }
    })
    .then(parseResponse)
}