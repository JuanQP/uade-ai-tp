FROM node:18-alpine

# Install frontend dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

# Add source code
COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
