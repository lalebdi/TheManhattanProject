import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getBugs } from '../../../Controllers/Redux/bugSlice';
import Card from '../../Components/Dashboard/Card';

const Dashboard = () => {
    const dispatch = useDispatch();
    const bugs = useSelector(state => state.bugs) // we need to be adble to dispatch them
    const browserHistory = useHistory(); //this is for the onclick on the card
    let highCount = 0;
    let midCount = 0;
    let lowCount = 0;

    // When bugs == undefined, I don't want the filter to run
    if(bugs != undefined){
        highCount = filterBugs(1);
        midCount = filterBugs(2);
        lowCount = filterBugs(3);
    }

    function redirect(){
        browserHistory.push('/viewbugs')
    }

    function filterBugs(priority){
        return bugs.filter((bug) => {return bug.priority == priority}) //for .filter() you gotta have a return
    }

    useEffect(() =>{
        dispatch(getBugs()) // the getBugs

    }, [bugs == undefined]) // it will update the state and useEffect runs eveytime the state is updated. So, only runs if the state is undefined.
    return (
        <div className="page-container" >
            <Card priority="1" count={ highCount.length} clicked={redirect}/>
            <Card priority="2" count={ midCount.length} clicked={redirect}/>
            <Card priority="3" count={ lowCount.length} clicked={redirect}/>
        </div>
    )
}

export default Dashboard
