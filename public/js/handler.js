$(document).ready(()=> {
  const $document = $(document);


  async function onSearchRoad (e) {

    const searchWord = document.querySelector('.js-search-roads').value;
    const currentFilterEl = document.querySelector('.js-select-filter.active')
    const currentFilter = currentFilterEl.dataset.type;

    const roadsDiv = document.querySelector('.js-finded-roads');



    //const streets = [{pr_id: 1, pr_name: 'Республики'}, {pr_id: 2, pr_name: 'Ленина'}]

    const streets = await $.ajax({url: `roads/p_road?search_word=${searchWord}&ftype=${currentFilter}`});

    console.log(streets);

    const html = _.map(streets, (st)=> {
      const countAll = Number(st.count_all);
      console.log(countAll);

      const probHtml = countAll ?
        `<span class="problem" style="float: right; margin-right: 10px">  ${countAll} Проблемы</span>` :
        `<span class="problem" style="float: right; margin-right: 10px; color: green">  Нет проблем</span>`;


      let probListHtmlItems = ``;
      if (st.count_dtp && st.count_dtp !== "0")
        probListHtmlItems += `
          <div class="foto">
              <img  src="../img/collision-icon-2734-0.png" alt="" class="persFoto">
          </div>`;

      if (st.count_hole && st.count_hole !== "0")
        probListHtmlItems += `
          <div class="foto">
              <img  src="../img/hole.png" alt="" class="persFoto">
          </div>`;

      if (st.count_markup_bad && st.count_markup_bad !== "0")
        probListHtmlItems += `
          <div class="foto">
              <img  src="../img/Ellipse(2).png" alt="" class="persFoto">
          </div>`;

      if (st.count_markup_none && st.count_markup_none !== "0")
        probListHtmlItems += `
          <div class="foto">
              <img  src="../img/Ellipse(2).png" alt="" class="persFoto">
          </div>`;

      if (st.count_track && st.count_track !== "0")
        probListHtmlItems += `
          <div class="foto">
              <img  src="../img/coleya.png" alt="" class="persFoto">
          </div>`;


      const probListHtml = countAll ? `
        <div class="fotci">
          ${probListHtmlItems}
        </div>` : '';

          //<div class="foto">
              //<img  src="../img/collision-icon-2734-0.png" alt="" class="persFoto">
          //</div>
          //<div class="foto">
            //<img  src="../img/Ellipse.png" alt="" class="persFoto">
          //</div>
          //<div class="foto">
              //<img src="../img/Ellipse(2).png" alt="" class="persFoto">
          //</div>
      return `
          <div class="listStreet" style="height: ${countAll ? '115px': '40px'}">
            <div class="about js-street-item" data-street-id="${st.pr_id}">
              <h4>
                <b style="float: left;display: inline-block;width: calc(100% - 110px);
                          white-space: nowrap;
                          overflow: hidden;
                          text-overflow: ellipsis;">${st.pr_name}</b>

                ${probHtml}
              </h4>

              <div class="clearfix"></div>
              ${probListHtml}
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

  $document.on('click', '.js-select-filter', (e)=> {
    document.querySelectorAll('.js-select-filter')
    .forEach((el)=> el.classList.remove('active'));

    const el = e.currentTarget.classList.add('active');

    onSearchRoad();
  });
});
