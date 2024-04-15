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
        stage("Deploy WebApp on K8s") {
            steps {
    		    sshagent(credentials: ['minikube-ssh'], ignoreMissing: true) {
    		        sh '''
    		        chmod u+x ${PWD}/kube-manifest/apply-image-tag.sh
    		        ${PWD}/kube-manifest/apply-image-tag.sh ${VERSION}
    		        ssh root@192.168.1.9 mkdir /root/kube-manifest/${JOB_NAME}
    		        scp ${PWD}/kube-manifest/jsdemo01-*.yml root@192.168.1.9:/root/kube-manifest/${JOB_NAME}
    	   	 	    ssh root@192.168.1.9 kubectl apply -f .
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