import React, { Component } from "react";
import ActivityItem from './ActivityItem';


class ActivityList extends Component {

  render() {
    const { activities } = this.props;
    console.log(activities);
    return (
      <div className="container resource-list-container">
      {activities && activities.map(activity => {
        return <ActivityItem key={activity.id} data={activity} />;
      })}
      </div>
    );
  }
}

export default ActivityList;
