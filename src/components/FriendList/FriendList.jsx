import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {
        /* Кількість li залежить від кількості об'єктів в масиві */
        friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem item={friend} />
          </li>
        ))
      }
    </ul>
  );
};
