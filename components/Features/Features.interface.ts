export interface FeaturesProps {
  features: Feature[];
}

export type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export interface FeatureProps {
  feature: Feature;
}
