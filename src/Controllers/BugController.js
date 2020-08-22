import BugModel from '../Models/BugModel';

export function retrieveBugs(){
    let data = [];

    data.push(new BugModel({
        id: 23456789,
        name: "Crash on Load",
        details: "Crashes after 3 seconds",
        steps: " Open application and it will crash",
        version: "V2.0",
        assigned: "Leah",
        creator: "Natasha",
        priority: 1,
        time: "23:38"
    }))
    data.push(new BugModel({
        id: 23456789,
        name: "Wont  Load",
        details: "Crashes after 3 seconds",
        steps: " Open application and it will crash",
        version: "V2.0",
        assigned: "Leah",
        creator: "Natasha",
        priority: 3,
        time: "23:38"
    }))
    
    let sorted = data.sort((a,b) => {return a.priority - b.priority }) // this will go throught the array and sort them by the priority and if its not 0 then it is 0 if higher it will return 1 first.
    return sorted;
}