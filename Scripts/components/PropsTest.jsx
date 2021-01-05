import TodoTime from "./TodoTime.jsx";
import todoData from "./todoData.jsx";
class PropsTest extends React.Component {
    constructor() {
        super()
        this.state = {
            todos:todoData,
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(id){
        this.setState(preState=>{
            const updateTodos=preState.todos.map(todo=>{
                if(todo.id===id){
                    todo.completed=!todo.completed
                }
                return todo
            
            })
            return{
                todos: updateTodos
            
            }
        
        })
    
    }
    render() {
        const TodoList = this.state.todos.map(item => <TodoTime key={item.id} item={item} text={item.text} 
            completed={item.completed} handleChange={this.handleChange} />)
        return (
            <div className="todo-list">
                {TodoList}

            </div>
        );

    }
}
 
export default PropsTest
    