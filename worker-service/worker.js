const AWS = require('aws-sdk');

const QUEUE_URL = process.env.SQS_QUEUE_URL;
const POLL_INTERVAL = 10000; // 10s between polls if queue is empty

if (!QUEUE_URL) {
  throw new Error('Missing SQS_QUEUE_URL in environment variables');
}

const sqs = new AWS.SQS({ region: process.env.AWS_REGION || 'us-east-1' });

async function pollQueue() {
  try {
    const params = {
      QueueUrl: QUEUE_URL,
      MaxNumberOfMessages: 1,
      WaitTimeSeconds: 20, // enable long polling
      VisibilityTimeout: 30,
    };

    const response = await sqs.receiveMessage(params).promise();

    if (response.Messages && response.Messages.length > 0) {
      for (const message of response.Messages) {
        const body = JSON.parse(message.Body);
        console.log('Processing order:', body);

        // 🧠 Business logic here (e.g., email, DB insert, etc.)

        // Delete message after processing
        await sqs.deleteMessage({
          QueueUrl: QUEUE_URL,
          ReceiptHandle: message.ReceiptHandle,
        }).promise();

        console.log('Message processed & deleted.');
      }
    } else {
      console.log('No messages. Waiting...');
    }
  } catch (error) {
    console.error('Error processing SQS message:', error);
  } finally {
    setTimeout(pollQueue, POLL_INTERVAL);
  }
}

console.log('Worker started. Listening for SQS messages...');
pollQueue();
