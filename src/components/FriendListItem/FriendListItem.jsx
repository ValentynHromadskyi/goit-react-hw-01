import css from "./FriendListItem.module.css";

export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  const statusClass = isOnline ? css.isActive : css.isRetired;
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
