pipeline {
    agent {
        docker { image 'node:10.16-alpine' }
    }
  
    stages {
        stage('Prepare') {
          steps {
            sh "yarn install --no-progress --silent"
          }
        }
        stage('Build') {
            steps {
                sh "yarn build"
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}