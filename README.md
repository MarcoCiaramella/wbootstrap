# wbootstrap
wboostrap is a minimal wrapper for DOM based on Bootstrap and Google Material.
## Install
```
npm i @marco_ciaramella/wbootstrap
```
## Usage
Create an html page like this
```html
<!DOCTYPE html>
<html>

<head>

    <!-- import Material Icon -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">

    <!-- CSS only (version 5) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.X.X/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper (version 5) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.X.X/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
</head>

<script src="index.js"></script>

</html>
```
Add your js code in index.js.

First of all you need a body element
```javascript
const body = new Body();
```
then you can append child to this body. For example
```javascript
body.appendChild(new FlexColumnFull(3));
```
Each HTML element defined in this module is a subclass of [Element](https://marcociaramella.github.io/wbootstrap/Element.html). If you want to add a custom element or a new one you should extend Element class or one of his subclasses.

See public [documentation](https://marcociaramella.github.io/wbootstrap/) for all supported HTML elements styled with bootstrap 5. Further samples will follow as soon as possible.
