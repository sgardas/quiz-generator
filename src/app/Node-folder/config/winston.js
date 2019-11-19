const appRoot = require('app-root-path');
const winston = require('winston');

//define custom setting for transport i.e file, console
let options = {
    file: {
        level: 'debug',
        filename: '${appRoot}/logs/app.log',
        handleExceptions: true,
        json: true,
        maxsize: 10485760,
        maxFiles: 10,
        colorize: true,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};

//instantiate a new winston loger with settings defined above
let logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false, //prevent exit on handled exceptions
});

//create a stream object i.e a 'write' function used by 'morgan'
logger.stream = {
    write: function(message, encoding){
        logger.info(message); //'info' log level used so that output will be picked up by both transport
    },
};

module.exports = logger;