pipeline {
	agent any

	stages {
		stage('Install') {
			steps{
				sh '''
					yarn
				'''
			}
		}

		stage('Build') {
			steps {
				sh '''
					yarn build
				'''
			}
		}

		stage('Deploy') {
			steps {
				sh '''
					scp -r dist root@mterczynski.pl:/var/www/html/paint/dist
					scp -r index.html root@mterczynski.pl:/var/www/html/paint/index.html
				'''
			}
		}
	}
}
