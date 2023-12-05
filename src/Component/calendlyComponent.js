import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const CalendlyComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Helmet>

      {/* Replace 'YOUR_CALENDLY_LINK' with your actual Calendly link */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/sandeepbisht29/30min"
        style={{ minWidth: '320px', height: '630px' }}
      />
    </>
  );
};

export default CalendlyComponent;
