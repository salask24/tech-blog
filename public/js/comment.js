async function commentFormHandler(event) {
    //async works with await which gives you more control in running anything that has a promise 
    //Ex. wait for db for the information / creating stop signs 
    //this function is only triggered when comment button is pressed 
    event.preventDefault();
    //don't refresh the page
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
        //grabbing everything after the forward slash
        //split turns things into an array
        //.length -1 will always grab your last index of your array
        //  ex. if 4 items in an array the index always starts at 0 and it will get the 3rd
    ];
console.log(comment_text, post_id)
    if (comment_text) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            //coming from .then
            document.location.reload();
            //refresh the page to see posted comment 
        } else {
            alert(response.statusText);
            //this would be the error
            //used in the .catch
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
