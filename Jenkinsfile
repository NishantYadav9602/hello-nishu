pipeline {
    agent any

    stages {
        stage('Pull Latest Code') {
            steps {
                git 'https://github.com/NishantYadav9602/hello-nishu.git'
            }
        }

        stage('Install Node.js') {
            steps {
                sh '''
                sudo apt update -y
                sudo apt install -y nodejs npm
                '''
            }
        }

        stage('Run Hello Nishu App') {
            steps {
                sh '''
                node -v
                npm -v
                node app.js &
                '''
            }
        }
    }
}

