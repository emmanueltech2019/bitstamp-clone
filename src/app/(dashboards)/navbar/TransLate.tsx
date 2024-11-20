import { useEffect } from "react";

// const GoogleTranslate = () => {
//   useEffect(() => {
//     let translate = () =>{
//       const script = document.createElement('script');
//       script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'; // Replace with your generated code
//       script.async = true;
//       document.body.appendChild(script);
    
//       window.googleTranslateElementInit = () => {
//         new (window as any).google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); // Adjust 'en' if needed
//       };
//     }
//     translate()
//   },[])
//   return <div id="google_translate_element"></div>;
// };
 

const GoogleTranslate = () => {
  useEffect(() => {
    let initialized = false; // Flag to track initialization
    let translate = () =>{
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'; // Replace with your generated code
      script.async = true;
      document.body.appendChild(script);
    
      window.googleTranslateElementInit = () => {
        if (!initialized) {
          new (window as any).google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element'); // Adjust 'en' if needed
          initialized = true; // Set the flag after initialization
        }
      };
    }
    translate()
  },[])
  return <div id="google_translate_element"></div>;
};


export default GoogleTranslate;
