import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        let currentName = e.currentTarget.value;
        if (currentName.includes(" ") || currentName.length === 0) {
            setError("Invalid name!");
        } else {
            setError("");
        }
        setName(currentName);
    }
    const addUser = () => {
        alert(`Hello  ${name}!`) // need to fix
        addUserCallback(name);
        setName("")
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter" && !error) {
            addUser();
        }
    }

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            pressSubmit={onKeyDownHandler}
        />
    )
}

export default GreetingContainer
