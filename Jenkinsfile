pipeline {
	agent any

	options {
		disableConcurrentBuilds()
	}

	stages {
		stage('Install') {
			steps{
				sh '''
					npm i
				'''
			}
		}

		stage('TSLint') {
			steps {
				sh '''
					npm run lint
				'''
			}
		}

		stage('Test') {
			steps {
				sh '''
					npm run test:once
				'''
			}
		}

		stage('Build') {
			steps {
				sh '''
					npm run build
				'''
			}
		}

		stage('Deploy') {
			steps {
				sh '''
					scp -r dist root@mterczynski.pl:/var/www/html/paint
					scp -r index.html root@mterczynski.pl:/var/www/html/paint
				'''
			}
		}
	}
}
