import axios, { AxiosResponse } from "axios"

const baseUrl = "http://localhost:9090/todo";

export const getTasks = async (): Promise<AxiosResponse<APITaskGetResponse>> => {
    try {
        const tasks: AxiosResponse<APITaskGetResponse> = await axios.get(
            baseUrl + "/tasks"
        )
        return tasks;
    } catch (error) {
        throw new Error("error retrieving tasks");
    }
}

export const addTask = async (task: string): Promise<AxiosResponse> => {
    try {
        return await axios.post(baseUrl + "/tasks", { description: task });
    } catch (error) {
        throw new Error("error adding task");
    }
}

export const deleteTask = async (id: string): Promise<AxiosResponse> => {
    try {
        return await axios.delete(baseUrl + "/tasks?id=" + id)
    } catch (error) {
        throw new Error("error deleting task " + id);
    }
}