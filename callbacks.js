const posts = [
    {title: 'post One', body:'This is post 1'},
    {title: 'post Two', body:'This is post 2'}
]


function getPosts(){
    setTimeout(function(){
        let output='';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output
    }, 1000);
}

function creatPost(post, callback){
    setTimeout(()=>{
       posts.push(post) ;
       callback();
    },2000);

}


creatPost({title:'post Three', body:'This is post 3'},getPosts);