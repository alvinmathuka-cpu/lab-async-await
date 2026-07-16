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

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const posts = await response.json();
    console.log(posts);

    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

getPosts();
