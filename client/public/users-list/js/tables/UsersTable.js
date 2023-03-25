
// data
import DataCountiesCodes from '../data/DataCountiesCodes.js';
// import ''

class UsersTable {
    constructor() {
        this.tableId = 'users-table'
    }

    /**
     * show no results row
     * @return {void}
     */
    showNoResultsRow() {
        // clear table rows
        this.clearRows()

        // show row
        const tableTbody = document.querySelector(`#${this.tableId} tbody`)

        const tr = document.createElement('tr')
        const td = document.createElement('td')
        td.classList.add('text-center')
        td.setAttribute('colspan', '100%')
        td.innerText = 'No Data Found!'
        tr.append(td)

        tableTbody.append(tr)
    }

    /**
     * show init row that says: Use filters above to search users
     * @returns void
     */
    showInitRow() {
        // clear table rows
        this.clearRows()

        // show row
        const tableTbody = document.querySelector(`#${this.tableId} tbody`)

        const tr = document.createElement('tr')
        const td = document.createElement('td')
        td.classList.add('text-center')
        td.setAttribute('colspan', '100%')
        td.innerText = 'Use filters above to search users'
        tr.append(td)

        tableTbody.append(tr)
    }

    /**
     * add row into table
     * @param _userData {object}
     * @return {void}
     *
     * example of _userData:<br>
     * {<br>
     *     "id": "51",<br>
     *     "name": "Piper Walker",<br>
     *     "age": "45",<br>
     *     "country": "New Zealand",<br>
     *     "email": "piper.walker@example.com",<br>
     *     "profile_pic": "https://randomuser.me/api/portraits/women/83.jpg"<br>
     * }<br>
     */
    rowAdd(_userData) {
        const row = this.#buildRow(_userData)

        // add row into table
        document.querySelector(`#${this.tableId} tbody`).appendChild(row)
    }

    /**
     * receive category info and build a row for it to be inserted into table
     * @param _userData
     * example of _userData:<br>
     * {<br>
     *     "id": "51",<br>
     *     "name": "Piper Walker",<br>
     *     "age": "45",<br>
     *     "country": "New Zealand",<br>
     *     "email": "piper.walker@example.com",<br>
     *     "profile_pic": "https://randomuser.me/api/portraits/women/83.jpg"<br>
     * }<br>
     */
    #buildRow(_userData) {
        const tr = document.createElement('tr')

        // id cell
        const cell_id = document.createElement('td')
        cell_id.innerText = _userData['id']
        tr.appendChild(cell_id)

        // name cell
        const cell_username = document.createElement('td')
        cell_username.innerText = _userData['name']
        tr.appendChild(cell_username)

        // age cell
        const cell_age = document.createElement('td')
        cell_age.innerText = _userData['age']
        tr.appendChild(cell_age)

        // country cell
        const cell_country = document.createElement('td')
        cell_country.innerText = _userData['country']
        tr.appendChild(cell_country)

        // flag cell
        const countryCode = DataCountiesCodes.getCountryCode(_userData['country'])
        const cell_flag = document.createElement('td')
        const flag_img = document.createElement('img')
        flag_img.src = `../../assets/images/flags/${countryCode}.png`
        flag_img.style.width = '40px'
        cell_flag.appendChild(flag_img)
        tr.appendChild(cell_flag)

        // email cell
        const cell_email = document.createElement('td')
        cell_email.innerText = _userData['email']
        tr.appendChild(cell_email)

        // picture cell
        const cell_picture = document.createElement('td')
        const img = document.createElement('img')
        img.src = _userData['profile_pic']
        img.style.width = '50px'
        cell_picture.appendChild(img)
        tr.appendChild(cell_picture)

        return tr
    }

    /**
     * clear table rows
     * @return {void}
     */
    clearRows() {
        document.querySelector(`#${this.tableId} tbody`).innerHTML = ''
    }

    /**
     * get the number of table rows
     * @return {number}
     */
    #rowsCount() {
        const rows = document.querySelectorAll(`#${this.tableId} tbody tr`)
        return rows.length
    }
}

export default new UsersTable()