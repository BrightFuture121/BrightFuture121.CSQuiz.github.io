import Joke from "./joke.jsx";
import jokeData from "./jokeData.jsx";
class Jokes extends React.Component {
    render() {
        //const nums = [1, 2, 3, 4, 5, 6]
    //const doubled = nums.map(function (num) {
    //   return num*2
    //  })
   const jokeComponents = jokeData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer}/>);

        return (
            <div>
                {jokeComponents}
           </div>
            );
    }
}
//function Jokes() {
//    const nums = [1, 2, 3, 4, 5, 6]
//    const doubled = nums.map(function (num) {
//        return num*2
//    })
//    const jokeComponents = jokeData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer}/>);
//    console.log(doubled);
//    return (
//        <div>
           
//            {jokeComponents}
//            </div>
//        );

//}
 //<Joke question="who are you?"  answer="Haoyu"/>
            //<Joke/>
export default Jokes