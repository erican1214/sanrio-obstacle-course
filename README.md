# Fighting Demo
## About
This game only consists of choosing your fighting character in the main menu.

## Important Information
### URL to webpage (for those who don't want to download packages)

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
- I have only tested this webpage on a Google Chrome Browser. It is possible that it won't be compatible with other browsers

### Image Attributions
- All characters from Sanrio
- [music_icon.png](https://www.freepik.com/free-vector/bright-music-note_145290248.htm)

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