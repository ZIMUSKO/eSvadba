/* eslint-disable react/no-array-index-key */
import React from 'react';

import { Container, Row, Col } from '../../../../shared/styles/global.style';
import BlogLink from '../../../../shared/components/BlogLink';

import { BlogHolder, ForumHolder, H2 } from './styles/blogforum.style';

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
        </Row>
      </Container>
    </>
  );
};


export default BlogForum;
