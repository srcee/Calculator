# Calculator

## Application setup

To run the application you will need to take the following steps:

- Make sure you have `Docker` and `Docker Compose` on your machine
- Clone the repository
- run `docker-compose up` from inside the monorepo directory
- you can access the application on `http://localhost:4200/`

## Application usage

You can use the calculator by manually pressing the buttons or by using the keyboard. 
By pressing `Enter`, the application will save in the DB your `equation` and `result` of it. 
You can quickly check the results from the database by accessing `http://localhost:5000/api/calculation`.