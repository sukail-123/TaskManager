const API = "http://localhost:5000/tasks";

async function addTask() {
    const title = document.getElementById("taskInput").value;

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            completed: false
        })
    });

    loadTasks();
}

async function loadTasks() {
    const res = await fetch(API);
    const tasks = await res.json();

    document.getElementById("taskList").innerHTML =
        tasks.map(task =>
            `<li>${task.title}</li>`
        ).join("");
}

loadTasks();
