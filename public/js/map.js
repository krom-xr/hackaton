let map;
async function initMap() {
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

  const dots = await $.ajax({url: 'roads/p_problems'});
  dots.forEach((dot)=> {
    DG.marker([dot.pp_start_cord_h, dot.pp_start_cord_w]).addTo(map).bindPopup(dot.pp_type_prob_id);
  });
}
