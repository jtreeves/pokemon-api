const container = document.querySelector('.container');

fetch('https://api.github.com/users/jtreeves')
.then(response => {
    return response.json();
})
.then(githubData => {
    const jtreevesObj = {
        bio: githubData.bio,
        username: githubData.login,
        name: githubData.name
    };
    const newElement = document.createElement('p');
    newElement.textContent = jtreevesObj.name;
    container.appendChild(newElement);
})
.catch(error => {
    console.log(error);
})