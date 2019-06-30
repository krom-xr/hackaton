function initRouter() {
  const route = Rlite(notFound, {
    // Default route
    '': function () {
      return 'Home';
    },

    // #inbox
    'inbox': function () {
      return 'Inbox';
    },

    // #sent?to=john -> r.params.to will equal 'john'
    'sent': function ({to}) {
      return 'Sent to ' + to;
    },

    'users': function () {

      utils.render('html/users.html', {foo: 'bar'});

      return 'Users list';

      //return 'Users list ';
    },

    // #users/chris -> r.params.name will equal 'chris'
    'users/:name': function ({name}) {
      return 'User ' + name;
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
