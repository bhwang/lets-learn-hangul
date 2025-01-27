import React from 'react';
import { getFacebookShareUrl, getTwitterShareUrl } from '../utils/social';
import Circle from './Circle';
import Bragging from './Bragging';
import Logo from './Logo';

class NowWhat extends React.Component {
  render() {
    return (
      <div className="now-what">
        <Logo />

        <div className="now-what__social">
          <Circle r="320" />
          <Bragging className="calligraphy" />
          <h1>Brag&nbsp;to your&nbsp;friends!</h1>

          <div className="now-what__social__buttons">
            <a className="button button--twitter" href={getTwitterShareUrl()} target="_blank">
              <span className="long">Share on Twitter</span>
              <span className="short">Tweet</span>
            </a>

            <a className="button button--facebook" href={getFacebookShareUrl()} target="_blank">
              <span className="long">Share on Facebook</span>
              <span className="short">Post</span>
            </a>
          </div>
        </div>

        <div className="now-what__resources">
          <Circle r="171" />
          <div className="now-what__resources__text">
            <h3>Want to keep learning Korean?</h3>
            <p>Here are a few of my favorite online resources to get started:</p>
            <ul>
              <li>
                <a href="http://www.talktomeinkorean.com">
                  Talk To Me In Korean
                </a>
              </li>
              <li>
                <a href="http://www.howtostudykorean.com">
                  How to Study Korean
                </a>
              </li>
            </ul>
            <p style={{fontWeight: 'normal', fontFamily: '"나눔고딕", NanumGothic, NanumGothicOTF, "hiragino kaku gothic pro", Dotum, sans-serif'}}>
              화이팅!<br />
              — 노아
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NowWhat;