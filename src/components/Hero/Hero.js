import React from 'react'
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding style={{ marginTop: '40px' }}>
    <LeftSection>
      <SectionTitle style={{ paddingLeft: '20px' }}>
        Hello.
        <br />
        I'm Sanjanaa Zola.
      </SectionTitle>
      <SectionText style={{ paddingLeft: '20px' }}>
        Currently passionate about Web Development using ReactJs and also
        interested in learning new technologies.
      </SectionText>
      <Button onClick={() => (window.location = '/')}>Download CV</Button>
    </LeftSection>
  </Section>
)

export default Hero
