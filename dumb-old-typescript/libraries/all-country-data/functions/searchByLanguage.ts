import data from '../data/data.json'
import Country from '../interfaces/Country'
const searchByLanguage = (lang: string) => {
    let arr: any[] = []
    data.map((item) => {
        (item.language).map((lang: string) => {
            if (lang.toLowerCase().includes(lang.toLowerCase())) arr.push(item)
        })
        return true
    })
    return arr
}

export default searchByLanguage