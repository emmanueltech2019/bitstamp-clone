interface Window {
    grecaptcha: any;
    googleTranslateElementInit?: () => void;    
    Image: typeof Image;
    Image: new () => HTMLImageElement;
    google?: {
        translate: {
          TranslateElement: new (options: object, elementId: string) => void;
        };
    }; 
}
