# task-app-crud-nodejs-express
This is a project to practice everything learned in 6 months, making use of different technologies and applying the mvc pattern.
## Pre-settings
Execute the npm start command to start the server, but before...
The default application requires two environment variables that must be added to the root of the project in an .env file.

The variables contain the URI of the database in mongodb and the port.
MONGODB_URL = mongodb://{port}/{dbname}

SERVER_PORT = {0000}
Defining the address to the database is optional, if we don't do it the application will connect by default to the test database offered by mongo DB.

