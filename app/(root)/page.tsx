import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 9,
      author: { _id: 3, name: "Musta Hr" },
      _id: 2,
      description: "Cats are the best thing ever happend.",
      avatar:
        "https://img.freepik.com/free-photo/fun-3d-cartoon-casual-character-woman_183364-80070.jpg?t=st=1731276938~exp=1731280538~hmac=a10bcfac8a09a53334546eaa95b7d9123b3c8e3127c112853be227030e8041bd&w=740",
      image:
        "https://img.freepik.com/free-photo/closeup-vertical-shot-cute-european-shorthair-cat_181624-34587.jpg?t=st=1731276680~exp=1731280280~hmac=f99f59a0bb4ea5e8c06a77ab085ee8f2ba81651cda2c29ee1603acf7e946bb80&w=360",
      category: "Cats",
      title: "Kittens",
    },
    {
      _createdAt: new Date(),
      views: 5,
      author: { _id: 1, name: "Musta Hr" },
      _id: 3,
      description: "Hugging Cars.",
      avatar:
        "https://img.freepik.com/free-photo/fun-3d-illustration-american-referee_183364-81231.jpg?t=st=1731276871~exp=1731280471~hmac=3623fee52a3134906eae0be32743ebeaa4bfa800afe65704087eaec8fd77ccd0&w=740",
      image:
        "https://img.freepik.com/free-photo/closeup-two-young-cats-cuddling-together-corner-stone-wall_181624-17362.jpg?t=st=1731254411~exp=1731258011~hmac=fbcde436c2f6e4b7dded8538de747a68b0abe1b7068817aa17f8afe60e772e98&w=996",
      category: "Cats",
      title: "Hugging Kittens",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs.
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
