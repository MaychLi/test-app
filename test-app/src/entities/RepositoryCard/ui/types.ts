export type RepositoryCardProps = {
  addFeatureButton?: boolean;
  id: number;
  logoUrl: string;
  title: string;
  starsAmount: number;
  forksAmount: number;
  linkUrl: string;
};

export type AddFeatureProps = {
  id: number;
  logoUrl: string;
  title: string;
  starsAmount: number;
  forksAmount: number;
  linkUrl: string;
};

export type LogoProps = {
  src: string;
};
