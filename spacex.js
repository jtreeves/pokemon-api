fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then(spacexCapsules => {
    console.log(spacexCapsules);
})
.catch(error => {
    console.log(error);
});

fetch('https://api.spacexdata.com/v3/cores/B1042')
.then(response => {
    return response.json();
})
.then(spacexOneCore => {
    console.log(spacexOneCore);
})
.catch(error => {
    console.log(error);
});

fetch('https://api.spacexdata.com/v3/launches/67')
.then(response => {
    return response.json();
})
.then(spacexLaunch => {
    console.log(spacexLaunch);
})
.catch(error => {
    console.log(error);
});

fetch('https://api.spacexdata.com/v3/missions/F3364BF')
.then(response => {
    return response.json();
})
.then(spacexMission => {
    console.log(spacexMission);
})
.catch(error => {
    console.log(error);
});