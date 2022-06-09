import React from 'react'
import PropTypes from 'prop-types'
import { GalleriesTemplate } from '../../templates/gallery-post'

const GalleryPreview = ({ entry, widgetFor }) => {
    return ( <
        GalleriesTemplate content = { widgetFor('body') }
        galleries = { entry.getIn(['data', 'date']) }
        date = { entry.getIn(['data', 'date']) }
        />
    )
}

GalleryPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default GalleryPreview