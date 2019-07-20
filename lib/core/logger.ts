import {DEVELOPMENT} from "./config";

const logger = require('pino')({
    prettyPrint: DEVELOPMENT ? {
        levelFirst: true,
        colorize: true
    } : false
});

export function out(label: string, ...message) {
    if (!message.length) {
        logger.info(label);
    } else {
        if (typeof message !== "string") {
            const [trace, ...interloped] = message;

            logger.info(trace, label, ...interloped);
        } else {

            logger.info(message, label);
        }

    }
}

export {logger};