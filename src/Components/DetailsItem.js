import { Typography } from "@mui/material"

export function DetailsItem ({firstChild, secondChild}){

    return(
      <>
  
        <div className='detailsItem'>
          <Typography
          variant='subtitle1'
          sx={{
            display: "flex",
            width: 200,
            flexDirection: 'column',
            alignItems: "flex-start"
          }}
          >
            {firstChild}
          </Typography>
          <Typography variant='body1'>
            {secondChild}
          </Typography>
        </div>
          
      </>
    )
  }
  