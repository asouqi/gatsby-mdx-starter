import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/Layout"

const components = {
    /** Add your custom mdx component */
    p: (props) => <p style={{color: 'tomato'}} {...props}/>,
}

const MDXPageTemplate: React.FC<{ children: React.ReactNode, title: string }> = ({ children }) => {
    // TODO:: use title for SEO
    return (
        <Layout>
            <MDXProvider components={components}>{children}</MDXProvider>
        </Layout>
    )
}

export default MDXPageTemplate
