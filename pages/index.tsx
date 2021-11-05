import type { NextPage } from 'next'
import Button from '@mui/material/Button';

const Home: NextPage = () => {
  console.log(process.env.END_POINT)
  return (
    <div>
      <h1>{ process.env.END_POINT }</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  )
}

export default Home
