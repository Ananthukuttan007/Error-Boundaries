import React, { Component } from 'react'

class Hero extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    render() {
        if (this.props.hero === "joker") {
            throw new Error('Not a hero')
        }
        return (
            <h1>{this.props.hero}</h1>
        )
    }
}

export default Hero