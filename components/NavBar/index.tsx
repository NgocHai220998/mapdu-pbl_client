import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { NextPage } from "next"
import Account from "./components/account"
import PomodoroTimer from "./components/pomodoro"
import Times from "./components/times"

const withStyles = makeStyles({
  root: {
    padding: '8px 16px',
  },
  account: {
    display: 'flex',
    justifyContent: 'right'
  }
})

const NavBar: NextPage = () => {
  const classes = withStyles()
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={3}>
        <PomodoroTimer />
      </Grid>
      <Grid item xs={6}>
        <Times />
      </Grid>
      <Grid className={classes.account} item xs={3}>
        <Account />
      </Grid>
    </Grid>
  )
}

export default NavBar
