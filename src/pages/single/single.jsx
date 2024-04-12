import Sidebar from "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import "./single.scss"
import Chart from "../../components/chart/chart"
import List from "../../components/table/table"
const Single = () => {
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/18395424/pexels-photo-18395424/free-photo-of-hombre-en-pie-de-pie-libro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  className="itemImg"
                            />
                            <div className="details">
                            <h1 className="itemTitle">Jane Doe</h1>
                            <div className="detailItem">
                              <span className="itemKey">Email:</span>
                              <span className="itemValue">janeedoe@gmail.com</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Phone:</span>
                              <span className="itemValue">+1 233 64 22 32</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Addres:</span>
                              <span className="itemValue">No ubication</span>
                            </div>
                            <div className="detailItem">
                              <span className="itemKey">Counrty:</span>
                              <span className="itemValue">US</span>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="right">
                    <Chart aspect={3/1} title="User spending(Last 6 months)"/>
                </div>
                </div>
                <div className="bottom"></div>
                <List/>
                <h1 className="title">Last transactions</h1>
            </div>
        </div>
    )
}

export default Single