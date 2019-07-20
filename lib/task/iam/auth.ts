import User from "../../model/user";

export async function auth(ctx) {
    const {
        username,
        password
    } = ctx.req.credentials;

    const M = await User.findOne({});

    ctx.res = {
        token: username
    };
}