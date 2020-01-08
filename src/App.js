import React, { Component } from "react";
import MonthItem from "./MonthItem";
import monthArr from './monthArray';
import "./App.css";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        const url = 'https://yalantis-react-school.herokuapp.com/api/task0/users';
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            })


    }

    render() {

        const { isLoaded, items } = this.state;

        const getUsersNumByMonth = monthNum => {

            return items.filter(user => {
                const birthDate = new Date(user.dob);
                return birthDate.getMonth() === monthNum;
            });
        };

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {

            return (
                <div className="App">
                    <ul className='month-list'>
                        {monthArr.map(el => (
                            <MonthItem name={el.name}
                                usersList={getUsersNumByMonth(el.num)}
                                key={el.num}>
                            </MonthItem>
                        ))}
                    </ul>
                </div>
            );

        }
    }
}

export default App;
