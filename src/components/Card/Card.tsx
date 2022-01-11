import React, { useState, ReactElement } from 'react';
import {
  StyledCard,
  StyledDetailLink,
  StyledImage,
  StyledButtonGroup,
  StyledButton,
  StyledChannelLink,
} from './Card.styled';

export function Card(): ReactElement {
  const [favorite, setFavorite] = useState(false);

  return (
    <StyledCard>
      <StyledDetailLink>
        <StyledImage src="https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy.gif&ct=g" />
        <video autoPlay loop>
          <source
            src="https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy.mp4?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy.mp4&ct=g"
            type="video/mp4"
          />
        </video>
      </StyledDetailLink>
    </StyledCard>
  );
}

// const data = {
//   type: 'gif',
//   id: 'l7fdqmHQ1jCg2HzQlx',
//   url: 'https://giphy.com/gifs/lego-baby-yoda-legos-lego-star-wars-holiday-special-l7fdqmHQ1jCg2HzQlx',
//   slug: 'lego-baby-yoda-legos-lego-star-wars-holiday-special-l7fdqmHQ1jCg2HzQlx',
//   bitly_gif_url: 'https://gph.is/g/4M30d06',
//   bitly_url: 'https://gph.is/g/4M30d06',
//   embed_url: 'https://giphy.com/embed/l7fdqmHQ1jCg2HzQlx',
//   username: 'lego',
//   source: '',
//   title: 'Happy Star Wars Characters GIF by LEGO',
//   rating: 'g',
//   content_url: '',
//   source_tld: '',
//   source_post_url: '',
//   is_sticker: 0,
//   import_datetime: '2020-11-18 18:57:35',
//   trending_datetime: '2021-12-16 19:43:04',
//   images: {
//     original: {
//       height: '270',
//       width: '480',
//       size: '351172',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy.gif&ct=g',
//       mp4_size: '63581',
//       mp4: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy.mp4?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy.mp4&ct=g',
//       webp_size: '70814',
//       webp: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy.webp?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy.webp&ct=g',
//       frames: '7',
//       hash: 'edca113fc74da4026df04b98d823c425',
//     },
//     downsized: {
//       height: '270',
//       width: '480',
//       size: '351172',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy.gif&ct=g',
//     },
//     downsized_large: {
//       height: '270',
//       width: '480',
//       size: '351172',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy.gif&ct=g',
//     },
//     downsized_medium: {
//       height: '270',
//       width: '480',
//       size: '351172',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy.gif&ct=g',
//     },
//     downsized_small: {
//       height: '270',
//       width: '480',
//       mp4_size: '63581',
//       mp4: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy-downsized-small.mp4?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy-downsized-small.mp4&ct=g',
//     },
//     downsized_still: {
//       height: '270',
//       width: '480',
//       size: '351172',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy_s.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy_s.gif&ct=g',
//     },
//     fixed_height: {
//       height: '200',
//       width: '356',
//       size: '147363',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/200.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=200.gif&ct=g',
//       mp4_size: '41685',
//       mp4: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/200.mp4?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=200.mp4&ct=g',
//       webp_size: '51802',
//       webp: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/200.webp?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=200.webp&ct=g',
//     },
//     fixed_height_downsampled: {
//       height: '200',
//       width: '356',
//       size: '149965',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/200_d.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=200_d.gif&ct=g',
//       webp_size: '87016',
//       webp: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/200_d.webp?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=200_d.webp&ct=g',
//     },
//     fixed_height_small: {
//       height: '100',
//       width: '178',
//       size: '67605',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/100.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=100.gif&ct=g',
//       mp4_size: '17567',
//       mp4: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/100.mp4?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=100.mp4&ct=g',
//       webp_size: '23710',
//       webp: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/100.webp?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=100.webp&ct=g',
//     },
//     fixed_height_small_still: {
//       height: '100',
//       width: '178',
//       size: '9209',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/100_s.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=100_s.gif&ct=g',
//     },
//     fixed_height_still: {
//       height: '200',
//       width: '356',
//       size: '21448',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/200_s.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=200_s.gif&ct=g',
//     },
//     fixed_width: {
//       height: '113',
//       width: '200',
//       size: '102110',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/200w.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=200w.gif&ct=g',
//       mp4_size: '19347',
//       mp4: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/200w.mp4?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=200w.mp4&ct=g',
//       webp_size: '26362',
//       webp: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/200w.webp?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=200w.webp&ct=g',
//     },
//     fixed_width_downsampled: {
//       height: '113',
//       width: '200',
//       size: '84156',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/200w_d.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=200w_d.gif&ct=g',
//       webp_size: '33606',
//       webp: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/200w_d.webp?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=200w_d.webp&ct=g',
//     },
//     fixed_width_small: {
//       height: '57',
//       width: '100',
//       size: '22634',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/100w.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=100w.gif&ct=g',
//       mp4_size: '8689',
//       mp4: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/100w.mp4?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=100w.mp4&ct=g',
//       webp_size: '11736',
//       webp: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/100w.webp?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=100w.webp&ct=g',
//     },
//     fixed_width_small_still: {
//       height: '57',
//       width: '100',
//       size: '3902',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/100w_s.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=100w_s.gif&ct=g',
//     },
//     fixed_width_still: {
//       height: '113',
//       width: '200',
//       size: '12087',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/200w_s.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=200w_s.gif&ct=g',
//     },
//     looping: {
//       mp4_size: '1997794',
//       mp4: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy-loop.mp4?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy-loop.mp4&ct=g',
//     },
//     original_still: {
//       height: '270',
//       width: '480',
//       size: '50064',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy_s.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy_s.gif&ct=g',
//     },
//     original_mp4: {
//       height: '270',
//       width: '480',
//       mp4_size: '63581',
//       mp4: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy.mp4?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy.mp4&ct=g',
//     },
//     preview: {
//       height: '238',
//       width: '423',
//       mp4_size: '26021',
//       mp4: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy-preview.mp4?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy-preview.mp4&ct=g',
//     },
//     preview_gif: {
//       height: '68',
//       width: '121',
//       size: '48143',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy-preview.gif?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy-preview.gif&ct=g',
//     },
//     preview_webp: {
//       height: '204',
//       width: '362',
//       size: '40312',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy-preview.webp?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy-preview.webp&ct=g',
//     },
//     hd: {
//       height: '1080',
//       width: '1920',
//       mp4_size: '518862',
//       mp4: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/giphy-hd.mp4?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=giphy-hd.mp4&ct=g',
//     },
//     '480w_still': {
//       height: '270',
//       width: '480',
//       size: '351172',
//       url: 'https://media1.giphy.com/media/l7fdqmHQ1jCg2HzQlx/480w_s.jpg?cid=cba2429ct199s7nyrkrhanksd6t93pke8gmo8iskww9mi6ra&rid=480w_s.jpg&ct=g',
//     },
//   },
//   user: {
//     avatar_url: 'https://media4.giphy.com/channel_assets/lego/OZpuno6GstOM.png',
//     banner_image:
//       'https://media4.giphy.com/channel_assets/lego/9nYXxNn2oQeD.gif',
//     banner_url: 'https://media4.giphy.com/channel_assets/lego/9nYXxNn2oQeD.gif',
//     profile_url: 'https://giphy.com/lego/',
//     username: 'lego',
//     display_name: 'LEGO',
//     description: 'Welcome to the LEGO universe, where everything is awesome!',
//     instagram_url: 'https://instagram.com/lego',
//     website_url: 'https://www.lego.com/',
//     is_verified: true,
//   },
//   analytics_response_payload:
//     'e=Z2lmX2lkPWw3ZmRxbUhRMWpDZzJIelFseCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWNiYTI0MjljdDE5OXM3bnlya3JoYW5rc2Q2dDkzcGtlOGdtbzhpc2t3dzltaTZyYSZjdD1n',
//   analytics: {
//     onload: {
//       url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWw3ZmRxbUhRMWpDZzJIelFseCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWNiYTI0MjljdDE5OXM3bnlya3JoYW5rc2Q2dDkzcGtlOGdtbzhpc2t3dzltaTZyYSZjdD1n&action_type=SEEN',
//     },
//     onclick: {
//       url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWw3ZmRxbUhRMWpDZzJIelFseCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWNiYTI0MjljdDE5OXM3bnlya3JoYW5rc2Q2dDkzcGtlOGdtbzhpc2t3dzltaTZyYSZjdD1n&action_type=CLICK',
//     },
//     onsent: {
//       url: 'https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPWw3ZmRxbUhRMWpDZzJIelFseCZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPWNiYTI0MjljdDE5OXM3bnlya3JoYW5rc2Q2dDkzcGtlOGdtbzhpc2t3dzltaTZyYSZjdD1n&action_type=SENT',
//     },
//   },
// };
