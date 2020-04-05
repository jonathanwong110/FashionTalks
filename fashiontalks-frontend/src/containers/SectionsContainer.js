import React, { Component } from 'react'
import Sections from '../components/sections/Sections'
import { connect } from 'react-redux'
import { loadSections } from '../actions/sectionsActions'

class SectionsContainer extends Component {
    render() {
        return (
            <Sections loadSections={this.props.loadSections} posts={this.props.sections}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        sections: state.sections.sections
    }
}

const mapDispatchToProps = dispatch => {
    return {
    loadSections: () => dispatch(loadSections())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionsContainer)