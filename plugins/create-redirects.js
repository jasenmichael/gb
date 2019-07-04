const fs = require('fs')
require('dotenv').config()

const redirectsFile = '_redirects'

const getRedirects = () => {
  const redirects = []
  for (let i = 0; i < 20; i++) {
    // eslint-disable-next-line no-eval
    const redirect = eval('process.env.REDIRECT_' + (i + 1))
    if (redirect) {
      redirects.push(redirect)
      // eslint-disable-next-line
    //   console.log(eval('process.env.REDIRECT_' + (i + 1)))
    }
  }
  //   console.log(redirects)
  return redirects
}

// delete _redirect if exist
const deleteRedirectsFile = () => {
  fs.unlink(redirectsFile, function(err) {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(`No _redirects file to delete`)
      // throw err
    } else {
      // eslint-disable-next-line no-console
      console.log(redirectsFile + ' file deleted!')
    }
  })
}

const createRedirects = redirects => {
  for (let i = 0; i < redirects.length; i++) {
    const redirect = redirects[i]
    fs.appendFile(redirectsFile, redirect + '\r\n', function (err) {
      if (err) throw err
      // eslint-disable-next-line no-console
      console.log('SAVED REDIRECT \r\n', redirect)
    })
  }
  // eslint-disable-next-line no-console
  console.log('redirects found in .env \r\n', redirects)
}

deleteRedirectsFile()
createRedirects(getRedirects())
