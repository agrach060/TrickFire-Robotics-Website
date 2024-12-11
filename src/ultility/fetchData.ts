const fetchData = async (fullURL: string) => {
    const rawData = await fetch(fullURL)
    const data = await rawData.text()
    let returnData = JSON.parse(data.substr(47).slice(0, -2)).table

    returnData = returnData.rows.map((item: { c: Array<{ v: String }> }) => {
        return {
            team: item.c[0].v,
            dayInWeek: item.c[1].v,
            time: item.c[2].v,
            description: item.c[3].v,
            color: item.c[4].v
        }
    })
    return returnData
}
export default fetchData
