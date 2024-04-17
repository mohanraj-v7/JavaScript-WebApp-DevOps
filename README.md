[![Build Status](https://dev.azure.com/mohanrajavm7/Devops-Lab01/_apis/build/status%2Fmohanraj-v7.JavaScript-WebApp-DevOps?branchName=main)](https://dev.azure.com/mohanrajavm7/Devops-Lab01/_build/latest?definitionId=2&branchName=main)

- This is simple HTML WebApp using JavaScript and this WebApp has been dockerized and deployed using DevOps implementations
Steps CICD Pipeline

Jenkins Pipeline Ideas
======================
- Use slave node for experiment (Installed with Docker Engine)
- Create Pipeline with below stages
- Git checkout the repo
- Build Docker Image on slave node
- Push Docker image to docker registry

AzureDevOps Ideas
======================
- Create Service Connection for GitHub
- Create Service Connection for Docker Hub
- Create Build Pipeline to build & Push Docker image to Remote Docker Registry
- Create Release Pipeline to deploy Docker image on EC2 instance

Source Code Reference Repo :- https://github.com/Juel07/bg-color-changer.git
### Demo
![quick website demo](website-demo-gif.gif)
