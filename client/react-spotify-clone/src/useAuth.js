import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAuth() {
  const [access_token, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios.post('https://localhost:3001/login', {
        code,
    }).then(res => {
        console.log(res.data)
    });
  }, [code]);
}
