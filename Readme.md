# Complete Backend for yt cloned website.

- [model Link](https://app.eraser.io/workspace/mCXB8XP02X3EIMvS0GgU?origin=share)

# How to make Perfossional structures of the application.

1- Make public folder inside it create temp folder then add .gitignore and .gitkeep file in it. we can get the code from .gitignor generator then get the code nad add in .gitignor file.

2- Make .env (envirnoment veriable) file in root then we will make .env.sample file also then we will do same what we will do in.env in .env.sample folder.

3- Make another folder in root by the name src.

4- Then create files in src (app.js, constants.js, index.js).

5- Then in package.json we will add "type":"module" in first {}, then we will first install nodemon (npm i -D nodemon) , here we used \_D because we want to add nodemon as a devDependencies , also add nodemon in script as "dev":"nodemon src/index.js.

5- Make folders in src (controllers, db, middleware, models, routes, utils).

6- We will use Prettier so we will follow standard variations of writing a code for everyone who will be coding.

7- install prettier (npm i -D prettier), then we will add 2 files in root (.prettierrc , .prettier.ignore).

8- code inside .prettierrc file will be like ({
"singleQuote": false,
"bracketSpacing": true,
"tabWidth": 2,
"semi": true,
"trailingComma": "es5"
}) NOTE: we can modify it as per standard we are going to follow.

9- code inside .prettierignore file will be like ({
/.vscode
/node_modules
./dist
_.env
.env
.env._
}) NOTE: we can modify it as per standard we are going to follow.

# Setting Up the application (Database Connection).

1- mongodb atlas (https://www.mongodb.com/cloud/atlas/register)

2- Set up the account and create Project.

3- setup env, envsample file.

4- In constants.js setup the name of the Database like in this case it is (export const DB_NAME = "yt-backend").

5- First we will install required packages (npm i mongoose express dotenv)

6- Inside db folder in index.js setup the database connection.

7- To make datbase we will always follow these steps.
  - import mongoose from 'mongoose';
  - import { DB_NAME } from "../constants.js";

  - const connectDB = async () => {
  try {
    const connetionInstance = await mongoose.connect(
      `&{process.env.MONGODB_URI}/&{DB_NAME}`
    );
    console.log(
      `\n MONGODB CONNECTED !! DB HOST : ${connetionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGO_DB CONNECTION FAILED:", error);
    process.exit(1);
  }
};
  - export default Connect_DB;

# Rest You can find in SorceCode