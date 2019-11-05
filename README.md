# app2

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```js
module.exports = {
  apps: [
    {
      name: '项目名称',
      script: '启动文件',
      // 由于名字相同，所以每次它都会替换之前的服务，而不会共存。那么为了可以让生产服务和测试服务同时运行，我们还需要在 ecosystem.config.js 的 apps 的对象里面添加一句 append_env_to_name: true，这表示会把当前环境的名字跟在我们进程的名字后面
      append_env_to_name: true,
      // 默认的环境变量
      env: {
        COMMON_VARIABLE: 'true'
      },
      // post-deploy 中最后指定 --env production 表示我们会用到 apps 中 env_production 的配置。
      env_production: {
        NODE_ENV: 'production'
      },
      env_dev: {
        NODE_ENV: 'dev'
      }
    }
  ],
  // 通过 pm2 deploy ecosystem.config.js production 命令来部署生产环境，命令中的production指的是 deploy中的production对象
  deploy: {
    production: {
      user: '你的服务器登录名',
      host: ['你的服务器 IP'],
      port: '你的服务器登录端口，默认 22',
      ref: 'origin/master',
      repo: '你的 git 仓库地址',
      path: '/www/mydemo/production',
      'post-deploy' : 'git pull && npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    },
    test: {
      user: '你的服务器登录名',
      host: ['你的服务器 IP'],
      port: '你的服务器登录端口，默认 22',
      ref: 'origin/test',
      repo: '你的 git 仓库地址',
      path: '/www/mydemo/test',
      // 运行的命令，先拉取代码，再安装依赖，再构建，然后重启
      'post-deploy' : 'git pull && npm install && npm run build && pm2 reload ecosystem.config.js --env dev',
      // 默认的环境变量
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
}
```

1. 把本机的公钥配置到服务器中
2. 把服务器的公钥配置到github中
3. 保证代码正常拉取