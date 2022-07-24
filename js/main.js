const first = document.querySelector('#first');
const middle = document.querySelector('#middle');
const last = document.querySelector('#last');


async function getAwait() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
        data.forEach(element => {
            const template = document.createElement('li');
            template.innerHTML = `
                <div class='users' onclick="getPosts(${element.id})">
                <div class = 'user-header'>  
                <div class='user-names'>
                <span class = 'user-username'>${element.username}</span>
                    <h3 class = 'user-name'>${element.name}</h3>
                    </div>   
                    <span class='user-id'>${element.id}</span>
                    </div>
                    <p class = 'user-adress'>
                    <span >${element.address.street}</span>
                    <span >${element.address.suite}</span>
                    <span >${element.address.city}</span>
                    <span >${element.address.zipcode}</span>
                    </p>
                    <div class ='user-company'>
                    <p>${element.company.name}</p>
                    <p>${element.company.catchPhrase}</p>
                    <p>${element.company.bs}</p>
                    </div>
                    <div class='user-footer'>
                    <p class='phone'>${element.phone}</p>
                    <div>
                    <p><a class='geo' href="https://www.google.com/maps/place/${element.address.geo.lat},${element.address.geo.lng}">Address</a>
                    </p>
                    <a class='email' href="${element.email}">${element.email}</a>
                    </div>
                    </div>
                </div>
            `;
            first.append(template);
        });

    } catch (error) {
        console.log(error);
    }

}
getAwait();

async function getPosts(id) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const data = await res.json();
        console.log(data);
        data.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div onclick="getComments(${item.id})">
                  <div class='post'> 
                   <h4 class = 'post-title'>${item.title}</h4>
                    <p class='post-body'>${item.body}</p>
                    </div>
                </div>
            `;
            middle.append(li);
        })
    } catch (error) {
        console.log(error);
    }
}

async function getComments(postId) {
    console.log(postId);
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const data = await res.json();
        console.log(data);
        data.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class='comments'>
                <div></div>
                    <h4 class='comment-name'>${item.name}</h4>
                    <h4>${item.email}</h4>
                    <p>${item.body}</p>
                    </div>

                </div>
            `;
            last.append(li);
        })
    } catch (error) {
        console.log(error);
    }
}