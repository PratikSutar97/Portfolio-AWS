pipeline {
    agent any

    environment {
        // Auto-increment version using Jenkins build number
        VERSION = "1.0.${BUILD_NUMBER}"
    }

    parameters {
        string(name: 'BRANCH', defaultValue: 'main', description: 'Git branch to build')
    }

    stages {
        // 1️⃣ Checkout code from GitHub
        stage('Checkout') {
            steps {
                echo "Checking out branch ${params.BRANCH}..."
                git branch: "${params.BRANCH}",
                    url: 'https://github.com/PratikSuar97/Portfolio-AWS.git',
                    // credentialsId: 'github-pat-id' // replace with your Jenkins credential ID
            }
        }

        // 2️⃣ Install dependencies
        stage('Install') {
            steps {
                echo "Installing npm dependencies..."
                sh 'npm install'
            }
        }

        // 3️⃣ Build the React app
        stage('Build') {
            steps {
                echo "Building React app version ${VERSION}..."
                sh 'npm run build'
            }
        }

        // 4️⃣ Run tests
        stage('Test') {
            steps {
                echo "Running tests..."
                sh 'npm test -- --watchAll=false' // run tests once
            }
        }

        // 5️⃣ Deploy (placeholder, customize as per your environment)
        stage('Deploy') {
            steps {
                echo "Deploying React app version ${VERSION}..."
                // Example: copy build folder to server
                // sh 'scp -r build/* user@server:/var/www/html/'
            }
        }
    }

    post {
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
        success {
            echo "Pipeline succeeded! React app version ${VERSION} deployed 🎉"
        }
        failure {
            echo "Pipeline failed! ❌"
        }
    }
}
