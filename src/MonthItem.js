import React, { Component } from "react";
import classNames from "classnames";

export default class MonthItem extends Component {
  render() {

    const itemClassName = classNames("month-item", {
      "month-item_gray":
        this.props.usersList.length >= 0 && this.props.usersList.length <= 2,
      "month-item_blue":
        this.props.usersList.length >= 3 && this.props.usersList.length <= 6,
      "month-item_green":
        this.props.usersList.length >= 7 && this.props.usersList.length <= 10,
      "month-item_red":
        this.props.usersList.length >= 11
    });

    return (
      <div className='users-list'>
        <li className={itemClassName}>
          {this.props.name} ({this.props.usersList.length})
          <ul className='users-list__item'>
            {this.props.usersList.map(user => {
              const userName = user.firstName + ' ' + user.lastName;
              return <li key={user.id}>{userName}</li>
            })}
          </ul>
        </li>
      </div>
    );
  }
}
