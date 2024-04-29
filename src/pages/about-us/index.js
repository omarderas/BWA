import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import "../all-tours/all-tours.scss"
import "./about.scss"

import DiscoverHero from "../about-us/components/DiscoverHero"
import About from "../about-us/components/about"


const discover = () => (
  <Layout>
    <Seo title="About Us | Wildland Belize Adventures" />
    <DiscoverHero />
    <About />

  </Layout>
)

export default discover
