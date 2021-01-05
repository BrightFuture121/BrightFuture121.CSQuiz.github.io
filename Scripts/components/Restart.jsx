class Restart extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
             
                     
                <div className="restart">
                <button className="restart-button" onClick={e => this.props.resetSession()}>Reset</button>
                </div>
                
            
        );
    }
}

export default Restart;