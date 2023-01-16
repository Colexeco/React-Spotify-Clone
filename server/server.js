const express = require('express');
const spotifyWebApi = require('spotify-web-api');

const app = express();

app.post('login', (req, res) => {
    const code = req.body.code;
    const spotifyWebApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:3000',
    clientId: '6752d9ed564241fe92180fcf77e04ce6',
    clientSecret: 'c960e8e744a94c0ca60ad5a3e3611c03'
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
        res.sendStatus(400)
    });
})