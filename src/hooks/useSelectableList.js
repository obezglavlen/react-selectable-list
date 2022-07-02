import { useState } from "react";

function useSelectableList() {
  const [selected, setSelected] = useState(new Set());

  function toggleSelected(id) {
    setSelected((prev) => {
      const set = new Set(prev);

      set.has(id) ? set.delete(id) : set.add(id);

      return set;
    });
  }

  return [selected, toggleSelected];
}

export default useSelectableList;
