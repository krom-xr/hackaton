$(document).ready(()=> {
  const $document = $(document);


  async function onSearchRoad (e) {

    const value = e.currentTarget.value;
    const roadsDiv = document.querySelector('.js-finded-roads');
    //const streets = [{pr_id: 1, pr_name: 'Республики'}, {pr_id: 2, pr_name: 'Ленина'}]

    const streets = await $.ajax({url: `roads/p_road?search_word=${value}`});

    console.log(streets);

    const html = _.map(streets, (st)=> {
      return `<li class="js-street-item" data-street-id="${st.pr_id}">${st.pr_name}</li>`;
    }).join('');


    roadsDiv.innerHTML = `<ul>${html}</ul>`;

  }

  $document.on('keyup', '.js-search-roads', onSearchRoad);
  $document.on('click', '.js-search-roads', onSearchRoad);


  $document.on('click', '.js-street-item', (e)=> {
    const stId = e.currentTarget.dataset.streetId;
    window.location.hash = `street/${stId}`;
  });
});
