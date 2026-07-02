# ✂ Elegant Stitch — Tailoring Website

A modern, responsive tailoring business website built with ReactJS, containerized with Docker, orchestrated using Minikube on an AWS EC2 instance, and automated with GitHub Actions CI/CD.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Docker Setup](#docker-setup)
- [Kubernetes with Minikube](#kubernetes-with-minikube)
- [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [Dependabot](#dependabot)
- [AWS EC2 Setup](#aws-ec2-setup)

---

## Project Overview

Elegant Stitch is a bespoke tailoring website that showcases tailoring services, a gallery of work, and a booking form for customers to schedule fittings. The project is fully containerized and deployed on an AWS EC2 instance managed by Minikube Kubernetes, with automated deployments triggered on every push to the `main` branch.

---

## Features

- Sticky Navbar with smooth scroll navigation
- Hero section with a call-to-action button
- Services section showcasing 4 tailoring services
- Gallery section displaying garment categories
- Booking/Contact form with success state
- Footer with business contact information
- Fully responsive layout using CSS-in-JS inline styles
- Dockerized with multi-stage build using Nginx
- Kubernetes deployment and service manifests
- Automated CI/CD pipeline via GitHub Actions
- Dependabot configured for automated dependency updates

---

## Project Structure

```
reactjs-project/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml          # GitHub Actions CI/CD pipeline
│   └── dependabot.yml          # Dependabot dependency update config
├── k8s/
│   ├── deployment.yml          # Kubernetes Deployment manifest
│   └── service.yml             # Kubernetes Service manifest (NodePort)
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── components/
│   │   ├── Navbar.js           # Sticky navigation bar
│   │   ├── Hero.js             # Full-screen hero banner
│   │   ├── Services.js         # Services cards section
│   │   ├── Gallery.js          # Gallery grid section
│   │   ├── Contact.js          # Booking form section
│   │   └── Footer.js           # Footer with contact info
│   ├── App.js                  # Root component
│   ├── index.js                # React DOM entry point
│   └── index.css               # Global styles
├── .dockerignore               # Files excluded from Docker build
├── .gitignore                  # Files excluded from Git
├── Dockerfile                  # Multi-stage Docker build
├── nginx.conf                  # Nginx config for serving React app
├── package.json                # Project dependencies and scripts
└── package-lock.json           # Locked dependency versions
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | ReactJS 18, CSS-in-JS |
| Web Server | Nginx (Alpine) |
| Containerization | Docker (multi-stage build) |
| Orchestration | Kubernetes (Minikube) |
| Cloud | AWS EC2 (Ubuntu 22.04) |
| CI/CD | GitHub Actions |
| Dependency Updates | Dependabot |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm start
```
App runs at `http://localhost:3000`

### Build for production
```bash
npm run build
```

---

## Docker Setup

### Prerequisites
- Docker installed

### Build the Docker image
```bash
docker build -t tailoring-app:latest .
```

### Run the container locally
```bash
docker run -p 8080:80 tailoring-app:latest
```
App runs at `http://localhost:8080`

### How the Dockerfile works
The Dockerfile uses a **multi-stage build**:
- **Stage 1 (builder)** — Uses `node:18-alpine` to install dependencies and build the React app
- **Stage 2 (serve)** — Uses `nginx:alpine` to serve the built static files, keeping the image size minimal

---

## Kubernetes with Minikube

### Prerequisites
- Minikube installed
- kubectl installed

### Start Minikube
```bash
minikube start --driver=docker
```

### Load Docker image into Minikube
```bash
minikube image load tailoring-app:latest
```

### Apply Kubernetes manifests
```bash
kubectl apply -f k8s/deployment.yml
kubectl apply -f k8s/service.yml
```

### Access the app
```bash
minikube service tailoring-app-service --url
```
Or directly at `http://<EC2-PUBLIC-IP>:30080`

### Kubernetes manifest details

**deployment.yml**
- Deploys 2 replicas of the app
- Uses `tailoring-app:latest` Docker image
- Sets resource requests (64Mi memory, 100m CPU) and limits (128Mi memory, 250m CPU)
- `imagePullPolicy: Never` — uses locally loaded image instead of pulling from a registry

**service.yml**
- Type: `NodePort`
- Exposes port `80` of the container on node port `30080`
- Accessible externally via `http://<EC2-IP>:30080`

### Useful kubectl commands
```bash
kubectl get pods                                            # list all pods
kubectl get services                                        # list all services
kubectl logs <pod-name>                                     # view pod logs
kubectl describe pod <pod-name>                             # debug pod details
kubectl scale deployment tailoring-app --replicas=3        # scale up/down
kubectl rollout restart deployment/tailoring-app           # restart deployment
kubectl rollout status deployment/tailoring-app            # check rollout status
minikube dashboard                                          # open Kubernetes dashboard
```

---

## CI/CD with GitHub Actions

Every push to the `main` branch automatically triggers the deployment pipeline.

### Pipeline flow
```
Push to main branch
        ↓
GitHub Actions triggers (deploy.yml)
        ↓
Checkout code
        ↓
Build Docker image with latest code
        ↓
Save image as tar.gz
        ↓
Copy image + k8s manifests to EC2 via SCP
        ↓
SSH into EC2 → load image into Minikube
        ↓
kubectl apply manifests
        ↓
kubectl rollout restart → pods updated
        ↓
Website live at http://<EC2-IP>:30080
```

### Required GitHub Secrets
Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Description |
|---|---|
| `EC2_HOST` | Public IP address of your EC2 instance |
| `EC2_USER` | SSH username (e.g. `ubuntu`) |
| `EC2_SSH_KEY` | Full content of your `.pem` private key file |

### Monitor deployments
Go to your GitHub repo → **Actions** tab to view live logs of every deployment.

---

## Dependabot

Dependabot is configured to automatically check for dependency updates every **Monday at 9:00 AM UTC** and open pull requests for outdated packages.

### Configuration (`.github/dependabot.yml`)
- Package ecosystem: `npm`
- Schedule: Weekly on Monday
- Auto-labels PRs with `dependencies` and `javascript`
- Commit message prefix: `chore`
- Ignores `react-scripts` major version updates (to avoid breaking changes)

### Enable Dependabot on GitHub
Go to **Settings → Code security and analysis** and enable:
- Dependabot alerts
- Dependabot security updates
- Dependabot version updates

---

## AWS EC2 Setup

### Recommended EC2 configuration
| Setting | Value |
|---|---|
| AMI | Ubuntu 22.04 LTS |
| Instance type | t3.medium (2 vCPU, 4GB RAM minimum) |
| Storage | 20GB gp2 |

### Security Group — open these ports
| Port | Purpose |
|---|---|
| `22` | SSH access |
| `30080` | NodePort — app access |
| `8443` | Kubernetes API |

### Install dependencies on EC2
```bash
# Docker
sudo apt update && sudo apt install -y docker.io
sudo systemctl enable docker && sudo systemctl start docker
sudo usermod -aG docker $USER && newgrp docker

# kubectl
curl -LO "https://dl.k8s.io/release/$(curl -sL https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Start Minikube
minikube start --driver=docker
```

---

## License

This project is open source and available under the [MIT License](LICENSE).
