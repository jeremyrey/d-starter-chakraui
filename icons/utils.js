import { dataset as chakra_ui_dataset } from './chakra.dataset'
import { dataset as react_bs_dataset } from './react_bs.dataset'

const ICONS_SET_MAPPER = {
  chakra: chakra_ui_dataset,
  react_bs: react_bs_dataset,
}

const getIconsSetByProvider = (providerName) => {
  return ICONS_SET_MAPPER[providerName]
}

export default getIconsSetByProvider
