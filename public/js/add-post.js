const postBtn = document.getElementById('add-post')

async function addPost() {
    const description = document.querySelector('#post-content').value.trim();
    const name = document.querySelector("#post-name").value.trim()
    await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({description, name}),
        headers: { 'Content-Type': 'application/json' },
      });
 document.location = '/dashboard'
}

postBtn.addEventListener('click', addPost)