import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAuth(code) {
  const [access_token, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios.post('https://localhost:3001/login', {
        code,
    })
    .then(res => {
        console.log(res.data)
        window.history.pushState({}, null, '/')
    })
    .catch(() => {
      window.location = "/";
    });
  }, [code]);
}
