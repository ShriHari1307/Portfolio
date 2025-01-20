# Step 1: Use a Node.js image to build the Vite app
FROM node:22-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the source code into the container
COPY . .

# Build the Vite app
RUN npm run build

# Step 2: Use an NGINX image to serve the static files
FROM nginx:alpine

# Copy the build output from the previous stage to NGINX's HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
