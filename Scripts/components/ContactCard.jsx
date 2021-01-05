class ContactCard extends React.Component {
    render() {
        console.log(this.props);
        return (

            <div className="card">
                <img src={this.props.contact.imgUrl} className="img-size" />
                <h3>{this.props.contact.name}</h3>
                <p>{this.props.contact.phone}</p>
                <p>{this.props.contact.eamil}</p>

            </div>
        );
    }
    

}
//function ContactCard(props) {
//    console.log(props);
//    return (
        
//        <div className="card">
//            <img src={props.contact.imgUrl} className="img-size" />
//            <h3>{props.contact.name}</h3>
//            <p>{props.contact.phone}</p>
//            <p>{props.contact.eamil}</p>

//        </div>
//        );

export default ContactCard