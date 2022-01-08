import {readFileSync} from "fs";

export function allWords() {
  return JSON.parse(readFileSync("word_list.json")).map((word) => {
    return {
      arabic: word.arabic,
      phonetic: word.phonetic,
      audio_path: word.audio_url.replace(/^.*\/audio/, "/audio"),
      definition: word['declension info'],
      url: word['url']
    };
  });
}
