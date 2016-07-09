import React from 'react';
import { Link } from 'react-router';
import { isMedial } from '../utils/hangul';
import { getJamoHint, getShapeID, isVertical } from '../utils/display';
import { play } from '../sound';
import Circle from './Circle';
import Markdown from './Markdown';
import BigJamo from './BigJamo';
import SoundButton from './SoundButton';

class RoundLetter extends React.Component {
  componentDidMount() {
    this.playSound();
  }

  componentDidUpdate(prev) {
    if (prev.params.letter !== this.props.params.letter) {
      this.playSound();
    }
  }

  playSound() {
    let {params, round, jamos} = this.props;
    let jamo = round.jamo[params.letter] || round.jamo[0];
    play(jamos[jamo].audio.url);
  }

  render() {
    const {params, round, jamos, shapes} = this.props;
    let jamo = round.jamo[params.letter] || round.jamo[0];
    let next = (parseFloat(params.letter) || 0) + 1;
    let hasAnother = next < round.jamo.length;
    let {description, latin, memory, audio} = jamos[jamo];

    return (
      <div className="round__letter" data-shape={getShapeID(jamo)}>
        <Circle r="464" />

        <label>New Letter</label>
        <BigJamo
          className={`big-jamo ${isVertical(jamo) ? 'big-jamo--vertical' : ''}`}
          jamo={jamo}
          shapes={shapes} />

        <SoundButton url={audio.url} />

        {jamo !== '-' &&
          <div className={`bubble ${isMedial(jamo) ? 'bubble--blue' : ''}`}>
            {getJamoHint(jamo)}
          </div>
        }

        <div className="round__letter__description">
          <Markdown source={description} options={{breaks: false}}/>
        </div>

        {hasAnother ? (
          <Link 
            className="button button--forward"
            to={`/level/${params.level}/round/${params.round}/letter/${next}`}
            autoFocus data-autofocus="true">
            Next letter
          </Link>
        ) : (
          <Link
            className="button button--forward"
            to={`/level/${params.level}/round/${params.round}/headword`}
            autoFocus data-autofocus="true">
            Continue
          </Link>
        )}
      </div>
    );
  }
}

export default RoundLetter;