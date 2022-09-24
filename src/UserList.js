import "./styles.css";
export default function UserList({ userList }) {
  return (
    <div className="user-detail">
      {userList
        ? userList.map(({ name: { first, last, title } }) => (
            <p
              key={first}
              className="user-Info"
            >{` ${title} ${first} ${last}`}</p>
          ))
        : "No User Data Available"}
    </div>
  );
}
