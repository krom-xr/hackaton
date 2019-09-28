const utils = {
  render: async (tpl, data) => {
    const html = await $.ajax({url: tpl});
    var tempFn = doT.template(html);
    var resultText = tempFn(data);
    console.log(resultText);

    document.body.innerHTML = resultText;
  }
};
