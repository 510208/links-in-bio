export interface Config {
  links: {
    big: {
      label: string;
      href: string;
      title: string;
      icon: any;
      bgImage: string;
    }[];
    list: {
      label: string;
      icon: any;
      href: string;
    }[];
  };
}
