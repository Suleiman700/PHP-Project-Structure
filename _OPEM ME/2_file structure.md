
# File Structure

```AI generated and checked by a human :)```

project is separated into several files and directory, Here is the tree view of the file structure.

```plaintext
├───api
│       fetch_users.php
│
├───classes
│       Users.php
│
├───client
│   ├───assets
│   │   ├───css
│   │   ├───images
│   │   ├───js
│   │   └───vendor
│   │
│   ├───include
│   │       section-bottom.php
│   │       section-head.php
│   │       theme-header.php
│   │       theme-sidebar.php
│   │
│   └───public
│       ├───dashboard
│       │       index.php
│       │
│       └───users-list
│           │   index.php
│           │
│           ├───js
│           │   │   init.js
│           │   │
│           │   ├───data
│           │   │       DataCountiesCodes.js
│           │   │
│           │   ├───search
│           │   │   │   Search.js
│           │   │   │
│           │   │   ├───buttons
│           │   │   │       button-clear-filters.js
│           │   │   │       button-search-filters.js
│           │   │   │
│           │   │   ├───inputs
│           │   │   │       input-age.js
│           │   │   │       input-email.js
│           │   │   │       input-name.js
│           │   │   │
│           │   │   └───selects
│           │   │           select-country.js
│           │   │
│           │   └───tables
│           │           UsersTable.js
│           │
│           └───php
│                   file.php
│
├───config
│       config.php
│       connection.php
│       ERROR_CODES.php
│
└───javascript
    ├───managers
    │   ├───button-manager
    │   │       ButtonManager.js
    │   │       Document.md
    │   │
    │   ├───input-manager
    │   │       Document.md
    │   │       InputManager.js
    │   │
    │   └───select-manager
    │           SelectManager.js
    │
    └───requests
            RequestGet.js
            RequestPost.js
```

---

## API Directory
The `api` directory contains the `fetch_users.php` script,
which is responsible for fetching user data from the API.

---

## Classes Directory
The `classes` directory contains the `Users.php` class, which is responsible for user data.

---

## Client/Assets Directory

This directory contains all the assets used in the client side of the application. It is divided into several sub-directories, each one contains assets of a specific type. The sub-directories are as follows:
* `css`: contains all the CSS files used in the application.
* `images`: contains all the images used in the application.
* `js`: contains all the JavaScript files used in the application.
* `vendor`: contains all the third-party libraries and frameworks used in the application.

---

### Client/Include Directory
```plaintext
├───client
│   ├───include
│   │       section-bottom.php
│   │       section-head.php
│   │       theme-header.php
│   │       theme-sidebar.php
```

* `section-bottom.php`: This file contains the HTML code that is included at the bottom of every page of the application. It includes the links to the JavaScript files and any other code that needs to be included at the bottom of the page.
* `section-head.php`: This file contains the HTML code that is included in the `<head>` section of every page of the application. It includes the meta tags, the title, the links to the CSS files, and any other code that needs to be included in the `<head>` section.
* `theme-header.php`: This file contains the HTML code for the header section of the application's theme.
* `theme-sidebar.php`: This file contains the HTML code for the sidebar section of the application's theme. It includes the menu items and any other elements that need to be included in the sidebar.

---

### Client/Public Directory

The `public` directory contains the files that are publicly accessible by the end-users of the application.

`public/dashboard` directory contains the demo dashboard of the application.

`public/users-list` directory contains the user list page of the application. The directory has the following subdirectories and files:

* `index.php`: The entry point for the user list page.
* `php/`: directory contains the server-side PHP files used by the user list page. The directory has only one file, file.php, which is used to get the user data from the server.
* `js/`: The directory contains all the JavaScript files used by the user list page.
  * `init.js`: Initializes the page and loads all the required scripts.
  * `data/`: The directory contains data files used by the user list page.
    * `DataCountiesCodes.js`: Contains a list of all countries and their codes. 
  * `search/`: The directory contains the search module of the user list page.
    * `Search.js`: Implements the search functionality.
    * `buttons/`: The directory contains the buttons used by the search module.
      * `button-clear-filters.js`: Implements the clear filters button.
      * `button-search-filters.js`: Implements the search filters button.
    * `inputs/`: The directory contains the input fields used by the search module.
      * `input-age.js`: Implements the age input field.
      * `input-email.js`: Implements the email input field.
      * `input-name.js`: Implements the name input field.
    * `selects/`: The directory contains the select fields used by the search module.
      * `select-country.js`: Implements the country select field.
     
  * `tables/`: The directory contains the table module of the user list page.
    * `UsersTable.js`: Implements the user list table.
---

### Config Directory

```plaintext
├───config
│       config.php
│       connection.php
│       ERROR_CODES.php
│
```

* `config.php`: This file contains configuration settings for the project, such as base path, application name.

* `connection.php`: This file establishes a connection to the database.

* `ERROR_CODES.php`: This file contains a list of error codes that are used throughout the project to identify and handle errors.

---

### Javascript Directory

The `javascript` directory contains files related to the front-end functionality of the project.

```plaintext
└───javascript
    ├───managers
    │   ├───button-manager
    │   │       ButtonManager.js
    │   │       Document.md
    │   │
    │   ├───input-manager
    │   │       Document.md
    │   │       InputManager.js
    │   │
    │   └───select-manager
    │           SelectManager.js
    │
    └───requests
            RequestGet.js
            RequestPost.js
```

* `managers` directory: This directory contains classes that help manage the functionality of buttons, inputs, and selects in the project.
  * `button-manager`: This directory contains the `ButtonManager.js` file that provides a simple way to manage button functionality in the project. The `Document.md` file is a document that describes the usage and functionality of the `ButtonManager` class.
  * `input-manager`: This directory contains the `InputManager.js` file that provides a simple way to manage input functionality in the project. The `Document.md` file is a document that describes the usage and functionality of the `InputManager` class.
  * `select-manager`: This directory contains the `SelectManager.js` file that provides a simple way to manage select functionality in the project. The `Document.md` file is a document that describes the usage and functionality of the `SelectManager` class.


* `requests` directory: This directory contains files that handle requests made to the server.
  * `RequestGet.js`: This file contains a class that handles GET requests made to the server. 
  * `RequestPost.js`: This file contains a class that handles POST requests made to the server.