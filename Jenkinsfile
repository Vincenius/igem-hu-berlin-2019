pipeline {
  agent {
    docker {
      image 'node:10'
      args '-p 4007:4007'
    }

  }
  stages {
    stage('build') {
      steps {
        sh 'npm i'
        sh 'npm run build'
        sh 'node server.js'
      }
    }
  }
}