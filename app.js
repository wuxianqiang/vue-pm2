const Koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static')
const app = new Koa();
const NODE_ENV = process.env.NODE_ENV || 'dev'
const portMap = {
  production: 4000,
  dev: 3000
}
const root = path.resolve(__dirname, 'dist')
app.use(koaStatic(root));
app.listen(portMap[NODE_ENV]);
