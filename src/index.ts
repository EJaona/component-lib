/* Importing index.css here allows us to skip importing it into
each and every component file while still generating a
single css bundle containing all necessary Tailwind styles.
*/

import './tailwind.css'

/** Components */
export { Primary, buttonProps } from './components/buttons/Primary'
export { Carousel, carouselProps } from './components/carousel'
export { Icon, iconsListType } from './components/dynamicIcon'
export { LabeledInput, LabeledTextArea } from './components/inputs'
export { Drawer } from './components/modals/drawer'
export { Popup } from './components/modals/popup'
export { Toast } from './components/toast'