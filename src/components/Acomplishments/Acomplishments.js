import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
  { number: 1439, text: 'CodeChef' },
  { number: 903, text: 'CodeForces' },
  { number: 151, text: 'GeeksForGeeks' },
  // { number: 5000, text: 'Github Stars' },
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Accomplisments and Ratings</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index} style={{ textAlign: 'center' }}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
)

export default Acomplishments
