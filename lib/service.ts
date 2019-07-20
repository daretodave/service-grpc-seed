import "./core/config";

import Mali = require("mali");
import {join} from "path";

import {sync} from  "./core/store";
import {HOST, PORT} from "./core/config";
import {out} from "./core/logger";
import Handlers from "./task";

export const schema = join(__dirname, '..', 'proto', 'iam.proto');

out('service:iam', {
    HOST,
    PORT
});


export async function run(host = HOST, port: string | number = PORT) {
    const target = `${host}:${port}`;

    out("service:iam::run", {
        schema
    });

    await sync();
    const app = new Mali(schema, null, );

    app.use(Handlers);
    app.start(target);

    return app;
}

