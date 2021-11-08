const APIURL = "https://api.github.com/users/";
const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');
const mainEl = document.getElementById('main');


async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);
        console.log(data);
        createUserCard(data);
        getRepos(username);
    } catch(err) {
        if(err.response.status == 404) {
            createErrorCard('No profile with this user name');
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created');
        addRepostoCart(data);
    } catch(err) {
        createErrorCard('Problems fetching repos');
    }
}

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
        <div>
          <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>${user.bio}</p>
          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos}  <strong>Repos</strong></li>
          </ul>
          <div id="repos">
          </div>
        </div>
      </div>
    `;
    mainEl.innerHTML = cardHTML
}

function createErrorCard(message) {
    const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
        `;
        main.innerHTML = cardHTML;
}

function addRepostoCart(repos) {
    const reposEl = document.getElementById('repos');
    repos
        .slice(0, 10)
        .forEach(repo => {
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo');
            repoEl.href = repo.html_url;
            repoEl.target = '_blank';
            repoEl.innerText = repo.name;
            reposEl.appendChild(repoEl);
        });
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = searchEl.value;
    if(user) {
        getUser(user);
        searchEl.value = '';
    }
})
