python manage.py makemigrations
python manage.py migrate
npm --prefix client run-script build -- --outputPath="../static/" --base-href="/static/"
mkdir templates
cp ./static/index.html ./templates/index.html
