class Meme extends React.Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",

            randomImg:"https://i.imgflip.com/3y5e2k.jpg",
            allMemeImgs:[],
        };
        this.handleChange=this.handleChange.bind(this);
         this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes").
            then(response=>response.json()).
            then(response=>{
                const {memes}=response.data;
                console.log(memes[0]);
                this.setState({
                    allMemeImgs:memes,
                });
            })
    }
    //handleChange(event){
    //    console.log("working");
    //    const {name, value}=event.target;
    //    this.setState({
    //        [name]:value,
    //    });
    //}
    handleChange(event){
        const {name,value}=event.target;
        this.setState(
            {
                //[event.target.name]:event.target.value
                [name]:value
            }
            )        
    }
    handleSubmit(event){
        event.preventDefault();
        const randNum=Math.floor(Math.random()*this.state.allMemeImgs.length)
        const randMemeImg=this.state.allMemeImgs[randNum].url;
        this.setState({randomImg:randMemeImg});
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div  >
                    <img className="img-size" src={this.state.randomImg} alt="something is wrong"/> 
                    <h2>{this.state.topText}</h2>
                    <h2>{this.state.bottomText}</h2>
                </div>
            </div>
            
            );
    
    }
}
export default Meme