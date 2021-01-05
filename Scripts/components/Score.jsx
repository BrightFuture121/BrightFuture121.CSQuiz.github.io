class Score extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div >
                <div className="quiz-score">
                    <div className="row">
                        Score: {this.props.results.correct} / {this.props.results.total}
                         
                    </div>
                     
                </div>
            </div>
        );
    }
}

export default Score;
