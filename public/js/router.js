function initRouter() {
  const route = Rlite(notFound, {
    // Default route
    '': function () {
      Roads.renderIndex();
    },

    'street/:strId': function(data) {
      console.log('strid - ', data.strId);
      Roads.renderStreet(data.strId);
    },

    'users': function () {
      Users.renderUsers();
    },

    'street': function () {
      Users.renderStreet();
    },

    // #users/chris -> r.params.name will equal 'chris'
    'users/:id': function (id) {
      Users.renderUser(id);
    },


    // #logout
    'logout': function () {
      return 'Logout';
    },


    'tasks': function() {
      console.log('tasks');
      Tasks.renderTasks();
    },

    'comments': function() {
      Tasks.renderComments();
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
