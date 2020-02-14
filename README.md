# _Recipe Wizard_

#### _This site comes with the all basic parts to get you started making a single page website with webpack fast. | Feb 5th. 2020_

#### By _**K. Wicz & Dusty McCord**_
[link to demo site coming](#)

## Description

This app is designed let users search for recipes and add those recipes to their weekly meal calendar.  Once the user has built their recipe calendar for the week, they are able to print a grocery list of everything they need for their weekly trip to the grocery store!

## Setup/Installation Requirements

_Make sure you have [git version control](https://git-scm.com/downloads) installed on your computer._

1. Find the green 'Clone or Download' button and copy the link
2. Open terminal and type...

**Windows**
```sh 
cd desktop
```

 Mac & linux 
 ```sh
 cd ~/Desktop
 ```

 3. In terminal, clone the project by typing:

```sh
git clone https://github.com/dustatron/recipe-wizard.git
```

4. Navigate to the new folder that was created on your desk:
```sh
cd recipe-wizard
```

5. In terminal, type:
```sh
npm install
```
6. Navigate to [Google Firebase](https://firebase.google.com/docs/web/setup?authuser=0).  Create new credentials for your project.

7. In terminal, use firebase command line to login with your Google account credentials by typing 
```sh
firebase login
```

8. Create a new Recipe Search API key and ID at [Edamam](https://developer.edamam.com/edamam-recipe-api).

9. In the root directory of your cloned folder, type 
```sh
touch .env
```

10. In your text editor, open the .env file and add
```sh
API_KEY = {your key here}
API_ID = {your ID here}
```
11. In the command line, start program with
```sh
npm run now
```
12. In the command line, start the server by running
```sh
firebase serve
```
13. Navigate to http://localhost:5000/ in your browser to see the project.


## Specs
### Behavior Driven Development Spec List

Behavior | Input | Output
:---------|:------:|:------:
|User will enter ingredient item in search input|chicken|links to 12 chicken recipes|
|User will select which day they want to make a recipe|Click Monday button|Recipe is added to Monday on the meal calendar|
|User will deselct meal from meal calendar|Click meal title on calendar|Recipe is removed|
|User selects start date of meal calendar|11/22/63|Meal calendar is labeled for the week of 11/22/63|
|User selects Grocery List|Click Grocery List|List of groceries for all recipes selected|

## Support 

_The software is provided as is. It might work as expected - or not. Use at your own risk._


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Simple Scaffolding
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Used for interactivity in the page
* [jQuery](https://jquery.com/) - Used to interact with the DOM
* [Bootstrap 4.4](https://getbootstrap.com/) - Used for styling
* [webpack](https://webpack.js.org/)
* [Sass](https://sass-lang.com/)
* [ESLint](https://eslint.org/)
* [Node.js](https://nodejs.org/en/)
* [Uglifyjs](https://www.uglifyjs.net/)
* [Jest](https://jestjs.io/)

## Useful tools

* [Jest Cheat Sheets](https://devhints.io/jest)
* [Cheat Sheets](https://devhints.io/)

* [free icons @ icons8](https://icons8.com/)
* [free  icons @ fontawesome](https://fontawesome.com/)
---
* [Old School Gifs Search](https://gifcities.org/)
* [free images @ unsplash](https://unsplash.com/)
    * **_source.unsplash.com_ will return a random image at a desired size by simply calling the size after the url followed by a '?' and a keyword. Example below**

    * _https://source.unsplash.com/400x400/?cat_
    * http://unsplash.it/500/500 - This will just return a random image the size of 500x500
---
* [Flex-box Cheat Sheet](http://yoksel.github.io/flex-cheatsheet/)
* [CSS Grid Cheat Sheet](http://grid.malven.co/)
---
* [CSS Gradient BG Generator](https://mycolor.space/gradient)
* [CSS Basic Gradient Generator](https://cssgradient.io/)
---
* [CSS Dropshadow Generator](https://cssgenerator.org/box-shadow-css-generator.html)

* [git worktree](http://sangsoonam.github.io/2019/02/08/using-git-worktree-to-deploy-github-pages.html) 

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Copyright (c) 2020 **_Dusty McCord & K. Wicz_**

