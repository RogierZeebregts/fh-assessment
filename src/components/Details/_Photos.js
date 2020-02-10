import React, { useState, useCallback } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'

const Photos = props => {
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)
    
    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index)
        setViewerIsOpen(true)
    }, [])
    
    const closeLightbox = () => {
        setCurrentImage(0)
        setViewerIsOpen(false)
    }
    
    let photoButton = null
    if (props.photos.length > 1) {
        photoButton = <div>
            <a className="button bg-black br-white mt-4" href="#" onClick={openLightbox}>Bekijk foto's</a>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={props.photos.map(x => ({
                                ...x,
                                srcset: x,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    }
    
    return (
        photoButton
    )
}

export default Photos
