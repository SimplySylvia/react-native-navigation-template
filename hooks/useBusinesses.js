import { useEffect, useState } from "react";

function useBusinesses() {
  const [businesses, setBusinesses] = useState([]);

  function fetchBusinesses() {
    const exampleBusinesses = [
      {
        name: "Test Name",
        id: "1",
        logo:
          "https://flyingclouddesignshop.com/wp-content/uploads/2016/07/tree-circle-logo-v2-01.jpg",
      },
    ];
    setTimeout(() => {
      setBusinesses(exampleBusinesses);
    }, 2000);
  }

  useEffect(function () {
    fetchBusinesses();
  }, []);

  return [businesses, fetchBusinesses];
}

export default useBusinesses;
