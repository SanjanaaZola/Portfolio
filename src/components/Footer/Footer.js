import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn style={{ marginLeft: '15px' }}>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:9591631507'>9591631507</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:zolasanjanaa@gmail.com'>
            zolasanjanaa@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn style={{ paddingLeft: '30px' }}>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href=''>Bangalore,India</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <Slogan>Developed by Sanjanaa Zola</Slogan>

        <Slogan>Copyright © {year} SZ</Slogan>
        <SocialContainer>
          <SocialIcons href='https://github.com/SanjanaaZola'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/?hl=en'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/sanjanaa-zola-83a603157/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
