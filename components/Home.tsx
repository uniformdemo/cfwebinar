import { useUniformTracker } from '@uniformdev/optimize-tracker-react';
import Head from 'next/head';
import { IPageFields, ITalkFields } from '../lib/contentful';
import { createElement } from 'react';
import { Entry } from 'contentful';
import { TalksContext } from '../components/TalksContext';

export interface PageProps {
  slug: string;
  page: IPageFields;
  talks: Entry<ITalkFields>[];
}

export function Home({ page, talks }: PageProps) {
  const { componentMapping } = useUniformTracker();

  return (
    <TalksContext.Provider value={talks}>
      <Head>
        <title>{page?.title} | UniformConf</title>
      </Head>
      {page?.components &&
        page.components.map((component, index) =>
          createElement(componentMapping[component.sys.contentType.sys.id] ?? (() => null), {
            key: index,
            ...component,
          })
        )}
    </TalksContext.Provider>
  );
}
