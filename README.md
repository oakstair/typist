# Typist

Let text be typed on yout home page as a nice effect.

## Setup
Include oakstair-typist.js in your page.

## Basic Typist


### HTML
```html
I am a</span> <span class="typist-text typist-blink" typist-extra="Google Cloud Data Engineer, Complexity and Redundancy Fighter">Full Stack Java Developer</span>
```

### CSS
```CSS
```

## Options

<table>
  <tr>
    <th class="name">Name</th>
    <th class="type">Type</th>
    <th class="default">Default</th>
    <th class="desc">Description</th>
  </tr>
  <tr>
    <td>letterInterval</td>
    <td>integer</td>
    <td>60</td>
    <td class="desc">Miliseconds between typing a letter</td>
  </tr>
  <tr>
    <td>textInterval</td>
    <td>integer</td>
    <td>3000</td>
    <td class="desc">Miliseconds between text rotation</td>
  </tr>
  <tr>
    <td>selectClassName</td>
    <td>string</td>
    <td>selectedText</td>
    <td class="desc">Select element class name</td>
  </tr>
  <tr>
    <td>onSlide</td>
    <td>function</td>
    <td>null</td>
    <td class="desc">Callback when the slide changes, returns two arguments `text` (current textvariation) and `option` (an object of variables that might be of use, like the `slideIndex` or the typist element itself)</td>
  </tr>
</table>

## Requirements
typist does not depend on anything at all!

## Source code
Use it any way you want!
