export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me"
    }
  }
} 

export default function Home() {
  return (
    <div>About Me</div> 
    // <div className="flex h-screen w-screen items-center justify-center">
    //   <p className="text-bold">Hello World!</p>
    // </div>
  )
}