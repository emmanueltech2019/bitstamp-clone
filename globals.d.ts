interface Window {
    grecaptcha: any;
    googleTranslateElementInit?: () => void;    
    Image: typeof Image;
    Image: new () => HTMLImageElement;
    _smartsupp: any;
    smartsupp: any;
    google?: {
        translate: {
          TranslateElement: new (options: object, elementId: string) => void;
        };
    }; 
}
