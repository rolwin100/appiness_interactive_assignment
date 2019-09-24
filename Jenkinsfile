pipeline {
    agent {
        docker { image 'node:10.16-alpine' }
    }
  
    stages {
        stage('SonarQube analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarScanner';
                    echo "{scannerHome}" 
                
                    withSonarQubeEnv('SonarQube') {
                      sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
        stage('Prepare') {
          steps {
            sh "yarn install --no-progress --silent"
          }
        }
        stage('Build') {
            steps {
                echo 'Building..'
                sh "yarn build"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
            }
        }
    }

    post { 
        cleanup { cleanWs() } 
        failure {
            emailext to: "robin.s", subject: '${DEFAULT_SUBJECT}', body: '${DEFAULT_CONTENT}'
        }
    }
}