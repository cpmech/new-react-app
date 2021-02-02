# Script to create a new React app

The `new-react-app.bash` script calls `create-react-app` to create a new React project using TypeScript and [EmotionJS](https://github.com/emotion-js/emotion). The script installs:

* EmotionJS
* StoryBook
* @reach/router and react-responsive
* @cpmech/{basic, util, rcomps}
* husky, lint-staged, prettier

The script fixes some configuration files and also creates a template application using [@cpmech/rcomps](https://github.com/cpmech/rcomps).

## Usage

```bash
bash new-react-app.bash myapp
```
