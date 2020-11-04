import { contentfulOptimizeListReader } from '@uniformdev/optimize-tracker-contentful';
import { Personalize } from '@uniformdev/optimize-tracker-react';
import { Entry } from 'contentful';
import { I3ZPkEj1KqeSn4QdsdnNko3Fields } from '../lib/contentful';

export const PersonalizedHero: React.FC<Entry<I3ZPkEj1KqeSn4QdsdnNko3Fields>> = ({ fields }) => {
  const variations = contentfulOptimizeListReader(fields.unfrmOptP13nList);
  return (
    <Personalize name="Personalized Hero" variations={variations} trackingEventName="heroPersonalized" />
  );
};
