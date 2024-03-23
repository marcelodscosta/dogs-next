import photoGet from "@/actions/photo-get";
import Feed from "@/components/Feed";

export default async function Home() {

  const data = await photoGet();

  return (
    <section className="container mainContainer">
      <Feed photo={data} />
    </section>
  );
}
