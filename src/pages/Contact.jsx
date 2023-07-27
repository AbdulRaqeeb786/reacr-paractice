import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
<>
  <section className="contact co1-position-relative co1-z-index-1">
    <div className="co1-container co1-max-width-lg">
      <div className="co1-margin-bottom-lg">
        <h1 className="co1-text-center">Contact Us</h1>
      </div>
      <div className="co1-grid co1-gap-y-lg co1-gap-lg@md">
        <div className="co1-col-6@md">
          <dl className="details-list details-list--rows">
            <div className="details-list__item co1-padding-y-md co1-flex@md co1-justify-between@md">
              <dt className="co1-font-bold co1-margin-bottom-2xs co1-margin-bottom-0@md">
                Address
              </dt>
              <dd className="co1-line-height-md co1-text-right@md">
                86 Whitby Road <br />
                IP20 6JA <br />
                London, UK
              </dd>
            </div>
            <div className="details-list__item co1-padding-y-md co1-flex@md co1-justify-between@md">
              <dt className="co1-font-bold co1-margin-bottom-2xs co1-margin-bottom-0@md">
                Email
              </dt>
              <dd>
                <a href="mailto:webmaster@example.com">hello@myemail.com</a>
              </dd>
            </div>
            <div className="details-list__item co1-padding-y-md co1-flex@md co1-justify-between@md">
              <dt className="co1-font-bold co1-margin-bottom-2xs co1-margin-bottom-0@md">
                Phone
              </dt>
              <dd className="co1-line-height-md co1-text-right@md">
                <p>
                  <a href="tel:+44 7656 6455">+44 7656 6455</a>
                </p>
                <p className="co1-color-contrast-medium">
                  Mon - Fri, 9AM - 5PM
                </p>
              </dd>
            </div>
          </dl>
        </div>
        <div
          role="application"
          className="google-maps co1-radius-md co1-col-6@md co1-height-auto@md co1-padding-bottom-0@md js-google-maps"
          data-coordinates="51.5658015,-0.40339"
        >
          {/* Google Map */}
        </div>
      </div>
    </div>
  </section>
  {/* 
  ⚠️ Make sure to include the Google Maps script right before your page body closing tag
   
  Replace 'YOUR_API_KEY' with your google maps API key
*/}
</>

  )
}

export default Contact
