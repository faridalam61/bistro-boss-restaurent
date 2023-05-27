import React, { useEffect, useState } from "react";

function useMenu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menus")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);
  return menu;
}

export default useMenu;
