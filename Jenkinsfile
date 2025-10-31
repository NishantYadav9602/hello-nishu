pipeline {
    agent any

    stages {
        stage('Pull Latest Code') {
            steps {
                git branch: 'main', url: 'https://github.com/NishantYadav9602/hello-nishu.git'
            }
        }

        stage('Install Node.js') {
            steps {
                sh '''
                sudo apt update -y
                sudo apt install -y nodejs npm
                node -v
                npm -v
                '''
            }
        }

        stage('Run Hello Nishu App') {
            steps {
                sh '''
                pkill node || true
                node app.js &
                '''
            }
        }
    }
}

