import data from '../data/data.json'
import Country from '../interfaces/Country'
const search = (string: string) => {
    if (!string) return
    let arr: Country[] = []
    data.map((item: any) => {
        for (let key in item) {
            if (item[key].toLowerCase().includes(string.toLowerCase())) arr.push(item)
        }
    })
    return arr
}

export default search