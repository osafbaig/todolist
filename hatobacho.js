let students=[
    {
    name:"osaf khan",
    rollno:12345,
    fees:5000,
},
{
    name:"Naman",
    rollno:12346,
    fees:5000,
},

{
    name:"jameel khan",
    rollno:12347,
    fees:8000,
},
{
    name:"naveen khan",
    rollno:12348,
    fees:5001,
}
]



function enrollstudent(student,callback){
setTimeout(()=>{
    students.push(student)
    callback();
},2000)

}

function getStudents(){
    setTimeout(()=>{
        let str="";
        students.forEach((student)=>{
            str+=`name is ${student.name}  rollno is :-${student.rollno} fees is :-${student.fees} <br>`;
            console.table(student.name);
            document.getElementById('demo').innerHTML=str;
        })
    },1000)
}

student={name:"shazaib",rollno:3000,fees:1000};
enrollstudent(student,getStudents);

