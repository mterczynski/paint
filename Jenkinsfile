pipeline {
	agent any

	stages {
		stage('Install') {
			steps{
				bat '''
					yarn
				'''
			}
		}

		stage('Build') {
			steps {
				bat '''
					yarn build
				'''
			}
		}

		stage('Deploy') {
			steps {
				bat '''
					sh
					scp -r dist root@mterczynski.pl:/var/www/html/paint/dist
					scp -r index.html root@mterczynski.pl:/var/www/html/paint/index.html
				'''
			}
		}
	}
}
