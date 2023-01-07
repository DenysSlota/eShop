import Description from "../components/HomePage/Description";
import Stack from "../components/HomePage/Stack";

const HomePage = () => {
  return (
    <div className="p-4 mt-24 my-5 mx-auto container dark:text-white">
      <h3 className="mb-4 text-3xl font-bold text-center uppercase tracking-widest">
        Welcome!
      </h3>
      <Description />
      <Stack />
    </div>
  )
}

export default HomePage;