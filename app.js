const fastify = require("fastify");
global.__basedir = __dirname

const serverConfig = {
    logger: true
}

const server = fastify(serverConfig)

server.register(require('./src/plugins/config'));
server.register(require('./src/plugins/db'));
server.register(require('./src/routes'));

const startSever = async () => {
    await server.ready();
    server.listen(process.env.SERVER_PORT, '0.0.0.0', (err) => {
        if (err) {
            server.log.error(err);
            process.exit(1);
        }
    });
}

startSever();
