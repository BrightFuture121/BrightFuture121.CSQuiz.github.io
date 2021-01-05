class Joke extends React.Component {
    render() {
        console.log(this.props)
       return (
            <div>
                 <h3 style={{display: !this.props.question && "none"}}>Question:{this.props.question}</h3>
                 <h3>Answer:{this.props.answer}</h3>
            </div>
            );
    }

}
//function Joke(props) {
//    console.log(props)
//    return (
//        <div>
//            <h3 style={{display: !props.question && "none"}}>Question:{props.question}</h3>
//            <h3>Answer:{props.answer}</h3>
//        </div>

//        );
//}
export default Joke