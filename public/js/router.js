function initRouter() {


  const token = localStorage.getItem('token');
  if (!token)
    location.hash = '#login';

  const route = Rlite(notFound, {
    // Default route
    '': function () {
      //Roads.renderIndex();
      Tasks.renderTasks();
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

    'login': function () {

      const token = localStorage.getItem('token');
      if (token)
        location.hash = '#tasks';



      return utils.render('html/login.html');
    },

    'tasks': async function() {

      Tasks.renderTasks();
    },

    'comments': async function() {
      if (!document.querySelector('.base-holder'))
        await Tasks.renderIndex();


      Tasks.renderComments();
    },
    'maps': async function () {
      if (!document.querySelector('.base-holder'))
        await Tasks.renderIndex();

      await Tasks.renderMaps();
      setTimeout(()=> {
        initMap();
      }, 100);
    },
    'chat': async function () {
      if (!document.querySelector('.base-holder'))
        await Tasks.renderIndex();

      await Tasks.renderChat();
    },
    'team': async function () {
      if (!document.querySelector('.base-holder'))
        await Tasks.renderIndex();

      await Tasks.renderTeam();
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
