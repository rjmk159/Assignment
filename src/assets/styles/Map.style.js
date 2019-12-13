import styled from "styled-components";
import { color } from "../../utils/color";

export const MapContainerStyle = styled.div`
  background: ${color.lighter};
  margin-left: 2px;
  width: 50%;
  float: left;
  .search-container {
    position: fixed;
    z-index: 10;
    left: 0;
    background: #ececec;
    border-top: 1px solid #fff;
    height: 40px;
    width: 200px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 13px;
    button {
      background: ${color.primary};
      color: ${color.lighter};
      width: 111px;
      height: 33px;
      border-radius: 20px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;
