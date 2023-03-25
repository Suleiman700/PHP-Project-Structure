// inputs
import inputName from './inputs/input-name.js';
import inputAge from './inputs/input-age.js';
import inputEmail from './inputs/input-email.js';

// selects
import selectCountry from './selects/select-country.js';

// buttons
import buttonSearchFilters from './buttons/button-search-filters.js';
import buttonClearFilters from './buttons/button-clear-filters.js';

// tables
import UsersTable from '../tables/UsersTable.js';

// requests
import RequestPost from '../../../../../javascript/requests/RequestPost.js';

class Search {
    constructor() {}

    /**
     * perform search
     */
    async performSearch() {
        const filterName = inputName.valueGet()
        const filterAge = inputAge.valueGet()
        const filterEmail = inputEmail.valueGet()
        const filterCountry = selectCountry.get_selected_value()

        // this is used to show button to clear filters if any filter is applied
        let filterApplied = false
        if (filterName !== undefined || filterAge !== undefined || filterEmail !== undefined || filterCountry !== undefined) filterApplied = true
        // prevent search when there are no filters applied
        if (!filterApplied) return

        // disable fields
        const fields = [inputName, inputAge, inputEmail, selectCountry, buttonSearchFilters, buttonClearFilters]
        fields.forEach(field => field.enabled(false))

        // store filters
        const filters = {
            filterName,
            filterAge,
            filterEmail,
            filterCountry
        }

        // show loading
        Swal.fire({
            icon: 'info',
            title: 'Searching',
            html: '<i class="fa fa-spinner fa-spin"></i> Please Wait...',
            showConfirmButton: false,
            allowOutsideClick: false
        });

        // perform search
        const response = await RequestPost.send('./php/file.php', {filters}, 'searchUsers')
        /*
            Example of response:
            {
                "dataFound": true,
                "data": [
                    {
                        "id": "51",
                        "name": "Piper Walker",
                        "age": "45",
                        "country": "New Zealand",
                        "email": "piper.walker@example.com",
                        "profile_pic": "https://randomuser.me/api/portraits/women/83.jpg"
                    }
                ],
                "errors": []
            }
         */

        // fake request timer
        setTimeout(() => {
            Swal.close()
        }, 500)

        // clear table
        UsersTable.clearRows()

        // handle request response
        if (response['dataFound']) {
            // add data to the table
            const usersData = response['data']
            usersData.forEach(userData => {
                UsersTable.rowAdd(userData)
            })
        }
        else {
            // show no results row
            UsersTable.showNoResultsRow()
        }


        // show clear filters button if filters applied
        if (filterApplied) {
            buttonClearFilters.shown(true)
            buttonClearFilters.enabled(true)
        }
        // hide clear filters button if no filters applied
        else {
            buttonClearFilters.shown(false)
        }

        // enable fields
        fields.forEach(field => field.enabled(true))
    }

    /**
     * clear filters and add back all passwords to table
     * @return {void}
     */
    clearFilters() {
        // hide clear filters button
        buttonClearFilters.shown(false)

        // clear fields
        inputName.valueClear()
        inputAge.valueClear()
        inputEmail.valueClear()
        selectCountry.deselect()

        // enable fields
        const fields = [inputName, inputAge, inputEmail, selectCountry, buttonSearchFilters, buttonClearFilters]
        fields.forEach(field => field.enabled(true))
    }


    /**
     * put categories into filter categories
     * @param _categories {array}
     *
     * example of _categories:<br>
     * [<br>
     *     {"id": "0", "name": "Friends"}<br>
     * ]<br>
     */
    putCategoriesIntoSelect(_categories) {
        selectFilterCategory.put_options(_categories, 'id', 'name')
    }
}

export default new Search()