import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Row, Col, Carousel } from "react-bootstrap"
import { graphql } from "gatsby"
import "./details.scss"
import Layout from "../components/layout"
import Seo from "../components/seo" 



export const query = graphql`
query ToursDeferredQuery($slug: String!) {
    graphCmsItemTours(slug: { eq: $slug }) {
        id
        slug
        tourTitle
        tourPrice
        tourLocation
        tourDescription {
            html
            raw
            text
          }
          displayPrice {
            html
            raw
            text
          }
          tourGallery {
            id
            imageAltText
            imageTitleText
            galleryImage {
              url
            }
          }
          tourDuration {
            html
            text
            raw
          }
          tourUtilities {
            html
            raw
            text
          }
          tourIncludes {
            html
            raw
            text
          }
    }
}
  
`
const ToursDeferred = ({data, index}) => {

    return (
        <Layout>
            <Seo title={data.graphCmsItemTours.tourTitle + " at " + data.graphCmsItemTours.tourLocation + ' with Wildland Belize Adventures'} />


            <div className="tours-deferred">
                <Row>
                    


                    <Col sm={{ span:7, order: 'first' }} xs={{ order: 'first' }} id="right">
                        <div className="image-gallery">
                            <Carousel fade key={index}>
                                {(data.graphCmsItemTours.tourGallery || []).map((galleryMap, id) => (
                                <Carousel.Item>
                                    <img src={galleryMap.galleryImage.url} 
                                        key={index}
                                        alt={galleryMap.imageAltText} />
                                </Carousel.Item>
                                ))}

                            </Carousel>                            
                        </div>

                    </Col>
                    <Col sm={{ span:5, order: 'last' }} xs={{ order: 'last' }} id="left">
                        <div className="text-field" key={index}>
                            <h2>{data.graphCmsItemTours.tourTitle}</h2>
       
                            <h4>{data.graphCmsItemTours.tourLocation}</h4>
                            <div dangerouslySetInnerHTML={{ __html: data.graphCmsItemTours.tourDescription.html }} />
                        </div>
                        <div className="contact-cta tours">
                         <h3>Tour Prices</h3>
                         <div dangerouslySetInnerHTML={{ __html: data.graphCmsItemTours.displayPrice.html }} />
                        </div>                   
                        <div className="contact-cta tours">
                         <h3>Tour Duration</h3>
                         <div dangerouslySetInnerHTML={{ __html: data.graphCmsItemTours.tourDuration.html }} />
                        </div>
                        <div className="contact-cta tours">
                         <h3>Tour Includes</h3>
                         <div dangerouslySetInnerHTML={{ __html: data.graphCmsItemTours.tourIncludes.html }} />
                        </div>
                        <div className="contact-cta tours">
                         <h3>What to Bring</h3>
                         <div dangerouslySetInnerHTML={{ __html: data.graphCmsItemTours.tourUtilities.html }} />
                        </div>
                        <div className="contact-cta tours">
                         <h3>Book Tour</h3>
                         <div class="elfsight-app-104bb84c-c718-44f9-b31e-a543fa4e2428" data-elfsight-app-lazy></div>
               
                    </div>
                   {/* <div className="contact-cta tours">
                         <h3>Cancellation Policy</h3>
                         <div><p></p></div>
                              </div>*/}
                    </Col>
                    
                </Row>
            </div>
        </Layout>
        );
    };
    
export default ToursDeferred;
