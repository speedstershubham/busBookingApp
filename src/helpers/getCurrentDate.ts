const getCurrentDate = (): string => {
    const today: Date = new Date()
    let month: string = '' + (today.getMonth() + 1)
    let day: string = '' + today.getDate()
    const year: number = today.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
}
export default getCurrentDate
