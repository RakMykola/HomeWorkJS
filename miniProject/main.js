let usersContainer = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const userItem of value) {
           let userContainer = document.createElement('div');
           userContainer.classList.add('user');
           let anchor = document.createElement('a');
           anchor.innerText = `${userItem.id} - ${userItem.name}`;
           anchor.href = `./user-details.html?data=${JSON.stringify(userItem)}`;
            userContainer.appendChild(anchor);
            usersContainer .appendChild(userContainer)
        }
    });

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
console.log(user);

let userDetailsContainer = document.getElementsByClassName('user-details')[0];
let postsContainer = document.getElementsByClassName('posts')[0];

let postDetailsButton = document.getElementsByClassName('postDetailsButton')[0];
userDetailsContainer.innerText = `${JSON.stringify(user)}`;
userDetailsContainer.innerHTML = `
                        <h3>ID: ${user.id}</h3>
                        <h4>Name: ${user.name}</h4>
                        <h4>Username: ${user.username}</h4>
                        <h4>Email: ${user.email}</h4>
                        <h4>Street: ${user.address.street}</h4>
                        <h4>Suit: ${user.address.suite}</h4>
                        <h4>City: ${user.address.city}</h4>
                        <h4>Zipcode: ${user.address.zipcode}</h4>
                        <h4>Geo lat: ${user.address.geo.lat}</h4>
                        <h4>Geo lng: ${user.address.geo.lng}</h4>
                        <h4>Phone: ${user.phone}</h4>
                        <h4>Website: ${user.website}</h4>
                        <h4>Company: ${user.company.name}</h4>
                        `;


postDetailsButton.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const postItem of value) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post');

                postContainer.innerText = postItem.title;
                let postDetailsButton = document.createElement('button');
                postDetailsButton.innerText = 'details';
                postDetailsButton.onclick = function () {
                    location.href = `./post-details.html?data=${JSON.stringify(postItem)}`;
                }


                postContainer.appendChild(postDetailsButton);
                postsContainer.append(postContainer);
            }

        });

}
userDetailsContainer.appendChild(postDetailsButton);


