import {encodeId} from '../helpers/commons'

export function downloadSharer(e, type, event) {
    e.stopPropagation()
    let desc = `${event.desc ? `${event.desc.replace(/&lt/g , '<').replace(/&gt/g, '>').replace(/&nbsp/g, ' ')}  ` : ''}${(event.venue.name || event.venue.phone || event.venue.email || event.venue.website) ? '<p><b>Venue Details.</b></p>  ' : ''}${event.venue.name ? `${event.venue.name},<br/>  ` : ''}${event.venue.phone ? `${event.venue.phone},<br/>  ` : ''}${event.venue.email ? `${event.venue.email},<br/>  ` : ''}${event.venue.website ? `${event.venue.website}.<br/>  ` : ''}${(event.organizer.name || event.organizer.phone || event.organizer.email || event.organizer.website) ? '<p><b>Organizer</b></p>  ' : ''}${event.organizer.name ? `${event.organizer.name},<br/>  ` : ''}${event.organizer.phone ? `${event.organizer.phone},<br/>  ` : ''}${event.organizer.email ? `${event.organizer.email},<br/>  ` : ''}${event.organizer.website ? `${event.organizer.website}.<br/>  ` : ''}`
    let icsSharer = `https://calendar.boomte.ch/createIcsFile?title=${event.title}&desc=${encodeURIComponent(type==='icalendar' ? desc.replace(/(<([^>]+)>)/ig, '') : desc)}&start=${event.start}&end=${event.end}&address=${encodeURIComponent(event.venue.address)}`
    window.location.href = icsSharer
}

export function openAddToUrl(e, type, event) {
    e.stopPropagation()
    let eventDescription = ''
    let url
    switch (type) {
        case 'google':
            eventDescription = event.desc ? createDesc(event, 'google') : ''
            if (event.all_day)
                url = 'https://calendar.google.com/calendar/r/eventedit?text=' + encodeURIComponent(event.title) + '&dates=' + moment(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD') + '/' + moment(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD') + '&details=' + (event.desc ? eventDescription : '') + '&location=' + setLocation(event, 'encode') + '&sprop=name'
            else
                url = 'https://calendar.google.com/calendar/r/eventedit?text=' + encodeURIComponent(event.title) + '&dates=' + moment(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD[T]HHmmss') + '/' + moment(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD[T]HHmmss') + '&details=' + (event.desc ? eventDescription : '') + '&location=' + setLocation(event, 'encode') + '&sprop=name'
            break
        case 'yahoo':
            eventDescription = event.desc ? createDesc(event, 'yahoo') : ''
            if (event.all_day)
                url = 'https://calendar.yahoo.com/?v=60&view=d&type=20&DUR=' + (event.all_day ? 'all_day' : '') + '&TITLE=' + encodeURIComponent(event.title) + '&ST=' + moment(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD') + '&ET=' + moment(formatForAddtoCalendar(event, 'end', 'yahoo')).format('YYYYMMDD') + '&DESC=' + eventDescription + '&in_loc=' + setLocation(event)
            else
                url = 'https://calendar.yahoo.com/?v=60&view=d&type=20&TITLE=' + encodeURIComponent(event.title) + '&ST=' + moment(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD[T]HHmmss') + '&ET=' + moment(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD[T]HHmmss') + '&DESC=' + eventDescription + '&in_loc=' + setLocation(event)
            break
        default:
            console.error('undefined calendar type')
    }
    window.open(url, '_blank')
    return
}

function formatForAddtoCalendar(event, key, type) {
    let fullStart,
        fullEnd
    if (event.all_day) {
        fullStart = moment(event.start).format('YYYY-MM-DD')
        if (event.end !== event.start) {
            fullEnd = moment(event.end).add(1, 'days').format('YYYY-MM-DD')
        } else {
            fullEnd = moment(event.end).format('YYYY-MM-DD')
            if (type !== 'yahoo') fullEnd = moment(event.end).add(1, 'days').format('YYYY-MM-DD')
        }
    } else {
        fullStart = moment(event.start).format('YYYY-MM-DDTHH:mm:ss')
        fullEnd = moment(event.end).format('YYYY-MM-DDTHH:mm:ss')
    }
    if (type === 'yahoo' && event.end !== event.start) fullEnd = moment(fullEnd).subtract(1, 'day').format('YYYY-MM-DDTHH:mm:ss')

    return key === 'start' ? fullStart : fullEnd
}

export function setLocation(event, key) {

    if (event.location) {
        if (key === 'encode')
            return encodeURIComponent(event.location)
        else
            return event.location
    }

    let venue = event.venue
    if (venue && venue.address) {
        const subDataToProcess = [venue.address, venue.city, venue.statesList, venue.postal, venue.country]
        return arrStringify(subDataToProcess, '+')
    }

    return ''
}

const arrStringify = (arr, separator = '') => {
    return arr.filter(v => !!v).map(v => encodeURIComponent(v)).join(separator)
}

const plainTextFromHTML = (htmlStr) => {
    let div = document.createElement("div")
    div.innerHTML = htmlStr
    return div.textContent || div.innerText || ""
}

const createDesc = (event, type) => {
    return `${event.desc ? `${encodeURIComponent(type === 'yahoo' ? plainTextFromHTML(event.desc) : event.desc)}` : ""}
    ${Object.values(event.organizer)?.length > 0 ? "%0D%0A%0D%0AVenue Details:%0D%0A" : ""}
    ${event.venue.name ? `${encodeURIComponent(event.venue.name)}%0D%0A` : ""}
    ${event.venue.phone ? `${encodeURIComponent(event.venue.phone)}%0D%0A` : ""}
    ${event.venue.email ? `${encodeURIComponent(event.venue.email)}%0D%0A` : ""}
    ${event.venue.website ? `${encodeURIComponent(event.venue.website)}%0D%0A%0D%0A`: ""}
    ${Object.values(event.organizer)?.length > 0 ? "%0D%0A%0D%0AOrganizer Details:%0D%0A" : ""}
    ${event.organizer.name ? `${encodeURIComponent(event.organizer.name)}%0D%0A` : ""}
    ${event.organizer.phone ? `${encodeURIComponent(event.organizer.phone)}%0D%0A` : ""}
    ${event.organizer.email ? `${encodeURIComponent(event.organizer.email)}%0D%0A` : ""}
    ${event.organizer.website ? `${encodeURIComponent(event.organizer.website)}` : ""}`
}

export function openShareUrl(e, type, eventUrl) {
    e.stopPropagation()
    let base,
        isFb = type === 'facebook'
    switch (type) {
        case 'facebook':
            base = 'https://facebook.com/sharer/sharer.php?u='
            break
        case 'linkedin':
            base = 'https://www.linkedin.com/sharing/share-offsite/?url='
            break
        case 'twitter':
            base = 'http://twitter.com/share?url='
            break
        default:
            console.error('undefined share url type')
    }
    window.open(base + eventUrl, !isFb && '_blank', isFb && 'resizable,width=500,height=400')
    return
}

export function generateEventUrl(event, encode, boomEventUrlBase, comp_id, instance) {
    if (event.kind === 4) {
        return event.eventPageUrl || ''
    } else {
        return `${boomEventUrlBase}${encodeId(`${event.id}`)}?${encode ? encodeURIComponent(`comp_id=${comp_id}&instance=${instance}&startDate=${event.repeat.type ? moment(event.start).format('YYYY-MM-DD') : ''}`) : `comp_id=${comp_id}&instance=${instance}`}&startDate=${event.repeat.type ? moment(event.start).format('YYYY-MM-DD') : ''}`
    }
}

export function copyLink(e, setCopyTooltipText, copiedTooltipText, eventUrl) {
    e.stopPropagation()
    let a = document.createElement('textarea')
    a.innerText = eventUrl
    document.body.appendChild(a)
    a.setSelectionRange(0, 99999)
    a.select()
    document.execCommand('copy')
    a.remove()
    setCopyTooltipText(copiedTooltipText)
}