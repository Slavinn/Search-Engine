FROM node:17.6.0
# Set working directory
WORKDIR /usr/app
# Install app dependencies
COPY package*.json ./
RUN npm install -qy
# Copy app to container
COPY . .
# Run the "dev" script in package.json
CMD ["npm", "run", "dev"]