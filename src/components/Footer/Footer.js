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
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn style={{ marginLeft: '15px' }}>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:9591631507'>9591631507</LinkItem>
        </LinkColumn>
        <LinkColumn style={{ marginLeft: '180px' }}>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:zolasanjanaa@gmail.com'>
            zolasanjanaa@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn style={{ marginLeft: '380px' }}>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href=''>Bangalore,India</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Developed by Sanjanaa Zola{' '}
            <span style={{ marginLeft: '180px' }}>Copyright © 2022 Zola</span>{' '}
          </Slogan>
        </CompanyContainer>
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
