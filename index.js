fetch(' https://api.github.com/users/jengerred/repos')
.then(res => {
    return res.json();
})
.then(data => {
 data.forEach(repo => {
     const markup = ` <li class="name"><h3>${repo.name}</h1></li> <li class="url"><a href="${repo.html_url}" target="_blank">${repo.html_url}</a></li> ` ;
     document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
 });
})
.catch(error => console.log(error));
          
  