import styles from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.category}>
          <span className={styles.description}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.category}>
          <span className={styles.description}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.category}>
          <span className={styles.description}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
