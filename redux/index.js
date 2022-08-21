const state  = 10;
const state1 = [0,10];
const state3 = {
    todos : [
        {
            id: 1,
            title: "task1",
            status: "done"
        },
        {
            id: 2,
            title: "task2",
            status: "pending"
        }
    ]   ,
    filter: 'all'
}
const action = {
    type : "new_task",
    title: "task 5"
}

const action2 = {
    type: "changed_filter",
    title : "pending"
}