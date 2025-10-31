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
                sh 'curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -'
                sh 'sudo apt-get install -y nodejs'
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Run Hello Nishu App') {
            steps {
                sh 'node app.js'
            }
        }
    }
}

