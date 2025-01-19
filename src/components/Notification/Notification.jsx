import s from "./Notification.module.css";

export default function Notification({ message }) {
  return (
    <div className={s.wrapper}>
      <p>{message}</p>
    </div>
  );
}
