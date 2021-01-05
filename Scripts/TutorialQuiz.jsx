import App from './Components/app.jsx';
import PropsTest from "./components/PropsTest.jsx";
import Contacts from "./components/Contacts.jsx";
import Jokes from "./components/jokes.jsx";
import QuizTitle from "./components/QuizTitle.jsx";
import AppQuestion from './Components/AppQuestion.jsx';
import AppAnswers from './Components/AppAnswers.jsx';
import Score from './Components/Score.jsx';
import Restart from './Components/Restart.jsx';
import Footer from './Components/Footer.jsx';
import FormReact from "./components/form.jsx";
import Header from "./components/header.jsx";
import Meme from "./components/MemeGenerator.jsx";

 

 
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            triviaData: [{
                'category': '',
                'question': { __html: '' },
                'choices': [{ __html: '' }, { __html: '' }, { __html: '' }, { __html: '' }],
                'correct': { __html: '' },
            }],
            correct: 0,
            incorrect: 0,
            total:0,
        };

        this.updateCorrect = this.updateCorrect.bind(this);
        this.updateIncorrect = this.updateIncorrect.bind(this);
        this.updateTotal = this.updateTotal.bind(this);
        this.resetSession = this.resetSession.bind(this);
    }

    getData() {
        //axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
        axios.get('https://opentdb.com/api.php?amount=1&category=18&type=multiple')
            .then((results) => {
                const triviaData = results.data.results[0];
                const data = [{
                    'category': triviaData.category,
                    'question': { __html: triviaData.question },
                    'choices': [
                        { __html: triviaData.correct_answer },
                        { __html: triviaData.incorrect_answers[0] },
                        { __html: triviaData.incorrect_answers[1] },
                        { __html: triviaData.incorrect_answers[2] }
                    ],
                    'correct': { __html: triviaData.correct_answer }
                }];

                let randomize = data[0].choices;
                let position = randomize.length, temp, random;
                // While there are elements to shuffle...
                while (0 !== position) {
                    // Pick a remaining element
                    random = Math.floor(Math.random() * position);
                    position -= 1;
                    // Swap it with the current element.
                    temp = randomize[position];
                    randomize[position] = randomize[random];
                    randomize[random] = temp;
                }
                data[0].choices = randomize;

                this.setState({
                    triviaData: data
                });
            }).catch(err => {
                console.log('Error: ', err);
            });
    }

    componentDidMount() {
        this.getData()
    }
    updateTotal() {
        this.setState((prevState, props) => ({
            total: this.state.total + 1,
        }));


        setTimeout(() => {
            this.getData();
        }, 1000);

    }

    updateCorrect() {
        this.setState((prevState, props) => ({
            correct: this.state.correct + 1,
        }));

        setTimeout(() => {
            this.getData();
        }, 1000);
    }

    updateIncorrect() {
        this.setState((prevState, props) => ({
            incorrect: this.state.incorrect + 1,
        }));

        setTimeout(() => {
            this.getData();
        }, 1000);
    }

    resetSession() {
        this.setState((prevState, props) => ({
            correct: 0,
            incorrect: 0,
            total:0,
        }));
    }
    render() {

        return (
            <div >
                <QuizTitle />
                <Score results={this.state} />
                <div className="app-container">
                    <AppQuestion data={this.state} />
                    <AppAnswers data={this.state} updateCorrect={this.updateCorrect.bind(this)} updateTotal={this.updateTotal.bind(this)} updateIncorrect={this.updateIncorrect.bind(this)} />
                </div>
                <Restart resetSession={this.resetSession.bind(this)} />
               
            </div>
        );
    }
}




//<PropsTest />
  //  <Meme />
ReactDOM.render(<CommentBox />, document.getElementById('content'));