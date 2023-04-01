import React from 'react'
import PropTypes from 'prop-types'
import { ArticlesTemplate } from '../../pages/aktuality/2022-06-26-mame-novy-web/article-post'

const ArticlePreview = ({ entry, widgetFor }) => {
    const tags = entry.getIn(['data', 'tags'])
    return ( <
        ArticlesTemplate content = { widgetFor('body') }
        description = { entry.getIn(['data', 'description']) }
        tags = { tags && tags.toJS() }
        title = { entry.getIn(['data', 'title']) }
        />
    )
}

ArticlePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default ArticlePreview