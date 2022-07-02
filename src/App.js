import List from "./components/List";
import { v4 as uuid4 } from "uuid";
import useSelectableList from "./hooks/useSelectableList";

const items = [
  {
    title: "item1",
    id: uuid4(),
  },
  {
    title: "item2",
    id: uuid4(),
  },
  {
    title: "item3",
    id: uuid4(),
  },
  {
    title: "item4",
    id: uuid4(),
  },
  {
    title: "item5",
    id: uuid4(),
  },
];

export default function App() {
  const [selected, toggleSelect] = useSelectableList();

  return (
    <>
      <List
        items={items}
        selected={selected}
        toggleSelect={toggleSelect}
        width="120px"
        isBorderCollapse
      />
      <button
        onClick={() =>
          alert(
            [
              // @ts-ignore
              ...selected,
            ].join("\n")
          )
        }
      >
        Show selected items
      </button>
    </>
  );
}
