# Interactive Image [![npm version](https://badge.fury.io/js/interactiveimagejs.svg)](http://badge.fury.io/js/interactiveimagejs) [![Code Climate](https://codeclimate.com/github/jpchateau/Interactive-Image/badges/gpa.svg)](https://codeclimate.com/github/jpchateau/Interactive-Image)

> A jQuery plugin to embed interactive images on your website.

## Features

* Interactive texts and images over large pictures
* Flexible configuration
* Easily customizable with CSS
* Lightweight
* Installable via package managers

[See it in action](https://www.jpchateau.com/demo/interactive-image)

## Installation

**Important:** [jQuery](https://jquery.com/download/) is required.
Install it via your package manager, a CDN or simply download it.

**NPM**

```sh
$ npm install --save interactiveimagejs
```

**Yarn**

```sh
$ yarn add interactiveimagejs
```

**Download**

You can also download the production version or the development version from GitHub.
All these files (js, css and fonts) are located in the `dist` directory.

```html
<head>
    <link rel="stylesheet" href="interactive-image.min.css" />
</head>
<body>
    <script src="interactive-image.min.js"></script>
</body>
```

## Usage

Edit the source code of your web page:

**HTML**

```html
<style>
.interactive-image {
    width: 900px;
    height: 600px;
    background: url('/path/to/main-image.png');
}
</style>

<div class="interactive-image"></div>
```

**JavaScript**

```javascript
// Items collection
var items = [
    {
        type: "text",
        title: "Fur",
        description: "The fur of clouded leopards is...",
        position: {
            left: 100,
            top: 50
        }
    },
    {
        type: "picture",
        path: "/path/to/picture.png",
        caption: "A baby clouded leopard",
        position: {
            left: 200,
            top: 300
        }
    }
];

// Plugin configuration
var options = {
      debug: true
  };

// Plugin activation
$(document).ready(function () {
    $('.interactive-image').interactiveImage(items, options);
});
```

That's it!


## Style customization

If you want to change the rendering of an item, as for example the background color and the front color of text items, adapt
this CSS snippet to your needs and add it after the `interactive-image` css file is loaded:

```css
.interactive-image .text-item {
    background-color: blue;
    color: yellow;
}
```


## Configuration

### Plugin configuration options

| Option name     | Type    | Example   | Required | Default   | Purpose                 |
| --------------- | ------- | --------- |:--------:| --------- | ----------------------- |
| debug           | boolean | true      | No       | false     | Logs enabled in console |

### Items

**Text Item**

| Option name     | Type    | Example                      | Required | Default   | Purpose                  |
| --------------- | ------- | ---------------------------- |:--------:| --------- | ------------------------ |
| type            | string  | "text"                       | Yes      |           | Item type (text/picture) |
| title           | string  | "Lorem ipsum"                | Yes      |           | Title                    |
| description     | string  | "Lorem ipsum dolor sit amet" | Yes      |           | Descriptive text         |
| position        | object  |                              | Yes      |           | Marker position          |
| picturePath     | string  | "/path/to/picture.png"       | No       |           | Illustration             |
| link            | object  |                              | No       |           | HTTP Link                |

**Picture Item**

| Option name     | Type    | Example                               | Required | Default   | Purpose                        |
| --------------- | ------- | ------------------------------------- |:--------:| --------- | ------------------------------ |
| type            | string  | "picture"                             | Yes      |           | Item type (text/picture)       |
| path            | string  | "https://www.website.net/picture.png" | Yes      |           | Illustration                   |
| caption         | string  |                                       | No       |           | Illustration small description |
| position        | object  |                                       | Yes      |           | Marker position                |

**Position**

| Option name     | Type    | Example | Required | Default | Purpose          |
| --------------- | ------- | ------- |:--------:| ------- | ---------------- |
| left            | integer | 200     | Yes      |         | X absolute value |
| top             | integer | 50      | Yes      |         | Y absolute value |

**Link**

| Option name     | Type    | Example                         | Required | Default   | Purpose             |
| --------------- | ------- | ------------------------------- |:--------:| --------- | ------------------- |
| url             | string  | "https://www.website.net"       | Yes      |           | href attribute      |
| label           | string  | "Webpage name"                  | No       | url value | Name of the webpage |


## TODO

* Make the plugin adaptive to all screens
* Add audio items
* Add video items
* GUI to make hotspots positioning simpler 


## Contribute

Feel free to contribute and open some pull requests.

This jQuery plugin uses [npm](https://www.npmjs.com/) to manage dependencies and [webpack](https://webpack.js.org/) as bundler.

See the complete contributing guidelines [here](CONTRIBUTING.md).


## Alternatives

* Free: [iPicture](https://github.com/vincicat/jQuery-iPicture)
* Premium: [imageLinks](http://avirtum.com/imagelinks-jquery-plugin/)
* For business: [ThingLink](https://www.thinglink.com/)


## License

Copyright (c) 2015-2018 Jean-Philippe Chateau.
This content is released under [the MIT license](https://github.com/jpchateau/Interactive-Image/blob/master/LICENSE).