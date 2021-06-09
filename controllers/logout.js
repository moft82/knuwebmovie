module.exports = (req, res) =>{
  console.log(req.session.userId)
    req.session.destroy(() =>{
      req.session;
      res.redirect('/')
    }) 
}