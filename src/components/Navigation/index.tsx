import { Typography, AppBar, Toolbar } from '@mui/material'

function Navigation (): JSX.Element {
  return (
    <AppBar position='relative'>
      <Toolbar>
        <Typography variant='h5' color='inherit' noWrap>
          danpops_
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
