# Node Js Project Structure

Recently I have started working on a new project and the issue that I faced was spending a lot of time building the project structure based on the best practices, especially with javascript that has a lot of approaches and bad parts, I couldn't find any place that wraps the best practices into a single project ,so I decided to make it on my own.

in this repository, I don't aim to provide an optimal solution as each project have its own necessity but to help anyone that is starting with a node js project and can't find any inspiration on how to start building the project to take this project as the starting point.

some of the good practices followed in this repository:

- Async/Await support
- WinstonJs Logger Implementation
- Error Handling
- Sequelize Support
- Open Api Specification implemented through swagger-jsdocs and swagger-ui
- Jwt implementation
- Enviroment variables to hold configuration values .env file
- OOP (object oriented programming)

# How to start the project

first you clone the project using the following command :

1-git clone git@github.com:rezasaleki/postgres-express-react-node-tutorial.git

2-install node version v14.17.4 or use nvm to downgrade your node version

3-delete the existing package.lock.json and run npm install

4-then you create a postgres database Named todos-dev with the following credintials

sudo -u postgres createdb todos-dev

username : postgres

password : password

export DATABASE_URL=postgres://postgres:password@127.0.0.1:5432/todos-dev


run the migration using the following command :
npx sequelize-cli db:migrate

Finally you run npm start

Future improvements utilize compenent based structe

please feel free to :star: happy programming :v:

Author: rezasaleki (@reskipper)
Email: rezasaleki.09@gmail.com
