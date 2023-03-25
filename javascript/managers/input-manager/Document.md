# **InputManager**

```plaintext
[]: # Author: Suleiman Jaber
[]: # Last Update: December 29 2022        
[]: # Version: 1.0
```

---

## About

`InputManager` is a concept of code that makes it easier for developers to manage inputs in their project,
This can be accomplished by creating object for each input, And since all inputs will share the same methods you will
just have to control the object which will control the input for you.

------

## How Does It Work ?

`InputManager` is very simple, it takes a few parameters upon creating the manager object, and it contains some useful
methods you can use such as (enable/disable, get value...etc).

You can basically import your input object into your script and start managing it without the need to use `document.querySelector`.

On each method you call, `InputManager` will look for your input in the DOM by the IDs you provided and modify it.

Please note that if you try to create manager object for input that cannot be found in the DOM you will get an error message

------

## How To Use ?

Here is an example of how to use `InputManager`.

First, You'll have to create a new file for your input.

Please note that you'll need to pass input parent id and input id:

| Parameter | Description                | Type   | Required |
|-----------|----------------------------|--------|----------|
| _parentId | The parent id of the input | string |     ✓    |
| _id       | The id of the input        | string |     ✓    |

```javascript
// File: input_username.js
import InputManager from '/javascript/helpers/handlers/inputs/InputManager.js'


const parentId = 'mainDivId'
const id = 'myInputId'

export default new InputManager(parentId, id)
```

Second, You can import this file in your script and start working on it.

```javascript
// File: init.js
import input_username from './inputs/input_username.js'

// Set input to 'disabled'
input_username.enabled(false)
```

------

## Methods

| Method       | Description                                                     | Takes   | Return           |
|--------------|-----------------------------------------------------------------|---------|------------------|
| doesExist()  | Check if the element exists in the DOM by the IDs you've passed | -       | boolean          |
| enabled()    | Enables or disabled the input                                   | boolean | -                |
| valueClear() | Clears the input's value & trigger onChange event               | -       | -                |
| valueGet()   | Get the input's value & trigger onChange event                  | -       | string/undefined |
| valueSet()   | Set the input's value & trigger onChange event                  | string  | -                |