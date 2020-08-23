import React, { useState } from 'react';
import './BugForm.css';
import BugModel from '../../../Models/BugModel';

const BugForm = (props) => {
    const [ bugObject, setBugObject] = useState(new BugModel(props.bug)) // going to pass in the bug from props. So when we edit the bug so it will set all the input. if its null it will create an empty object
    
    function inputChanged(e){
        setBugObject({ // I need to set this to the previous one
            ...bugObject, //after, I need to get what input is chnaging it and then get the name from the event triggering it
            [e.target.name] : e.target.value
        })
    }
    
    return (
        <div className="bug-create">
            {props.title == "Edit Bug" && <button className="close-btn" onClick={props.close}>Close</button> }
            <h1>{props.title}</h1>
            <form>
                <label>Name:</label>
                <input type="text" name="name" placeholder="Bug Name" required onChange={inputChanged} value={bugObject.name}></input>
                <label>Details:</label>
                <textarea name="details" placeholder="Detailed description on the bug" required onChange={inputChanged} value={bugObject.details}></textarea>
                <label>Steps:</label>
                <textarea name="steps" placeholder="Steps to create the bug" required onChange={inputChanged} value={bugObject.steps}></textarea>
                <label>Priority</label>
                <select name="priority" required onChange={inputChanged} value={bugObject.priority} >
                    <option value="1">High</option>
                    <option value="2">Mid</option>
                    <option value="3">Low</option>
                </select>
                <label>Assigned</label>
                <select name="assigned" onChange={inputChanged} value={bugObject.assigned}>
                    <option>Leah</option>
                </select>
                <label>Application Version:</label>
                <input name="version" placeholder="Application Version" onChange={inputChanged} value={bugObject.version}></input>
                <button type="submit"> {props.title} </button>
            </form>
        </div>
    )
}

export default BugForm
