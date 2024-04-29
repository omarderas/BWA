import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import "../all-tours/all-tours.scss"
import "./contact.scss"

import DiscoverHero from "./components/DiscoverHero"
import ContactUs from "./components/contactUs"

const discover = () => (
  <Layout>
    <Seo title="Contact Wildland Belize Adventures | Wildland Belize Adventures" />
    <DiscoverHero />
    <ContactUs />
  </Layout>
)

export default discover
