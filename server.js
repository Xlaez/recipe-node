const express = require('express');
const cors = require('cors')
const swaggerDoc = require('swagger-ui-express');
const multer = require('multer');
const path = require('path');
const { port, listen } = require('./config/config');


const { Mongo } = require('./config/database');
const { header } = require('./middlewares/header');
const { fileFilter, fileStorage } = require('./config/multer')
const { foodRouter } = require('./routes/food.routes');
const { authRouter } = require('./routes/auth.routes');
const { swaggerDocs } = require('./docs/docs');

const server = express();
var corsOption = {
    origin: "*"
};
// server.use(header)
server.use(cors(corsOption));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(multer({ storage: multer.diskStorage({}), fileFilter: fileFilter }).single('image'))

server.use('/assets', express.static(path.join(__dirname, "assets")));
server.use('/doc', swaggerDoc.serve)
server.use('/doc', swaggerDoc.setup(swaggerDocs));
server.use('/foods', foodRouter);
server.use('/auth', authRouter)

Mongo.then(

    result => {
        server.listen(port)
        console.log("======> Mongodb connected");
        console.log(`======> Server connected at ${port}`);
    }
).catch(err => {

    return console.log(`======> ${err}`)
})

