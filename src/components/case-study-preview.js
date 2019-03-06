// @flow

import React from 'react';
import { Link } from 'gatsby';

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
    projectScope: string[],
    projectMembers: string[],
  },
};

const CaseStudyPreview = ({ caseStudy }: Props) => {
  return (
    <Link to={'work/' + caseStudy.slug}>
      <div style={{ maxWidth: 450 }}>
        <div className="mb-2">
          <img
            alt={caseStudy.title}
            src={caseStudy.coverImage.fixed.src}
            srcSet={caseStudy.coverImage.fixed.srcSet}
          />
        </div>
        <div className="mb-1 mb-2-m">
          <h4 className="d-inline fs-18 fs-21-m fw-semibold">
            {caseStudy.title}
            {'. '}
          </h4>
          <h6 className="d-inline d-block-m fs-18 fs-21-m c-gray4">
            {caseStudy.subtitle}
          </h6>
        </div>
        <div className="fs-14 c-gray3">
          {caseStudy.projectScope.map((item, i) => (
            <>
              {i !== 0 && <span className="ph-1">&middot;</span>}
              <span>{item}</span>
            </>
          ))}
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
    projectScope
  }
`;