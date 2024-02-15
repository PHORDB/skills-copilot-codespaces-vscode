// Create web server
// 1. Create a web server
// 2. Create a route for the path /comments
// 3. When a GET request is made to /comments, return the comments array
// 4. When a POST request is made to /comments, add a new comment to the comments array
// 5. When a PUT request is made to /comments, update the entire comments array
// 6. When a DELETE request is made to /comments, delete the comments array
// 7. Listen on port 3000
// 8. Test the API with curl

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});

app.put('/comments', (req, res) => {
  const newComments = req.body.comments;
  comments = newComments;
  res.json(comments);
});

app.delete('/comments', (req, res) => {
  comments = [];
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Test the API with curl
// $ curl -X POST -H "Content-Type: application/json" -d '{"comment":"Hello"}' http://localhost:3000/comments
// $ curl -X POST -H "Content-Type: application/json" -d '{"comment":"World"}' http://localhost:3000/comments
// $ curl -X GET http://localhost:3000/comments
// $ curl -X PUT -H "Content-Type: application/json" -d '{"comments":["Hello","World"]}' http://localhost:3000/comments
// $ curl -X DELETE http://localhost:3000/comments
// $ curl -X GET http://localhost:3000/comments