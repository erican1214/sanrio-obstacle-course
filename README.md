# Sanrio Obstacle Course
## About
This is a two-player games that allows users to choose their own characters and compete in a simple obstacle course.

## Credit Inspiration
This game is heavily inspired by the [Google Chrome Dinosaur Game](https://chromedino.com/). The coding for the obstacle course is also borrowed from [Kenny Yip Coding](https://www.kennyyipcoding.com/). Here is his [Youtube tutorial](https://www.youtube.com/watch?v=lgck-txzp9o&t=1125s) and [GitHub](https://github.com/ImKennyYip/chrome-dinosaur-game) of his code of the Dino Game. My code of the obstacle course was taken from his tutorial, but I have revised it to be two-player.

## URL to webpage (for those who don't want to download packages)
- https://sanrio-obstacle-course-erican1214.netlify.app/

## Important Information for downloading packages
### Applications Needed
- Node.js
- VSCode (or any IDE)
- Google Chrome (or any browser)

### Packages Needed
- Express.js (The libraries and dependencies can be found in package-lock.json)

- To install Express.js, navigate to the project directory, and run the following command prompts (for Windows, use npm.cmd instead of npm)
    - npm init -y
    - npm install express

- More command prompts if necessary
    - npm install ejs

### How to run webpage (if you're using Node.js)
- Navigate the project directory
- Type "node server.js" if you are only interacting
- Type "npm run dev" if you want to continuously edit this webpage (for Windows, use npm.cmd instead of npm)
- Go on your browser and type "localhost:3000" in the search bar

### Compatability/Accessibility
- This has only been tested on a Google Chrome Browser and may not be compatible with other browsers. The game is also not responsive to different window sizes.

## Credits
### Image Attributions
- All characters from Sanrio Co.
- [candy.png](https://www.vecteezy.com/vector-art/1905248-set-of-candies-isolated-icon)
- [candy_cane.png](https://www.clipartmax.com/middle/m2H7d3m2Z5G6K9i8_download-candy-png-images-background-christmas-clipart-candy-cane/)
- [checkmark.png](https://illustoon.com/?id=7504)
- [cherry_background.jpg](https://www.freepik.com/free-vector/red-hand-drawn-cherry-seamless-pattern-pink-social-template_16340842.htm)
- [cloud_background.jpg](https://www.slidekit.com/cute-background/)
- [copyright_icon.png](https://commons.wikimedia.org/wiki/File:Pink_copyright.svg)
- [daisy_background.jpg](https://www.freepik.com/free-vector/flower-background-desktop-wallpaper-cute-vector_18247662.htm)
- [dessert_background.jpg](https://www.freepik.com/free-vector/hand-drawn-world-chocolate-day-background-with-chocolate-sweets_27571570.htm)
- [lollipop.png](https://www.vexels.com/png-svg/preview/230820/pink-lollipop-cartoon)
- [music_icon.png](https://www.freepik.com/free-vector/bright-music-note_145290248.htm)
- [pink_arrow.png](https://www.vecteezy.com/png/36392390-blank-cute-pastel-pink-triangle-shape-icon-flat-design-illustration)
- [pink_dessert_background.jpg](https://www.freepik.com/free-vector/flat-valentines-day-celebration-background_35805433.htm)
- [pretzel.png](https://www.vexels.com/png-svg/preview/251905/pretzel-color-stroke)
- [scoreboard_icon.png](https://www.flaticon.com/free-icon/scoreboard_4751919)
- [sky_doodle_background.jpg](https://www.pinterest.com/pin/811492426589202785/)
- [question_mark.png](https://www.flaticon.com/free-icon/question-mark_10777970)
- [x_button.png](https://www.citypng.com/png-download/17453)

### Audio Attributions
- [video-game-battle-music.wav](https://freesound.org/s/743699/) by MichaelLydian

### Font Attributions


## File Overview
&larr; README.md
- This file currently, shows details about how this webpage works

&larr; index.ejs
- HTML file that shows content of the webpage

&larr; style.css
- CSS file that customizes that content of the webpage

&larr; script.js
- Javascript file that adds interaction to the webpage and listens for events

&larr; server.js
- Javascript file that connects the code to server

&larr; package.json, package-lock.json
- Shows the necessary libraries/packages/dependencies for Node.js to run Express.js