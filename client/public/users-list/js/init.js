// Import selectCountry module that provides a helper method to handle country select element
import selectCountry from './search/selects/select-country.js';

// Import Search module that provides a search functionality
import Search from './search/Search.js';

// Import UsersTable module that provides a table component to display the search results
import UsersTable from './tables/UsersTable.js';

// Show initial row of the table
UsersTable.showInitRow();

// Import RequestGet module that provides helper method to send GET requests
import RequestGet from '../../../../javascript/requests/RequestGet.js';

// Define an asynchronous function to prepare the page
async function preparePage() {
    // Show a loading dialog box
    Swal.fire({
        icon: 'info',
        title: 'Please Wait...',
        html: '<i class="fa fa-spinner fa-spin"></i> Preparing Page...',
        showConfirmButton: false,
        allowOutsideClick: false
    });

    // Send a GET request to fetch initial data from the server
    const response = await RequestGet.send('./php/file.php', {}, 'fetchInitData');

    /*
    Example of response:

    {
        "state": true,
        "countries": {
            "dataFound": true,
            "data": ["Australia","Canada","Denmark","India","Iran","New Zealand","Norway","Ukraine"],
            "errors": []
        },
        "countUsers": {
            "dataFound": true,
            "totalUsers": "10",
            "teenagerUsers": "0",
            "errors": []
        }
    }
    */

    // Fake request timer to simulate server response time
    setTimeout(() => {
        Swal.close();
    }, 500);

    // Check if the response was successful
    if (response['state']) {
        // Check if countries data was found in the response
        if (response['countries']['dataFound']) {
            // Get the countries array from the response, example: ["Australia","Canada","Denmark","India","Iran","New Zealand","Norway","Ukraine"]
            const countries = response['countries']['data'];

            // Add the countries as options to the select element
            selectCountry.put_options(countries);
        }

        // Check if user count data was found in the response
        if (response['countUsers']['dataFound']) {
            // Update the user count labels
            document.querySelector('#count-users').innerText = response['countUsers']['totalUsers'];
            document.querySelector('#count-teenager-users').innerText = response['countUsers']['teenagerUsers'];
        }
    }
    else {
        // Show error messages from the response
        Swal.fire({
            icon: 'error',
            title: 'Ops...',
            html: response['errors']
                .map(
                    (error) =>
                        `<div>
                            <h6>${error['error']}</h6>
                            <h6>Error Code: ${error['errorCode']}</h6>
                          </div>`
                ).join('')
        });
    }
}

// Call the preparePage function to initialize the page
await preparePage();