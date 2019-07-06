$(document).ready(()=> {
  const $document = $(document);
  $document.on('keyup', '.js-search-roads', async (e)=> {
    const value = e.currentTarget.value;
    const roadsDiv = document.querySelector('.js-finded-roads');
    //const streets = [{pr_id: 1, pr_name: 'Республики'}, {pr_id: 2, pr_name: 'Ленина'}]

    const streets = await $.ajax({url: `roads/p_road?search_word=${value}`});

    console.log(streets);

    const html = _.map(streets, (st)=> {
      return `<li>${st.pr_name}</li>`;
    }).join('');


    roadsDiv.innerHTML = `<ul>${html}</ul>`;

  });
});
