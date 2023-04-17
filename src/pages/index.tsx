import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div>
      <h1>
        Welcome to <b>Gatsby!</b> with MDX pages
      </h1>
      <p>
        <b>This a starter project will create <a href={'/test/'}>mdx page</a> at</b> <code>src/mdx/test.mdx</code>
      </p>
    </div>
  </Layout>
)

export default IndexPage
