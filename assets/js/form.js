const inputUsername = document.getElementById('username');
const inputTitle = document.getElementById('title');
const inputContent = document.getElementById('content');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function()
{
    event.preventDefault();

    const blogDetails = {
       username: inputUsername.value.trim(),
       title: inputTitle.value.trim(),
       content: inputContent.value.trim(),
    }
    localStorage.setItem('blogDetails', JSON.stringify(blogDetails)); 
}
)
