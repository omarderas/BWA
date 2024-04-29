import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import "./all-tours.scss"


import DiscoverHero from "./components/DiscoverHero"
import ToursGrid from "./components/ToursGrid"

const discover = () => (
  <Layout>
    <Seo title="Cave Tubing & kayaking, Crystal Cave, Five Blues Lake and Mayan Ruins In Belize | Wildland Belize Adventures" />
    <DiscoverHero />
    <ToursGrid />
  </Layout>
)

export default discover
