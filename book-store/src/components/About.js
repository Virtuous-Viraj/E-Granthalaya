import { Typography ,Box} from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
        <Box display={'flex'} flexDirection='column' alignItems={'center'}>
          <Typography  variant='h2'>CRUD WEBAPP</Typography>
          <Typography variant='h3'>Uses MERN stack</Typography>
        </Box>
        </div>
  )
}

export default About