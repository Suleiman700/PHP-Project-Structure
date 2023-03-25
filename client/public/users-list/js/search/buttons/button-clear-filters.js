import ButtonManager from '../../../../../../javascript/managers/button-manager/ButtonManager.js';

import Search from '../Search.js';

function callback(_cb) {
    Search.clearFilters()
}

const buttonClearFilters = new ButtonManager('search-field', 'button-clear-filters', callback)

buttonClearFilters.onClick()

buttonClearFilters.shown(false)

export default buttonClearFilters