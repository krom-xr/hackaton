const utils = {

  renderPartial: async (tpl, data)=> {
    const html = await $.ajax({url: tpl});
    var tempFn = doT.template(html);
    var resultText = tempFn(data);
    return resultText;
  },

  render: async (tpl, data) => {
    const result = await utils.renderPartial(tpl, data)
    document.body.innerHTML = result;
  }
};
