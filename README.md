# Blog Django Example App

## Setup

It is best to use the python `virtualenv` tool to build locally:

- Clone the repository
```shell script
$ git clone https://github.com/milon19/blog.git
$ cd blog
```

- Create Virtual environment and Install dependencies
```diff
$ virtualenv env
$ source ./env/bin/activate
$ pip install -r requirements.txt
```

- Make `.env` file to the root directory of the project. `.env` file should contains following variables.
```
SECRET_KEY
ALLOWED_HOSTS
CORS_ORIGIN_ALLOW_ALL
CORS_ORIGIN_WHITELIST
SQLITE_URL
DEBUG
```

## Run
```shell script
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py runserver
```
Then visit [http://localhost:8000](http://localhost:8000) to view the app.

<b>```N.B: React app is serve from Django as static files. You will find React App in 
(http://localhost:8000/react/) url.```</b>

## React App
- React App Directory: <b>`/blog/react_frontend`</b>
- React build files: <b>`/blog/react_frontend/serve_from_django`</b>

## Run React App:
You can run react app separately.
```shell script
$ cd react_frontend
$ npm install
$ npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. <br />
<b> Your have to run Django on [http://localhost:8000](http://localhost:8000) port for backend support </b>


## Deploy to Heroku

This application is currently deployed in Heroku. 

To Visit follow this link: [https://grayspaceit-blog.herokuapp.com/](https://grayspaceit-blog.herokuapp.com/)
