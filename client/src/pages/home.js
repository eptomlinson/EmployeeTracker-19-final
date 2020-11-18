import React from "react";
import friends from "../friends.json"

class Home extends React.Component {
    state = {
        filter: [],
        search: ""
    }
    
    componentDidMount() {
        this.initialLoad();
    }
    initialLoad = () => {
        this.setState({ filter: friends })
    }

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({ search: value })
        // console.log(this.state.search)
        // console.log(friends)
        const filtered = friends.filter(query => query.name.includes(value))
        this.setState({ filter: filtered })
        // console.log(this.state.filter)
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-dark bg-dark justify-content-center">
                    <form className="form-inline">
                        <input
                            className="form-control mr-md-8"
                            onChange={this.handleInputChange}
                            type="search"
                            placeholder="Who lives in a pineapple under the sea?"
                        />
                    </form>
                </nav>
                {
                    this.state.filter.map(element => (

                        <div className="card">
                            <div className="img-container">
                                <img
                                    alt={element.name}
                                    src={element.image}
                                />
                            </div>
                            <div className="content">
                                <ul>
                                    <li>
                                        <strong>Name:</strong> {element.name}
                                    </li>
                                    <li>
                                        <strong>Occupation:</strong> {element.occupation}
                                    </li>
                                    <li>
                                        <strong>Location:</strong> {element.location}
                                    </li>
                                    <li>
                                        <strong>Phone:</strong> {element.phone}
                                    </li>
                                    <li>
                                        <strong>Email:</strong> {element.email}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Home;