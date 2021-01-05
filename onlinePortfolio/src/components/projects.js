import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
      super(props);
      this.state = { activeTab: 0 };
    }
  
    toggleCategories() {
  
      if(this.state.activeTab === 0){
        return(
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hdwallpaperim.com/wp-content/uploads/2017/08/25/461264-reactJS-Facebook-JavaScript-minimalism-artwork-simple_background.jpg) center / cover'}} >Greenfield</CardTitle>
              <CardText>
                Greenfield is a web application that offer at the same time small jobs and services.
              </CardText>
              <CardActions border>
                <Button href="https://github.com/omar-chaouachi/GreenField" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
  
  
        )
      } else if(this.state.activeTab === 1) {
        return (
            <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://we-consent.org/wp-content/uploads/2020/07/Angular-10-Release-and-its-Features.-725x375.jpg) center / cover'}} >Allinclusive</CardTitle>
              <CardText>
                Allinclusive is a web application that organizes different kind of events.
              </CardText>
              <CardActions border>
                <Button href="https://github.com/NOABO/AllinclusiveVersion2" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            </div>
        )
      
      
    } else if(this.state.activeTab === 2) {
        return (
            <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.appcoda.com/wp-content/uploads/2015/04/react-native-1024x631.png) center / cover'}} >9ossNet</CardTitle>
              <CardText>
                9ossNet is a mobile application that allow to the user to buy a virtual online ticket for soccer matchs.
              </CardText>
              <CardActions border>
                <Button href="https://github.com/1PercentHope/9ossNet" rel="noopener noreferrer" target="_blank" colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
            </div>
        )
      } 
    }
  
  
  
    render() {
      return(
        <div>
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>ReactJS</Tab>
            <Tab>Angular</Tab>
            <Tab>React Native</Tab>
          </Tabs>
  
  
            <Grid>
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
  
  
        </div>
      )
    }
  }
  

export default Projects;