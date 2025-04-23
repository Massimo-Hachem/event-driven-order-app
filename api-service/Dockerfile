FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy dependency definitions first for better caching
COPY package*.json ./

# Install only production deps
RUN npm ci --only=production

# Copy application files
COPY . .

# Add non-root user for better security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000

CMD ["node", "index.js"]
