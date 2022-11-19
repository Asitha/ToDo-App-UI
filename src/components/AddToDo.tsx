import React, { ChangeEvent, FC, FormEvent, ReactNode, useState } from "react";

interface Props {
  children?: ReactNode,
  addTaskFunc: (description: string) => void
}

export const AddToDo: FC<Props> = ({ children, ...props }: Props) => {
  const [description, setDescription] = useState<string>("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addTaskFunc(description);
  }

  const handleFormUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }
  return (
    <form className='Form' onSubmit={handleFormSubmit}>
      <div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleFormUpdate} type='text' id='description' />
        </div>
      </div>
      <button disabled={description === "" ? true : false} >Add Todo</button>
    </form>
  );
}