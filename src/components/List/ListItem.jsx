import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLi = styled.li`
  cursor: pointer;
  display: block;
  position: relative;
  border: 2px solid transparent;
  border-color: ${({
    // @ts-ignore
    isSelected,
  }) => isSelected && "black"};
`;

function ListItem({ toggleSelect, id, children, isSelected }) {
  function onClick() {
    toggleSelect(id);
  }

  return (
    <StyledLi
      key={id}
      onClick={onClick}
      // @ts-ignore
      isSelected={isSelected}
    >
      {children}
    </StyledLi>
  );
}

ListItem.protoTypes = {
  isSelected: PropTypes.bool.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ListItem;
