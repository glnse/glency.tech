import React from 'react';
import Dimensions from 'react-dimensions';
import { Drawer, Button, List, ListItem, Link, ListItemText } from '@material-ui/core';
import { TiThMenu, TiHome } from 'react-icons/ti'
import { AiOutlineClose } from 'react-icons/ai'

class Nav extends React.Component {
  state = {
    drawerOpen: false
  }

  sideList = () => (
    <div style={{width: 200, alignItems: 'center'}} role="presentation">
      <List>
        <ListItem button>
          <ListItemText primary="Home" style={{textAlign: "center"}}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" style={{textAlign: "center"}}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Works" style={{textAlign: "center"}}/>
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" style={{textAlign: "center"}}/>
        </ListItem>
      </List>
    </div>
  );

  render() {
    const { drawerOpen } = this.state;
    return(
      <div style={{position: "fixed", right: this.props.containerWidth/60  }}>
        <Button onClick={() => this.setState({ drawerOpen: true })} style={{marginTop: 10}}><TiThMenu style={{fontSize: 30}}/></Button>
        <Drawer open={drawerOpen} onClose={() => this.setState({ drawerOpen: false })} anchor="right">
          <Link href="#" onClick={() => this.setState({ drawerOpen: false })} style={{ paddingTop: 10, textAlign: 'center'}}><AiOutlineClose/></Link>
          {this.sideList()}
        </Drawer>
      </div>
    );
  }
}

export default Dimensions()(Nav);