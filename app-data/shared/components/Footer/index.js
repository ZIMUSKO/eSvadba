import React from 'react';
import Link from 'next/link';
import { Container } from '../../styles/global.style';

import {
  FooterWrapper, FooterItem, Header, FooterLink, FooterHolder, BottomHolder, BottomText,
  BottomWrapper, SocialHolder, SocialItem, Paper,
} from './styles/footer.style';

const Footer = () => (
  <>
    <FooterWrapper>
      <Paper />
      <Container>
        <FooterHolder>
          <FooterItem>
            <Header>E-svadba</Header>
            <Link href="/">
              <FooterLink>O nás</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Kontakt</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Často kladené otázky</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Reklama</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Obchodné podmienky</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Ochrana osobných údajov</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Reklamačný poriadok</FooterLink>
            </Link>
          </FooterItem>
          <FooterItem>
            <Header>Moja svadba</Header>
            <Link href="/">
              <FooterLink>Rozpočet</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Porovnávač</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Plánovač</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Môj bazárik</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Zoznam hostí</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Zasadací poriadok</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Správca dodávateľov</FooterLink>
            </Link>
          </FooterItem>
          <FooterItem>
            <Header>Moja svadba</Header>
            <Link href="/">
              <FooterLink>Blog</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Fórum</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Inšpirácie</FooterLink>
            </Link>
            <Link href="/">
              <FooterLink>Vaše svadby</FooterLink>
            </Link>
          </FooterItem>
          <FooterItem>
            <Header>Newsletter</Header>
            <Header>Sledujte nás</Header>
            <SocialHolder>
              <SocialItem
                img="/static/images/icons/facebook.svg"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialItem
                img="/static/images/icons/instagram.svg"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              />
            </SocialHolder>
          </FooterItem>
        </FooterHolder>
      </Container>
    </FooterWrapper>
    <BottomWrapper>
      <Container>
        <BottomHolder>
          <BottomText>Copyright 2019</BottomText>
          <BottomText>|</BottomText>
          <BottomText>www.esvadba.sk</BottomText>
          <BottomText>|</BottomText>
          <BottomText>Všetky práva vyhradené</BottomText>
        </BottomHolder>
      </Container>
    </BottomWrapper>
  </>
);

export default Footer;
