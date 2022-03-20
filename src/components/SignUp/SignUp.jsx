import React, { useState, useEffect } from "react";
import { arraysEqual } from "../../helper/ArrayEqual";

import Dropdown from "../Dropdown";
import ImageGrid from "../ImageGrid";

import styles from "./SignUp.module.css";

export const SignUp = () => {
  const server = "http://127.0.0.1:5000";
  const [username, setUsername] = useState("");

  const [selectedNode, setSelectedNode] = useState(null);
  const [list, setList] = useState(null);
  const [imageList, setImageList] = useState(null);

  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);

  const [isPasswordEntered, setIsPasswordEntered] = useState(false);

  const [passwordErr, setPasswordErr] = useState("");

  const lengthErr = "At least 3 images should be selected";
  const passwordDontMatch =
    "Entered password and confirm password do not match";

  const usernameErr = "Enter a valid username";
  const nodeErr = "Select a category";

  const generateImages = () => {
    if (!username) {
      setPasswordErr(usernameErr);
      return;
    }

    if (!selectedNode) {
      setPasswordErr(nodeErr);
      return;
    }


    fetch(`${server}/images/${selectedNode[1].address}`)
      .then((res) => res.json())
      .then((data) => {
        setImageList(data)
      });
  };

  const handleNext = () => {
    if (password.length < 3) {
      setPasswordErr(lengthErr);
      return;
    }

    setIsPasswordEntered(true);

    setPasswordErr("");
  };

  useEffect(() => {
    fetch(`${server}/images2`)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);

  const handleSubmit = () => {
    if (!arraysEqual(password, confirmPassword)) {
      setPasswordErr(passwordDontMatch);
      return;
    }
    const user = {
      username,
      password: password.join(" "),
    };
    console.log(user);

    fetch(`${server}/signup`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    }).then((res) => console.log(res));

    setPasswordErr("");
  };

  return (
    <div className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
      </div>
      <div className={styles.selectGroup}>
        <label htmlFor="category">Category: </label>
        <Dropdown list={list} val={selectedNode} setVal={setSelectedNode} />
      </div>
      <div className={styles.surroundDiv}>
        <button onClick={generateImages} className={styles.passwordGen}>
          Generate Image Grid
        </button>
      </div>

      <span className={styles.error}>{passwordErr}</span>
      {!isPasswordEntered ? (
        <>
          <ImageGrid
            imageList={imageList}
            selectedImages={password}
            setSelectedImages={setPassword}
          />
          <div className={styles.surroundDiv}>
            <button onClick={handleNext} className={styles.button}>
              Next
            </button>
          </div>
        </>
      ) : (
        <>
          <ImageGrid
            imageList={imageList}
            selectedImages={confirmPassword}
            setSelectedImages={setConfirmPassword}
          />
          <div className={styles.surroundDiv}>
            <button onClick={handleSubmit} className={styles.button}>
              Sign Up
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// let list = {
//   cat_1: {
//     address: "cat_1",
//     children: {
//       cat_1_1: {
//         address: "cat_1/cat_1_1",
//         name: "sub_category_1",
//         children: null,
//       },
//       cat_1_2: {
//         address: "cat_1/cat_1_2",
//         name: "sub_category_2",
//         children: null,
//       },
//     },
//     name: "category_1",
//   },
//   cat_2: {
//     address: "cat_2",
//     children: {
//       cat_2_1: {
//         address: "cat_2/cat_2_1",
//         name: "sub_category_1",
//         children: null,
//       },
//       cat_2_2: {
//         address: "cat_2/cat_2_2",
//         name: "sub_category_2",
//         children: null,
//       },
//     },
//     name: "category_2",
//   },
// };

// let list = {
//   1: {
//     name: "Node 1",
//     address: "1",
//     children: {
//       11: {
//         name: "Sub Node 11",
//         address: "1/11",
//         children: {
//           111: {
//             name: "Sub Sub Node 111",
//             address: "1/11/111",
//             children: null,
//           },
//         },
//       },
//       12: {
//         name: "Sub Node 2",
//         address: "1/12",
//         children: {
//           121: {
//             name: "Sub Sub Node 121",
//             address: "1/12/121",
//             children: null,
//           },
//         },
//       },
//     },
//   },
//   2: {
//     name: "Node 2",
//     address: "2",
//     children: {
//       21: {
//         name: "Sub Node 2",
//         address: "2/21",
//         children: null,
//       },
//     },
//   },
// };

let imageList = {
  i1: "https://cdn.discordapp.com/attachments/751667312825729074/954705082824421376/unknown.png",
  i2: "https://cdn.discordapp.com/attachments/751667312825729074/954705146028380170/unknown.png",
  i3: "https://cdn.discordapp.com/attachments/751667312825729074/954705201724530698/unknown.png",
  i4: "https://cdn.discordapp.com/attachments/751667312825729074/954705249212461096/unknown.png",
  i5: "https://cdn.discordapp.com/attachments/751667312825729074/954705290954158120/unknown.png",
  i6: "https://cdn.discordapp.com/attachments/751667312825729074/954705365608579112/unknown.png",
  i7: "https://cdn.discordapp.com/attachments/751667312825729074/954705431643684925/unknown.png",
  i8: "https://cdn.discordapp.com/attachments/751667312825729074/954705476656980018/unknown.png",
  i9: "https://cdn.discordapp.com/attachments/751667312825729074/954703845907378176/unknown.png",
};
