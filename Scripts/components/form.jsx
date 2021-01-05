class FormReact extends React.Component{
    constructor(){
        super();
        this.state={
            firstName:"",
            lastName:"",
            isFriendly:true,
            gender:"",
            favColor:"blue",

        }
        this.handleChange=this.handleChange.bind(this);
        this.handleChange1=this.handleChange1.bind(this);
    }
    handleChange(event){
        const {name,value,type,checked}=event.target;
        type=="checkbox"?this.setState({[name]:checked}):
        this.setState(
            {
                //[event.target.name]:event.target.value
                [name]:value
            }
            )

    }
    handleChange1(event){
        this.setState(
            {
                lastName:event.target.value
            }
            )

    }
    render(){
        return(
            <form>
                <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange}/>
                <br/>
                <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                <br/>
                <textarea value={"something"} onChange={this.handleChange}/>
                <br/>
                <label>
                <input type="checkbox" checked={this.state.isFriendly} name="isFriendly" onChange={this.handleChange}/>Is Friendly?
                </label>
                <br/>
                <label>
                <input type="radio" value="male" checked={this.state.gender==="male"} name="gender" onChange={this.handleChange}/>Male
                </label>
                <br/>
                <label>
                <input type="radio" value="female" checked={this.state.gender==="female"} name="gender" onChange={this.handleChange}/>Female
                </label>
                <br/>
                <label>Favorite Color</label>
                <select  onChange={this.handleChange} value={this.state.favColor} name="favColor">
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                </select>
                <h1>{this.state.firstName} {this.state.lastName} is a {this.state.gender}, favorite color is {this.state.favColor}</h1>
            </form>
            );
    
    }
}

export default FormReact