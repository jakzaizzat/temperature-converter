# Temperature converter application

[Live URL](https://temperature-converter-peatix.vercel.app/)
[Github URL](https://github.com/jakzaizzat/temperature-converter)

## Setting up the development environment 🛠

1. Clone this repo or download the zip folder.
2. Run the `npm install` to install all the dependency.
3. Run `npm start` in the root folder to start the application


## Script to run
```
npm run start       -   To run the application in port 3000
npm run build       -   To build for production usage
npm run test   	  -   Run unit test cases
npm run cypress     -   Run e2e test using cypress
```


## Planning

Based on the instruction, there are two objectives that need to be done. The first one is the temperature converter and theme toggle.

First thing, I do a quick design in Figma on how the UI will look alike - [Figma](https://www.figma.com/file/qnR3IWFeMAUlqrpikS7Yzl/Peatix?node-id=0%3A1). To reduce the amount of iteration during the development process.


## Development

### Tech Stack
* React for JS Framework
* TailwindCSS for CSS
* Jest for Unit testing
* Cypress for end-to-end testing

### Frontend Architecture
I decide to use **React** for the Frontend framework because it's easier for me to get started, and building a single page application would be a great choice for this kind of feature. Since Peatix’s currently searching for someone with React experience, then it’s a good idea for me to show my skill.

The idea will be building a single page application. The structure is going to be so simple.

I'll create one page/container component with multiples components that come together.

The UI will be split into component-based so that it will be easier to build and to test it.

#### CSS
I'm using **tailwindCSS** for the CSS framework. Its a utility library. It's easier for me to build the UI with it since you don’t need to deal with custom CSS files. Furthermore, their color scheme looks good too.

#### Unit testing
**Jest** will be my go-to framework for the unit testing. Component without testing doesn’t convince me that it's going to work. So, I wrote several test cases to ensure the component is robust enough before pushing it to production.

#### End-to-end testing
Unit testing is useful for testing the code/abstract level, but we need to find a way to test or simulate user behavior. That’s where the end-to-end comes in. I’m using **Cypress** to automate all the user behavior.

1. The user will enter a celcius value and get the Fahrenheit.
2. The user will enter a Fahrenheit value and get the Celcius.
3. The user will toggle the theme button, and the color scheme will be changed.

#### Deployment
I’m using vercel to deploy the UI. It will automatically deploy whenever I pushed new changes in the GitHub.

## Features

### Temperature Converter

I'm going to add two input fields for Celcius and Fahrenheit. The idea is to let the user get an instant result after entering the value. We don’t need the submit button.

This is the calculation for:

1. Celcius to Fahrenheit
`((farenheit - 32) * 5) / 9`

2. Fahrenheit to Celcius
`(celcius * 9) / 5 + 32`

### Theme Switcher

I've added a toggle button at the top right. To make it more standout, I use a different icon for each theme: sun icon for a light theme and moon icon for the dark theme.

The light theme comes with a more light dominant color, so the color scheme I choose needs to be well blended and easy for users to read. The same thing goes to the dark theme.

I'm using a color palette website - [Coolors - The super fast color schemes generator!](https://coolors.co/) to comes up with the color scheme, then I’m playing around with the hue to make sure its blend together.

To implement this, I’m going to use the CSS variable to make the color will be dynamic. It’s going to be like this.

```css
.theme-light {
    --bg-background-primary: #F5F9FC;
}
.theme-dark {
    --bg-background-primary: #141822;
}
```

We will detect whether the theme is dark or light by using a specific class `theme-light` or `theme-dark` in the body of the DOM.
