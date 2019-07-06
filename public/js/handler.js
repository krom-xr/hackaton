$(document).ready(()=> {
  const $document = $(document);


  async function onSearchRoad (e) {

    const value = e.currentTarget.value;
    const roadsDiv = document.querySelector('.js-finded-roads');
    //const streets = [{pr_id: 1, pr_name: 'Республики'}, {pr_id: 2, pr_name: 'Ленина'}]

    const streets = await $.ajax({url: `roads/p_road?search_word=${value}`});

    console.log(streets);

    const html = _.map(streets, (st)=> {
      return `
          <div class="listStreet">
            <div class="about js-street-item" data-street-id="${st.pr_id}">
              <h4>
                <b style="float: left;display: inline-block;width: calc(100% - 110px);
                          white-space: nowrap;
                          overflow: hidden;
                          text-overflow: ellipsis;">${st.pr_name}</b>

                <span class="problem" style="float: right; margin-right: 10px">  ${st.count_all} Проблемы</span>
              </h4>

              <div class="clearfix"></div>
              <div class="fotci">
                <div class="foto">
                    <img  src="../img/collision-icon-2734-0.png" alt="" class="persFoto">
                </div>
                <div class="foto">
                  <img  src="../img/Ellipse.png" alt="" class="persFoto">
                </div>
                <div class="foto">
                    <img src="../img/Ellipse(2).png" alt="" class="persFoto">
                </div>
              </div>
            </div>
          </div>`;








      //<li class="js-street-item" data-street-id="${st.pr_id}">${st.pr_name}</li>`;
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
