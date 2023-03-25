# **ButtonManager**

```plaintext
[]: # Author: Suleiman Jaber
[]: # Last Update: December 29 2022        
[]: # Version: 1.1
```

---

## About

`ButtonManager` is a concept of code that makes it easier for developers to manage buttons in their project,
This can be accomplished by creating object for each button, And since all buttons will share the same methods you will
just have to control the object which will control the button for you.

In normal cases you would create function for each button and declare the methods, This can be kinda hard when working
with many buttons and specially when number of buttons shares the same methods.

Another major problem `ButtonManager` aims to solve is the duplicated codes, Lets say you have two buttons that have the `onClick` event,
and you want to make changes on this event. So you will have to edit two separated files but with `ButtonManager` you will just have to edit one file.


------

## How Does It Work ?

`ButtonManager` is very simple, it takes a few parameters upon creating the manager object, and it contains some useful
methods you can use such as (enable/disable button, show/hide button...etc).

You can basically import your button object into your script and start managing it without the need to use `document.querySelector`.

On each method you call, `ButtonManager` will look for your button in the DOM and modify it.

Please note that if you try to create manager object for button that cannot be found in the DOM you will get an error message

---

## Current Problem

The major problem as I described in the **about** section is that managing multiple buttons can be difficult.

For example, lets say that we are working on a project that requires adding two buttons,
each button should have `onClick` event and `disabled` method

Project buttons:
1) Save button
2) Search button


```javascript
// File: Btn_Save.js

class Btn_Save {
    constructor() {
        this.btn_id = 'btn_save'
        this.on_click()
    }

    onClick() {
        document.querySelector(`#${this.btn_id}`).addEventListener('click', () => {
            console.log('Save button clicked')
        })
    }
    
    disabled(_option) {
        document.querySelector(`#${this.btn_id}`).disabled = !_option
    }
}

export default new Btn_Save()
```

```javascript
// File: Btn_Search.js

class Btn_Search {
    constructor() {
        this.btn_id = 'btn_search'
        this.on_click()
    }

    onClick() {
        document.querySelector(`#${this.btn_id}`).addEventListener('click', () => {
            console.log('Search button clicked')
        })
    }

    disabled(_option) {
        document.querySelector(`#${this.btn_id}`).disabled = !_option
    }
}

export default new Btn_Search()
```

```javascript
// File: Init.js

import Btn_Save from './buttons/Btn_Save.js'
import Btn_Search from './buttons/Btn_Search.js'
```

You see? for both buttons we have `onClick` and `disabled` methods which shares the same code, But what if we want to
update the `disabled` method? we will need to edit two separated files, And that's what `ButtonManager` aims to solve.

---



## Solution:

The solution is pretty simple, Lets have a look!

First thing you have `ButtonNanager.js` which is used when you want to create a new button object.

It takes a few parameters:

| Key       | Description                                              | Type     | Required |
|-----------|----------------------------------------------------------|----------|----------|
| _parentId | The parent id where your button is placed                | string   | ✓        |
| _id       | The id of your button                                    | string   | ✓        |
| _callBack | Function that will be called when user clicks the button | function | ✓        |
| _options  | Options to modify button                                 | object   | x        |

This will create a button object that can be used anywhere in your code by just importing your created button object.

Example:

```javascript
// File: Btn_Save.js

import ButtonManager from '/javascript/helpers/handlers/buttons/ButtonManager.js'

const callBack = (_cb) => {
    // _cb is the button object itself
    console.log('Button clicked')
}
const Btn_Save = new ButtonManager('parent_div', 'btn_save', callBack)
export default Btn_Save
```

```javascript
// File: Btn_Search.js

import ButtonManager from '/javascript/helpers/handlers/buttons/ButtonManager.js'

const callBack = (_cb) => {
    // _cb is the button object itself
    console.log('Button clicked')
}
const Btn_Search = new ButtonManager('parent_div', 'btn_search', callBack)
export default Btn_Search
```


```javascript
// File: Init.js

// Buttons
import Btn_Save from './buttons/Btn_Save.js'
import Btn_Search from './buttons/Btn_Search.js'

// Disable save button (can be used anywhere in file)
Btn_Save.enabled(false)

// Hide search button (can be used anywhere in file)
Btn_Search.show_btn(false)
```

Let's say that we want to modify the `enabled` method, this way we only have to edit one file which is `ButtonManager.js`

---

## onClick Event

By default, buttons above does not have `onClick` event, In order to declare click events on them, you will simply have
to use `Btn_Test.onClick()` in your button file.

Example:


```javascript
// File: Btn_Search.js

import ButtonManager from '/javascript/helpers/handlers/buttons/ButtonManager.js'

const callBack = (_cb) => {
    // _cb is the button object itself
    console.log('Button clicked')
}
const Btn_Search = new ButtonManager('parent_div', 'btn_search', callBack)

// Declare onClick event - onClick event will be enabled upon creating the button object
Btn_Search.onClick()

export default Btn_Search
```


---

## Passing Options


In `Solution` section we have seen `_options` parameter that can be passed to the button manager class, This parameter
can modify some button settings.

For example, You can show spinner inside the button by passing a specific options.

`ButtonBuilder.js` have default options that are saved in its constructor, And you when pass options it will update default
option value's to your passed option's value.

```javascript
// File: ButtonManager.js

constructor(... _options={}) {
    
    // Default options are stored here
    this.defaultOptions = {
        hasSpinner: false, // true|false
        spinnerDir: 'RTL' // RTL|LTR
    }
    
    // Handle options
    this.handleOptions()
}
```

```javascript
// File: Btn_Search.js

import ButtonManager from '/javascript/helpers/handlers/buttons/ButtonManager.js'

const callBack = (_cb) => {
    // _cb is the button object itself
    console.log('Button clicked')
    
    // Show spinner after clicking the button
    _cb.showSpinner(true)
}

// Options
const options = {
    hasSpinner: true // Button will have spinner and can be showed by using: Btn_Search.showSpinner(true)
}

const Btn_Search = new ButtonManager('parent_div', 'btn_search', callBack, options)

// Declare onClick event - onClick event will be enabled upon creating the button object
Btn_Search.onClick()

export default Btn_Search
```

----

## Methods

| Method        | Description                                                     | Takes   | Return  |
|---------------|-----------------------------------------------------------------|---------|---------|
| doesExist()   | Check if the element exists in the DOM by the IDs you've passed | -       | boolean |
| onClick()     | Enable onClick event on this element                            | -       |         |
| enabled()     | Enable or disable the button                                    | boolean | -       |
| shown()       | Show or hide the button                                         | boolean | -       |
| showSpinner() | Show or hide the button's spinner (require passing option)      | boolean | -       |
| remove()      | Remove the button from the DOM                                  | -       | -       |

----

### Options

| Option     | Description                                                                         | Values       | Default Value |
|------------|-------------------------------------------------------------------------------------|--------------|---------------|
| hasSpinner | If the button should have spinner in it (if true, spinner will be added but hidden) | true / false | false         |
| spinnerDir | Change the spinner direction, On the left or right side of button's text            | RTL / LTR    | RTL           |