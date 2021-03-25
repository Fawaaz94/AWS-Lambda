const dateConversion = (date) => {
    const dateSplit = date.split(' ')

    const datePartSplit = dateSplit[0].split('.')
    const timePart = dateSplit[1].split(':')

    const dateString = `${datePartSplit[1]} ${datePartSplit[0]} ${datePartSplit[2]} ${timePart[0]}:${timePart[1]} UTC`
    
    var convertedDate = new Date(dateString).toISOString();

    return convertedDate;
}

module.exports = {
    dateConversion
}