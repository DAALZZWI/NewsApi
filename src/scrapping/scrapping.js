
/* import */
const axios = require('axios')
const cheerio = require('cheerio')

/* const */
const url = "https://news.daum.net/"


/* scrapping news data */
async function getNews() {

    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

    const extractData = $('ul.list_newsissue')
        .find('ul li')
        .map((i, el) => {

            const titles = extractTitle($, el)
            const images = extractImage($, el)

            return {titles, images}
        }).get()

    return {

        data : extractData
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
    return image
}

module.exports = {

    getNews: getNews
}