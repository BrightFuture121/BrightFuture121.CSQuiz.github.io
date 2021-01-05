class Conditional extends React.Component{
    render(){
        console.log(this.props.isLoading);
        if(this.props.isLoading==true){
            return(<h1>Loading......</h1>)
        }else{
            return(
            <h1>{this.props.text}</h1>)
        }
        
    }
}
export default Conditional 