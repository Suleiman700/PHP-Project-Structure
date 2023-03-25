<?php

require_once '../../../../config/config.php';
require_once '../../../../config/ERROR_CODES.php';
require_once '../../../../classes/Users.php';
$Users = new Users();

// method to fetch data when initializing page
if (isset($_GET['method']) && $_GET['method'] === 'fetchInitData') {

    $res = array(
        'state' => true,
        'countries' => array(),
        'countUsers' => array()
    );

    // get countries
    $res['countries'] = $Users->get_counties();
    $res['countUsers'] = $Users->count_users();

    echo json_encode($res);
}
// search users
else if (isset($_POST['method']) && $_POST['method'] === 'searchUsers') {
    $res = array(
        'dataFound' => false,
        'data' => array(),
        'errors' => array(),
    );

    // check if filters are set
    if (isset($_POST['filters'])) {
        // by filters and search users
        $searchResults = $Users->search_users($_POST['filters']);

        // store response
        $res['dataFound'] = $searchResults['dataFound'];
        $res['data'] = $searchResults['data'];
    }
    // filters not found
    else {
        // store error
        $res['errors'][] = array(
            'error' => $ERROR_CODES['USERS']['SEARCH']['FILTERS_NOT_FOUND']['NAME'],
            'errorCode' => $ERROR_CODES['USERS']['SEARCH']['FILTERS_NOT_FOUND']['CODE'],
        );
    }

    echo json_encode($res);
}
// unknown method name
else {
    $res = array(
        'state' => false,
        'errors' => array()
    );

    $res['errors'][] = array(
        'error' => $ERROR_CODES['USERS']['REQUEST']['UNKNOWN_METHOD']['NAME'],
        'errorCode' => $ERROR_CODES['USERS']['REQUEST']['UNKNOWN_METHOD']['CODE'],
    );

    echo json_encode($res);
}