pipeline {
  agent {
    docker {
      image 'node:10'
      args '-p 4007:4007'
    }
  }
  environment {
    HOME = '.'
  }
  stages {
    stage('build') {
      steps {
        sh 'npm i'
        sh 'npm run build'
        sh './node_modules/pm2/bin/pm2 start server.js'
      }
    }
  }
}
