interface Window {
    grecaptcha: any;
    googleTranslateElementInit?: () => void;    
    google?: {
        translate: {
          TranslateElement: new (options: object, elementId: string) => void;
        };
    }; 
}
