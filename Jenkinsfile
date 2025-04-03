pipeline {
	agent any

    stages {
		stage('Pull Latest Code') {
			steps {
				sh 'git pull origin main'
            }
        }

        stage('Build & Deploy') {
			steps {
				sh 'docker-compose down'
                sh 'docker-compose up --build -d'
            }
        }
    }
}