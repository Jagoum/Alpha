# Stage 1: Build the application
FROM node:16 AS build

WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Stage 2: Production container
FROM node:16-slim

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app /app

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
