import React, {useState, useReducer} from 'react';
import {todoReducer, initialState} from '../reducers/todoReducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const[ listItem, setListItem] = useState('');

    const handleChanges = e => {
        setListItem(e.target.value);
    };

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     setListItem('')
    //     dispatch(listItem)
    // };

    return(
        <div>
           
            <form className='listForm'>
                <label htmlFor='todo'>New Todo</label>
                <input
                    id='todo'
                    type='text'
                    name='todo'
                    value={listItem}
                    onChange={handleChanges}
                />
            </form>
            
            <button onClick={() => {
                dispatch({type: 'ADD_TODO', payload: listItem});
                setListItem('');
                dispatch({type: 'TOGGLE_COMPLETED'})
            }}>
            Add Todo</button>

            <div>
                <h1 className='todo'>{state.item}<i className='toggle' onClick={() => dispatch({completed:'TOGGLE_COMPLETED'})}     
                />
                </h1>
            </div>
            
        </div>
    )
}

export default TodoForm;