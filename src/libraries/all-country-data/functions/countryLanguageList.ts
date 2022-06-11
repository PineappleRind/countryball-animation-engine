import data from '../data/data.json'

const countryLanguageList = () => {
    let lang: { country: string; languages: string[] }[] = []
    data.map(item => {
        let obj = {
            country: item.name,
            languages: item.language
        }
        lang.push(obj)
        return true
    })
    return lang
}

export default countryLanguageList