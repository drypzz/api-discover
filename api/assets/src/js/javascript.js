const url = 'http://localhost:5500/api';

// getAll

getAllUsers = function(){
    axios.get(url).then(response => {
        const data = response.data;

        renderResults.textContent = JSON.stringify(data);
    }).catch(error => console.log(error))
};
getAllUsers();



// add

const newUser = {
    name: 'Lincoln',
    user: 'function404',
    avatar: 'https://avatars.githubusercontent.com/u/79523461?v=4',
    city: 'Brazil',
    github: 'https://github.com/function404'
};

addUser = function(){
    axios.post(url, newUser).then(response => {
        alert(JSON.stringify(response.data));
    }).catch(error => console.log(error))
};
// addUser();



// update

const userUpedated = {
    name: 'Arthur',
    user: 'ArthurVieiraaa',
    avatar: 'https://avatars.githubusercontent.com/u/79219900?v=4',
    city: 'Brazil',
    github: 'https://github.com/ArthurVieiraaa'
};

updateUser = function(id){
    axios.put(`${url}/id=${id}`, userUpedated).then(response => {
        alert(JSON.stringify(response.data));
    }).catch(error => console.log(error));
};
// updateUser(id);



// delete

deleteUser = function(id){
    axios.delete(`${url}/id=${id}`).catch(error => console.log(error))
};
// deleteUser(id);



// get

getOneUser = function(id){
    axios.get(`${url}/id=${id}`).then(response => {
        const data = response.data;

        renderResults.textContent = JSON.stringify(data);
    }).catch(error => console.log(error))
};
// getOneUser(id);