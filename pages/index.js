import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className="section_hooks">
        <h1>Hooks</h1>
        <div
          className="hookslist"
          style={{
            display: "flex",
            width: "100%",
            gap: "30px"
          }}
        >
          <button onClick={() => router.push("/usestate")}>UseState</button>
          <button onClick={() => router.push("/useeffect")}>UseEffect</button>
          <button onClick={() => router.push("/usememo")}>UseMemo</button>
          <button onClick={() => router.push("/useref")}>UseRef</button>
          <button onClick={() => router.push("/usecontext")}>UseContext</button>
          <button onClick={() => router.push("/usereducer")}>UseReducer</button>
          <button onClick={() => router.push("/usecallback")}>UseCallback</button>
        </div>
      </div>
      <div className="section_bp">
      <h1>BoilerPlates</h1>
      <div
          className="hookslist"
          style={{
            display: "flex",
            width: "100%",
            gap: "30px"
          }}
        >
          <button onClick={() => router.push("/debounce")}>Debounce</button>
          <button onClick={() => router.push("/throttle")}>Throttling</button>
          <button onClick={() => router.push("/propagation")}>Propagation</button>
          <button onClick={() => router.push("/bubbling")}>Bubbling</button>
          <button onClick={() => router.push("/observer")}>Int-Observer</button>
        </div>
      </div>
      <style global jsx>{`
      .section_hooks{
        padding:20px;
      }
      .section_bp{
        padding:20px;
      }
      `}</style>
    </div>
  );
}

// Home.getInitialProps = async (context) => {
//   console.log(context);
//   const res = {a:1,b:2}
//   return {c: res}
// }

// export async function getServerSideProps(context) {
//   return {
//     props: context.query, // will be passed to the page component as props
//   }
// }