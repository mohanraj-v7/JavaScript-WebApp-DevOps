pipeline {
    agent {
        label 'agent01'
    }
    environment {
        VERSION = versiontag()
    }
    
    stages {
        stage("SCM Clone") {
            steps {
                git branch: 'main', url: 'https://github.com/mohanraj-v7/JavaScript-WebApp-DevOps.git'
            }
        }
        stage("Build & Docker Image") {
            steps {
                sh "docker build ${JOB_NAME}/workspace/Dockerfile -t mvlab02/jsdemo01:httpd-${VERSION}"
                
                withCredentials([usernamePassword(credentialsId: 'docker-hub-repo-mvlab02', passwordVariable: 'DOCKER_PSWD', usernameVariable: 'DOCKER_USER')]) {
                    sh "docker login mvlab02 -u ${DOCKER_USER} -p ${DOCKER_PSWD}"
                    sh "docker push mvlab02/jsdemo:httpd-${VERSION}"
                }
                
            }
        }

    }
}

def versiontag(){
    def version = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
    return version
}