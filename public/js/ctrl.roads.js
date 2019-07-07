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



    var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var config = {
			type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'My First dataset',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
					fill: false,
				}, {
					label: 'My Second dataset',
					fill: false,
					backgroundColor: window.chartColors.blue,
					borderColor: window.chartColors.blue,
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor()
					],
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Chart.js Line Chart'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				}
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};


  },


}
