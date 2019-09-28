const Tasks = {
  renderTasks: async function() {
    await utils.render('html/index.html');
  },

  renderComments: async function() {
    await utils.render('html/comments.html')


    VK.init({apiId: 7151497, onlyWidgets: true});
    VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});
  },

  renderMaps: async function() {

    await utils.render('html/map.html')
  }
}
