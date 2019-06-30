const Users = {
  renderUsers: async function() {
    const data = await $.ajax({url: 'users'});
    console.log(data);
    utils.render('html/users.html', {users: data});
  },
  renderUser: async function(userdata) {
    console.log(userdata);
    const data = await $.ajax({url: `users/${userdata.id}`})
  }
}

