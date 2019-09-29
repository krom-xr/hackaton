const Tasks = {
  renderIndex: async function() {
    await utils.render('html/index.html');
  },
  renderTasks: async function() {

    const tasks = await $.ajax({url: 'http://185.20.224.177:8081/tasks'})

    await utils.render('html/index.html');
  },

  //renderComments: async function() {

    //await utils.render('html/comments.html')


    //VK.init({apiId: 7151497, onlyWidgets: true});
    //VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});
  //},

  renderMaps: async function() {
    const part = await utils.renderPartial('html/map.html')
    document.querySelector('.base-holder').innerHTML = part;
  },

  renderChat: async function() {

    const part = await utils.renderPartial('html/chat.html')
    document.querySelector('.base-holder').innerHTML = part;
  }

}
