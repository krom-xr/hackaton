function initMap() {
  let map;
  DG.then(function () {
      map = DG.map('main-map', {
          center: [57.15643006398016,65.53371790844729],
          zoom: 13
      });
  });
}
