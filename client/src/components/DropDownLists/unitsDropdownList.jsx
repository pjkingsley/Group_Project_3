

import React, { useState } from 'react';
import Select from 'react-select';


const units = [
    { label: "Cup", value: 1 },
    { label: "Tea-spoon", value: 2 },
    { label: "ml", value: 3 }
];

function UnitsDropdown () {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
      <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={units}
        />
      </div>
    );
}

export default UnitsDropdown;