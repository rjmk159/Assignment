import React, { Component } from "react";
import { ListContainerStyle } from "../assets/styles/List.style";
import List from "../components/List";

class ListContainer extends Component {
  render() {
    let { list } = this.props;
    return (
      <ListContainerStyle>
        {list && list.length ? (
          list.map((item, index) => {
            var isOpen = item.opening_hours && item.opening_hours.open_now;
            return (
              <div key={item.id}>
                <List isOpen={isOpen} details={item} />
              </div>
            );
          })
        ) : (
          <div className="no-show">Nothing to show</div>
        )}
      </ListContainerStyle>
    );
  }
}
export default ListContainer;
