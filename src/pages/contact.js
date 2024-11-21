import React from 'react';
// import { Link } from 'gatsby';
import Title from '../components/Title';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContactForm from '../components/ContactForm';
import styled from 'styled-components';

const SecondPage = () => (
  <Layout>
    <ContentWrapper>
      <SEO title='Contact' />
      <Title center='center' lite='true'>
        <h1 style={{ paddingTop: '1rem' }}>Contact</h1>
      </Title>
      <ContactForm />
    </ContentWrapper>
  </Layout>
);

const ContentWrapper = styled.div`
  background-color: var(--primaryColor);
`;

export default SecondPage;
