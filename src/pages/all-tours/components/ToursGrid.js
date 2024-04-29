import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"
import { StaticQuery, graphql, Link } from "gatsby"

const buttonText = "Learn More"

function ToursGrid({data}) {
	return (
    <StaticQuery
    query={graphql`
    query AllTours{
      allGraphCmsItemTours {
            edges {
              node {
                id
                tourTitle
                tourPrice
                slug
                tourDescription {
                  html
                  raw
                  text
                }
                tourImage {
                  id
                  imageAltText
                  
                  galleryImage {
                    url
                  }
                }
              }
            }
          }
       }                     
    `}
        
    render={data => (


    <div className="tours">
        <div className="gallery">
			<div className="row">
            

            {data.allGraphCmsItemTours.edges.map(({ node: tours }) => (

           
            <div className="col-sm-4"  key={tours.id}>

                <Link to={`/${tours.slug}`} > 
                <div className="image">
                    <img src={tours.tourImage.galleryImage.url}
                        quality={60}
                        formats={["auto", "webp", "avif"]}
                        alt={tours.tourImage.imageAltText}/>

                      
                        <div className="absolute">
                           <div className="absolute-cont">
                              <h3>{tours.tourTitle}</h3>
                                <span id="desc">
                                  <div dangerouslySetInnerHTML={{ __html: tours.tourDescription.html }} />
                                </span>
                                <a href="">
                                   View Tour
                                </a>
                            </div>
                        </div>
                </div>
                <p className="price">{tours.tourPrice}</p>
                </Link>

                
            </div>                    

            


            ))}


            
            </div>
        </div>
    </div>
    )}
        
    />
    );
}

export default ToursGrid;

