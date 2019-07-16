/* eslint-disable */
const axios = require('axios')
require('dotenv').config()

const { STRAPI_USER, STRAPI_PASS, STRAPI_URL } = process.env
const url = STRAPI_URL
exports.handler = function(event, context, callback){

  // Send response back to client
  const response = body => {
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      },
      body: JSON.stringify(body)
    })
  }

  // if an error send that..
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
  
  // authentication
  const getToken = (user, pass) => {
    axios.post(url + "/auth/local", {
      // "identifier": STRAPI_USER,
      // "password": STRAPI_PASS
      "identifier": user || '',
      "password": pass || ''
    })
      .then(res => response({token: res.data.jwt}))
      .catch(error => response({error: "invalid credentials"}))
  }

  // crud route methods for - classes
  // Read - list classes
  const getClasses = () => {
    axios.get(url + "/classes")
      .then(res => {
        let classes = res.data
        console.log(classes)
        let formattedClasses = []
        for (let i = 0; i < classes.length; i++) {
          const course = classes[i];
          formattedClasses.push({
            _id: course._id,
            name: course.name,
            starts_at: course.starts_at,
            ages: course.ages || 'all',
            teachers: getNamesArray(course.teachers).toString(),
            ends_at: course.ends_at,
            days: getNamesArray(course.days)
          })
        }
        // response(res.data)
        console.log(formattedClasses)
        response(formattedClasses)
      })
      .catch(err => response(err))
  }
  // Read - get single class
  const getClassById = id => {
    axios.get(url + "/classes/" + id)
      .then(res => response(res.data))
      .catch(err => response(err))
  }
  // Create class
  const createClass = (token, newClass) => {
    console.log("class created", newClass)
    const config = {
      headers: {'Authorization': token}
    }
    axios.post(url + "/classes", newClass, config)
      .then(res => response(res.data))
      .catch(err => response(err))
  }
  // Update - update a gingle class
  const updateClass = (token, id, updatedClass) => {
    const config = {
      headers: {'Authorization': token}
    }
    axios.put(url + "/classes/", updatedClass, config)
    .then(res => response(res.data))
    .catch(err => response(err))
  }
  // Delete - delete a single class
  const deleteClass = (token, id) => {
    const config = {
      headers: {'Authorization': token}
    }
    axios.delete(url + "/classes/" + id, config)
    .then(res => {
      console.log(res.data)
      response(res.data)
    })
    .catch(err => response(err))
  }

  // crud route methods for - teachers
  // get list of teachers
  const getTeachers = () => {
    return axios.get(url + "/teachers")
      .then(res => {
        return res.data
      })
      .catch(err => console.log(err))
  }  

  // ------------------- helper functions ----------------
  // get list of days, no need for crud on days
  const getDays = () => {
    return axios.get(url + "/days")
      .then(res => {
        return res.data
      })
      .catch(err => console.log(err))
  }

  // get object list names from object list id, returns an array of names(strings)
  // used to reconstruct teachers and days object lists to array of names,
  // and what we return to the client..item._id
  const getNamesArray = objList => {
    let names = objList.map(obj => obj.name )
    return names
  }
  const getIdsArray = objList => {
    let ids = objList.map(obj => obj._id )
    return ids
  }
  // takes an array of string names, returns obj array with {_id:"value"}
  // used to reconstruct array of string names to objects with _id for create/update
  const getIdsObjArr = (namesArr, objList) => {
    let results = objList.filter(item => namesArr.includes(item.name)).map(item => ({_id: item._id}))
    console.log(results)
    return results
  }

  ///////// TEST----------------------------
  // getTeachers().then( teachers => {
  //   // console.log(teachers)
  //   getIdsObjArr(['Kerry', 'Laura', 'Dave'], teachers)
  // }).catch(err => console.log(err))



  // ---------------- ROUTES ----------------------------
  // GET ------
  if (event.httpMethod == 'GET') {
    // Read get all classes --- /.netlify/functions/classes
    if(!event.queryStringParameters.id && !event.queryStringParameters.login) {
      getClasses()
    }
    // Read get individual class --- /.netlify/functions/classes/:id
    if(event.queryStringParameters.id) {
      getClassById(event.queryStringParameters.id)
    }
  }

  // POST ------
  if (event.httpMethod == 'POST') {
    // Login ---  /.netlify/functions/classes?login
    if (event.queryStringParameters.login == "" && event.body != '') {
      const parsedBody = JSON.parse(event.body)
      if (parsedBody.user && parsedBody.pass) {
        getToken(parsedBody.user, parsedBody.pass)
      } else {
        let error = {
          error: true,
          message: `'Missing or invalid credentials'`
        }
      errorResponse(error, 405)
      }
    }
    // Create a class ---  /.netlify/functions/classes?create
    if(event.httpMethod == 'POST' && (event.queryStringParameters.create == "") && event.headers.authorization) {
      const token = event.headers.authorization
      createClass(token, JSON.parse(event.body))
    }
  }
  // Update a class   /.netlify/functions/classes/:id
  if((event.httpMethod == 'PUT') && event.queryStringParameters.id) {
    const token = event.headers.authorization
    const id = event.queryStringParameters.id
    console.log("TOKEN: " + token, "\r\nID: " + id, "\r\nBODY: " + JSON.parse(event.body))
    updateClass(token, id, JSON.parse(event.body))
  }
  // Delete a class ---  
  if((event.httpMethod == 'DELETE') && event.queryStringParameters.id && event.headers.authorization) {
    const token = event.headers.authorization
    const id = event.queryStringParameters.id
    console.log("DELETE", token, "\r\nID " + id)
    deleteClass(token, id)
  }




  // dev log
  // const log = () => {
  //   let reqBody = event.body   // == '' ? JSON.parse(event.body) : ''
  //   const info = {
  //     message: "yo",
  //     context,
  //     event,
  //     reqBody: reqBody != '' ? reqBody : '{}'    // : JSON.parse(event.body)
  //   }
  //   console.log(info)
  // }
  // log()
}