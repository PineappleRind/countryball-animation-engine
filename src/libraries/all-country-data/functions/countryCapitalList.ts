import data from '../data/data.json'
const countryCapitalList = () => {
    let capitals: { country: string; capital: string | null }[] = []
    data.map(item => {
        let obj = {
            country: item.name,
            capital: item.capital
        }
        capitals.push(obj)
        return true
    })
    return capitals
}

export default countryCapitalList