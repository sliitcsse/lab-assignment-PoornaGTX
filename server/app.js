const Koa = require("koa");
const app = new Koa();
const KoaRouter = require("koa-router");
const router = new KoaRouter();
const bodyParser = require("koa-bodyparser");

const port = 5000;

router.get("/", (ctx) => (ctx.body = "Server Run"));
app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
