# Using Node.js base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install app dependencies
# RUN npm ci --only=production
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose 5000 port
EXPOSE 5000

# Setting environment variables from the .env file
# docker build --build-arg ENV_FILE=.env -t your-image-name .
# Build with above command if you need to use new env variables
ARG ENV_FILE
ENV ENV_FILE ${ENV_FILE}
RUN if [ "$ENV_FILE" ]; then cp $ENV_FILE .env; fi 


# Start the app
CMD [ "node", "app.js" ]
