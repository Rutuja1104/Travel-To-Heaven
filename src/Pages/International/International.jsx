import React from 'react';
import singaporeTour from '../International/singapore_tour1_20220507151555 (1).jpg'; // Update the path as per your project structure
import Dubai from './Dubai/Dubai';
import Malaysia from './Malaysia/Malaysia';

const International = () => {
  return (
    <div>
   
      <img className='m-6' 
        src={singaporeTour} 
        alt="Singapore Tour" 
        style={{ width: '97%', height: '80vh', }} 
      />
      <Dubai />
      <Malaysia />
      
    </div>
  );
};

export default International;

    {/* <div className="wp-travel-engine-archive-outer-wrap ">
      <div className="page-header">
        <div className="page-feat-image">
          <img
            fetchpriority="high"
            width="1290"
            height="540"
            src="https://b4holiday.com/wp-content/uploads/2017/11/mountain-landscape-2031539_19201-1290x540.jpg"
            className="attachment-travel-agency-full size-travel-agency-full"
            alt=""
            decoding="async"
          />
        </div>
        <div className="page-content">
          <p>
            Before Holiday is one of India’s leading online travel portals,
            offering holiday packages in India and abroad. Before Holiday offers
            value-for-money packages, luxury packages, group departures as well as
            customized packages.
          </p>
          <p>
            Before Holiday has a wide range of holiday packages including niche
            and exotic packages for its customers while providing localized
            services &amp; premium quality customer support. You don’t have to
            wait for 1 hr on an IVR to get your simple request resolved.
          </p>
          <p>
            Check out our best-selling destinations! Grab amazing deals on flight +
            hotel holidays!
          </p>
        </div>
      </div>
      <div className="destination-holder wpte-trip-list-wrapper">
        <div className="item wpte-trip-category">
          <address itemProp="address" style={{ display: "none" }}>
            India
          </address>
          <div className="wpte-trip-category-img-wrap">
            <figure className="thumbnail">
              <a href="https://b4holiday.com/destinations/india/">
                <img
                  width="300"
                  height="405"
                  src="https://b4holiday.com/wp-content/uploads/2017/11/taj-mahal-43781-300x405.jpg"
                  className="attachment-activities-thumb-size size-activities-thumb-size"
                  alt="Taj Mahal"
                  decoding="async"
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </a>
            </figure>
            <div className="wpte-trip-category-overlay">
              <div className="wpte-trip-subcat-wrap">
                <a href="https://b4holiday.com/destinations/india/andaman/">
                  Andaman Tour
                </a>
                <a href="https://b4holiday.com/destinations/india/darjeeling/">
                  Darjeeling
                </a>
                <a href="https://b4holiday.com/destinations/india/goa/">Goa</a>
                <a href="https://b4holiday.com/destinations/india/himachal/">
                  Himachal
                </a>
                <a href="https://b4holiday.com/destinations/india/kashmir-tour-packages/">
                  Kashmir
                </a>
              </div>
              <div className="wpte-trip-category-btn">
                <a
                  href="https://b4holiday.com/destinations/india/"
                  className="wpte-trip-cat-btn"
                >
                  View All
                </a>
              </div>
            </div>
          </div>
          <div className="wpte-trip-category-text-wrap">
            <h2 className="wpte-trip-category-title" itemProp="name">
              <a href="https://b4holiday.com/destinations/india/">India</a>
              <span className="trip-count">(40 Trips)</span>
            </h2>
          </div>
        </div>
      </div>
    </div> */}