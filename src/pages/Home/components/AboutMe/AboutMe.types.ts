export interface IAbout {
  id: string;
  paragraph?: string;
}

export interface IAboutMeProps {
  className?: string;
  about: IAbout[];
  title?: string;
}
