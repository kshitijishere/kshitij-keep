import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Note extends React.Component{
constructor(props){
    super(props)
    
}

render(){
  const mystyle={
    display:"flex",
    justifyContent:"end"
  }
    return(
      
        <div className="col col-4">
        <div class="card" style={{marginTop:"10px"}}>
        <div class="card-body">
          <h5 class="card-title " style={{textAlign:"center"}}>{this.props.note.title}</h5>
        
          <p class="card-text" style={{textAlign:"center"}}>{this.props.note.note}</p>
        <div style={mystyle}>
        <button class="btn btn-danger" style={{width:"40px", marginLeft:"auto"}} onClick={()=>this.props.del(this.props.note.title)}>X</button>
        </div>
        </div>
      
      </div>
      </div>

    );
}
}
export default Note;
