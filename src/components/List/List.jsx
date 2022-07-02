import PropTypes from "prop-types";
import styled from "styled-components";
import ListItem from "./ListItem";

const StyledList = styled.ul`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  list-style: square;
  display: flex;
  flex-direction: column;
`;

function List({ items, selected, toggleSelect, ...props }) {
  return (
    <StyledList {...props}>
      {items.map(({ title, id }) => {
        const isSelected = selected.has(id);
        return (
          <ListItem id={id} toggleSelect={toggleSelect} isSelected={isSelected}>
            {title}
          </ListItem>
        );
      })}
    </StyledList>
  );
}

List.proptypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string),
  toggleSelect: PropTypes.func,
};

export default List;
