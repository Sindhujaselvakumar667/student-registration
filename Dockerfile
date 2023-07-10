# Use the official Node.js 16 image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install 

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your Nest.js application is running (change it if necessary)
EXPOSE 3000

# Start the application
CMD [ "yarn", "run", "start" ]
