import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Array';
  tasklList = [{task:'',priority:''}];
  newTask:string ="";
  NewPriority:string="";

  addList() {
  this.tasklList.push({task:this.newTask,priority:this.NewPriority})

  this.newTask ='';
  this.NewPriority='';
}

delete(list){
let index= this.tasklList.indexOf(list)
this.tasklList.splice(index,1)
}


edit(list,newTask,NewPriority){
  let index= this.tasklList.indexOf(list)
  let taskPrompt = prompt("Edit Task",list.task)
  let prioPrompt = prompt("Edit Priority",list.priority)
  this.tasklList[index].task = taskPrompt
  this.tasklList[index].priority = prioPrompt

if (taskPrompt ==null || taskPrompt =="" ){
  this.tasklList= list

}

if(prioPrompt ==null || prioPrompt ==""){
this.tasklList = list

}

}

}


