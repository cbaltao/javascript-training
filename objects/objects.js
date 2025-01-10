//object literals

const blogs = [
    { title: 'title1', likes: 30},
    { title: 'title2', likes: 30}
];

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'title1', likes: 30},
        { title: 'title2', likes: 30}
    ],
    login: function(){
        console.log('the user logged in');
    },
    // No arrow functions on object methods.
    logBlogs: function(){
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

console.log(user);

console.log(user.name);

console.log(user['email']);

user['name'] = 'chun-li'

console.log(user.name);

user.login();

user.logBlogs();

//Random

const random = Math.random();

console.log(random);
// Random number from 0-100
console.log(Math.round(random * 100));



