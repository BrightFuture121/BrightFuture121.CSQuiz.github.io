class AppQuestion extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        console.log(this.props);
        return (
            <div className="question-section">
                <div>
                   
                    <h2>Question</h2>
                    <p dangerouslySetInnerHTML={this.props.data.triviaData[0].question}></p>
                </div>
            </div>
        );
    }
}
//<h3>Category</h3>
//<p>{this.props.data.triviaData[0].category}</p>
export default AppQuestion