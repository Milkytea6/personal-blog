# Personal Blog

## Functionality 
When the user loads the page, the user can create a blog to be displayed on a separate page. The user enters thier username, a title, and then the content. Then the user will be redirected to the page with all the other blogs. The user can click the back button to go back and enter more blogs.
---
## User Story
```
AS A marketing student
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences
```
## Acceptance Criteria
```
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.

WHEN I submit the form,
THEN blog post data is stored to localStorage.

WHEN the form submits,
THEN I am redirected to the posts page.

WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.

WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.

WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.

WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.

WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.

WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.

WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.

WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.
```
## Summary
I was given a user story and acceptance criteria to create a blog. In the blog the user can input their username, a title, and then the content of anything they want to post. Then I made a directory where the user can read all the posts they made organized vertically. I also added a button to switch between light and dark mode. In local storage, an array of all the inputted information will display as well. I created a back button that will redirect the user back to the form page to create another post.
---
## Link to Deployed Website
https://milkytea6.github.io/personal-blog/
---
## Screenshot
!['Screenshot of deployed website'](./assets/images/my-first-blog-screenshot.png)
---