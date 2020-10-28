fetch('https://api.github.com/users/jtreeves')
.then(response => {
    return response.json();
})
.then(githubData => {
    console.log(githubData);
})
.catch(error => {
    console.log(error);
})