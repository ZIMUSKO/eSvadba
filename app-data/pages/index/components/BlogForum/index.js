/* eslint-disable react/no-array-index-key */
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { Container, Row, Col } from '../../../../shared/styles/global.style';

import {
  BlogHolder, ForumHolder, H2, ForumHeader, ForumText, Info, ForumLink, H2F, ForumButtom,
} from './styles/blogforum.style';

const BlogLink = dynamic(import('../../../../shared/components/BlogLink'));

const BlogForum = () => {
  const blogData = [
    {
      image: './static/images/index/bloglink.png',
      header: '5 Ways to Calm Down Before Walking Down the Aisle',
      category: 'Svadobný obrad',
      text: 'You can be the most prepared bride or groom ever, but as soon as you start walking down the aisle nerves are bound to take over',
      link: 'https://google.com',
    },
    {
      image: './static/images/index/bloglink.png',
      header: '5 Ways to Calm Down Before Walking Down the Aisle',
      category: 'Tradície',
      text: 'You can be the most prepared bride or groom ever, but as soon as you start walking down the aisle nerves are bound to take over',
      link: 'https://google.com',
    },
    {
      image: './static/images/index/bloglink.png',
      header: '5 Ways to Calm Down Before Walking Down the Aisle',
      category: 'Jedlo',
      text: 'You can be the most prepared bride or groom ever, but as soon as you start walking down the aisle nerves are bound to take over',
      link: 'https://google.com',
    },
  ];
  const forumData = [
    {
      header: 'Wedding dresses!',
      info: 'KOŠICE, Today at 8:49 AM',
      text: 'Help I`m a new bride with had a lot of help. I`m the first girl to really get married in my Family. I`m not sure when..',
    },
    {
      header: 'Wedding dresses!',
      info: 'KOŠICE, Today at 8:49 AM',
      text: 'Help I`m a new bride with had a lot of help. I`m the first girl to really get married in my Family. I`m not sure when..',
    },
    {
      header: 'Wedding dresses!',
      info: 'KOŠICE, Today at 8:49 AM',
      text: 'Help I`m a new bride with had a lot of help. I`m the first girl to really get married in my Family. I`m not sure when..',
    },
  ];
  return (
    <>
      <Container id="blogforum">
        <Row>
          <Col size={9}>
            <H2>Blog</H2>
            <BlogHolder>
              {
                blogData.map(({
                  image, header, category, text, link,
                }, i) => (
                  <BlogLink
                    image={image}
                    header={header}
                    category={category}
                    text={text}
                    link={link}
                    key={i}
                  />
                ))
              }
            </BlogHolder>
          </Col>
          <Col size={3}>
            <H2F>FÓRUM</H2F>
            <ForumHolder>
              {
                forumData.map(({
                  header, info, text,
                }, i) => (
                  <ForumLink
                    key={i}
                  >
                    <ForumHeader>{header}</ForumHeader>
                    <Info>{info}</Info>
                    <ForumText>{text}</ForumText>
                  </ForumLink>
                ))
              }
              <Link href="/forum">
                <ForumButtom>Prejsť na fórum</ForumButtom>
              </Link>
            </ForumHolder>
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default BlogForum;
