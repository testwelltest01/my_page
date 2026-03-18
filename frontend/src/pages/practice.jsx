import { useEffect, useState } from "react";

export default function practice() {
  const [loading, setLoading] = useState(false);
  const [animal, setAnimal] = usestate();

  const getData = async () => {
    try {
      setLoading(true);
      const url = "http://127.0.0.1:8000/animal";
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const data = await response.json();
      setAnimal(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData;
  }, []);

  return (
    <div>
      <div>랜덤동물디펜스</div>
      <div>{loading ? "로딩" : animal}</div>
      <div>
        <button onClick={getData}>생성!</button>
      </div>
    </div>
  );
}
