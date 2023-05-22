const PORT = 5000
const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')

const app = express()

const url ='https://fashionunited.com/news/fashion'
axios(url) .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []
    $('.MuiTypography-h5',html).each(function(){
        const headlines = $(this).text()
        articles.push(headlines)

    })
    console.log(articles)
}).catch(err => console.log(err))

app.listen(PORT,()=>console.log(`listening on port ${PORT}`))