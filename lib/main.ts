import {run} from "./service";
import {logger} from "./core/logger";

run().catch(logger.error);