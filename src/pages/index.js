import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./home/home.scss"
import "../less/main.scss"

import Hero from "./home/components/hero"
import Tours from "./home/components/tours"
import WhyUs from "./home/components/why-us"
import Offers from "./home/components/offers"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Tours />
    <WhyUs />
    <Offers />
  </Layout>
)

export default IndexPage
                                    