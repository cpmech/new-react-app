# Script to create a new React app

The `new-react-app.bash` script calls `create-react-app` to create a new React project using TypeScript and [EmotionJS](https://github.com/emotion-js/emotion). The script installs:

* EmotionJS
* @cpmech tools
* prettier, etc.

The script fixes some configuration files and also creates a template application using [@cpmech/rcomps](https://github.com/cpmech/rcomps).

## Usage

```bash
bash new-react-app.bash myapp
```

## AWS Infrastructure

To see the Stack differences:

```bash
yarn cdk website diff
yarn cdk infrastructure diff
yarn cdk cognito diff
yarn cdk service diff
```

To deploy the stacks:

```bash
yarn cdk website deploy
yarn cdk infrastructure deploy
yarn cdk cognito deploy
yarn cdk service deploy
```

Pipelines:

```bash
yarn cdk website-pip diff
yarn cdk infrastructure-pip diff
yarn cdk cognito-pip diff
yarn cdk service-pip diff
```
