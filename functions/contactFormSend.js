/* eslint-disable */

// const axios = require('axios');

exports.handler = function(event, context, callback){
  // const { EMAIL_KEY } = process.env

  // Send response back to client
  const response = body => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': 'localhost:9000',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      body: JSON.stringify(body)
    })
  }

  const errorResponse = (error, statusCode) => {
    callback(null, {
      unauthorized: 407,
      statusCode: statusCode || unauthorized,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(error)
    })
  }

  // validate

  // hit api and get response
  const sendEmail = () => {
    console.log('______________________\r\n', context)
    // axios.get(URL)
    //   .then(res => response(res.data))
    //   .catch(err => response(err));
    let reqBody = event.body == '' ? JSON.parse(event.body) : ''

    // the body to send a msg back to the client
    const responseBody = {
      message: "yo",
      context,
      event,
      reqBody   // : JSON.parse(event.body)
    }
    
    response(responseBody)
  }

  if(event.httpMethod == 'GET') {
  // if(event.httpMethod == 'POST' || 'GET') {
    sendEmail()
  } else {
    error = {
      error: true,
      message: `'ERROR ${event.httpMethod} METHOD NOT ALLOWED'`
    }
    errorResponse(error, 405)
  }
}