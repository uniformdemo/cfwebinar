import { contentfulOptimizeListReader } from "@uniformdev/optimize-tracker-contentful";
import { Personalize } from "@uniformdev/optimize-tracker-react";
import { Entry } from "contentful";
import { IPersonalizedWhyAttendFields } from "../lib/contentful";

export const PersonalizedWhyAttend = ({fields}: Entry<IPersonalizedWhyAttendFields>) => {
  const variants = contentfulOptimizeListReader(fields.unfrmOptP13nList);
  return <Personalize variations={variants} />
}