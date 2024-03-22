//1 Import json-server
const jsonServer = require('json-server')

//2 Create a server application using json-server
const restoServer = jsonServer.create()

//3 Setup path for db.json
const router = jsonServer.router('db.json')

//4 Return middleware
const middleware = jsonServer.defaults()

//5 Setup portnumber
const port = 3001

//6 Use in restServer
restoServer.use(middleware)
restoServer.use(router)

//7 Run the port
restoServer.listen(port, () => {
    console.log('Restaurant server listening on port' + port);
})