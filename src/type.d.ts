interface ToDoItem {
    id: string,
    description: string
}

type APITaskGetResponse = {
    tasks: ToDoItem[]
};