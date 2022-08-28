import { Box, Container, Typography, Stack, Button } from '@mui/material'

function Hero (): JSX.Element {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6
      }}
    >
      <Container maxWidth='sm'>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='text.primary'
          gutterBottom
        >
          i'm dan popovic.
        </Typography>
        <Typography
          variant='h5'
          align='center'
          color='text.secondary'
          paragraph
        >
          danpops.ca
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction='row'
          spacing={2}
          justifyContent='center'
        >
          <Button variant='contained'>who am i?</Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
