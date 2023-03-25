import InputManager from "../../../../../../javascript/managers/input-manager/InputManager.js";

const inputAge = new InputManager('search-field', 'filter-age')

inputAge.setAcceptDigitsOnly()

export default inputAge