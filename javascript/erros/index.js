
const winston = require('winston');

const logIn = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
});


function seeError() {
    throw new Error("error de la funcion");
}

try {
    seeError();
} catch (e) {
    logIn.log("error", e.toString());
}