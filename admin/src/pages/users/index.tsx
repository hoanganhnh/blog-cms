import * as React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const UsersPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Create Awesome 🙌' />
          <CardContent>
            <Typography sx={{ mb: 2 }}>Users</Typography>
            <Typography>User list</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UsersPage
