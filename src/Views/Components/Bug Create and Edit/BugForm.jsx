import React from 'react';
import './BugForm.css';

const BugForm = (props) => {
    return (
        <div className="bug-create">
            <h1>{props.title}</h1>
            <form>
                <label>Name:</label>
                <input type="text" name="name" placeholder="Bug Name" required></input>
                <label>Details:</label>
                <textarea name="details" placeholder="Detailed description on the bug" required></textarea>
                <label>Steps:</label>
                <textarea name="steps" placeholder="Steps to create the bug" required></textarea>
                <label>Priority</label>
                <select name="priority" required>
                    <option value="1">High</option>
                    <option value="2">Mid</option>
                    <option value="3">Low</option>
                </select>
                <label>Assigned</label>
                <select name="assigned">
                    <option>Leah</option>
                </select>
                <label>Application Version:</label>
                <input name="version" placeholder="Application Version"></input>
                <button type="submit"> {props.title} </button>
            </form>
        </div>
    )
}

export default BugForm
