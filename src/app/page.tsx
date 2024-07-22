import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="my-home-wrapper">
        <div className="home-flex-box">
          <h1 className="home-page-main-title">Welcome to my blogs</h1>
          <Link href={"/blog"} className="my-home-style-btn">Blogs</Link>
        </div>
      </div>
    </>
  );
}
