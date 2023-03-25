export default class ButtonManager {

    /**
     * Create new button object
     * @param _parentId {string}
     * @param _id {string}
     * @param _callBack {function}
     * @param _options {object}
     */
    constructor(_parentId, _id, _callBack, _options={}) {
        this.parentId = _parentId
        this.id = _id
        this.cb = _callBack
        this.options = _options

        this.defaultOptions = {
            hasSpinner: false, // true|false
            spinnerDir: 'RTL' // RTL|LTR
        }

        // Check if element exists
        this.doesExists()

        // Handle options
        this.handleOptions()
    }

    /**
     * Handle options
     *
     * Example of _options:
     *     const options = {
     *         hasSpinner: true
     *     }
     */
    handleOptions() {
        // Go foreach option
        for (const optionsKey in this.options) {
            // Check if option exist in default options
            if (optionsKey in this.defaultOptions) {
                // Update default option value
                this.defaultOptions[optionsKey] = this.options[optionsKey]
            }
            else {
                // Option not found and warn about that
                console.warn(`[ButtonBuilder] Option key "${optionsKey}" was not found`)
            }
        }


        // Handle 'hasSpinner' and 'spinnerDir' options
        if (this.defaultOptions['hasSpinner'] === true) {
            // Get button
            const button = document.querySelector(`#${this.parentId} button#${this.id}`)

            // Save original button text
            const button_text = button.innerText

            // Insert spinner and original text into the button
            if (this.defaultOptions['spinnerDir'] === 'RTL') button.innerHTML = `${button_text} <span class="fa fa-spinner" id="${this.id}_spinner" hidden></span>`
            else if (this.defaultOptions['spinnerDir'] === 'LTR') button.innerHTML = `<span class="fa fa-spinner" id="${this.id}_spinner" hidden></span> ${button_text}`
        }
    }

    /**
     * Check if button exists
     * @returns {boolean}
     */
    doesExists() {
        if (document.querySelector(`#${this.parentId} button#${this.id}`) !== null) {
            return true
        }
        else {
            console.error(`[ButtonManager] Button #${this.id} does not exist in parent #${this.parentId}`)
            return false
        }
    }

    onClick() {
        document.querySelector(`#${this.parentId} button#${this.id}`).addEventListener('click', () => {
            this.cb(this)
        })
    }

    /**
     * Enable or disable the button
     * @param _option {boolean}
     */
    enabled(_option) {
        document.querySelector(`#${this.parentId} button#${this.id}`).disabled = !_option
    }

    /**
     * Show or hide the button
     * @param _option {boolean}
     */
    shown(_option) {
        if (this.doesExists()) {
            document.querySelector(`#${this.parentId} button#${this.id}`).style.display = (_option === true)? 'inline':'none'
        }
    }

    /**
     * Show or hide button spinner
     * @param _option {boolean}
     */
    showSpinner(_option) {
        // Check if hasSpinner is enabled
        if (!this.defaultOptions['hasSpinner']) return

        // Get spinner
        const spinner = document.querySelector(`#${this.parentId} button#${this.id} #${this.id}_spinner`)

        // Set spinner visibility
        if (_option) spinner.removeAttribute('hidden')
        else spinner.setAttribute('hidden', 'hidden')
    }

    /**
     * Remove button from the DOM
     */
    remove() {
        document.querySelector(`#${this.parentId} button#${this.id}`).remove()
    }
}