const ENDPOINTS = {
  local: {
    UI_BASE_URL: process.env.UI_BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,

    SIGN_IN: `${process.env.API_BASE_URL}/sign-up`,
    SIGN_UP: `${process.env.API_BASE_URL}/sign-in`,
    SIGN_OUT: `${process.env.API_BASE_URL}/sign-out`,
  },
  dev: {
    UI_BASE_URL: process.env.UI_BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,

    SIGN_IN: `${process.env.API_BASE_URL}/sign-up`,
    SIGN_UP: `${process.env.API_BASE_URL}/sign-in`,
    SIGN_OUT: `${process.env.API_BASE_URL}/sign-out`,
  },
  production: {
    UI_BASE_URL: process.env.UI_BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,

    SIGN_IN: `${process.env.API_BASE_URL}/sign-up`,
    SIGN_UP: `${process.env.API_BASE_URL}/sign-in`,
    SIGN_OUT: `${process.env.API_BASE_URL}/sign-out`,
  },
}

export const ENDPOINT = ENDPOINTS[process.env.ENVIRONMENT]
