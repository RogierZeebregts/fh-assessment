import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

let images
export default class Photos extends Component {
    constructor (props) {
        super(props)
        
        images = props.images
        
        this.state = {
            photoIndex: 0,
            isOpen: false,
        }
    }
    
    render () {
        const {photoIndex, isOpen} = this.state
    
        let button = null
        if (this.props.images.length > 1) {
            button = <button className="button bg-black br-white mt-4" type="button" onClick={() => this.setState({isOpen: true})}>
                Bekijk foto's
            </button>
        }
        
        return (
            <div>
                {button}
                
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({isOpen: false})}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        )
    }
}


