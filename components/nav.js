import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";
export const Nav = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>News Feed</div>
      <div onClick={() => router.push("/eom")}>EOM</div>
      <div
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/md-imrul-tasif-aiman-7497081b8/")
        }
      >
        LinkedIn
      </div>
    </div>
  );
};
