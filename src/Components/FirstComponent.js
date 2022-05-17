
import {Component} from 'react';

 class FirstComponent extends Component {

constructor(){
    super();
    this.state ={username:''}

}
reset=()=>{
    this.setState({username:''})
//     console.log('changed');
document.getElementById("inp").value='';
}
render(){
    return (
        <div>
            <input
                  id='inp'
                  type='text'
   onChange={(e)=>{
    this.setState({username:e.target.value})
     }
    }
 />
 <p></p>
 {this.state.username}
      <p></p>
<input 
type='button'
value='reset'
onClick={this.reset}
/>
                
       
        </div>
    )
   
}

}
export default FirstComponent;