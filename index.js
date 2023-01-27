fetch(' https://api.github.com/users/jengerred/repos')
.then(res => {
    return res.json();
})
.then(data => {
 data.forEach(repo => {
   
     const markup = `
<div class="box">
<li class="name"><h3>${repo.name}</h3></li><hr><br>
<li class="des"><p>${repo.description}</p></li>

<li class="url">
<a href="https://jengerred.github.io/${repo.name}/" target="_blank">View Live Project Here (if applicable)
</a></li>

 <li class="url"><a href="${repo.html_url}" target="_blank"><img src="icons8-github-100.png" height="50px" width ="50px"></a><figcaption>Github Repository</figcaption></li><br></div>
</div>`

     document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
 });
})
.catch(error => console.log(error));
          
