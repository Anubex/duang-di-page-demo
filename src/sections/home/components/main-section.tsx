import { Box, Grid, Typography } from "@mui/material";
import Package from "./package";


export default function MainSection() {
  return (
    <>
      <div className="grid justify-items-center py-[30px]">
        <Typography
          variant="h3"
          className="text-[36px] font-bold text-[#00713b] "
          letterSpacing={3}
          sx={{
            textShadow:
              '-.5px -.5px 0 #00713b, .5px -.5px 0 #00713b, -.5px .5px 0 #00713b, .5px .5px 0 #00713b;',
          }}
        >
        </Typography>
        <div  className='text-[#7647C3] text-7xl font-bold bg-white'>
          
         แพ็กเกจดูดวง
        </div>
  

  
      </div> 

      <Grid container spacing={2}>
        <Grid item xs={12} className="h-full bg-white ">
          <Box
          >
           <Package/>
\       </Box>
        </Grid>
        
    </Grid>
         

</>
           
   

  )
}

  
