
import { useState } from "react";
import ReactDOM from "react-dom";
import './styles.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


function SubmissionForm() {
  const [inputs, setInputs, state, setstate] = useState({});
  const [units, setUnits] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUnits(event.target.value);
    setInputs(values => ({ ...values, [name]: value }))
  }
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const firstEvent = (event) => {
    setItem(event.target.value);
  }

  const secondEvent = () => {


    setNewItem((prev) => {
      return [...prev, item]
    });

    setItem("");

  }

  const thirdEvent = () => {
    setNewItem([]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="recipeForm">
        <label id='align'>Recipe Name:</label>
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </div>
      <div className="recipeForm">
        <label id='align'>Description:</label>
        <input
          type="text"
          name="description"
          value={inputs.description || ""}
          onChange={handleChange}
        />
      </div>
      <div className="recipeForm">
        <label id='align'>Ingredients:
          <input
            type="text"
            name="ingredients"
            value={inputs.ingredients || ""}
            onChange={handleChange}
          />

          <div className="units">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Units</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={units}
                  label="Units"
                  onChange={handleChange}
                >
                  <MenuItem value={'Cups'}>Cups</MenuItem>
                  <MenuItem value={'Tablespoon'}>Tablespoon</MenuItem>
                  <MenuItem value={'Teaspoon'}>Teaspoon</MenuItem>
                  <MenuItem value={'Ounce'}>Ounce</MenuItem>
                  <MenuItem value={'Gallon'}>Gallon</MenuItem>
                  <MenuItem value={'Pound'}>Pound</MenuItem>
                  <MenuItem value={'Grams'}>Grams</MenuItem>
                  <MenuItem value={'ml'}>ml</MenuItem>
                </Select>

              </FormControl>
            </Box>

          </div>


          <div>
            <br />
            <br />
            <div className="list">Ingredients List so far:</div>
            <div className="childOne">
              <input type="text" value={item} placeholder="Ingredients" onChange={firstEvent} />
             <Button className="AddBtn" onClick={secondEvent}>
                <AddIcon />
              </Button>
               <br />
              <br />

              <ul className="textFont">
                {
                  newItem.map((val) => {
                    return <li> {val} </li>;
                  })
                }
              </ul>
            </div>
            <br />
            <br />
            <div className="childTwo">
              <Button className="delBtn" onClick={thirdEvent}>
                <DeleteIcon />Delete All
              </Button>
            </div>
          </div>





        </label>
      </div>

      <div className="recipeForm">
        <label id='align'>Instructions:
          <input
            type="text"
            name="instruction"
            value={inputs.instruction || ""}
            onChange={handleChange}
          />
        </label>
      </div>




      <div className='btn'>
        <button type="button" id='btn'>Submit</button>
      </div>
    </form>
  )
}

export default SubmissionForm;

ReactDOM.render(<submissionForm />, document.getElementById('root'));
