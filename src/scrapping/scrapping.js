
/* import */
const axios = require('axios')
const cheerio = require('cheerio')
const url = "https://news.daum.net/"

async function getNews() {

    try {

        const response = await axios.get(url)
        const $ = cheerio.load(response.data)

        const titles = extractTitle($)
        const images = extractImage($)

        return {

            data : [titles, images],
            message : "Successful extraction of news data"
        }
    } catch(error) {

        return {

            data : [],
            message : "Failed to extract news data : " + error
        }
    }
}

function extractTitle($) {

    return $('ul.list_newsissue')
                .find('ul li')
                .map((i, el) => {

                    return $(el)
                        .find('div.cont_thumb')
                        .find('strong.tit_g')
                        .find('a')
                        .text()
                        .replace(/\n/g, '')
                        .replace(/ /g, '')
                }).get()
}

function extractImage($) {

    return $('ul.list_newsissue')
                .find('ul li')
                 .map((i, el) => {

                     return $(el)
                         .find('div.item_issue')
                         .find('a')
                         .find('img')
                         .attr('src')
                         .replace(/\n/g, '')
                         .replace(/ /g, '')
                }).get()
}

module.exports = {

    getNews: getNews
}