let taskInput=document.querySelectorAll("input");
let title=document.querySelector(".title");
let date=document.querySelector(".date");
let category=document.querySelector("select")
let btnAdd=document.querySelector(".add-btn");
let allTasks=[];
let taskItem=document.querySelector("#tasks .row");
let btnDel=document.querySelector(".btn-del");
let btnEdit=document.querySelector(".btn-edit");
let h3=document.querySelector("#h3");
let mode="add";
let globalId;
let span=document.querySelector(".check-span");
let circle=document.getElementsByClassName("circle")
let validationStatus=false;
console.log(category);

window.addEventListener("load",function(){
    taskInput[0].focus();
})

let checkValidation=() =>{
    for(let index=0;index< allTasks.length;index++){
        if(allTasks[index].value == ""){
            validationStatus = false;
        }else{
            allTasks[globalId]=newTask;
            mode= 'create';
            validationStatus=true
        }
    
    }}
if(localStorage.tasks == null){
    allTasks=[];
} else{
        allTasks = JSON.parse(localStorage.tasks);

}
///////////////adding Function

let addTasks = () =>{
    let newTask={
        task:taskInput[0].value,
        date:taskInput[1].value,
        category:category.value
    }
        if(mode == "add"){
            if(taskInput.value==""){
            span.innerHTML="Enter valid Data !!"
        }else{
        allTasks.push(newTask);
        taskInput.value="";
        showTasks();
        console.log(allTasks);
        }
    
    }else{
        allTasks[globalId]=newTask;
        mode= 'add';

    }
    localStorage.setItem("tasks",JSON.stringify(allTasks));
    showTasks();
    clearInputsValue();
}
btnAdd.addEventListener("click",addTasks);



////////////////////// Show items in document
let showTasks= () =>{
    taskItem.innerHTML=""
    allTasks.forEach((element,index)=>{
        taskItem.innerHTML +=`
        <div class="row">
        <div class="item">
        <div class="h">
            <h3> ${element.task}</h3>
            <span>${element.date}</span>
            <span>${element.category}</span>
            </div>
            <div class="btns">
            <i class="fa-regular fa-pen-to-square btn-edit" onclick='editTask(${index})'></i>
            <i class="fa-regular fa-trash-can btn-del" onclick="deleteTask(${index})"></i>
            
            </div>
        </div>
    </div>`
    })
    
}
showTasks()


///////////////////////// Delete ////////////////////////////////////////////////

let deleteTask = (index) =>{
    allTasks.splice(index,1);
    localStorage.tasks=JSON.stringify(allTasks);
    showTasks();
}
btnDel.addEventListener("click",deleteTask)

//////////////////////// Edit ///////////////////////////////////////////

let editTask =(index)=>{
    mode='edit';
    title.value= allTasks[index].task;
    date.value=allTasks[index].date;
    category.value=allTasks[index].category;
    btnAdd.innerHTML=`<i class="fa-regular fa-pen-to-square btn-edit"></i> Update`;
    btnAdd.classList.replace("add-btn","edit-btnn");
    globalId=index;
    showTasks();
    
}
btnEdit.addEventListener("click",editTask)


//Method To Clear Inputs Value

let clearInputsValue=()=>{
    title.value =''
    date.value='';
    category.value='';
} 






