const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json);

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyWebApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET
    });

    spotifyWebApi
    .authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    }).catch(() => {
        console.log(err);
        res.sendStatus(400)
    });
})

app.listen(3001);