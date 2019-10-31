import React from 'react';
import PropTypes from 'prop-types';


import {
  Image, Header, Category, Text, More, Holder,
} from './styles/bloglink.style';

const BlogLink = ({
  image, header, category, text, link,
}) => (
  <>
    <Holder>
      <Image src={image} alt="" />
      <Header>{header}</Header>
      <Category>{category}</Category>
      <Text>{text}</Text>
      <More href={link} target="_blank">VIAC</More>
    </Holder>
  </>
);


BlogLink.propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BlogLink;
