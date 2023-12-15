import React ,{Component} from 'react';

class Timer extends Component {
    constructor(props){
        super(props);
        
        this.state={
    
            
            minutes: 0,
            seconds: 0
        
        }
      
    }
       
    
changeState=()=>{
 this.timer= setInterval(()=>{
        this.setState({
             seconds: this.state.seconds ==  60 ? 0 : this.state.seconds+1,
             minutes :this.state.seconds == 60? this.state.minutes+1 : this.state.minutes
            
            
       })
       
    },1000)
    
   
}


 changeSet=()=>{
    clearInterval(
        this.timer,
    )
}  

 render(){
    
    return(

    <div>
         
        <div class="timer">
        <h1>Timer </h1>
        <div class="tim-value">
            <h1 id="min">{this.state.minutes}  :  {this.state.seconds} </h1> 
            
            </div> 
            <div class="btn">
                <button id="start" onClick={this.changeState}>start</button>
                <button  id="stop"onClick={this.changeSet}>stop</button>
                
            </div>
         </div>   
        
    </div>
     )   
    }
}

export default Timer ;