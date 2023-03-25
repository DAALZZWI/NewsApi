
/* import */
const axios = require('axios')
const cheerio = require('cheerio')
let url = "https://news.daum.net/"

async function getNews() {

    try {

        const response = await axios.get(url)
        const $ = cheerio.load(response.data)

        let array = $('ul.list_newsissue')
                    .find('ul li')
                    .map((i, el) => {
                    
                        const title = $(el)
                        .find('div.cont_thumb')
                        .find('strong.tit_g')
                        .find('a')
                        .text()
                        .replace(/\n/g, '')
                        .replace(/ /g, '')
       
                        const image = $(el)
                        .find('div.item_issue')
                        .find('a')
                        .find('img')
                        .attr('src')
                        .replace(/\n/g, '')
                        .replace(/ /g, '')

                    return {title, image}
                    }).get()
           
        return array
    } catch(error) {
     
        console.error("catch: " + error)
        return []
    }
}

    module.exports = {
        getNews: getNews
    }