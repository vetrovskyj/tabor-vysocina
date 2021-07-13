import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        disclaimer={data.disclaimer}
        uvodni_text={{
          firstRow: entry.getIn(['data', 'uvodni_text', 'firstRow']),
          coloredText: entry.getIn(['data', 'uvodni_text', 'coloredText']),
          secondRow: entry.getIn(['data', 'uvodni_text', 'secondRow']),
          thirdRow: entry.getIn(['data', 'uvodni_text', 'thirdRow']),
        }}
        uvodni_foto={{
          obrazek1: entry.getIn(['data', 'uvodni_foto', 'obrazek1']),
          obrazek2: entry.getIn(['data', 'uvodni_foto', 'obrazek2']),
          obrazek3: entry.getIn(['data', 'uvodni_foto', 'obrazek3']),
        }}
        section={{
          section_heading: entry.getIn(['data', 'section', 'section_heading']),
          section_text: entry.getIn(['data', 'section', 'section_text']),
          image1: {
            image: getAsset(entry.getIn(['data', 'section', 'image1', 'image'])),
            alt: entry.getIn(['data', 'section', 'image1', 'alt']),
          },
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
