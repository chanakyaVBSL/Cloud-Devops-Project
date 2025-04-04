pipeline {
	agent any

    environment {
		GIT_CREDENTIALS_ID = 'github'
    }

    stages {
		stage('Pull Latest Code') {
			steps {
				script {
					git credentialsId: "${GIT_CREDENTIALS_ID}", branch: 'master', url: 'https://github.com/chanakyaVBSL/Cloud-Devops-Project'
                }
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