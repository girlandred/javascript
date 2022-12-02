import React from "react";
import { useCallback } from "react";

import CustomInput from "./UI/input/CustomInput";
import CustomSelect from "./UI/select/CustomSelect";

const PostFilter = ({ filter, setFilter }) => {

  const handleSelectChange = useCallback((selectedSort) =>
  setFilter({ ...filter, sort: selectedSort }), [setFilter, filter]);

  return (
    <div>
      <CustomInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <CustomSelect
        value={filter.sort}
        onChange={handleSelectChange}
        defaultValue="Sort"
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By body" },
        ]}
      />
    </div>
  );
};

export default PostFilter;