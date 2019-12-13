import React, { Component } from "react";
import Helper from "../utils/Helper";
import { strings } from "../utils/strings";
import { types } from "../utils/constants";
class PlaceType extends Component {
  state = {
    types: types,
    initialTypes: [...types],
    selectedList: []
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.value;
    let _type = [];
    _type.push(name);
    this.setState(
      {
        selectedList: _type
      },
      () => {
        this.props.selectedPlace(_type);
      }
    );
  };

  handleFindString = e => {
    let _value = e.target.value;
    _value = _value.toLowerCase();
    let { initialTypes, types } = this.state;
    this.setState({ value: _value });
    if (_value === "") {
      this.setState({ types: initialTypes });
      return;
    }
    const regex = new RegExp(_value);
    let newTypes = types.filter(element => regex.test(element, _value));
    this.setState({ types: newTypes });
  };
  render() {
    let { types } = this.state;
    return (
      <div className="types--container">
        <div className="types--searchbox">
          <input
            type="text"
            placeholder={strings.SearchPlaceHolder}
            onChange={e => this.handleFindString(e)}
          />
          <span>{strings.NearMe}</span>
        </div>
        {types.map((item, index) => {
          item = Helper.replaceUnderScoreWithSpace(item);
          return (
            <label key={index}>
              <input
                type="radio"
                name="type"
                className="types"
                value={item}
                onChange={this.handleInputChange}
              />
              {Helper.capitalizeFirstLetter(item)}
            </label>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default PlaceType;
