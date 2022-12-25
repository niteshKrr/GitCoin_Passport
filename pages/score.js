import React from 'react'

import {PassportScorer} from "@gitcoinco/passport-sdk-scorer";

const score = () => {

    
    const btnclick = async() => {
        console.log("btn clicked");
        
        const scorer = new PassportScorer([
          {
            provider: "Google",
            issuer: "did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC",
            score: 5,
          },
          {
            provider: "Github",
            issuer: "did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC",
            score: 10,
          },
        ]);

        const score = await scorer.getScore(
          "0x67099d557997E3Ee308B3C49029C331A2d4569Dc"
        );

        console.log("myscore :", score);
    }



  return (
      <div>
          <button onClick={btnclick}>click</button>
    </div>
  )
}

export default score