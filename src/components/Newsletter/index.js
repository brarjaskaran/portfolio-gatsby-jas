import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';
import './submitForm.css';

const Newsletter = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "newsletter section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          submitPlaceholder
        }
      }
    }
  `);

  const newsletter = markdownRemark.frontmatter;

  return (
    <Styled.Newsletter>
      <Container section>
        <TitleSection title={newsletter.title} subtitle={newsletter.subtitle} center />
        <Styled.Form
          name="contact"
          method="post"
          className="submitForm"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="contact__name-email">
            <p>
              <label>
                Your Name: <Styled.Input className="submitForm__input" type="text" name="name" />
              </label>
            </p>

            <p>
              <label>
                Phone: <Styled.Input type="phone" className="submitForm__input" name="phone" />
              </label>
            </p>
            <p>
              <label>
                Address: <Styled.Input type="address" className="submitForm__input" name="address" />
              </label>
            </p>
            <p>
              <label>
                Message: (Optional):{' '}
                <textarea type="textarea" className="submitForm__message" name="message"></textarea>
              </label>
            </p>
            <p>
              <button className="submitForm__button " type="submit">
                Send
              </button>
            </p>
          </div>
        </Styled.Form>

        {/* <Styled.Form>
          <Styled.Input type="text" placeholder={newsletter.namePlaceholder} />
          <Styled.Input type="email" placeholder={newsletter.emailPlaceholder} />
          <Button primary block>
            {newsletter.submitPlaceholder}
          </Button>
        </Styled.Form> */}
      </Container>
    </Styled.Newsletter>
  );
};

export default Newsletter;
