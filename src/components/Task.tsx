import React, { ReactNode } from "react"

interface Props {
    children?: ReactNode,
    toDoItem:ToDoItem,
    deleteTaskFunc: (id: string) => void
}

export const Task: React.FC<Props> = ({children, ...props}: Props) => {
    return (
        <div className="Card">
            <div className="CardText">
                <h1>{props.toDoItem.description}</h1>
            </div>
            <div className="CardButton">
                <button onClick={() => props.deleteTaskFunc(props.toDoItem.id)} className="CardButtonDelete" >Delete</button>
            </div>
        </div>
    ) 

}