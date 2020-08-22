const colors =[
    "#b33a3a",
    "#ff6700",
    "#32cd32"
];

export default ( priority ) => {
    const level = ["High", "Medium" , "Low"]
    return{
        level:(level[priority -1]), // this is so it matches to the index no
        color:colors[priority -1]  // this is so it matches to the index no
    }
};