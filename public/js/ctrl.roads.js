const Roads = {
  renderIndex: async function() {
    await utils.render('html/index.html');
    document.querySelector('.js-search-roads').click();

  },

  renderStreet: async function(id) {
    await utils.render('html/street.html');
    const street = await $.ajax({url: `roads/p_road/${id}`});


  }
}
