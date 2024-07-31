# Use an official node runtime as a parent image
FROM node:alpine3.16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies with verbose logging
RUN npm install --verbose

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app for production
RUN npm run build
# Start the development server
CMD [ "npm", "run", "start", "--host", "0.0.0.0"]

# Use an official nginx image as a parent image
FROM nginx:alpine

RUN npm install


# Copy the build output to the nginx html directory
COPY --from=build /app .

# Expose port 80
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
