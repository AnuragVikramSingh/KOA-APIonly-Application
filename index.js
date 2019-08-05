const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

let port = process.env.NODE_SERVER_PORT ||  3000

router.get('/', (ctx, next) => {
 ctx.body = 'Hello World!';
});

router.get('/test', (ctx, next) => {
    ctx.body = 'Hello World! This is test API';
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);
console.log("Server started on = " + port)