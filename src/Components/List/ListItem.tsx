import styled from "styled-components";

interface ListItemProps {
  toggleSelect: (arg: string | number) => void;
  id: string | number;
  children: any;
}

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

function ListItem({
  toggleSelect,
  id,
  children,
  isSelected,
}: ListItemProps & StyleProps) {
  function onClick() {
    toggleSelect(id);
  }

  return (
    <StyledLi key={id} onClick={onClick} isSelected={isSelected}>
      {children}
    </StyledLi>
  );
}

export default ListItem;
