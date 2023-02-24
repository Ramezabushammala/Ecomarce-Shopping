import Hero from "../components/Hero"
import CategoryList from "../features/categories/CategoryList"
import ListByCategory from "../features/products/ListByCategory"
import ListOfAll from "../features/products/ListOfAll"
function Home() {
  return (
    <main className="">
      <Hero/>
      <CategoryList/>
      <ListOfAll/>
      <ListByCategory categoryId={2}/>
      <ListByCategory categoryId={1}/>
    </main>
  )
}

export default Home