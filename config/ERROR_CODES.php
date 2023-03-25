<?php

$ERROR_CODES = array(
    "USERS" => array(
        "GET_COUNTRIES" => array(
            "QUERY_FAILED_TRY_CATCH" => array(
                "NAME" => "Error getting countries",
                "CODE" => "UGQ.1001",
                "CAUSE" => "The query failed to execute properly. This could be due to a variety of reasons including incorrect SQL syntax, missing data, or connectivity issues.",
                "FIX" => "Check the SQL syntax, verify that all required data has been provided, and troubleshoot any connectivity issues."
            ),
        ),
        "COUNT_USERS" => array(
            "QUERY_FAILED_TRY_CATCH" => array(
                "NAME" => "Error counting users",
                "CODE" => "UCQ.1001",
                "CAUSE" => "The query failed to execute properly. This could be due to a variety of reasons including incorrect SQL syntax, missing data, or connectivity issues.",
                "FIX" => "Check the SQL syntax, verify that all required data has been provided, and troubleshoot any connectivity issues."
            ),
        ),
        "REQUEST" => array(
            "UNKNOWN_METHOD" => array(
                "NAME" => "Unknown method",
                "CODE" => "URU.1001",
                "CAUSE" => "The passed method is unknown",
                "FIX" => "Check the method name you are sending in the request"
            ),
        ),
        "SEARCH" => array(
            "FILTERS_NOT_FOUND" => array(
                "NAME" => "Filters are not found",
                "CODE" => "USF.1001",
                "CAUSE" => "There are no filters passed with the request",
                "FIX" => "Make sure that the search filters are sent with the request"
            ),
            "QUERY_FAILED_TRY_CATCH" => array(
                "NAME" => "Error counting users",
                "CODE" => "UCQ.1001",
                "CAUSE" => "The query failed to execute properly. This could be due to a variety of reasons including incorrect SQL syntax, missing data, or connectivity issues.",
                "FIX" => "Check the SQL syntax, verify that all required data has been provided, and troubleshoot any connectivity issues."
            ),
        ),
    ),
);