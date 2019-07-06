const Users = {
  renderUsers: async function() {

    utils.render('html/users.html', {});
  },
  renderUser: async function(userdata) {
    const data = await $.ajax({url: `users/${userdata.id}`})
    utils.render('html/user.html', {user: data});
  },
  renderStreet: async function() {

    utils.render('html/street.html', {});
  }
}

