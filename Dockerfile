# Use node 4.4.5 LTS
FROM node:4.4.5
ENV LAST_UPDATED 20160605T165400

# Change working directory
WORKDIR /app

# Copy source code
COPY ["package.json", "package-lock.json", "./"]

# Install dependencies
RUN npm install 

# Copy source code
COPY . .

# Expose API port to the outside
EXPOSE 8080

# Launch application
CMD ["npm","start.dev"]