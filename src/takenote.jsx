import React from 'react'
import './inputnote.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Note from './note.js'
// import AddIcon from '../node_modules/@material-ui/icons/Add.js';
class TakeNote extends React.Component{
    constructor(){
        super()
        this.state={title:"",note:"",notearray:[],expand:false};
        
    }
    addnote=(e)=>{
        e.preventDefault();
    
        this.setState((state)=>({notearray:[...state.notearray,{title:state.title,note:state.note}],title:"",note:""}));
    }
    del=(title)=>{
        // console.log(props.note.title)
        this.setState((state)=>({notearray:state.notearray.filter((n)=>n.title!==title)}))
    }
    render(){
        return(
        <>
        <div class="container form">
          
            <div class="card" onDoubleClick={()=>this.setState({expand:false})} onClick={()=>this.setState({expand:true})}>
        
             <div class="card-header">
                Add Note
             </div>
             {
               this.state.expand ?
            <div class="card-body">
             
                <input onChange={(e)=>this.setState({title:e.target.value})} class="form-control" placeholder="Title" type="text" autocomplete="off" value={this.state.title}/ >
                
                <p class="card-text"><textarea onDoubleClick={()=>this.setState({expand:false})} onClick={()=>this.setState({expand:true})} onChange={(e)=>this.setState({note:e.target.value})}  class="form-control"name="" id="" cols="" rows="" placeholder="Write a note" value={this.state.note}></textarea></p>
                <div class="button">
                <button onClick={this.addnote} class="btn btncustom btn-primary">+</button>
                </div>
            </div>
            :null}
            
            </div>
            
            
        </div>
        <div className="container" style={{marginTop:"50px"}}>
            <div className="row"  style={{marginTop:"30px"}}>
                {this.state.notearray.map((note)=><Note note={note} del={this.del} />)}
                </div>
        </div>
        </>
        );
        }
    
}
export default TakeNote;