# Stage 1: Build the React client

# Use the official Node.js image to build the client
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the client project files
COPY Client/package.json Client/package-lock.json ./

# Clean npm cache before install
RUN npm cache clean --force

RUN npm install

# Copy the rest of the client code
COPY Client/. ./
RUN npm run build

# Stage 2: Serve the client application
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
