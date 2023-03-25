
# How To Use

1. Import the database and table from the `0_database.sql` file located in the `/_OPEN ME/` directory.
2. Open the `/config/connection.php` file and enter your database connection details.
3. Open the `/config/config.php` file and change the `$basePath` variable according to your project location.
4. Navigate to the `/api/` directory and run the `fetch_users.php` file to fetch users from the API.
5. Open the project in your browser, and it will automatically redirect you to `/client/public/dashboard/index.php`.
6. Open the user list page.
7. Use the filters to search for users.

---

# How Does It Work

When opening the user list page, the `init` function sends a request to the server to retrieve data such as the count of users and countries to be used in the select filter.

After receiving the response, the JavaScript will add countries into the select filter.


When performing a search, the search button calls the search method, which retrieves the filter values and sends a request only if there are filters applied.

The server handles the request, performs some checks, and returns the data.