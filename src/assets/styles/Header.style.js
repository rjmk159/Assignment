import styled from "styled-components";
import { color } from "../../utils/color";
export const HeaderContainer = styled.div`
  background: ${color.lighter};
  height: 63px;
  margin: 2px;
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 30px;
    margin-right: 5px;
  }
`;
