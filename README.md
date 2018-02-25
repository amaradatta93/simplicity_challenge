Clone the repository

#Server:
This application uses python 3.5.
Create a virtual environment using: `virtualenv env`
Activate virtual env: `source env/bin/activate`
Install requirements: `pip install -r requirements.txt`

#Prepare the frontend assets:
`npm install`
This will build the angular app located in `client` into the root `dist` directory.

#Link angular app with django
`./build.sh`
This will copy the `index.html` file to a django templates directory to be served at the root.

#Prepare the database
Configure the PostgresDB in settings.py, or set the `DATABASE_URL` environment variable in the format `postgres://username:password@host:port/dbname`.
`python manage.py makemigrations` 
`python manage.py migrate`

#Start the server
`python manage.py runserver`
