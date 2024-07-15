let btn = document.getElementById("btn")
let input = document.getElementById("input")
let table = document.getElementById("table1")
let input2 = document.getElementById("input2")
let btn1 = document.getElementById("btn1")
let completed = document.getElementById("myCheck")

btn.addEventListener("click", async function addTask() {
    if (!input.value) {
        return
    }
    let data = {task: input.value}
    let res = await fetch("http://127.0.0.1:5000/addtask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })
    let data2 = await res.json()
    console.log(data2)
    if (data2.error) {
        alert("task already added")
    } else {
        // window.location.reload()
        window.location = window.location
    }
})

let handleDelete = async (id) => {
    let data = { taskId: id }
    let res = await fetch("http://127.0.0.1:5000/deletetask", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    let data2 = await res.json()
    window.location.reload()
}

let handleUpdate = async (id) => {
    let input1 = document.getElementById("input1")
    let data = { task: input1.value, taskId: id}
    let res = await fetch("http://127.0.0.1:5000/updatetask", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    let data2 = await res.json()
    console.log(data2)
    // window.location.reload()
}

let handleComplete = (x) => {
    if (x == 0) {
        return "Not Completed"
    } else if (x == 1) {
        return "Completed"
    }
}

// if (checkBox.checked) {
//     console.log("4545454545")
// }

let displayData = async () => {
    let res = await fetch("http://127.0.0.1:5000/tasks", {
        method: "GET"
    })
    let data = await res.json()

    data.data.map((task) => {
        let row = table.insertRow()
        let cell1 = row.insertCell(0)
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        let cell4 = row.insertCell(3)
        let cell5 = row.insertCell(4)

        cell1.innerText = task.id
        cell2.innerText = task.title
        cell3.innerText = handleComplete(task.completed)
        // cell3.innerHTML = `<input type="checkbox" id="myCheck" onclick="handleTask()">`
        cell4.innerHTML = `<button onclick="handleDelete(${task.id})" type="button" class="btn btn-danger">Delete</button>`
        cell5.innerHTML = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${task.id}">
                            Update
                            </button>
                            <div class="modal fade" id="exampleModal${task.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping">Task</span>
                            <input id="input1" type="text" class="form-control" placeholder="Task" aria-label="Username" aria-describedby="addon-wrapping">
                            </div>
                            <br>
                            <div class="input-group flex-nowrap">
                            <span class="input-group-text" id="addon-wrapping">Completed</span>
                            <input id="input2" type="text" class="form-control" placeholder="Completed" aria-label="Username" aria-describedby="addon-wrapping">
                            </div>
                                </div>
                                <div class="modal-footer">
                                    <button id="btn1" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onclick="handleUpdate(${task.id})" type="button" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>
                            `

    })
}

displayData()


