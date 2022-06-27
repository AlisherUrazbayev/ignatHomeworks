import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    pressSubmit: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,
    pressSubmit} // деструктуризация пропсов
) => {
    const inputClass = error !== "" ? s.error : s.someClass;// need to fix with (?:)
    const isDisabled = error !== "";

    return (
        <div className={s.container}>
            <div>
                <input value={name} onChange={setNameCallback}
                       className={inputClass} onKeyDown={pressSubmit}/>
                <span className={s.unhide}>{error}</span>
            </div>
            <button disabled={isDisabled} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
