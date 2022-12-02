const addPostbtn = document.getElementById('add-post')
const existingPostBtns = document.querySelectorAll('.post-button')

existingPostBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        const id = event.target.closest('.post-button').getAttribute('data-post-id')
        document.location = `/dashboard/posts/${id}`}
        )
})

addPostbtn.addEventListener('click', (event) => {
 
    document.location = '/dashboard/new-post'
})
