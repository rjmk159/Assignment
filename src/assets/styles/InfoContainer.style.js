import styled from "styled-components";
import { color } from "../../utils/color";

export const InfoContainerStyle = styled.div`
  background: ${color.lighter};
  height: 63px;
  margin: 2px;
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  span {
    font-family: "Open Sans", sans-serif;
  }
`;
