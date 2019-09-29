window.onload = async function() {
  initRouter();
  //initMap();
  //
  //

  VK.init({apiId: 7151497, onlyWidgets: true});


  $(document).on('click', '.js-click-on-login', async (e)=> {
    const res = await $.ajax({
      url: "http://185.20.224.177:8081/auth",
    });
    localStorage.setItem('token', JSON.stringify(res));
    location.hash = '#tasks';
  });

  $(document).on('click', '.js-reject-task', async (e)=> {
    const el = e.currentTarget;
    const parent = el.closest('.task-wrapper');
    $(parent).hide({slow: true});
    //parent.remove();
  });

  $(document).on('click', '.js-start-task', async (e)=> {
    const el = e.currentTarget;
    if (el.classList.contains('btn-success')) {
      el.innerText = 'Завершить';
      el.classList.add('btn-warning');
      el.classList.remove('btn-success')
    } else if (el.classList.contains('btn-warning'))
      $(el.closest('.task-wrapper')).hide({slow: true});

  });
}






