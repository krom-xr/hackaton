let map;
async function initMap() {
  return await DG.then(function () {
      map = DG.map('main-map', {
          center: [57.15643006398016,65.53371790844729],
          zoom: 13
      });

      DG.marker([57.158777512076675,65.52645641962883]).addTo(map).bindPopup('Вы кликнули по мне!');
      DG.marker([57.156352186301696,65.53375202814935]).addTo(map).bindPopup('Вы кликнули по мне!');
      DG.marker([57.149868320038166,65.54654080073233]).addTo(map).bindPopup('Вы кликнули по мне!');
      DG.marker([57.156352186301696,65.53375202814935]).addTo(map).bindPopup('Вы кликнули по мне!');


  });
}
