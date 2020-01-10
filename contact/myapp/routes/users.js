var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  dbConnection(function (db) {
    db.collection('users')
      .findOne({email: req.body.email, nom: req.body.nom , prenom: req.body.prenom, numero_mobile: req.body.numero_mobile, numero_fix: req.body.numero_fix}, null, function (err, user) {
          if (user !== null) {
            req.session.user = user
            console.log(req.session)
            res.redirect('/')
          } else {
            res.redirect('/users/login')
          }
      })
  })
})

module.exports = router;
