# Stage 1: Build the React app
FROM node:14-alpine as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --verbose

# Copy the rest of the application code
COPY . .

# Build the React app 
RUN npm run build

CMD [ "npm", "run", "start", "--host", "103.142.100.22"]

# Stage 2: Serve the React app using Nginx
FROM nginx:alpine

# Remove the default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from the first stage
COPY --from=build /app/build /usr/share/nginx/html


# Expose port 80
EXPOSE 5000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
