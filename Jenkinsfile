pipeline {
    agent any
  
    stages {
        stage('Prepare') {
            sh "npm install -g yarn"
            sh "yarn install"
        }
        stage('Build') {
            steps {
                sh "yarn build"
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                sh "yarn test"
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