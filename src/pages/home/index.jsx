import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...please wait</div>;

  return (
    <div className="py-8 container mx-auto grid grid-cols-4 gap-10">
  {recipeList && recipeList.length > 0 ? (
    recipeList.map((item, index) => (
      <RecipeItem key={index} item={item} />
    ))
  ) : (
    <div className="col-span-4">
      <p className="lg:text-4xl text-xl text-center text-black">
        No recipes found.
      </p>
    </div>
  )}
</div>
  );
}
