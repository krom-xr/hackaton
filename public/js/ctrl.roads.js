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

    var ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['январь', 'февраль', 'март', 'апрель', 'май' ],
          datasets: [{
              label: '2018 - 2019',
              data: [400, 360, 500, 100, 800],
              //backgroundColor: [
                  //'rgba(255, 99, 132, 0.2)',
                  //'rgba(54, 162, 235, 0.2)',
                  //'rgba(255, 206, 86, 0.2)',
                  //'rgba(75, 192, 192, 0.2)',
                  //'rgba(153, 102, 255, 0.2)',
                  //'rgba(255, 159, 64, 0.2)'
              //],
              //borderColor: [
                  //'rgba(255, 99, 132, 1)',
                  //'rgba(54, 162, 235, 1)',
                  //'rgba(255, 206, 86, 1)',
                  //'rgba(75, 192, 192, 1)',
                  //'rgba(153, 102, 255, 1)',
                  //'rgba(255, 159, 64, 1)'
              //],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    });



    const bgrEl = document.querySelector('.streetPage');
    if (id === '1')
      bgrEl.style.background = 'url(../img/st_resp.png)';

    if (id === '2')
      bgrEl.style.background = 'url(../img/st_vor.png)';

    if (id === '3')
      bgrEl.style.background = 'url(../img/st_50let.png)';

    if (id === '4')
      bgrEl.style.background = 'url(../img/st_yalt_tr.png)';

    if (id === '5')
      bgrEl.style.background = 'url(../img/st_perm.png)';

    if (id === '6')
      bgrEl.style.background = 'url(../img/st_soyuz.png)';

    if (id === '15')
      bgrEl.style.background = 'url(../img/st_shir.png)';

    if (id === '16')
      bgrEl.style.background = 'url(../img/st_len.png)';

    if (id === '17')
      bgrEl.style.background = 'url(../img/st_kolh.png)';

    if (id === '18')
      bgrEl.style.background = 'url(../img/st_prof.png)';
  },


}
