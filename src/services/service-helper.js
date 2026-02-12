const {logger} = require("../logger");

// Paramétrage du renvoie json
module.exports = {

    makeService : (code, message, data) => {
        logger.info(`Code: ${code} | Message: ${message}`);

        return { code: code, message: message, data: data };
    }
}