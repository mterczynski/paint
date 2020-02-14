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
					SET Path=%PATH%; %GIT_HOME%\bin;
				  sh -c "echo ~"
					sh -c "scp -r dist root@mterczynski.pl:/var/www/html/paint/dist"
					sh -c "scp -r index.html root@mterczynski.pl:/var/www/html/paint/index.html"
				'''
			}
		}
	}
}
