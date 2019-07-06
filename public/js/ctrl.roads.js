const Roads = {
  renderIndex: async function() {
    await utils.render('html/index.html');
    initMap();
    document.querySelector('.js-search-roads').click();

    const streetEl = document.querySelector('.streets');
    if (streetEl) {
      streetEl.style.height = window.innerHeight - 250 + 'px';

    }


  },

  renderStreet: async function(id) {
    await utils.render('html/street.html');
    const street = (await $.ajax({url: `roads/p_road/${id}`}))[0];

    const strNameEl = document.querySelector('.js-steet-name');
    strNameEl.innerHTML = street.pr_name;
    initMap(id);
  },

  renderFilers: async function() {

    const html = `
       <li class="navRoad"><a href="#" class='active'> Все</a></li>
       <li class="navRoad"><a href="#">Проблемные</a></li>
       <li class="navRoad"><a href="#">Беспроблемные</a></li>
       <li class="navRoad"><a href="#">ДТП</a></li>
       <li class="navRoad"><a href="#">Ямы</a></li>
       <li class="navRoad"><a href="#">Нет разметки</a></li>
       <li class="navRoad"><a href="#">Нет знаков</a></li>
    `;


    const menuHolder = document.querySelector('.js-filters-list');
    if (menuHolder)
      menuHolder.innerHTML = html;




  },

}
