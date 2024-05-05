// //  fetch('https://api.github.com/users/iamAgbaCoder/repos')
// //     .then(response => response.json())
// //     .then(data => {
// //       const reposContainer = document.getElementById('github-repos');
// //       console.log(data)
// //       data.forEach(repo => {
// //         const repoDiv = document.createElement('div');
// //         repoDiv.innerHTML = `
// //           <img src="${repo.owner.avatar_url}" alt="Repo Image">
// //           <h3>${repo.name}</h3>
// //           <p>${repo.description}</p>
// //           <p>Stars: ${repo.stargazers_count}</p>
// //           <p>Forks: ${repo.forks_count}</p>
// //         `;
// //         reposContainer.appendChild(repoDiv);
// //       });
// //     })
// //     .catch(error => console.error('Error:', error));






// function displayRepos(repos) {
//   const repoContainer = document.getElementById('github-repo-container');
//   repos.forEach(repo => {
//       const repoDiv = document.createElement('div');
//       repoDiv.className = 'repo-item';
  
//       // Corrected line: Accessing the avatar_url from the owner object
//       const img = document.createElement('img');
//       // img.src = repo.owner.avatar_url;
//       img.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
//       img.alt = repo.name;
//       repoDiv.appendChild(img);
  
//       const title = document.createElement('h3');
//       title.textContent = repo.name;
//       repoDiv.appendChild(title);
  
//       const description = document.createElement('p');
//       description.textContent = repo.description || 'No description provided.';
//       repoDiv.appendChild(description);
  
//       const stars = document.createElement('span');
//       stars.textContent = `${repo.stargazers_count} stars`;
//       repoDiv.appendChild(stars);
  
//       const forks = document.createElement('span');
//       forks.textContent = `${repo.forks_count} forks`;
//       repoDiv.appendChild(forks);
  
//       repoContainer.appendChild(repoDiv);
//   });
//  }
  
//  const username = 'iamAgbaCoder'; // Replace with your GitHub username
//  const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;
 
//  fetch(url)
//   .then(response => response.json())
//   .then(data => {
//      // Process the data here
//      displayRepos(data)
//   })
//   .catch(error => console.error('Error:', error));



function repositories(username) {
  fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((response) => {
          if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' + response.status);
              return;
          }
          response.json().then((data) => {
              // Assuming you want the first 6 repos
              const topRepos = data.slice(0, 6);
              topRepos.forEach(repo => {
                  // Create the card HTML for each repo
                  const cardHtml = `
                      <div class="col-md-4">
                          <div class="card mb-4">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width: 100px; class="card-img-top" alt="Repo Image">
                              <div class="card-body">
                                  <h5 class="card-title">${repo.name}</h5>
                                  <p class="card-text">${repo.description}</p>
                                  <div class="repo-stats">
                                      <i class="devicon-star-plain"></i> <span>${repo.stargazers_count}</span>
                                      <i class="devicon-fork-plain"></i> <span>${repo.forks_count}</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  `;
                  // Append the card HTML to the container
                  document.querySelector('.container .row').insertAdjacentHTML('beforeend', cardHtml);
              });
          });
      })
      .catch((err) => {
          console.log('Fetch Error :-S', err);
      });
}

// Call the function with your GitHub username
repositories('iamAgbaCoder');
