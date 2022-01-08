import {sample} from "lodash";
import React from "react";
import {ArrowClockwise, ArrowRight, VolumeUpFill, BoxArrowUpRight} from "react-bootstrap-icons";
import Button from "./button";

const STATUS_GUESSING = "STATUS_GUESSING";
const STATUS_GUESSED_CORRECT = "STATUS_GUESSED_CORRECT";
const STATUS_GUESSED_INCORRECT = "STATUS_GUESSED_INCORRECT";

export default class Game extends React.Component {
  constructor(props) {
    super();
    this.state = {
      guess: "",
      status: STATUS_GUESSING,
      correct: 0,
      incorrect: 0
    };
    this.audioRef = React.createRef();
    this.guessInputRef = React.createRef();
  }

  componentDidMount() {
    this.setState({word: sample(this.props.words)});
  }

  render() {
    const {word, status, correct, incorrect} = this.state;

    // before componentDidMount there's no word; be blank
    if (!word) {
      return null;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <p className="text-center fs-1">{word.arabic}</p>

            <form className="form-floating mb-3" onSubmit={this.handleSubmitGuess}>
              <input ref={this.guessInputRef} id="guess" className={`form-control form-control-lg ${status == STATUS_GUESSED_CORRECT ? 'is-valid' : ''} ${status == STATUS_GUESSED_INCORRECT ? 'is-invalid' : ''}`} type="text" placeholder="..." autoComplete="off" autoFocus onChange={this.handleChangeGuess} value={this.state.guess} disabled={status != STATUS_GUESSING} />
              <label htmlFor="guess">Transcribe the word and press <kbd>Enter</kbd></label>
            </form>

            <BlurredReadOnlyInput status={status} value={word.phonetic} label="Transcription" />
            <BlurredReadOnlyInput status={status} value={word.definition} label="Definition" />

            <div className="mb-3">
              <div style={{visibility: status === STATUS_GUESSING ? "hidden" : "visible"}}>
                <audio ref={this.audioRef} src={word.audio_path} controls />
              </div>
            </div>

            <div className="mb-3 text-center">
              <Button enabled={status != STATUS_GUESSING} className="me-3 mb-3" onClick={this.openOnArabicFi} shortcut="o"><BoxArrowUpRight className="me-1" /> <u>O</u>pen on Arabic.fi</Button>
              <Button enabled={status != STATUS_GUESSING} className="me-3 mb-3" onClick={this.playSound} shortcut="p"><VolumeUpFill className="me-1" /> <u>P</u>lay Again</Button>
              <Button enabled={status != STATUS_GUESSING} className="me-3 mb-3" onClick={this.retry} shortcut="r"><ArrowClockwise className="me-1" /> <u>R</u>etry</Button>
              <Button onClick={this.handleNext} enabled={status != STATUS_GUESSING} className="mb-3 me-3" shortcut="n"><ArrowRight className="me-1" /> <u>N</u>ext</Button>
            </div>

            <div className="mb-3 text-center">
              <span className="text-success">Correct: { correct }</span>
              <span className="text-muted"> | </span>
              <span className="text-danger">Incorrect: { incorrect }</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  playSound = () => {
    this.audioRef.current.currentTime = 0;
    this.audioRef.current.play();
  }

  openOnArabicFi = () => {
    window.open(this.state.word.url);
  }

  retry = () => {
    this.setState({
      guess: "",
      status: STATUS_GUESSING,
      retry: true
    }, () => {
      this.guessInputRef.current.focus();
    });
  }

  handleNext = () => {
    this.setState({
      word: sample(this.props.words),
      guess: "",
      status: STATUS_GUESSING,
      retry: false
    }, () => {
      this.guessInputRef.current.focus();
    });
  }

  handleSubmitGuess = (event) => {
    event.preventDefault();
    if (this.state.guess == this.state.word.phonetic) {
      this.setState({status: STATUS_GUESSED_CORRECT});
      if (!this.state.retry) {
        this.setState({correct: this.state.correct + 1});
      }
    } else {
      this.setState({status: STATUS_GUESSED_INCORRECT});
      if (!this.state.retry) {
        this.setState({incorrect: this.state.incorrect + 1});
      }
    }
    this.playSound();
  }

  handleChangeGuess = (event) => {
    this.setState({guess: event.target.value});
  }
}

function BlurredReadOnlyInput(props) {
  const {label, status} = props;
  const value = (status == STATUS_GUESSING) ? "LoremIpsum" : props.value;
  const style = (status == STATUS_GUESSING) ? {filter: "blur(5px)"} : {};

  return (
    <div className="form-floating mb-3" style={style}>
      <input type="text" className="form-control" value={value} disabled readOnly placeholder="..."/>
      <label>{label}</label>
    </div>
  );
}
