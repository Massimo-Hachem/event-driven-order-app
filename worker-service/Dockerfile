FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source files
COPY . .

# Security best practice: non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD ["node", "worker.js"]
