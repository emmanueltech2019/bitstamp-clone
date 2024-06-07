// components/ReCaptcha.tsx
import React, { useEffect } from 'react';

interface ReCaptchaProps {
  siteKey: string;
}

const ReCaptcha: React.FC<ReCaptchaProps> = ({ siteKey }) => {
  useEffect(() => {
    if (window.grecaptcha) {
      window.grecaptcha.render('recaptcha', {
        sitekey: "6LdbWvEpAAAAAOC_iD8sPQYEZj701EZ0oLFH1LAV",
      });
    }
  }, [siteKey]);

  return <div id="recaptcha" className="g-recaptcha"></div>;
};

export default ReCaptcha;
