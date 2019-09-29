const Tasks = {
  renderTasksList: function(tasks) {
    let st = '';
    tasks.forEach((t)=> {
      console.log('for each');
      st = st + `
        <div class='task-wrapper alert-info' style="border-radius: 10px">
          <div>
            <div style="width: 100%; text-align: center; padding: 14px">
              <h4>${t.task_name}</h4>
            </div>
            <div style="width: 100%; text-align: center">
              <div style="position: relative; width: 80%; height: 300px; background: #4978a7; display: inline-block; padding: 16px">
                <div>
                  <div style="color: whitesmoke; font-size: 16pt">
                    ${t.task_comment}
                  </div>
                </div>
                <!-- <div style="position: absolute; left: 4px; bottom: 4px; font-size: 40pt; color: white">
                  16
                </div> -->
                <div style="position: absolute; left: 20px; bottom: 8px; font-size: 16pt; color: white">
                  ${new Date(t.task_type).toLocaleDateString()}

                </div>
              </div>
            </div>
            <div class="text-danger" style="font-size: 18pt; margin: 16px; text-align: center;">
              Награда: ${_.shuffle([10, 30, 50, 100, 80, 70, 60])[0]} баллов!
            </div>
            <div style="padding: 8px; width: 100%;">
              <div style="margin-bottom: 10px; text-align: center">
                <button class="btn btn-success js-start-task" style="font-size: 20pt; max-width: 220px; overflow: hidden; color: white" >Начать задачу</button>
                <button class="btn btn-danger js-reject-task" style="font-size: 16pt" >Отложить</button>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>`;
    });

    return st;
  },
  renderIndex: async function() {
    await utils.render('html/index.html');
  },
  renderTasks: async function() {

    let tasks, tasksHtml;
    try {
      tasks = JSON.parse(await $.ajax({url: 'http://185.20.224.177:8081/tasks'}));
      console.log(tasks);
      tasksHtml = this.renderTasksList(tasks);
    } catch (e) {
      /* handle error */
    }

    await utils.render('html/index.html');
    document.querySelector('.tasks').innerHTML = tasksHtml;
  },

  //renderComments: async function() {

    //await utils.render('html/comments.html')


    //VK.init({apiId: 7151497, onlyWidgets: true});
    //VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});
  //},

  renderMaps: async function() {
    const part = await utils.renderPartial('html/map.html')
    document.querySelector('.base-holder').innerHTML = part;
  },

  renderChat: async function() {

    const part = await utils.renderPartial('html/chat.html')
    document.querySelector('.base-holder').innerHTML = part;
  }

}
