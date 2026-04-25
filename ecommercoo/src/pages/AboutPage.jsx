import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Comfy Sloth was born out of a simple desire: to make high-quality, beautifully designed furniture accessible to everyone. We believe your home should be a sanctuary, a place where you can truly relax and be yourself. Our journey began in a small woodworking studio, where our founder started handcrafting custom tables and chairs for friends and family. Word quickly spread about the exceptional craftsmanship and attention to detail. Today, we've grown into a full-scale online boutique, yet we still hold onto those core values. Every piece in our collection is carefully curated to ensure it meets our strict standards for durability, aesthetics, and comfort. Whether you're looking for a statement sofa or a minimalist dining set, we're here to help you design your perfect comfort zone.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
