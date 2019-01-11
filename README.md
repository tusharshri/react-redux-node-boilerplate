# MERN Stack Boilerplate with Redux
Simple MERN Stack app with redux store. Contains common use cases to serve as a boilerplate

Follow [this link](https://mern-redux-app.herokuapp.com/){:target="_blank"} for live demo

### Setup
This app requires MongoDB setup. This is assumed as a pre-requisite. I have used mLab for the same just to avoid DB server setup. Once you get your connection URL from mLab, just paste it in your `config/keys.js` file for it look like this:

```sh
module.exports = {
    mongoURI: <your connection url goes here inside double quotes>
}
```

Then, run
```sh
    npm install
    npm run client-install
```

Finally, fire this command to concurrently run your server (on port 5000) and client (on port 3000)

```sh
    npm run dev
```
