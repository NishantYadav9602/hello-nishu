pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                git branch: 'main', url: 'https://github.com/NishantYadav9602/hello-nishu.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Start Application') {
            steps {
                sh '''
                pkill -f node || true
                nohup node app.js > output.log 2>&1 &
                '''
            }
        }
    }
}

