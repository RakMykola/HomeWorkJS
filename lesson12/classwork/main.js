fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        let wrap = document.createElement('div');
        wrap.classList.add('wrap');
        for (const post of posts) {
            let divInf = document.createElement('div');
            divInf.classList.add('card');
            divInf.innerHTML = `
                        <h3>ID: ${post.id}</h3>
                        <h4>Title: ${post.title}</h4>
                        <h5>Body: ${post.body}</h5>
                        `;
            let button = document.createElement('button');
            button.innerText = 'Коментарі';
            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        for (const comment of comments) {

                            if (post.id === comment.postId) {
                                let divCardComments = document.createElement('div');
                                divCardComments.classList.add('cardComments');
                                divCardComments.innerHTML = `
                                        <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `;
                                divInf.appendChild(divCardComments)
                            }
                            button.disabled = true;
                        }
                    })
            }

            divInf.appendChild(button);
            wrap.appendChild(divInf);
            document.body.appendChild(wrap);
        }
    });