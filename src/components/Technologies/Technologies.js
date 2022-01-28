import React from 'react'
import { DiFirebase, DiReact, DiBootstrap, DiCloud9 } from 'react-icons/di'
import {
  LinkContainer,
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle style={{ paddingTop: '20px' }}>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web-developement world.
      From front-end to design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3.2rem' style={{ paddingBottom: '5px' }} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            ReactJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCloud9 size='3.8rem' />
        <ListContainer>
          <ListTitle>AWS</ListTitle>
          <ListParagraph style={{ fontSize: '17px' }}>
            AWS Cloud Practitioner <br />
            Certified
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3.5rem' style={{ paddingBottom: '5px' }} />
        <ListContainer>
          <ListTitle>Real-time Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBootstrap size='3.3rem' style={{ paddingBottom: '3px' }} />
        <ListContainer>
          <ListTitle>Framework</ListTitle>
          <ListParagraph>
            Experience with <br />
            Bootstrap & MaterialUI
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
)
export default Technologies
