function initRouter() {
  const route = Rlite(notFound, {
    // Default route
    '': function () {
      Roads.renderIndex();
    },


    'users': function () {
      Users.renderUsers();
    },

    // #users/chris -> r.params.name will equal 'chris'
    'users/:id': function (id) {
      Users.renderUser(id);
    },


    // #logout
    'logout': function () {
      return 'Logout';
    }
  });

  function notFound() {
    console.log('abcd?');
  }

  // Hash-based routing
  function processHash() {
    const hash = location.hash || '#';

    // Do something useful with the result of the route
    route(hash.slice(1));
  }

  window.addEventListener('hashchange', processHash);
  processHash();
};
