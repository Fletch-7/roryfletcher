import React from 'react'

class Skill extends React.Component{
  render() {
    return(
<section className="Section" id="skills">
  <div className="container-skills">
<div className="skills">
  <h1 className="title">Skills</h1>
  <br/>
<h2>Languages + Frameworks</h2>
<p>JavaScript | React | Node.js | Express.js | AJAX | Python | Django HTML | CSS, SCSS | Bulma</p>
<hr/>
<h2>Management + Deployment</h2>
<p>Git | GitHub | Heroku | Command Line</p>
<hr/>
<h2>Databases</h2>
<p>MongoDB | SQL | PostgreSQL</p>
<hr/>
<h2>Methodologies</h2>
<p>Authentication | Responsive Design | MVC Pattern | Test-Driven Development | User Stories | Wireframing | Accessibility | Object Orienting Programming</p>
<hr/>
<h2>Personal Skills</h2>
<p>Effective Communicator | Time Management | Decision-Making | Problem Solver | Self-Development | Spanish (fluency)</p>
<hr/>
</div>
</div>
</section>
    )
  }

}

export default Skill