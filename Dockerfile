# Use node 4.4.5 LTS
FROM node:4.4.5
ENV NODE_ENV=production

# Change working directory
WORKDIR /app

# Copy source code
COPY ["package.json", "package-lock.json", "./"]

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Launch application
CMD ["node","index.js"]