import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        uvodni_foto={{
          obrazek1: entry.getIn(['data', 'uvodni_foto', 'obrazek1']),
          obrazek2: entry.getIn(['data', 'uvodni_foto', 'obrazek2']),
          obrazek3: entry.getIn(['data', 'uvodni_foto', 'obrazek3']),
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
