Clone the repository

#Server:
`cd server`
Create a virtual environment using: `virtualenv env`
Activate virtual env: `source env/bin/activate`
Install requirements: `pip install -r requirements.txt`

#Run the project
Configure the PostgresDB in settings.py
`python manage.py makemigrations` 
`python manage.py migrate`
`python manage.py runserver`

#Client:
`cd client`
`npm install`
`npm run-script build`
`npm run-script start`
Browse to http://localhost:4200/
