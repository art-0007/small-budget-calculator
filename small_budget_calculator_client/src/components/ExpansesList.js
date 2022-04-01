import React from 'react';
import { useForm } from "react-hook-form";
import {useParams} from 'react-router-dom'

const ExpansesList = () => {
    const params = useParams()
    // { history, match }
    // const { id } = match.params;
    // const isAddMode = !id;

    console.log(params)



    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default ExpansesList;