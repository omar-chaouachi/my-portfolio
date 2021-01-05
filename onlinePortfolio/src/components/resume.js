import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img className="tof"
                src="/1.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Omar Chaouachi</h2>
            <h4 style={{color: 'grey'}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I'm a Full-stack javascript developer, with good time management skills acquired from 6 months of experience in a BOOTCAMP, a tremendous curiosity for learning and diving into new technologies such as ReactJS framework, node js, and javascript. An over-attention to details and a problem-solving mindset acquired from various projects and 1400+ hours of programming errors. With a highly diverse educational background and cultural experiences, I excel at collaborating with teams of different knowledge sets. Adaptable and self-motivated learner looking for a job or an internship.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Ariana soghra, Raoued, 2083</p>
            <h5>Phone</h5>
            <p>(+216) 26 711 177</p>
            <h5>Email</h5>
            <p>omarchaouachi4@gmail.com</p>
            <h5>Web</h5>
            <p>omar-chaouachi.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="RBK"
              schoolDescription="Coding bootcamp"
               />

               <Education
                 startYear={2013}
                 endYear={2019}
                 schoolName="ESSECT"
                 schoolDescription="Higher School of Economics and Business of Tunis"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
            //   endYear={09-2018}
              jobName="First Traineeship"
              jobDescription="Traineeship in the department of the tunisians residents abroad • BIAT • Tunis"
              />

              <Experience
                startYear={2019}
                // endYear={05-2019}
                jobName="Second Traineeship"
                jobDescription="Traineeship in the credit department • BIAT • Tunis"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                    <Skills
                      skill="Angular"
                      progress={50}
                      />
                        <Skills
                      skill="React"
                      progress={30}
                      />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;