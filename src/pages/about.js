import React from 'react';

import Content from '../components/content';
import Title from '../components/type-title';
import Subtitle from '../components/type-subtitle';

const AboutPage = () => (
  <div className="mw-700 mh-auto mt-5">
    <Content>
      <Title className="mb-2 mt-4">What is brand therapy?</Title>
      <p>
        It's an approach to brand strategy that starts from a relational,
        collaborative place. Rather than a quick fix mentality, we want to work
        alongside your startup, existing business, or new idea in order to help
        you build a strong core identity and reach the right people.
      </p>
      <Subtitle className="mb-2 mt-4">Our philosophy</Subtitle>
      <p>
        Renga is a type of Japanese poetry in which two or more poets alternate
        back and forth in the composition of a single poem. In this ancient art
        form, every part matters to the direction of the whole. What came before
        is as valuable of what is still to come.
      </p>
      <p>
        This heart of messy collaboration captures our creative approach - which
        is why we’ve chose to adopt it as our name. Together, we build upon the
        work you have already done and then give you something to keep building
        on top of that.
      </p>
      <p>
        Because every brand is unique, we treat each client as a new
        collaborative possibility, working alongside you to make something
        special.
      </p>
    </Content>
  </div>
);

export default AboutPage;
