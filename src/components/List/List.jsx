import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import ListItem from "./ListItem";

const StyledList = styled.ul`
  width: ${({
    // @ts-ignore
    width,
  }) => width || "100%"};
  height: ${({
    // @ts-ignore
    height,
  }) => height || "100%"};
  list-style: square;
  display: flex;
  flex-direction: column;
  ${({
    // @ts-ignore
    isBorderCollapse,
  }) =>
    isBorderCollapse &&
    css`
      & li {
        position: relative;
        margin-top: -1px;
        margin-left: -1px;
        left: 1px;
        top: 1px;
      }
    `}
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

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  selected: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  toggleSelect: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  isBorderCollapse: PropTypes.bool,
};

export default List;
