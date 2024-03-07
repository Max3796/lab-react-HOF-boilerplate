import React, { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entrepreneur", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <div className="item-details">
            <span>ID: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </div>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderItemsByUserType = (userType) => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.user_type === userType);
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <div className="item-details">
            <span>ID: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </div>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  filterNamesStartingWithJ = () => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.name.startsWith("J"));
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <div className="item-details">
            <span>ID: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </div>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  filterDataByAge = (minAge, maxAge) => {
    const data = this.state.userData;
    const filteredData = data.filter(
      (item) => item.age > minAge && item.age <= maxAge
    );
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <div className="item-details">
            <span>ID: {item.id}</span>
            <span>Name: {item.name}</span>
            <span>User Type: {item.user_type}</span>
          </div>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  findTotalExperienceOfDesigners = () => {
    const data = this.state.userData;
    const designers = data.filter((item) => item.user_type === "Designer");
    const totalExperience = designers.reduce(
      (acc, designer) => acc + designer.years,
      0
    );
    return totalExperience;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()}</ul>
        </div>

        <h1>List All Data Based on UserType</h1>
        <div className="display-box">
          <ul>{this.renderItemsByUserType("Designer")}</ul>
        </div>

        <h1>Filter All Data Starting with the Letter 'J'</h1>
        <div className="display-box">
          <ul>{this.filterNamesStartingWithJ()}</ul>
        </div>

        <h1>Filter Data Based on Age</h1>
        <div className="display-box">
          <ul>{this.filterDataByAge(28, 50)}</ul>
        </div>

        <h1>Total Experience of Designers</h1>
        <div className="display-box">
          <p style={{ color: "blue" }}>
            Total Experience: {this.findTotalExperienceOfDesigners()} years
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;
