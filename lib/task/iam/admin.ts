import * as grpc from "grpc";
import User from "../../model/user";
import {out} from "../../core/logger";

// const {AlreadyExistsError} = require('grpc-errors');

export async function createUser(ctx) {
    const {
        credentials = {},
        email
    } = ctx.req;

    const {
        username,
        password
    } = credentials;

    const R = await User.findOne({
        where: {
            username
        }
    });

    if (R) {
        out("AdminService::createUser. username already in use", {
            username
        });

        const err: any = new Error('Bad Request');

        err.code = 5000;
        err.metadata = new grpc.Metadata();
        err.metadata.add('type', 'ADMIN');
        err.metadata.add('code', '400');
        err.metadata.add('status', 'ALREADY_EXISTS');

        throw err
    }

    const user = User.build({
       email,
       username,
       password: "XXX"
    });

    const id = user.get('id');

    await user.save();

    ctx.res = {
        username,
        id,
        email
    };
}