/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';


import {
  Item, Image, Header, Time, CreatorName, Text, CommentHolder, Commnents, ViewsHolder, Views,
  ImageHolder, ContentHolder, ItemInfo, CommnetsAndViews,
} from './styles/forumitem.style';

const ForumItem = ({
  image, header, time, creatorname, text, comments, views, id,
}) => (
  <Item id={id}>
    <ImageHolder>
      <Image src={image} />
    </ImageHolder>
    <ContentHolder>
      <Header>{header}</Header>
      <ItemInfo>
        <Time>{time}</Time>
        <CreatorName>{creatorname}</CreatorName>
      </ItemInfo>
      <Text>{text}</Text>
      <CommnetsAndViews>
        <CommentHolder>
          <Commnents>{comments}</Commnents>
        </CommentHolder>
        <ViewsHolder>
          <Views>{views}</Views>
        </ViewsHolder>
      </CommnetsAndViews>
    </ContentHolder>
  </Item>
);


ForumItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  creatorname: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
};

export default ForumItem;
