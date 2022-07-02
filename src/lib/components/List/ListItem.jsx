import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLi = styled.li`
  cursor: pointer;
  display: block;
  position: relative;
  border: 2px solid transparent;
  border-color: ${({ isSelected }) => isSelected && "black"};
  margin-top: -1px;
  top: 1px;
`;

function ListItem({ toggleSelect, id, children, isSelected }) {
  function onClick() {
    toggleSelect(id);
  }

  return (
    <StyledLi key={id} onClick={onClick} isSelected={isSelected}>
      {children}
    </StyledLi>
  );
}

ListItem.prototypes = {
  toggleSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default ListItem;
