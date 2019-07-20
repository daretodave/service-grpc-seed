import getPort = require("get-port");
import caller = require('grpc-caller');

import {run, schema} from "./service";

test('auth', async () => {

    const host = "0.0.0.0";
    const port = await getPort();

    const server = await run(host, port);

    const client = caller(`${host}:${port}`, schema, 'AuthService');
    const result = await client.auth({credentials: {username: "David", password: "Rehmat"}});

    expect(result).toBeTruthy();
    expect(typeof result.token).toBe("string");

    server.close();
});

test('admin', async () => {

    const host = "0.0.0.0";
    const port = await getPort();

    const server = await run(host, port);

    const client = caller(`${host}:${port}`, schema, 'AdminService');
    const result = await client.createUser({credentials: {username: "David", password: "Rehmat"}, email: "me@dave.blue"});

    expect(result).toBeTruthy();
    expect(typeof result.username).toBe("string");

    server.close();
});


