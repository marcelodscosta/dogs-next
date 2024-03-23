import { PhotoDTO } from "@/dtos/PhotoDTO";
import FeedPhotos from "./feed-photos";

type FeedProps = {
  photo: PhotoDTO[],
};

export default async function Feed({ photo }: FeedProps) {
  return (
    <div>
      <h1>Feed</h1>
      <FeedPhotos photo={photo} />
    </div>
  );
};