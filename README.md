

## Setting up development environment 🛠

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

Based on the instruction, there are two objectives need to be done. First one is temperature converter and theme toggle. 

First thing, I do a quick design in Figma on how the UI will looks alike - [Figma](https://www.figma.com/file/qnR3IWFeMAUlqrpikS7Yzl/Peatix?node-id=0%3A1). To reduce the amount of iteration during development process. 


## Development

### Tech Stack
* React for JS Framework
* TailwindCSS for CSS
* Jest for Unit testing
* Cypress for end-to-end testing

### Frontend Architecture
Im decide to use *React* for the Frontend framework because its easier for me to get started. Since, Peatix’s currently searching for someone with React experience then it’s a good idea for me to show my skill. 

The idea will be building a single page application. The structure gonna be so simple. 

I create one page/container component with multiples components that comes together. The reason to split the UI into component based because its easier to build and to test it. 

#### CSS
Im using *tailwindCSS* for the CSS framework. Its a utility library. Its easier for me to build the UI with it since you don’t need to deal with custom CSS files. Furthermore, their colour scheme looks good too. 

#### Unit testing
*Jest* will be my go-to framework for the unit testing. Component without testing doesn’t convince me that its gonna work. So, I wrote several test cases to make sure the component is robust enough before push it to production. 

#### End-to-end testing
Unit testing is good to test the code/abstract level but we need to find a way to test or simulate the user behaviour too. That’s where the end-to-end comes in. I’m using *Cypress* to automate all the user behavious. 

1. The user will enter a celcius value and get the Farenheit.
2. The user will enter a Farenheit value and get the Celcius.
3. The user will toggle the theme button and the colour scheme will changed. 

#### Deployment
I’m using vercel to deploy the UI. It’s automatically deploy whenever I pushed a new changes in the github. 

## Features

### Temperature Converter

Im going to add two input field for celcius and farenheit. The idea is to let the user get instant result after entering the value. We don’t need the submit button.  

### Theme Switcher

Im added a toggle button at the top right. To make it more standout, I use different icon for each theme which are sun icon for light theme and moon icon for dark theme. 

As we know, light theme comes with more light dominant colour so the colour scheme I choose need to be well blended and easy for user to read. Same thing goes to dark theme. 

Im using a colour pallete website - [Coolors - The super fast color schemes generator!](https://coolors.co/) to comes up with the colour scheme then I’m playing around with the hue to make sure its blend together. 

To implement this, I’m gonna use CSS variable to make the colour will be dynamic. It’s gonna be like this. 

```css
.theme-light {
    --bg-background-primary: #F5F9FC;
}
.theme-dark {
    --bg-background-primary: #141822;
}
```

We gonna detect whether the theme is dark or light by using a specific class `theme-light` or `theme-dark` in the body of the DOM. 
