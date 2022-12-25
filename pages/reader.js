import React from "react";
import { useState } from "react";

// add to your project as a module
import { PassportReader } from "@gitcoinco/passport-sdk-reader";

const reader = () => {
  const [passport, setPassport] = useState({});

  // create a new instance pointing at Gitcoins mainnet Ceramic node
  const reader = new PassportReader(
    "https://ceramic.passport-iam.gitcoin.co",
    "1"
  );

  const buttonClick = async () => {
    console.log("btn clicked");

    // read a Passport for any Ethereum Address
    const mypassport = await reader.getPassport(
      "0x67099d557997E3Ee308B3C49029C331A2d4569Dc"
    );
    setPassport(mypassport);
    console.log("mypassport :", mypassport);
  };

  return (
    <div>
      <button onClick={buttonClick}>click</button>

      <div>
        {passport && (
          <div
            style={{
              padding: 10,
              marginTop: 10,
              fontSize: 14,
              textAlign: "left",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Passport Data</h1>
            {
              // @ts-ignore
              passport?.expiryDate && (
                <p>
                  Expiry Date:{" "}
                  {
                    // @ts-ignore
                    passport?.expiryDate
                  }
                </p>
              )
            }
            {
              // @ts-ignore
              passport?.issuanceDate && (
                <p>
                  Issuance Date:{" "}
                  {
                    // @ts-ignore
                    passport?.issuanceDate
                  }
                </p>
              )
            }

            {
              // @ts-ignore
              passport?.stamps?.length > 0 && (
                <div>
                  Stamps:{" "}
                  <ul>
                    {
                      // @ts-ignore
                      passport?.stamps?.map((item, index) => {
                        return <li key={index}>{item.provider}</li>;
                      })
                    }
                  </ul>
                </div>
              )
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default reader;
