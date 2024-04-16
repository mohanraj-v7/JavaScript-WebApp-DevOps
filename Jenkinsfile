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
                sh "docker build ${PWD}/workspace/${JOB_NAME} -t mvlab02/jsdemo01:httpd-${VERSION}"
                
                withCredentials([usernamePassword(credentialsId: 'docker-hub-repo-mvlab02', passwordVariable: 'DOCKER_PSWD', usernameVariable: 'DOCKER_USER')]) {
                    sh '''
                    docker login -u ${DOCKER_USER} -p ${DOCKER_PSWD}
                    docker push mvlab02/jsdemo01:httpd-${VERSION}
                    '''
                }
                
            }
        }
        stage("Customize pod definition") {
            steps {
                sh '''
                chmod u+x ${PWD}/kube-manifest/apply-image-tag.sh
                cd ${PWD}/kube-manifest && ./apply-image-tag.sh ${VERSION}
                '''                
            }
        }
        stage("Deploy WebApp on K8s") {
            steps {
    		    sshagent(credentials: ['minikube'], ignoreMissing: true) {
    		        sh '''
    		        ssh -o StrictHostKeyChecking=no -l root 192.168.1.8 mkdir /root/kube-manifest/${JOB_NAME} || true
    		        scp ${PWD}/kube-manifest/jsdemo01-*.yml root@192.168.1.8:/root/kube-manifest/${JOB_NAME}
    		        ssh -o StrictHostKeyChecking=no -l root 192.168.1.8 "cd /root/kube-manifest/${JOB_NAME}" && "kubectl apply -f . --namespace=${JOB_NAME}"
    	   	 	    '''
    		    }
            }
        }
    }
}

def versiontag(){
    def version = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
    return version
}