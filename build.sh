cd client/
npm install
npm run-script build -- --outputPath="../static/" --base-href="/static/"
cd ..
mkdir templates
cp ./static/index.html ./templates/index.html
