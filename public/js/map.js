let map;
async function initMap(streetId) {
  //HACK - жестокий костыль
  await new Promise((r)=> setTimeout(()=> r(), 1000));

  const mapEl = document.querySelector('#main-map');

  if (mapEl)
    if (!mapEl.dataset.noautoheight)
      mapEl.style.height = window.innerHeight - 250 + 'px';

  console.log('mapel', mapEl);
  await DG.then(function () {
      map = DG.map('main-map', {
          center: [57.15643006398016,65.53371790844729],
          zoom: 13
      });





      //DG.marker([57.158777512076675,65.52645641962883]).addTo(map).bindPopup('Вы кликнули по мне!');
      //DG.marker([57.156352186301696,65.53375202814935]).addTo(map).bindPopup('Вы кликнули по мне!');
      //DG.marker([57.149868320038166,65.54654080073233]).addTo(map).bindPopup('Вы кликнули по мне!');
      //DG.marker([57.156352186301696,65.53375202814935]).addTo(map).bindPopup('Вы кликнули по мне!');


  });

  const dots = await $.ajax({url: `roads/p_problems?road_id=${streetId}`});
  console.log('dots - ', dots);
  const dotsEl = document.querySelector('.js-dots-list-holder');
  if (dotsEl) {

    const html = dots.map((d)=> {
      return `
          <tr>
            <td scope="row">${new Date(d.pp_reg_date).toDateString()}</td>
            <td>${d.ptp_problem_name}</td>
            <td><a href="" style="color: green">Заявка на ремонт</a></td>
          </tr>`;
    }).join('');




    dotsEl.innerHTML = html;
  }


  dots.forEach((dot)=> {
    DG.marker([dot.pp_start_cord_h, dot.pp_start_cord_w]).addTo(map).bindPopup(dot.ptp_problem_name);
  });
}
