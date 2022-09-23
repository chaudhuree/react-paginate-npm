import { useEffece, useEffect, useState } from "react";
import "./App.css";
import Images from "./components/images";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let controller = new AbortController();
    try {
      const fetchPhotos = async () => {
        const fetchedData = await fetch(
          "https://jsonplaceholder.typicode.com/albums/1/photos",
            {
            signal: controller.signal,
          }
        );
        const data = await fetchedData.json();

        console.log(data);
        setImages(data);
      };
      fetchPhotos();
    } catch (e) {
      console.log(e.message);
    }
    return () => controller.abort();
  }, []);

  return (
    <div className="App">
      <Images myData={images}></Images>
    </div>
  );
}

export default App;
