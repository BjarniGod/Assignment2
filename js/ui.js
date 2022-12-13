const tasks = document.querySelector(".tasks");

document.addEventListener("DOMContentLoaded", function(){
    // Nav Menu
    const menus = document.querySelector(".side-menu");
    M.Sidenav.init(menus, {edge: "left"});

    //Add Tasks
    const forms = document.querySelector(".side-form");
    M.Sidenav.init(forms, {edge: "right"});

});

const renderTask = (data, id) => {
    const html = `
    <div class="card-panel task white row" data-id ="${id}">
              <img src="/img/task.png" class="responsive-img materialboxed" alt="">
              <div class="task-detail">
                  <div class="task-title">${data.title}</div>
                  <div class="task-description">${data.description}</div>
              </div>
              <div class="task-delete">
                  <i class="material-icons" data-id ="${id}">delete_outline</i>
              </div>
          </div>
    `;
  
    tasks.innerHTML += html;
  };


  