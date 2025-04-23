## 📦 Event-Driven Order Processing System (AWS Microservices)

A production-ready, event-driven architecture built on AWS using microservices, ECS Fargate, SQS, and S3 + CloudFront. Designed for scalability, fault tolerance, and fast deployments.

---

### 🧱 Project Structure

```
event-driven-order-app/
├── frontend/          # Static web frontend (HTML/CSS/JS) → hosted on S3 + CloudFront
├── api-service/       # Node.js API microservice → ECS Fargate + ALB
└── worker-service/    # Node.js worker for SQS queue → ECS Fargate (private)
```

---

### 🚀 Architecture Overview

- **Frontend (S3 + CloudFront)**  
  Static website to place orders via a simple form.

- **API Service (Node.js + ECS Fargate)**  
  Handles `/order` POST requests and pushes order payloads into SQS.

- **Worker Service (Node.js + ECS Fargate)**  
  Long-polls SQS, processes each order message (e.g., mock business logic), and deletes it from the queue.

---

### 🛠️ Tech Stack

| Component       | Technology           |
|----------------|----------------------|
| Frontend        | HTML/CSS/JS + S3/CloudFront |
| API & Worker    | Node.js (Express) + ECS Fargate |
| Messaging       | Amazon SQS (Standard Queue) |
| CI/CD           | AWS CodePipeline + CodeBuild *(or GitHub Actions)* |
| Monitoring      | CloudWatch Logs + Alarms |
| Secrets         | SSM Parameter Store / IAM Roles |

---

### 📁 Key Folders

#### `frontend/`
- Responsive UI for placing orders.
- Hosted on **Amazon S3 + CloudFront**.
- JavaScript calls backend API.

#### `api-service/`
- Express-based microservice for submitting orders.
- Sends messages to **Amazon SQS**.
- Runs on **ECS Fargate**, behind **ALB**.

#### `worker-service/`
- Long-polling SQS worker.
- Processes and deletes messages.
- Runs in private subnets on **ECS Fargate**.

---

### ✅ Deployment Flow

1. Provision AWS infrastructure (VPC, subnets, ECS, SQS, etc.)
2. Push this code to GitHub
3. Set up **CodePipeline** or **GitHub Actions** for:
   - `api-service/`
   - `worker-service/`
   - `frontend/`
4. Deploy frontend to S3 + CloudFront
5. Monitor services via CloudWatch

---

### 📊 Observability & Monitoring

- **CloudWatch Logs** for ECS tasks
- **CloudWatch Alarms** for:
  - API errors
  - Queue depth
  - ECS crashes
- Optional: SNS notifications to Email/Slack

---

### 🔐 Security Highlights

- API protected by HTTPS ALB
- Workers live in **private subnets**
- S3 access restricted via CloudFront
- Secrets stored in **SSM Parameter Store**
- IAM roles scoped per service

---

### 📌 Optional Enhancements

- Use AWS Lambda for lightweight worker
- Add WAF to protect API layer
- Track frontend errors via Sentry

---

### 🤝 Contributing

Open a PR or issue — feedback and ideas welcome!

---

### 📄 License

MIT License — free to use and modify.
