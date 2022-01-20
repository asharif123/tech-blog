
async function commentHandler(event) {
    event.preventDefault();
    const comment_data = document.querySelector("#comment-content").value.trim();

    const response = await fetch (`/dashboard/comment`, {
        method: "POST",
        body: JSON.stringify({
            comment_data
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        document.location.replace(`/dashboard/comment/:id`);
    } else {
        alert("cannot find any properties");
    }
    }

document.querySelector(".comment-data").addEventListener("submit", commentHandler);