import Head from 'next/head'
import Image from 'next/image'
import { Grid, Button } from '@mui/material'

import Header from '../components/Header'

function HomePage() {
  return (
    <div>
      <Head>
        <title>Travel by Dots</title>
        <meta name="description" content="Sample app of interactive map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container>
        <Header />

        <Grid item xs={12}>
          CONTENT

          <Button variant="outlined">Hello World</Button>
        </Grid>

        <Grid item xs={12}>
          FOOTER
        </Grid>
      </Grid>
    </div>
  )
}

export default HomePage