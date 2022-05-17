import {Component} from 'react';
class SecondComponent extends Component{

    constructor(){
        super();
        this.state ={
            imageSrc:'./images/3.jpeg',
            
    }
       this.images = ['./images/3.jpeg','./images/round.png','./images/square.jpeg'];
        this.counter=0;
        this.flag=false;
    }

   next=()=>{
       if(this.counter<2){
        this.counter+=1;
       }
       this.setState({imageSrc:this.images[this.counter]});
       
    
   }

   prev=()=>{
   
    if(this.counter>0){
        this.counter-=1;
    }
    this.setState({imageSrc:this.images[this.counter]})
   }
   start=()=>{
       this.flag=true;
      
           setInterval(()=>{
            if (this.flag){
            if(this.counter<2){
                this.counter+=1;
               }
               else if(this.counter==2){
                   this.counter=0
               }
            
               this.setState({imageSrc:this.images[this.counter]});
               console.log(this.counter);
       }},3000);
   
   }

   stop=()=>{
       this.flag=false;
       console.log(this.flag);
   }


 render(){

    return (
        <div>
        <img style={{width:'300px',height:'300px',margin:'50px'}} src={this.state.imageSrc}/>
        <p></p>
        <div style={{margin:'auto'}}>
        <input type='button' value='next' onClick={this.next} />
        <input type='button' value='prev' onClick={this.prev} />
        <input type='button' value='start' onClick={this.start} />
        <input type='button' value='stop'  onClick={this.stop}/>
        </div>
        </div>
    )
 }



}


export default SecondComponent;