module.exports = {
  // A func that takes in two parameters `req` and `res` [request, response]
  getIndexPage: (req, res) => {
    if (req.user.isLoggedIn()) {
      return res.send("Hey");
    }
    res.send("Ooops. You need to log in to access this page");
  }
}