// @flow

import React from 'react';
import { Link, graphql } from 'gatsby';

type Props = {
  caseStudy: {
    slug: string,
    title: string,
    subtitle: string,
    coverImage: {
      fluid: {
        src: string,
        srcSet: string,
      },
    },
  },
};

const CaseStudyPreview = ({ caseStudy }: Props) => {
  return (
    <Link to={'/work/' + caseStudy.slug}>
      <div style={{ maxWidth: 450 }}>
        <div className="mb-2">
          <img
            alt={caseStudy.title}
            src={caseStudy.coverImage.fixed.src}
            srcSet={caseStudy.coverImage.fixed.srcSet}
          />
        </div>
        <div className="mb-1 mb-2-m">
          <h4 className="fs-18 fw-semibold">{caseStudy.title}</h4>
          <h6 className="fs-18 c-gray4">{caseStudy.subtitle}</h6>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyPreview;

export const query = graphql`
  fragment CaseStudyPreviewInformation on ContentfulCaseStudy {
    client
    title
    subtitle
    slug
    coverImage {
      fixed(width: 450, height: 260) {
        src
        srcSet
      }
    }
    date
  }
`;
