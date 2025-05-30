let todos=[]
function addTodos(){
    todos.push({
        title: document.getElementById("title").value,
        content: document.getElementById("content").value
    });
    document.getElementById("title").value="";
    document.getElementById("content").value="";
    render();
}
// function deleteTodo(index){
//     todos.splice(index,1);
//     render();
// }
window.deleteTodo = function(index) {
    todos.splice(index, 1);
    render();
};

function createTodoComponents(todo,i){
const divEl=document.createElement("div");
divEl.classList.add("todo-card");
const t1=document.createElement("h1");
const t2=document.createElement("h3");
const btn=document.createElement("button");
t1.innerHTML=todo.title;
t2.innerHTML=todo.content;
btn.innerHTML="Delete";
divEl.setAttribute("id","todo-"+i)
btn.setAttribute("onClick",`deleteTodo(${i});`);
divEl.appendChild(t1);
divEl.appendChild(t2);
divEl.appendChild(btn);
return divEl;
}
function render(){
    const container=document.getElementById("todos");
    container.innerHTML="";
    for(let i=0;i<todos.length;i++){
        const element= createTodoComponents(todos[i],i);
        document.querySelector("#todos").appendChild(element);
    }
}
