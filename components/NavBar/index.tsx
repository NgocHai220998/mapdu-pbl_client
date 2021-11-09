import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { NextPage } from "next"
import Account from "./components/account"

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
      <Grid item xs={4}></Grid>
      <Grid item xs={4}></Grid>
      <Grid className={classes.account} item xs={4}>
        <Account />
      </Grid>
    </Grid>
  )
}

export default NavBar
