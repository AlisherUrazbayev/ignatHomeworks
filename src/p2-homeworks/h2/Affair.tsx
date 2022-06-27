import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }// need to fix

    return (
        <tr>
            <td>{props.affair._id}</td>
            <td>{props.affair.name}</td>
            <td>{props.affair.priority}</td>
            <td>
                <button onClick={deleteCallback}>X</button>
            </td>
        </tr>
    )
}

export default Affair
