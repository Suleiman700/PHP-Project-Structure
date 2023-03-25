import ButtonManager from '../../../../../../javascript/managers/button-manager/ButtonManager.js';

import Search from '../Search.js';

function callback(_cb) {
    Search.performSearch()
}

const buttonSearchFilters = new ButtonManager('search-field', 'button-search-filters', callback)

buttonSearchFilters.onClick()

export default buttonSearchFilters