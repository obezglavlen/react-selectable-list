import styled, { css } from "styled-components";
import React from "react";
import ListItem from "./ListItem";

interface ListProps {
  items: Array<{ title: string; id: never | number | string }>;
  selected: Set<string | number>;
  toggleSelect: (arg: string | number) => void;
}

interface StyleProps {
  width?: string | number;
  height?: string | number;
  isBorderCollapse?: boolean;
  isSelected?: boolean;
}

const StyledList = styled.ul<StyleProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  list-style: square;
  display: flex;
  flex-direction: column;
  ${({ isBorderCollapse }) =>
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

function List({
  items,
  selected,
  toggleSelect,
  ...props
}: ListProps & StyleProps) {
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

export default List;
