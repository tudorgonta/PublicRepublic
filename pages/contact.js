import Head from "next/head"
import NavBar from "../components/navbar/NavBar";

const contact = ({nav}) => {
  return (
    <>
      <Head>
        <title>PR - Contact Us</title>
      </Head>
      <NavBar nav={nav} />
      <h1>Contact Details</h1>
    </>
  )
}
export async function getServerSideProps() {

  const nav = await client.fetch(groq`*[_type == 'navigation'][0]{
      title,
      sections[]{
        "sectionTitle": title,
        target,
        links[]{
          "subSectionTitle": title,
          "subtarget": subtarget,
        }
      }
    }`);

  return {
    props: {
        nav
    }
  }
}
export default contact