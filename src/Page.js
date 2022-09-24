import { useEffect, useState } from "react";
import UserList from "./UserList";

export default function Page({ page }) {
  console.log(" ++++++++ Page ++++++");
  const [loading, setUserLoading] = useState(true);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const url = `https://randomuser.me/api/?results=20&page=${page}&inc=name`;
    fetch(url)
      .then((res) => res.json())
      .then((userlIst) => {
        setUserLoading(false);
        setUserList(userlIst.results);
      });
  }, [page]);
  return (
    <div className="Page">
      {loading ? ".... Loading " : <UserList userList={userList} />}
    </div>
  );
}
