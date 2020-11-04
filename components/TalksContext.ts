import { Entry} from 'contentful';
import React from 'react';
import { ITalkFields } from '../lib/contentful';

export const TalksContext = React.createContext<Entry<ITalkFields>[] | undefined>(undefined);
