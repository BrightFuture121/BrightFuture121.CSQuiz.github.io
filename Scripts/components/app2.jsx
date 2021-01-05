import Conditional from "./Conditional.jsx"
class App2 extends React.Component {
    constructor(){
        super()
        this.state={
            count:0,
            isLoading:true,
            isLoggedIn:false,
            character:[],

        
        };
        this.handleClick=this.handleClick.bind(this);
        this.handleClickLog=this.handleClickLog.bind(this)

    }
    handleClick(){
        this.setState(preState=>{
            return{ 
                count:preState.count+1,
                }
           
        });
    
    }
    handleClickLog(){
        this.setState(preState=>{
            return{
                isLoggedIn:!preState.isLoggedIn,
            }
        });
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading:false,
            })
        },15000
            );
        fetch("http://swapi.dev/api/people/1/")
            .then(response=>response.json())
            .then(data=>{
            this.setState(
                {character:data,}
                )
            })

    }
    render(){
        let Logged;
        let LoggedDisplay;
        if(this.state.isLoggedIn==true){
            Logged="LOG OUT";
            LoggedDisplay="You already logged in.";
        }else{ 
            Logged="LOG IN";
            LoggedDisplay="You already logged out.";
        }
    return(
        <div>
            <Conditional isLoading={this.state.isLoading} text={this.state.character.name}/>
            <img onMouseOver={()=>console.log("mouse over")} src="/photo/testphoto.JPG" className="img-size"  />
            <br/>
            <br/>
            <button onClick={()=>console.log("I am clicked")}> Click me</button>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Change</button>
            <br/>
            <br/>
            <h1>{LoggedDisplay}</h1>
            <button onClick={this.handleClickLog}>{Logged}</button>

        </div>
        );
    }

}
export default App2