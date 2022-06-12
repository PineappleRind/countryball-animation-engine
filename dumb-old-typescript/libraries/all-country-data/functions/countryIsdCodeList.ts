import data from '../data/data.json'

const countryIsdCodeList = () => {
    let codes: { country: string; isd: string[] }[] = []
    data.map(item => {
        let obj = {
            country: item.name,
            isd: item.isd
        }
        codes.push(obj)
        return true
    })
    return codes
}

export default countryIsdCodeList