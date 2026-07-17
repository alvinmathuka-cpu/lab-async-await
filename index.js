// Write your code here!
const postList = document.getElementById("post-list");

function displayPosts(posts) {
  posts.forEach((post) => {
    // Create elements
    const li = document.createElement("li");
    const title = document.createElement("h1");
    const body = document.createElement("p");

    // Add content
    title.textContent = post.title;
    body.textContent = post.body;

    li.appendChild(title);
    li.appendChild(body);

    // Add to page
    postList.appendChild(li);
  });
}

// Async/Await function
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // This is For HTML errors
    // if (!response.ok) {
    //   throw new Error(`HTML fetch error`);
    // }

    const posts = await response.json();
    console.log(posts);

    displayPosts(posts);
    // This is for the codebase
  } catch (error) {
    console.error("Error handling posts:", error);
  }
}

getPosts();
