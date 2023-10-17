import { Box } from "@mui/material";
import {Slider} from "@mui/material";
import { sliderState } from "./Constants/stateConsts";

export function RangeSlider({value, setValue}) {



    const minDistance = 5
    function handleChange (event, newValue, activeThumb)  {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (activeThumb === 0) {
        setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
      } else {
        setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
      }
    }
    return (
      <Box sx={{ width: 250 }}>
        <Slider
        
          getAriaLabel={() => 'Minimum distance'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          disableSwap
          min={sliderState[0]}
          max={sliderState[1]}
        />
      </Box>
    );
  }
  