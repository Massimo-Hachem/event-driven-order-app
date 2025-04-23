const express = require('express');
const AWS = require('aws-sdk');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const QUEUE_URL = process.env.SQS_QUEUE_URL;

if (!QUEUE_URL) {
  throw new Error('Missing SQS_QUEUE_URL in environment variables');
}

// AWS SDK picks up IAM roles from ECS by default
const sqs = new AWS.SQS({ region: process.env.AWS_REGION || 'us-east-1' });

// Middlewares
app.use(helmet());            // Security headers
app.use(express.json());      // JSON body parsing
app.use(morgan('combined'));  // HTTP request logging

app.post('/order', async (req, res) => {
  const order = req.body;

  if (!order || !order.id) {
    return res.status(400).json({ error: 'Order payload must contain an "id"' });
  }

  const params = {
    QueueUrl: QUEUE_URL,
    MessageBody: JSON.stringify(order),
  };

  try {
    const result = await sqs.sendMessage(params).promise();
    res.status(200).json({ message: 'Order placed', messageId: result.MessageId });
  } catch (err) {
    console.error('SQS Send Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/health', (req, res) => res.send('OK'));

app.listen(port, () => {
  console.log(`API service running on port ${port}`);
});
