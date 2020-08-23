import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBugs } from '../../Controllers/Redux/bugSlice';
import BugCard from '../Components/Bug Card/BugCard';
import BugView from '../Components/Bug View/BugView';

const ViewBugs = () => {
    const [DISPLAY_BUG, SET_DISPLAY_BUG] = useState({
        name: '',
        isDisplayed: false
    })
    const dispatch = useDispatch();
    const { bugs } = useSelector(state => state) ;

    useEffect(()=>{
        dispatch(getBugs());
    }, [bugs.length < 1]) // this is the trigger when bugs is null

    function BugClicked(name){
        SET_DISPLAY_BUG({
            isDisplayed: !DISPLAY_BUG.isDisplayed,
            name : name,
        })
    }


    return (
        <div className="page-container" >
            {bugs.map((bug,key) =>(
                <BugCard key={key} bug={bug} clicked={BugClicked}/>
            ))}
            {DISPLAY_BUG.isDisplayed && <BugView clicked={BugClicked} bug={bugs.filter((bug)=> bug.name === DISPLAY_BUG.name)[0]} />}
        </div>
    )
}

export default ViewBugs
