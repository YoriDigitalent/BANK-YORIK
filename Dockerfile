# Use node 12
FROM node:12

# Change working directory
WORKDIR /usr/src/app

# Copy source code
COPY ["package*.json", "./"]

# Install dependencies
RUN npm install 

# Copy source code
COPY . .

# Expose API port to the outside
EXPOSE 8080

# Launch application
CMD ["node","index.js"]
