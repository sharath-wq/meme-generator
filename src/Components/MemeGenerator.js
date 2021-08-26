import React, { Component } from 'react'
import MemeInput from './MemeInput'

export class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemesImages: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemesImages : memes })
            })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemesImages.length)
        const randomMemeImage = this.state.allMemesImages[randomNum].url
        this.setState({ randomImg : randomMemeImage })
        
    }

    render() {
        return (
            <div>
                <MemeInput {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default MemeGenerator
