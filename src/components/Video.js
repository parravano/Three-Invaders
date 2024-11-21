import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import PlayButton from '../images/svg/play_button.svg';

const Video = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "video.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  const [video, setVideo] = useState(false);

  console.log(video);

  const stopVideo = (element) => {
    const iframe = element.querySelector('iframe');
    const video = element.querySelector('video');
    if (iframe !== null) {
      const iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
    if (video !== null) {
      video.pause();
    }
  };

  useEffect(() => {
    const closeVideo = ({ target }) => {
      if (target.id !== 'iframePlay') {
        const styleName = `.video-backdrop`;
        const container = document.querySelector(styleName);
        if (container !== null) {
          stopVideo(container);
          setVideo(false);
        }
      }
    };

    document.addEventListener('click', closeVideo);

    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;

      const styleName = `.video-backdrop`;
      const container = document.querySelector(styleName);
      stopVideo(container);
      setVideo(false);
    };
    document.addEventListener('keydown', keyHandler);

    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <Wrapper>
      <div className='image-container'>
        <div className={video ? `video-backdrop active` : `video-backdrop`}>
          <iframe
            className='videoIframe'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/OgUIz0HYCfo?controls=0'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{
            minHeight: '70vh',
            backgroundSize: 'cover',
          }}
        />
        <a
          className='play-button'
          id='iframePlay'
          onClick={(target) => {
            setVideo(true);
          }}
        >
          <PlayButton className='buttonSVG' />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .image-container {
    position: relative;
    z-index: 1;
  }

  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 5rem);
      content: 'Watch the Trailer';
      min-width: 18rem;
      text-align: center;
      background-color: var(--secondaryColor);
      padding: 0.8rem 2rem;
      z-index: 1000;
      color: var(--textColorLight);
      box-shadow: 0 3px 10px 0 rgba(000, 000, 000, 0.5);
      text-transform: uppercase;
    }
  }

  .buttonSVG {
    pointer-events: none;
  }

  .video-backdrop {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: all 0.8s ease;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1001;

    &.active {
      display: block;
      opacity: 1;
      pointer-events: initial;
      transition: all 0.8s ease;
      z-index: 1001;
    }
  }

  .videoIframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
  }
`;
export default Video;
