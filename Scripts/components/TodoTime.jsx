class TodoTime extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="todo-item">
                <input type="checkbox" 
                    checked={this.props.completed} 
                    //onChange={()=>console.log("Changed")} 
                    onChange={()=>this.props.handleChange(this.props.item.id)}
                    />
                <p style={{ color: this.props.completed && "green" }}>{this.props.text}</p>
            </div>
        );
    }
}

 
export default TodoTime