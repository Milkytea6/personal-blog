const inputUsername = document.getElementById('username');
const inputTitle = document.getElementById('title');
const inputContent = document.getElementById('content');
const submitBtn = document.getElementById('submit-btn');

// added event listener function with event parameter.
submitBtn.addEventListener('click', function(event)
{
    event.preventDefault();
    const blogDetails = {
        username: inputUsername.value.trim(),
        title: inputTitle.value.trim(),
        content: inputContent.value.trim(),
    }
    // Checks if any inputs are blank and tells the user the form can't be blank and returns the function.
    if (blogDetails.username === '' || blogDetails.title === '' || blogDetails.content === ''){
        window.alert("Username, title, or content cannot be blank.");
        return;
    }
    // Sends user to blog page.
    window.location.href = "blog.html";
    // Stores object has a string in local storage.
    localStorage.setItem('blogDetails', JSON.stringify(blogDetails)); 
}
)
