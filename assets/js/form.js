const inputUsername = document.getElementById('username');
const inputTitle = document.getElementById('title');
const inputContent = document.getElementById('content');
const submitBtn = document.getElementById('submit-btn');

const body = document.body;

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
    // Pulling array from local storage 
    let blogArray = JSON.parse(localStorage.getItem('blogArray')) || [];
    // converts object to string
    // Pushes stringified object to array
    blogArray.push(blogDetails);
    // Saves array in local storage
    localStorage.setItem('blogArray', JSON.stringify(blogArray));


    // Sends user to blog page.
    window.location.href = "blog.html";
}
)
