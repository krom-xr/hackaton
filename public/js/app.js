window.onload = async function() {
  initRouter();
  //initMap();
  //
  //
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
}






