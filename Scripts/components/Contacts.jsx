import ContactCard from "./ContactCard.jsx"

class Contacts extends React.Component{

    render() {
        return (
            <div className="card-container">
                <ContactCard
                    contact={{ name: "Haoyu Li", imgUrl: "/photo/testphoto.JPG", phone: "2324242", email: "haoyu@haoyu.com" }}
                />
                <ContactCard
                    contact={{ name: "Haoyu Li1", imgUrl: "/photo/testphoto.JPG", phone: "2324242", email: "haoyu@haoyu.com" }}
                />
                <ContactCard
                    contact={{ name: "Haoyu Li2", imgUrl: "/photo/testphoto.JPG", phone: "2324242", email: "haoyu@haoyu.com" }}
                />
                <ContactCard
                    contact={{ name: "Haoyu Li3", imgUrl: "/photo/testphoto.JPG", phone: "2324242", email: "haoyu@haoyu.com" }}
                />
            </div>
        );

    }

}
//function Contacts() {
    
//}
export default Contacts