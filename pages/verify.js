import React from 'react'
import { useState } from 'react';
// import as a module
import {PassportVerifier} from "@gitcoinco/passport-sdk-verifier";

const verify = () => {

    const [addressInput, setAddressInput] = useState("");
    const [passport, setPassport] = useState({});

    // override default ceramic node url. Default is the passport-iam prod ceramic node.
    const verifier = new PassportVerifier();

    const handleSubmit = (event) => {
      event.preventDefault();
      verifier.verifyPassport(addressInput).then((result) => {
        setPassport(result);
        console.log("passport :", result);
      });
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Passport Verifier SDK</h1>
        <p>Enter Wallet Address to verify passport</p>
        <form>
          <input
            type="text"
            name="inputAddress"
            style={{ padding: 12 }}
            // @ts-ignore
            onChange={(e) => setAddressInput(e.target.value)}
            value={addressInput}
          />
          <button style={{ padding: 12 }} onClick={handleSubmit}>
            Enter
          </button>
        </form>
        {passport && (
          <div
            style={{
              padding: 10,
              marginTop: 10,
              fontSize: 14,
              textAlign: "left",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Passport Stamps</h1>
            {
              // @ts-ignore
              passport?.stamps?.length > 0 && (
                <div>
                  Stamps:{" "}
                  <ul>
                    {
                      // @ts-ignore
                      passport?.stamps?.map((item, index) => {
                        return (
                          <li key={index}>
                            {item.provider}: {item.verified ? "✅" : "❌"}
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              )
            }
          </div>
        )}
      </header>
    </div>
  );
}

export default verify