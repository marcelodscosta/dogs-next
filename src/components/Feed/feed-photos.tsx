import { PhotoDTO } from "@/dtos/PhotoDTO";
import Image from "next/image";
import Link from "next/link";

import styles from './feed.module.css';

type PhotoProps = {
  photo: PhotoDTO[];
};


export default function FeedPhotos({ photo }: PhotoProps) {
  return (

    <ul className={styles.feed}>
      {photo.map((item) => (
        <li className={styles.photo} key={item.id}>
          <Link href={`/photo/${item.id}`}>
            <Image
              alt="Dogs"
              src={item.src}
              width={1500}
              height={1500}
              sizes='80vw'
            />
            <span className={styles.visualizacao}>{item.acessos}</span>
          </Link>
        </li>
      ))}
    </ul>

  );
};