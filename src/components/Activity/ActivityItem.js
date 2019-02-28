import React, { Component } from "react";

class ActivityItem extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="container resource-container">
        <div className="left-col">
          <div className="avatar">
            <img src={data.imgUrl} alt="resource" />
          </div>
          <div className="detail">
            <h3>{data.title}</h3>
            <p>{data.subtitle}</p>
          </div>
        </div>
        <div className="commitment">
          <div className="tag">Commitment</div>
          <div className="duration">{data.duration}</div>
          <div className="location-label">Location</div>
          <div className="location">{data.location}</div>
        </div>
      </div>
    );
  }
}

export default ActivityItem;
