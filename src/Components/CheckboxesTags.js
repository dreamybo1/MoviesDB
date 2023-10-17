/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { CheckBoxOutlineBlank } from "@mui/icons-material";
import { Checkbox } from '@mui/material'
import { Autocomplete } from '@mui/material'
import { TextField } from '@mui/material'
import { useDispatch, useSelector, useStore } from "react-redux";
import { genresSetter } from "../Pages/LoginStore/LoginStore";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { CheckBoxOutlineBlank } from "@mui/icons-material";
// import { CheckBoxOutlineBlank } from "@mui/icons-material";




const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <Checkbox checked fontSize="small" />;

 function CheckboxesTags({arr,id}) {
    const dispatch = useDispatch()
    const store = useStore()
    // const [updater, setUpdater] = useState(false)
    const [genresInside, setGenresInside] = useState([])
    const genres = useSelector(state=>state.genres)
    useEffect(()=>{
      setGenresInside(genresInside.filter(el=>genres.includes(el.id)))
    },[genres])


  return (
    <Autocomplete 
      value={genresInside}
      onChange={(event, value) => {
        setGenresInside([...value])
        dispatch(genresSetter([...value].map(el=>el.id)))
        console.log(id)

      }}
      sx={{maxWidth:300}}
      fullWidth
      multiple
      limitTags={3}
      id="checkboxes-tags-demo"
      options={arr}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        
        <li 
        
         {...props}
          
         >
          <Checkbox
             
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Жанры"  />
        
      )}
    />
  );
}

export {icon, checkedIcon, CheckboxesTags}