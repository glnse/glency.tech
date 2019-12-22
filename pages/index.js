import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import { Container, Box, Grid, Link, Button} from '@material-ui/core';
import { FaStar } from 'react-icons/fa'

// Styles
import Styles from './_styles';

class Home extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render(){
    const { loading } = this.state;
    if (loading){
      return (
        <Box>
          <div>
          <Head>
            <title>hmmm...</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet"></link>
          </Head>
            <Container className="fullwidth" style={{justifyContent: "center"}}>
              <div style={{paddingTop: 300}}><center><span style={{fontFamily: "Playfair Display", fontSize: 30}}>Loading...</span></center></div>
            </Container>
          </div>
          <Styles/>
        </Box>
      )
    }
    else {
      return (
        <Box>
          <div>
        <Head>
          <title>Glency Tirao</title>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet"></link>
        </Head>
        <section className="gr-mettalictoad">
          <Container style={{justifyContent: "center"}}>
          <Grid container direction="row" spacing={3}>
            <Grid item sm={6}>
              <div style={{paddingTop: 10}}>
                <span style={{fontFamily: "Playfair Display", fontSize: 40, textDecorationLine: "underline"}}>Glency A. Tirao</span>
              </div>
              <div style={{paddingTop: 2}}>
                <span style={{fontFamily: "Playfair Display", fontSize: 20}}>developer / creatives</span>
              </div>
              <div style={{paddingTop: 10}}>
                <Link style={{fontSize: 18, fontFamily: "Playfair Display"}} href="/glency-tirao-resume.pdf" target="_blank">View Résumé</Link>
              </div>
              <div style={{paddingTop: 10}}>
                <span style={{fontFamily: "Playfair Display", fontSize: 18}}>Contact: </span>
                <Link style={{fontSize: 18, fontFamily: "Playfair Display" }} href="mailto:me@glency.tech" target="_blank">me@glency.tech</Link>
              </div>
            </Grid>
            <Grid item sm={6}>
              <div style={{paddingTop: 10}}>
                <span style={{fontFamily: "Playfair Display", fontSize: 40}}>About Me</span>
              </div>
              <div style={{paddingTop: 10}}>
                <p style={{fontFamily: "Playfair Display", fontSize: 15}}>A programmer by profession and a design and animation hobbyist.</p>
              </div>
            </Grid>
            <Grid item sm={12}>
              <div style={{paddingTop: 10}}>
                <span style={{fontFamily: "Playfair Display", fontSize: 30, textDecorationLine: "underline"}}>Developer Skills</span>
              </div>
              <Grid container direction="row" spacing={1}>
                <Grid item sm={6}>
                  <div style={{fontFamily: "Playfair Display", fontSize: 20}}>Languages</div>
                  <div style={{paddingTop: 5}}>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Javascript</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>PHP</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Java</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>C++</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Python</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Ruby</Button>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div style={{fontFamily: "Playfair Display", fontSize: 20}}>Platforms / Frameworks</div>
                  <div style={{paddingTop: 5}}>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Serverless Framework</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>React Native</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>ReactJS</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>NodeJS</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>ExpressJS</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Ruby on Rails</Button>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div style={{fontFamily: "Playfair Display", fontSize: 20}}>Database</div>
                  <div style={{paddingTop: 5}}>
                    <Button variant="outlined" size="small" style={{margin: 5}}>MySQL</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>MongoDB</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Firebase Realtime Database</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>PostgreDB</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>DynamoDB</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>ClearDB</Button>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div style={{fontFamily: "Playfair Display", fontSize: 20}}>Cloud / Tools</div>
                  <div style={{paddingTop: 5}}>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Git</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>CI/CD</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>AWS</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Heroku</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Firebase</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Lambda</Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12}>
              <div style={{paddingTop: 10}}>
                <span style={{fontFamily: "Playfair Display", fontSize: 30, textDecorationLine: "underline"}}>Creatives Skills</span>
              </div>
              <Grid container direction="row" spacing={1}>
                <Grid item sm={5}>
                  <div style={{fontFamily: "Playfair Display", fontSize: 20}}>2D & 3D Graphics</div>
                  <div style={{paddingTop: 5}}>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Adobe Photoshop</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Adobe Illustrator</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Blender</Button>
                  </div>
                </Grid>
                <Grid item sm={3}>
                  <div style={{fontFamily: "Playfair Display", fontSize: 20}}>UI/UX Design</div>
                  <div style={{paddingTop: 5}}>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Adobe XD</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Figma</Button>
                  </div>
                </Grid>
                <Grid item sm={4}>
                  <div style={{fontFamily: "Playfair Display", fontSize: 20}}>Animation</div>
                  <div style={{paddingTop: 5}}>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Adobe Animate</Button>
                    <Button variant="outlined" size="small" style={{margin: 5}}>Blender</Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Container>
        </section>
        <Styles/>
      </div>
        </Box>
      );
    }
  }
}

export default Home;