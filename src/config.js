// src/config.js
const BASE_URL_API = process.env.REACT_APP_API_URL;
const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID

const config = {
   BASE_URL:  BASE_URL_API,
   DOMAIN_A0: AUTH0_DOMAIN,
   CLIENT_ID_A0: AUTH0_CLIENT_ID
}

export default config