const posts = [
    { title: 'post One', body: 'This is post 1' ,index: 0},
    { title: 'post Two', body: 'This is post 2' ,index: 1}
]


function getPosts() {
    setTimeout(function () {
        let output = '';
        let index = 0;
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output
    }, 1000);
}

function creatPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const err = false;

            if (!err) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 2000);
    })
}

// creatPost({title:'Post Three', body:'This is post 3'})
// .then(getPosts)
// .catch(err => console.log(err));





//Async / Await
// async function init(){
//     await creatPost({title:'Post 10', body:'This is post 10',index:3})

//     getPosts();
// }

// init();




//Async /Await / Fetch
async function fetchUser(){
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUser();




// Promise.all

// const promise1 = Promise.resolve('Nice!');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>
//     setTimeout(resolve, 2000, 'Ah-ho'));

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json())

// Promise.all([promise1,promise2,promise3,promise4]).then((values =>console.log(values)))


