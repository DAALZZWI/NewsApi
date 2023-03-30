
/* import */
const axios = require('axios')
const cheerio = require('cheerio')
const url = "https://news.daum.net/"

async function getNews() {

    try {

        const response = await axios.get(url)
        const $ = cheerio.load(response.data)

        let extractData = $('ul.list_newsissue')
                    .find('ul li')
                    .map((i, el) => {

                        const title = extractTitle($, el)
                        const image = extractImage($, el)

                    return {title, image}
                    }).get()
           
        return array
    } catch(error) {
     
        console.error("catch: " + error)
        return []
    }
}

function extractTitle($, el) {

    const title = $(el)
        .find('div.cont_thumb')
        .find('strong.tit_g')
        .find('a')
        .text()
        .replace(/\n/g, '')
        .replace(/ /g, '')

    return title
}

function extractImage($, el) {

    const image = $(el)
        .find('div.item_issue')
        .find('a')
        .find('img')
        .attr('src')
        .replace(/\n/g, '')
        .replace(/ /g, '')
    return image
}

module.exports = {
    getNews: getNews
}