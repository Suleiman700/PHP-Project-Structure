<?php

require_once __DIR__ . '/../config/connection.php';

class Users
{
    function __construct() {}

    public function get_counties(): array
    {
        global $conn;
        global $ERROR_CODES;

        $res = array(
            'dataFound' => false,
            'data' => array(),
            'errors' => array(),
        );

        try {
            $query = "SELECT DISTINCT country FROM users;";
            $stmt = mysqli_query($conn, $query);
            $result = $stmt->fetch_all(MYSQLI_ASSOC);

            if ($result) {
                $res['dataFound'] = true;
                $res['data'] = array_column($result, 'country');
            }
        }
        catch (Exception $e) {
            // store error
            $res['errors'][] = array(
                'error' => $ERROR_CODES['USERS']['GET_COUNTRIES']['QUERY_FAILED_TRY_CATCH']['NAME'],
                'errorCode' => $ERROR_CODES['USERS']['GET_COUNTRIES']['QUERY_FAILED_TRY_CATCH']['CODE'],
            );
        }

        return $res;
    }

    /**
     * count users
     * @return array<br>
     *
     * example of return:<br>
     * array(<br>
     *  'dataFound' => false,<br>
     *  'totalUsers' => 0,<br>
     *  'teenagerUsers' => 0,<br>
     *  'errors' => array(<br>
     *      0 => array(
     *          'error' = > 'Test Error'
     *          'errorCode' = > 'UGQ.1001'
     *      )<br>
     *  ),
     * );
     */
    public function count_users(): array
    {
        global $conn;
        global $ERROR_CODES;

        $res = array(
            'dataFound' => false,
            'totalUsers' => 0,
            'teenagerUsers' => 0,
            'errors' => array(),
        );

        try {
            $query = "SELECT 
                            COUNT(*) AS total_users,
                            COUNT(CASE WHEN age BETWEEN 12 AND 18 THEN 1 ELSE NULL END) AS teenager_users
                        FROM 
                            users;";
            $stmt = mysqli_query($conn, $query);
            $result = $stmt->fetch_all(MYSQLI_ASSOC);

            if ($result) {
                $res['dataFound'] = true;
                $res['totalUsers'] = $result[0]['total_users'];
                $res['teenagerUsers'] = $result[0]['teenager_users'];
            }
        }
        catch (Exception $e) {
            // store error
            $res['errors'][] = array(
                'error' => $ERROR_CODES['USERS']['COUNT_USERS']['QUERY_FAILED_TRY_CATCH']['NAME'],
                'errorCode' => $ERROR_CODES['USERS']['COUNT_USERS']['QUERY_FAILED_TRY_CATCH']['CODE'],
            );
        }

        return $res;
    }

    public function search_users(array $_filters): array
    {
        global $conn;
        global $ERROR_CODES;

        $res = array(
            'dataFound' => false,
            'data' => array(),
        );

        // Start with the base query
        $query = "SELECT * FROM users WHERE 1 ";

        // Initialize filter variables
        $filtersApplied = false;
        $nameFilter = '';
        $ageFilter = '';
        $emailFilter = '';
        $countryFilter = '';

        // check name filter
        if (isset($_POST['filters']['filterName'])) {
            $filtersApplied = true;
            $nameFilter = mysqli_real_escape_string($conn, $_POST['filters']['filterName']);
            $query .= "AND name LIKE '%$nameFilter%' ";
        }

        // check age filter
        if (isset($_POST['filters']['filterAge']) && is_numeric($_POST['filters']['filterAge'])) {
            $filtersApplied = true;
            $ageFilter = mysqli_real_escape_string($conn, $_POST['filters']['filterAge']);
            $query .= "AND age = '$ageFilter' ";
        }

        // check email filter
        if (isset($_POST['filters']['filterEmail'])) {
            $filtersApplied = true;
            $emailFilter = mysqli_real_escape_string($conn, $_POST['filters']['filterEmail']);
            $query .= "AND email LIKE '%$emailFilter%' ";
        }

        // check country filter
        if (isset($_POST['filters']['filterCountry'])) {
            $filtersApplied = true;
            $countryFilter = mysqli_real_escape_string($conn, $_POST['filters']['filterCountry']);
            $query .= " AND country LIKE '%$countryFilter%' ";
        }

        // check if filters are applied
        if ($filtersApplied) {
            try {
                $stmt = mysqli_query($conn, $query);
                $result = $stmt->fetch_all(MYSQLI_ASSOC);

                if ($stmt->num_rows) {
                    $res['dataFound'] = true;
                    $res['data'] = $result;
                }
            }
            catch (Exception $e) {
                // store error
                $res['errors'][] = array(
                    'error' => $ERROR_CODES['USERS']['SEARCH']['QUERY_FAILED_TRY_CATCH']['NAME'],
                    'errorCode' => $ERROR_CODES['USERS']['SEARCH']['QUERY_FAILED_TRY_CATCH']['CODE'],
                );
            }
        }

        return $res;
    }
}