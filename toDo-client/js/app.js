
const addTaskBox = document.getElementById("addTaskBox")
const addPriorityBox = document.getElementById("addPriorityBox")
const addDateBox = document.getElementById("addDateBox")
const createListBtn = document.getElementById("createListBtn")

createListBtn.addEventListener("click", function() {
    // const url = "http://localhost:8080/list"
    const list = {
        title: addTaskBox.value,
        priority: addPriorityBox.value,
        date: addDateBox.value,
    }
    fetch("http://localhost:8080/list", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"}
            , 
        body: JSON.stringify(list)
    })
    .then(response => response.json())
    .then(result => console.log(result))

})





const taskListBtn = document.getElementById("taskListBtn")
const taskListUL = document.getElementById("taskListUL")

taskListBtn.addEventListener("click", function() {
    const url = "http://localhost:8080/list"
    async function getList() {
        const response = await fetch(url)
        const tasks = await response.json()
        // console.log(tasks)

        let task = tasks.map(function(result) {
            return `
            <li>
                <h6>Task: ${result.title}</h6>
                <h6>Priority: ${result.priority}</h6>
                <h6>Date Created: ${result.date}</h6>
            </li>
            `
        })

        // store li into ul

        taskListUL.innerHTML = task.join("")

    }
    
    getList() 
})