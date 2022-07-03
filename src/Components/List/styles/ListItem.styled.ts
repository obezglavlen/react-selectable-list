import styled from "styled-components";

interface StyleProps {
  isSelected: boolean;
}

const StyledLi = styled.li<StyleProps>`
  cursor: pointer;
  display: block;
  position: relative;
  border: 2px solid transparent;
  border-color: ${({ isSelected }) => isSelected && "black"};
`;

export default StyledLi;
export { StyleProps };
