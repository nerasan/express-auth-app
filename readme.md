## Express Auth App

* created a node app
* .gitignore
* install express
* created home route to test app
* install ejs and express-ejs-layouts
* stubbed out GET auth/login, GET auth/signup, POST auth/login, POST auth/signup
* configured auth controller
* change the res.send routes to res.render
* set up the signup and login forms, tested post routes


#### Notes

**to amend a git commit message in case of typoes**
```
git commit --amend
```

## Sequelize Validations
* What are different types of validations?

* Which ones could be useful?
* How do we use validations in sequelize?
* Try it! Implement a validation on BlogPulse to require submitted comments to be between 20 and 200 characters. Test that it works. Use .catch() to send a message to the user. It can just use res.send() for now if you want. If you have extra time, try to make the message render on the page.

---

## How to set up - Express App

1. Fork & clone

2. Install dependencies
```
npm i
```

3. Create a `config.json` with the following code:
```json
{
  "development": {
    "database": "<insert db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "<insert db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "<insert db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

**Note:** If your database requires a username and password, you will need to include thse fields as well:
```json
username:
password:
```


4. Create a database.
```
sequelize db:create <insert db name here>
```

5. Migrate the `user` model to your database
```
sequelize db:migrate
```

6. Add a `SESSION_SECRET` and `PORT` environment variable in a `.env` file. (can be any string)

7. Run `nodemon`.