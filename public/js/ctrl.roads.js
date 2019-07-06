const Roads = {
  renderIndex: async function() {



    await utils.render('html/index.html');
    document.querySelector('.js-search-roads').click();

  },
}
