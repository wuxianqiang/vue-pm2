node {
    stage('checkout') {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'e73bb491-739e-4ea0-939d-17c257b79ab0', url: 'https://gitee.com/wuxianqiang/vue-deploy.git']]])
    }
    stage('build') {
        nodejs('NodeJs11.14.0'){
            sh 'yarn install'
            sh 'yarn build'
        }
    }
    stage('deploy') {
        nodejs('NodeJs11.14.0'){
            sh 'pm2 reload ecosystem.config.js --env production'
        }
    }
}