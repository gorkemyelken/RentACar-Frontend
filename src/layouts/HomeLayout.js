import React from 'react'
import { Grid, Image, Search, Container} from "semantic-ui-react";

export default function HomeLayout() {
  return (
    <div>
        <Container>
        <Grid className='grid'>
      <Grid.Row stretched columns="2">
        <Grid.Column>
            <br/>
            <br/>
            <br/>
          <Image src="http://www.elitcarrentalantalya.com/webhox/resim/043883554573b908cd34985d1ed3d0f1.jpg" rounded/>
        </Grid.Column>
        <Grid.Column>
        <br/>
            <br/>
        <br/>
        <br/>
            <Search size="massive" placeholder='Search'/>
        </Grid.Column>
      </Grid.Row>
    </Grid>  

        </Container>
    
  </div>
  )
}
