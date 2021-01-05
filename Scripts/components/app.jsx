class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes",
            loggedIn:true,
        }
    }
    render() {
        const FirstName = "Haoyu";
        const LastName = "Li";
        const date = new Date();
        const hour = date.getHours();
        let timeOfDay;
        let wordDisplay;
        if (this.state.loggedIn == true) {
            wordDisplay="in"
        } else {
            wordDisplay="out"
        }
        if (hour < 12) {
            timeOfDay = "Morning";
        } else if (hour >= 12 && hour < 17) {
            timeOfDay = "Afernoon";
        } else {
            timeOfDay = "night";
        }
        const styles = {
            color: "orange",
            backgroundColor: "green",
        }
        return (
            <div>
                <h1 className="test1"> Hey {FirstName + " " + LastName} are you happy? {this.state.answer}</h1>
                <h1 style={styles}> Good {timeOfDay} {hour} !</h1>
                <p>Haoyu is currently logged {wordDisplay}</p>
            </div>
        );
    }

}

 
export default App