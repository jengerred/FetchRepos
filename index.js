fetch(' https://api.github.com/users/jengerred/repos')
.then(res => {
    return res.json();
})
.then(data => {
 data.forEach(repo => {
     const markup = `<div class="box"><li class="name"><h3>${repo.name}</h1></li><li class="des"><p>${repo.description}</p></li> <li class="url"><a href="${repo.html_url}" target="_blank"><img src="icons8-github-100.png" height="50px" width ="50px"></a><figcaption>Github Repository</figcaption></li></div>` ;
     document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
 });
})
.catch(error => console.log(error));
          
