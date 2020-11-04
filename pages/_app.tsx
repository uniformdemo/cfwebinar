import { UniformTracker } from '@uniformdev/optimize-tracker-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/style.css';

// for locally downloaded intent data and tracker from npm
import { localTracker } from '../lib/local-tracker';
import MainHero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import { PersonalizedHero } from '../components/PersonalizedHero';
import { ComponentMapping } from '../lib/ComponentMapping';
import TalkList from '../components/TalkList';
import { RegisterForm } from '../components/RegisterForm';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Tracker, TrackerScoring } from '@uniformdev/optimize-tracker-common';
import { WhyAttend } from '../components/WhyAttend';

const componentMapping: ComponentMapping = {
  hero: MainHero,
  cta: CallToAction,
  // that's 'personalized hero' to you, sir.
  '3zPkEj1KqeSn4QdsdnNKO3': PersonalizedHero,
  talksList: TalkList,
  registrationForm: RegisterForm,
  whyAttend: WhyAttend,
};

export type UniformConfAppProps = AppProps & {
  tracker?: Tracker;
  scoring?: TrackerScoring | undefined;
};

export default function UniformConfApp({ Component, pageProps, tracker, scoring }: UniformConfAppProps) {
  const trackerInstance = tracker || localTracker;

  return (
    <UniformTracker
      trackerInstance={trackerInstance}
      componentMapping={componentMapping}
      isServer={typeof window === 'undefined'}
      initialClassification={scoring?.values}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UniformTracker>
  );
}
