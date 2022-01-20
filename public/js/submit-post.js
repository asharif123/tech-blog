
async function formHandler(event) {
    event.preventDefault();
    const post_title = document.querySelector("#post-title").value.trim();
    const post_data = document.querySelector("#post-content").value.trim();

    const response = await fetch (`/dashboard`, {
        method: "POST",
        body: JSON.stringify({
            post_title,
            post_data
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        document.location.replace(`/dashboard`);
    } else {
        alert("cannot find any properties");
    }
    }

document.querySelector(".post-data").addEventListener("submit", formHandler);