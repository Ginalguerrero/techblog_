const editBtn = document.getElementById('update-post')
const deleteBtn = document.getElementById('delete-post')

const id = editBtn.getAttribute('data-post-id')

editBtn.addEventListener('click', async() => {
    const description = document.querySelector('#post-content').value.trim();
    const name = document.querySelector("#post-name").value.trim()
    await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({description, name}),
        headers: { 'Content-Type': 'application/json' },
      });
    document.querySelector('.message-block').classList.remove('d-none')
})
deleteBtn.addEventListener('click', async() => {
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
    if (response.ok) {
        
        document.location.replace('/dashboard/')
    } else console.log("")

})