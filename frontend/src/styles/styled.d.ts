import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      orange: string;
      lightViolet: string;
      darkViolet: string;
      mediumBlue: string;
      darkBlue: string;
      cream: string;
      vanilla: string;
      failureNotification: string;
    };
    fonts: string[];
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
