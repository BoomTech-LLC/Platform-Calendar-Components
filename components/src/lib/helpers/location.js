import { validateURL } from "./commons";
import { LOCATION_TYPES } from "./constants";

export function getLocationOptions(data) {
    
    const value = data.values[data.type]

    switch (data.type) {
        case LOCATION_TYPES.physical:
            return {
                isLink: data.values?.physical?.lat && data.values?.physical?.lng,
                value: value.address,
                href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value.address)}`
            }
        case LOCATION_TYPES.online:
            return {
                isLink: true,
                value,
                href: validateURL(value)
            }
        default:
            return {
                isLink: false,
                value,
            }
    }
}