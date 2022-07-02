import { useState } from "react";

function useSelectableList(): [
  Set<string | number>,
  (arg: string | number) => void
] {
  const [selected, setSelected] = useState(new Set<string | number>());

  function toggleSelected(id: string | number): void {
    setSelected((prev: Set<string | number>): Set<string | number> => {
      const set: Set<string | number> = new Set(prev);

      set.has(id) ? set.delete(id) : set.add(id);

      return set;
    });
  }

  return [selected, toggleSelected];
}

export default useSelectableList;
