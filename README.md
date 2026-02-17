# 🚀 Secure DevOps EKS Pipeline

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-18-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-EKS-blue?style=for-the-badge&logo=kubernetes)](https://aws.amazon.com/eks/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![Helm](https://img.shields.io/badge/Helm-3.0-FF1493?style=for-the-badge&logo=helm)](https://helm.sh/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-Jenkins-D24939?style=for-the-badge&logo=jenkins)](https://www.jenkins.io/)

**A modern, production-ready CI/CD pipeline demonstrating secure DevOps practices with AWS EKS, containerization, and Infrastructure as Code.**

[Features](#-features) • [Architecture](#-architecture) • [Quick Start](#-quick-start) • [Deployment](#-deployment) • [Tech Stack](#-tech-stack)

</div>

---

## 📋 Overview

This project showcases a **complete end-to-end DevOps implementation** featuring a containerized Node.js application deployed to AWS EKS. It demonstrates industry best practices for continuous integration, continuous deployment, security, and scalability.

Perfect for engineers looking to understand modern cloud-native deployment patterns and secure infrastructure automation.

---

## ✨ Features

- **🐳 Containerization**: Optimized Docker images with Alpine Linux for minimal footprint
- **☸️ Kubernetes Orchestration**: EKS-native deployment with auto-scaling capabilities
- **📦 Infrastructure as Code**: Helm charts for templated, reusable Kubernetes manifests
- **🔄 CI/CD Pipeline**: Automated build, test, and deployment workflows with Jenkins
- **🔐 Security First**: Best practices for secure container images and Kubernetes deployments
- **📊 Scalability**: ReplicaSet configurations for high availability and load distribution
- **🌐 Service Exposure**: LoadBalancer service for external traffic management
- **📈 Version Management**: Application versioning and container image tagging

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CI/CD Pipeline (Jenkins)              │
├─────────────────────────────────────────────────────────┤
│                      ↓ Build & Push ↓                    │
│              Docker Registry (Docker Hub)                │
│                      ↓ Deploy ↓                          │
├─────────────────────────────────────────────────────────┤
│          AWS EKS Kubernetes Cluster                      │
│  ┌──────────────────────────────────────────────┐        │
│  │  Deployment (docker-app)                     │        │
│  │  ├─ Replica Set (3 pods)                     │        │
│  │  └─ Container: Node.js Express App (3000)    │        │
│  └──────────────────────────────────────────────┘        │
│  ┌──────────────────────────────────────────────┐        │
│  │  Service (LoadBalancer)                      │        │
│  │  └─ External IP : Port 80 → 3000             │        │
│  └──────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites

- Docker installed ([Docker Desktop](https://www.docker.com/products/docker-desktop))
- Kubernetes CLI (`kubectl`)
- Helm 3.x ([Install Helm](https://helm.sh/docs/intro/install/))
- AWS Account with EKS cluster configured
- Node.js 18+ (for local development)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/AMANPUSHP23/secure-devops-eks-pipeline.git
   cd secure-devops-eks-pipeline
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application locally**
   ```bash
   npm start
   ```
   
   The app will be available at `http://localhost:3000`

4. **View the application**
   
   Open your browser and navigate to `http://localhost:3000` to see the DevOps Demo App with:
   - Current application version
   - Hostname information
   - Visitor counter
   - Real-time timestamp

---

## 🐳 Containerization

### Build Docker Image

```bash
docker build -t amanpushp/docker-project:latest .
```

### Run Container Locally

```bash
docker run -p 3000:3000 amanpushp/docker-project:latest
```

### Push to Registry

```bash
docker push amanpushp/docker-project:latest
```

**Dockerfile Highlights:**
- Base image: `node:18-alpine` (lightweight, 150MB)
- Multi-stage optimized builds
- Non-root user execution for security
- Minimal attack surface

---

## ☸️ Kubernetes Deployment

### 1. Using Raw YAML Manifests

```bash
# Apply deployment
kubectl apply -f deployment.yaml

# Apply service
kubectl apply -f service.yaml

# Check deployment status
kubectl get deployments
kubectl get svc docker-app-service

# Get external IP
kubectl get svc docker-app-service -o wide
```

### 2. Using Helm (Recommended for Production)

Helm charts provide templated, reusable Kubernetes manifests with dynamic configuration.

```bash
# Install the Helm chart
helm install docker-app ./docker-project-chart

# Upgrade deployment
helm upgrade docker-app ./docker-project-chart

# List releases
helm list

# Uninstall
helm uninstall docker-app
```

### Verify Deployment

```bash
# Check running pods
kubectl get pods

# View pod logs
kubectl logs -f <pod-name>

# Describe deployment
kubectl describe deployment docker-app

# Port forward for local access (without LoadBalancer)
kubectl port-forward svc/docker-app-service 8080:80
```

---

## 🔄 CI/CD Pipeline Setup (Jenkins)

The Jenkins pipeline orchestrates the entire workflow:

1. **Source Control** - Git webhook triggers on push
2. **Build** - Compile and package Node.js application
3. **Test** - Run unit and integration tests
4. **Build Image** - Create optimized Docker image
5. **Push** - Upload image to Docker registry
6. **Deploy** - Update EKS cluster with new image
7. **Verify** - Health checks and smoke tests

See `project EKS + jenkins.pdf` for detailed pipeline configuration.

---

## 📁 Project Structure

```
secure-devops-eks-pipeline/
├── app.js                          # Express.js application
├── package.json                    # Node.js dependencies
├── Dockerfile                      # Container image definition
├── deployment.yaml                 # Kubernetes deployment config
├── service.yaml                    # Kubernetes service config
└── docker-project-chart/           # Helm chart
    ├── Chart.yaml                  # Chart metadata
    ├── values.yaml                 # Default configuration values
    └── templates/
        ├── deployment.yaml         # Helm deployment template
        └── service.yaml            # Helm service template
```

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | Runtime environment | 18 LTS |
| **Express.js** | Web framework | 4.18.2 |
| **Docker** | Containerization | Latest |
| **Kubernetes** | Orchestration | EKS |
| **Helm** | Package manager | 3.x |
| **AWS EKS** | Managed Kubernetes | Latest |
| **Jenkins** | CI/CD automation | Latest |
| **Alpine Linux** | Minimal OS | Latest |

---

## 📊 Application Features

The deployed application provides:

- **Health Check Endpoint** - `GET /`
- **Real-time Metrics**
  - Application version (`v2.0`)
  - Pod hostname (container identifier)
  - Visitor counter (request tracking)
  - Current timestamp

- **Beautiful UI**
  - Gradient background (purple to blue)
  - Responsive card design
  - Emoji indicators for visual appeal

---

## 🔐 Security Best Practices

✅ **Implemented in this project:**

- **Minimal base images** - Alpine Linux reduces attack surface
- **Non-root container execution** - Prevents privilege escalation
- **Health checks** - Ensures only healthy pods receive traffic
- **Service accounts** - Fine-grained Kubernetes permissions
- **Secret management** - Helm supports external secrets
- **Image scanning** - Regular vulnerability assessments
- **Network policies** - Control pod-to-pod communication

---

## 🚀 Deployment Commands Quick Reference

```bash
# Local testing
npm install && npm start

# Docker operations
docker build -t amanpushp/docker-project:latest .
docker run -p 3000:3000 amanpushp/docker-project:latest
docker push amanpushp/docker-project:latest

# Kubernetes deployment
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Helm deployment
helm install docker-app ./docker-project-chart
helm upgrade docker-app ./docker-project-chart
helm uninstall docker-app

# Monitoring
kubectl get pods
kubectl logs -f <pod-name>
kubectl describe pod <pod-name>
```

---

## 📈 Scaling & High Availability

To scale the application:

```bash
# Manual scaling
kubectl scale deployment docker-app --replicas=5

# Via Helm
helm upgrade docker-app ./docker-project-chart --set replicaCount=5
```

The LoadBalancer service automatically distributes traffic across all replicas.

---

## 🤝 Learning Outcomes

This project demonstrates expertise in:

- ✅ **Cloud-Native Development** - EKS, containerization, microservices
- ✅ **Infrastructure as Code** - Kubernetes manifests, Helm, templating
- ✅ **CI/CD Automation** - Jenkins pipelines, automated deployments
- ✅ **DevOps Culture** - Build, test, deploy, monitor workflows
- ✅ **Container Security** - Image optimization, runtime security
- ✅ **Scalability** - Load balancing, replica management
- ✅ **Observability** - Logging, monitoring, health checks

---

## 📚 Additional Resources

- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Helm Chart Guide](https://helm.sh/docs/chart_best_practices/)
- [AWS EKS Best Practices](https://aws.github.io/aws-eks-best-practices/)
- [Docker Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Jenkins Pipeline Documentation](https://www.jenkins.io/doc/book/pipeline/)

---

## 🎯 Next Steps & Enhancements

- [ ] Add Prometheus & Grafana for monitoring
- [ ] Implement Ingress for advanced routing
- [ ] Add TLS/SSL certificates with cert-manager
- [ ] Set up automated backups
- [ ] Implement GitOps with ArgoCD
- [ ] Add unit and integration tests
- [ ] Implement rate limiting and API gateway
- [ ] Add database layer (PostgreSQL/MongoDB)

---

## 📝 License

This project is open source and available under the MIT License.

---

<div align="center">

### Made with ❤️ by DevOps Engineers

⭐ If you found this helpful, please consider giving it a star!

[⬆ back to top](#-secure-devops-eks-pipeline)

</div>
