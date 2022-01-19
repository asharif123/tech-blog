
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

    document.querySelectorAll(".search-history-btn").forEach(node => node.addEventListener("click", (e)=> {
        const searchObj = {
            maximum_budget: e.target.dataset.maximum_budget,
            city_name: e.target.dataset.city_name,
            state_name: e.target.dataset.state_name,
            minimum_budget: e.target.dataset.minimum_budget
        }
        formHandler(e, searchObj);
    }))

document.querySelector(".post-data").addEventListener("submit", formHandler);