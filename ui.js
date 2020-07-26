class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    
<div class="ui raised fluid very padded text container segment" style="text-align:center">
<div class="ui centered card">
  <div class="image">
    <img src="${user.avatar_url}">
  </div>
</div>
<div style="margin:20px">
<h3 class="ui header" style="font-family: 'Recursive', sans-serif;">${user.name}</h3>
<a class="ui red button" href="${user.html_url}">
 
  View Profile
</a>

</div>


<div class="ui basic label" style="margin:5px">Repos: ${user.public_repos}</div>
 <div class="ui basic label" style="margin:5px">Gists: ${user.public_gists}</div>
 <div class="ui basic label" style="margin:5px">Followers: ${user.followers}</div>
 <div class="ui basic label" style="margin:5px">Following: ${user.following}</div>


 <div class="ui relaxed divided list">
 <div class="item">
  
   <div class="content">
     <div class="header">Company: ${user.company}</div>
   </div>
 </div>
 <div class="item">
  
   <div class="content">
     <div class="header">Website/Blog: ${user.blog}</div>
   </div>
 </div>

 <div class="item">
  
   <div class="content">
     <div class="header">Location: ${user.location}</div>
   </div>
 </div>

 <div class="item">
  
   <div class="content">
     <div class="header">Joined on: ${user.created_at}</div>
   </div>
 </div>
</div>
</div>

  
      <h2 class="ui centered header" style="margin:30px;font-family: 'Recursive', sans-serif;">Latest Repositories of ${user.name}!</h2>
      <div id="repos">
      
      </div>
    `;
  }

  showRepos(repos){
    let output = ''
    repos.forEach(function(repo){
      output += `
      
      <div class="card card-body mb-2 text-center">
   
      <a target="_blank" href="${repo.html_url}" class="ui header" style="font-family: 'Recursive', sans-serif;color:red">${repo.name}</a>
          <div class="row">
           
            <div class="col">
            <div class="ui basic small label" style="margin:2px">Stars: ${repo.stargazers_count}</div>
            <div class="ui basic small label" style="margin:2px">Watchers: ${repo.watchers_count}</div>
            <div class="ui basic small label" style="margin:2px">Forks: ${repo.forms_count}</div>
            </div>
          </div>
        </div>
      `
    })

    document.getElementById('repos').innerHTML = output;
  }

  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div  =  document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container =  document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 5000);
  }

  clearAlert(){
    const currentAlert = document.querySelector('.alert')
    if(currentAlert){
      currentAlert.remove()
    }
  }


  clearProfile(){
    this.profile.innerHTML = '';
  }
}