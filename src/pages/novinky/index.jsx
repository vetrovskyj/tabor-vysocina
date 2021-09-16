import React from 'react'

import Layout from '../../components/Layout'
import Articles from '../../components/Articles'

export default class News extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <Articles />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}