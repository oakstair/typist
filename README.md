# Typist

Let text be typed on yout home page as a nice effect. 

For a demo you may visit my home page http://www.oakstair.se where it is used.

## Setup
Include oakstair-typist.js in your page.

### HTML
```html
I am a</span> <span class="typist-text typist-blink" typist-extra="Google Cloud Data Engineer, Complexity and Redundancy Fighter">Full Stack Java Developer</span>
```

### CSS
```CSS
/*  Typist styling */
@-webkit-keyframes blink
{
    0%
    {
        opacity: 1.0;
    }
    50%
    {
        opacity: .0;
    }
    100%
    {
        opacity: 1.0;
    }
}

@keyframes blink
{
    0%
    {
        opacity: 1.0;
    }
    50%
    {
        opacity: .0;
    }
    100%
    {
        opacity: 1.0;
    }
}

.typist-blink
{
    font-weight: 800;
}

.typist-blink:after
{
    position: relative;
    top: 6px;

    display: inline-block;

    height: 30px;
    margin-right: 7px;
    margin-left: 3px;

    content: ' ';
    -webkit-animation: blink 1s step-start 0s infinite;
            animation: blink 1s step-start 0s infinite;

    border-right: 2px solid;
}

.typist-blink > .typist-untyped
{
    display: none;
}
```

## Options
Look in oakstair-typist.js. The init method takes a number of default parameters.

## Requirements
Does not depend on anything.

## Source code
Use it any way you want.
