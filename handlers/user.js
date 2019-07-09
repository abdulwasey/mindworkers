exports.deleteUser = function (req, res) {
  db.User.findByIdAndRemove(req.params.id, (err) => {
    if (err) res.render('error-view');
    res.redirect('/api/users');
  });
};
