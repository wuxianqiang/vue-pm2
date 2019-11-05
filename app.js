const Koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static')
const app = new Koa();
const root = path.resolve(__dirname, 'dist')
app.use(koaStatic(root));
app.listen(3000);
