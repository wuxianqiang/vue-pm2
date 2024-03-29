module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API',
      script    : 'app.js',
      append_env_to_name: true,
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    // Second application
    // {
    //   name      : 'WEB',
    //   script    : 'web.js'
    // }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'root',
      host : '192.168.4.88',
      ref  : 'origin/master',
      repo : 'git@github.com:wuxianqiang/vue-pm2.git',
      path : '/var/www/production',
      'post-deploy' : 'git pull && npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'root',
      host : '192.168.4.88',
      ref  : 'origin/master',
      repo : 'git@github.com:wuxianqiang/vue-pm2.git',
      path : '/var/www/development',
      'post-deploy' : 'git pull && npm install && npm run build && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
