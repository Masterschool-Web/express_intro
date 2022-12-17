# Express.JS Challenges

We are going to use NodeJS with ExpressJS to build a server and create different endpoints.

This endpoints should use our local database `characters.json` in order to send back different characters.

## Challenges

### 1. Setup an express server

Goals:

- Have a server running
- When server is running, console.log("serer is running on port 5000")

### 2. Create a character router

Goals:

- Create a router file for character in a routes folder
- Import router in index.js file
- Use router when `"/characters"` endpoint is being called

### 3. Get all characaters

- Navigating to `localhost:5000/characters` should respond with all characters

### 4. Get one character by id

- Navigating to `localhost:5000/characters/<id>` should respond with one character with that id
- For example `localhost:5000/characters/25` or `localhost:5000/characters/25`
- Bonus: if no character was found with that id, it should send back an error status with the message: "no character was found"

### 5. Get all characters by blood type

- Navigating to `localhost:5000/characters/blood-type/<blood-type>` should respond with all characters that share this blood type
- For exampe: `localhost:5000/characters/blood-type/Half-blood` or `localhost:5000/characters/blood-type/Pure-blood`
- Bonus: case should not matter. So `/Half-blood` should return the same as `/half-blood` or `/hAlF-BLOod`...

if no character was found, return status 404 with a message "no character was found"

### 6. Get all characters by month of birth

- Navigating to `localhost:5000/characters/birth/<month>` should respond with all characters that were born in this month
- For exampe: `localhost:5000/characters/birth/september` or `localhost:5000/characters/birth/march`
- case should not matter

if no character was found, return status 404 with a message "no character was found"

### 7. Get characters by search queries

- Navigating to `localhost:5000/characters/search` should listen to any query attached
- A query looks like this `localhost:5000/characters/search?name=harry`
- Multiple queries look like this `localhost:5000/characters/search?name=harry&house=griffindor`

You should return a list of all characters where the query matches something - whether it's name, patronus, anything. You may wish to consider how you order results in a way that's meaningful (sort a-z, according to the search queries).

### 8. Get Ready, Match!

We are playing Quidditch, the famous wizard game from the Harry Potter books.

In order to do so, we need to divide our characters into groups of 6 players each.
This should give us 4 groups.

We will then face 2 groups against each other (so we have 2 matches, of 2 groups each time).
All people that are not playing should be "referees".

We should send back this object

```js
{
    match1: [[...all players of group 1], [...all players of group 2]],
    match2: [[...all players of group 3], [...all players of group 4]],
    referees: [...all other characters]
}
```

## Steps and Tips

### 1. Setup an express server

- Install `express.js`
- Install `nodemon`
- Create an `index.js` file
- Add a script to start a `nodemon` server with the `index.js` file
- Intiatie a server using `express()`
- Listen to the server and console.log `"server is running on port: 5000` when server is running

### 2. Create a router

- Create a `routes` folder
- Create a `characters.js` file
- Initiate a router by `express.Router()`
- Import characters `json` file.
- Export router as `characterRouter`

- Go to `index.js`
- Import `characterRouter`
- Use `characterRouter` when `"/characters"` endpoint is being called

Hint: `app.use(endpoint, router)`

### 3. Get all characaters

To send a message back you should use the `res` object.

```js
router.get("/", (req, res) => res.send(<your message here>))
```

### 4. Get one character by id

You need to use the syntax `/characters/:id`.
In order to read the variable `:id` (or `id` in JS), you need to use `const { id } = req.params`

Every param (including `:id`) is always a string!
Make sure you convert it to number, if you compare it with the `id` of the characters.

### 5. Get all characters by blood type

use `toLowerCase()` to make sure the case you got in the `params` does not matter.

### 6. Get all characters by month of birth

That is a hard one... because every birth date is different in the Database, we should use something like `.index()` or `.includes()`

### 7. Get characters by search queries

To read a query we use `req.query`.

For example:
```js

const { name, house } = req.query

if (name) {
  // filter characters by name...
}
```
