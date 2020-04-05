import React, { Component } from 'react';
import Section from './Section'

class Sections extends Component {
  
    componentDidMount() {
      this.props.loadSections()
    }
  
    render() {
      return(
          <div>
            {this.props.sections.map(section => 
              <Section key={section.id} section={section}/>
            )}
            </div>
        );
    }
  };
  
  export default Sections;