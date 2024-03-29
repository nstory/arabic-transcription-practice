import Head from 'next/head'
import {ArrowClockwise, ArrowRight, VolumeUpFill} from "react-bootstrap-icons";
import 'bootstrap/dist/css/bootstrap.css';
import {allWords} from "../lib/words";
import Game from "../components/game";

export async function getStaticProps(context) {
  return {
    props: {
      words: allWords()
    }
  };
}

export default function Home({words}) {
  return (
    <>
      <Head>
        <title>Arabic Transcription Practice</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic&family=Noto+Sans+Arabic&family=Skranji:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <div className="mb-3" style={{backgroundColor: "#678677"}}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="app-title text-center text-light my-3 fs-2" style={{fontFamily: "Skranji" }}>Arabic Transcription Practice</h1>
            </div>
          </div>
        </div>
      </div>

      <Game words={words} />
    </>
  )
}
