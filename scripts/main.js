const url = 'https://jsonplaceholder.typicode.com/comments';
const list = document.querySelector('.list'),
      form = document.querySelector('.form'),
      input = document.querySelector('.inp1'),
      input2 = document.querySelector('.inp2');

fetch(url)
  .then(resp => resp.json())
  .then(data => {
    mapper(data);
    
    input.addEventListener('keyup', e => {
      list.innerHTML = '';
      const searchValue = e.target.value;
      const searchArr = [];
      data.map(item => {
        if(item.postId == searchValue){
          searchArr.push(item);
        }else{
          console.log('not found');
        }
      });
      mapper(searchArr);
      if(searchValue == 0){
        mapper(data);
      }
    });

  input2.addEventListener('keyup', e => {
      list.innerHTML = '';
      const searchValue = e.target.value;
      const searchArr = [];
      data.map(item => {
        if(item.name.toString().toLowerCase().indexOf(searchValue.toLowerCase()) != -1){
          searchArr.push(item);
        }else{
          console.log('not found');
        }
      });
      mapper(searchArr);
      if(searchValue == 0){
        mapper(data);
      }
    });
  });

function mapper(data) {
  data.forEach(item => {
    let newLi = document.createElement('li');
    newLi.innerHTML = `
    <div class="container">
    <div class="card" style="width: 18rem;">
      <img src="https://e7.pngegg.com/pngimages/428/137/png-clipart-male-avatar-young-user-icon-icons-logos-emojis-users.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.name.length > 23 ? item.name.toString().split("").splice(0,23).join("") + "...":item.name}</h5>
        <p>Post id: ${item.postId}</p>
        <p class="card-text">${item.email}</p>
        <a href="tel: ${item.phone}" class="btn btn-primary">call</a>
      </div>
      </div>
    </div>`
  list.appendChild(newLi);
  });
}

