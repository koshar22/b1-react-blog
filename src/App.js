import { Grid } from '@mui/material';

function App() {
  return (
    <div>
      <Grid container spacing={1} columns={10}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Grid container>
            <Grid xs={5}>sub grid 1</Grid>
            <Grid xs={5}>sub grid 2</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} columns={8} sm={6} md={4} lg={3}>Item 10</Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>Item 1</Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>Item 1</Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>Item 1</Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>Item 1</Grid>
      </Grid>
    </div>
  );
}

export default App;
