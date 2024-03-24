 // Variables for back button and mode switch button.
const backBtn = document.getElementById('back-btn');
const body = document.body;
const blogPosts = document.getElementById('blogPosts');

backBtn.addEventListener('click', function(event){
    event.preventDefault;
    window.location ="index.html";
})
// Variables to access array in local storage.
const localArray = JSON.parse(localStorage.getItem('blogArray'));
// Access each object in array
localArray.forEach(obj => {
    // Creates a div for each object
    const blogPost = document.createElement('div');
    // Gives div a class of blog-post
    blogPost.setAttribute('class', 'blog-post');
    // Appends the div to the parent section.
    blogPosts.appendChild(blogPost);
    // Creates tags for each value in the objects
    const title = document.createElement('h2');
    const content = document.createElement('p');
    const username = document.createElement('article');
// Adds the obj values to the element
    title.innerText = obj.title;
    content.innerText = obj.content;
    username.innerText = `Created by:${obj.username}`;
// Appends the elements to the document
    blogPost.appendChild(title);
    blogPost.appendChild(content);
    blogPost.appendChild(username);
});




