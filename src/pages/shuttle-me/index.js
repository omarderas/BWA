import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import "../all-tours/all-tours.scss"


import DiscoverHero from "./components/DiscoverHero"
import Shuttle from "./components/shuttle"

const discover = () => (
  <Layout>
    <Seo title="Shuttle Me Services in Belize | Wildland Belize Adventures" />
    <DiscoverHero />
    <Shuttle />
  </Layout>
)

export default discover
