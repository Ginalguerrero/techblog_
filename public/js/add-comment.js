const commentBtn = document.getElementById('add-comment')

async function addComment() {
    const text = document.querySelector('#comment-text').value.trim();
    await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({text, post_id: document.location.href.split('/').pop()}),
        headers: { 'Content-Type': 'application/json' },
      });
 document.location.reload()
}

commentBtn.addEventListener('click', addComment)