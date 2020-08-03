const posts = [
    {title: 'post one',body:'this is post one'},
    {title: 'post two ',body:'this is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output= '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    }, 1000);
}

function createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);

        const error=false;
        if(!error){
            resolve()
        }else{
            reject('something wrong');
        }
    },2000);
});
}

//Async/Await


async function init(){
    await createpost({title:'post threeee'});

getPosts();
}
init();











//createpost({title:'third post'})
//.then(getPosts)
/*.catch(err=> console.log(err));
   
   
const promise1 = Promise.resolve('hello');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => 
    setTimeout(resolve,2000,'goodday')
);

const promise4= fetch('http://jsonplaceholder.typicode.com/users').then(res =>
     res.json()
     );

Promise.all([promise1,promise2,promise3,promise4])
.then(value=> console.log(value));*/

 



























