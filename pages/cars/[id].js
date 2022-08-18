// dynamic route - anytime a user navs to cars/tesle etc it will render THIS component

import { useRouter } from 'next/router';

export default function Car( { car }) {

    const router = useRouter()

    // Get ID from URL
    const { id } = router.query

    return (<>
      <div>Hello { id }</div>
      <img src={car.image} />
      </>)
}


// ABOUT SSR:
// Same as SSG but does on each request instead of BUILD TIME.

export async function getServerSideProps({ params }) {
   
    const request = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await request.json();

    console.log(data)
    return {        
        props: { car: data }
    }
}
// About SSG:
// Test of Static Generation / Pre rendering of component 
// This function tells next to pre render a page (component)
// Delivers fast, good for showing content quickly, scales bad (since it is pre rendered - before user requests)


// When building the site, next will CALL THIS FUNCTION, then send the results as PROPS to the component itself. 


// About this application of SSG:
// We fetch an individual car that was requested (from the URL)
// We use the ID or this. 
// 

/*
export async function getStaticProps({ params }) {

    // Get the id from URL
    // Request localhost to request the jsonfile with this ID.
    const request = await fetch(`http://localhost:3000/${params.id}.json`);

    // Convert to json
    const data = await request.json();
    console.log(data)
    return {
        // Each prop can be accessed by the component. (The fucntion above in this file, see the CAR argument. This is used by component to present data in the UI)
        
        props: { car: data }
    }
}

// How does Next know which dynamic pages to render?
// Next does not know how many pages we have associated to a dynamic route. 
// In order to pre-render ALL car ID:s, next needs to know those ID:s in advance.
// This is done below with GetStaticPaths. --> tells Next which dynamic page to render

// This function can also request data from an API or database.
export async function getStaticPaths() {
  const request = await fetch('http://localhost:3000/cars.json')
  console.log(request)
  const data = await request.json();
  console.log(data)

  const paths = data.map(car => {
    return { params: { id: car } }
  })

  return {
    paths,
    fallback: false
  }
}

*/