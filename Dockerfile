FROM node:20-alpine

WORKDIR /app

# Install dependencies for node-gyp and other build tools
RUN apk add --no-cache python3 make g++ 

# Copy package.json
COPY package.json ./

# Install dependencies and generate lock file
RUN npm install

# Copy the rest of the code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start development server with dependency check
CMD ["npm", "run", "dev"] 