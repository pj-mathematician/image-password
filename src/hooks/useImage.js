import { useState, useEffect } from "react";

function useImage(category) {
  const serverAddress = "";

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    fetch(`${serverAddress}/${category}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) setImageList(data);
      });
  });

  return imageList;
}

export default useImage;
