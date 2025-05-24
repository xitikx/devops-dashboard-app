pipeline {
    agent any
    tools {
        nodejs "Node20"
    }
    environment {
        AWS_DEFAULT_REGION = 'us-east-1'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: '${BRANCH_NAME}', url: 'https://github.com/xitikx/devops-dashboard-app.git'
            }
        }
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Build and Deploy Dev') {
            when { branch 'dev' }
            steps {
                sh 'npm run build:dev'
                sh 'aws s3 sync build/ s3://dashboard-krish-dev-0t88ga61 --delete'
                sh 'aws cloudfront create-invalidation --distribution-id E114L21N76VXDZ --paths "/*"'
            }
        }
        stage('Build and Deploy Staging') {
            when { branch 'staging' }
            steps {
                sh 'npm run build:staging'
                sh 'aws s3 sync build/ s3://dashboard-krish-staging-q1mzhtcl --delete'
                sh 'aws cloudfront create-invalidation --distribution-id E3W3FTRX7A9P6Y --paths "/*"'
            }
        }
        stage('Build and Deploy Prod') {
            when { branch 'main' }
            steps {
                sh 'npm run build:prod'
                sh 'aws s3 sync build/ s3://dashboard-krish-prod-flks8zjb --delete'
                sh 'aws cloudfront create-invalidation --distribution-id E2Q6NN6EBX2ULD --paths "/*"'
            }
        }
    }
}