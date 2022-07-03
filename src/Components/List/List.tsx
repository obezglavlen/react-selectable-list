import React from "react";
import ListItem from "./ListItem";
import StyledList, { StyleProps } from "./styles/List.styled";

interface ListProps extends StyleProps {
  items: Array<{ title: string; id: never | number | string }>;
  selected: Set<string | number>;
  toggleSelect: (arg: string | number) => void;
}

function List({ items, selected, toggleSelect, ...props }: ListProps) {
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
