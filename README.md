# Built with React, Redux, Node, Express & MongoDB

# [Deploy](https://proshop999.herokuapp.com/product/60a53657abb44309648621d6)

## Example: 
![Example](/upload/example2.gif)


## Env Variables
### Create a .env file in then root and add the following

```bash
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```
## Install Dependencies (frontend & backend)

```bash
npm install
cd frontend
npm install
```

## Run

```bash
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data

```bash
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```bash
Sample User Login

john@example.com
123456
```

