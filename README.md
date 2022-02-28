# Boom-components library provides separate react components

### Usage
1. If the library is not set in package.json, just do **"npm i git+https://github.com/NavasardianMichael/boom-components.git"**
2. For installing the updated version of the library, just add this pair to **scripts** in **package.json**: **"update:bcc": "npm install git+https://github.com/NavasardianMichael/boom-components.git"**, and run the command **"npm run update:bc"** to install the fresh version of the library
3. Import needed component separately, e.g.: **"import AddShareIcons from 'boom-components/dist/AddShareIcons'"**
4. Happy Hacking! ✌






### Components

#### AddShareIcons


**Prop** | **Value Example** | **type**
---- | ---------- | ----
comp_id | 'comp-knoo8ma8' | string **(Required)**
instance | 'YBqfV6G8MmNwz...' | string **(Required)**
event | *event json* | object **(Required)**
iconsSectionCustomClassNames | ['customClassName1'] | arrayOf(PropTypes.string)
showAddToIcons | true | bool
addToSectionTitle | 'Add to calendar' | string
addToIconsCustomClassNames | ['customClassName2', 'customClassName3' ] | arrayOf(PropTypes.string)
showShareIcons | true | bool
shareSectionTitle | 'Share Event' | string
shareIconsCustomClassNames | ['customClassName4', 'customClassName5' ]} | arrayOf(PropTypes.string)
boomEventUrlBase | 'https://calendar.boomte.ch/single/' | string **(Required)**
copyActionTooltipText | 'Copy event url' | string
copiedTooltipText | 'Copied' | string
sequence | 'vertical' | oneOf(['vertical' 'horizontal'])


#### Description


**Prop** | **Value Example** | **type**
---- | ---------- | ----
wrapperCustomClassNames | ['custom-1', 'custom-2'] | arrayOf(PropTypes.string)

*Note: Description string has to be given to component as children, which will be parsed into html*
