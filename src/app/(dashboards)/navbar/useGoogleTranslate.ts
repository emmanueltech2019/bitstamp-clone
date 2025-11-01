// import { useEffect } from 'react';

// const useGoogleTranslate = () => {
//   useEffect(() => {
//     const scriptId = 'google-translate-script';

//     if (document.getElementById(scriptId)) {
//       // Script already loaded
//       return;
//     }

//     const script = document.createElement('script');
//     script.id = scriptId;
//     script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     script.async = true;
//     document.body.appendChild(script);

//     window.googleTranslateElementInit = () => {
//       new (window as any).google.translate.TranslateElement(
//         { pageLanguage: 'en' }, // Adjust 'en' if needed
//         'google_translate_element'
//       );
//     };

//     return () => {
//       // Clean up script
//       if (script.parentNode) {
//         script.parentNode.removeChild(script);
//       }
//     };
//   }, []);
// };

// export default useGoogleTranslate;
