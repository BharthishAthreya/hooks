import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";

export default function Types() {
  const router = useRouter();
  const UseState = dynamic(() => import("../components/hooks/UseState"));
  const UseEffect = dynamic(() => import("../components/hooks/UseEffect"));
  const UseMemo = dynamic(() => import("../components/hooks/UseMemo"));
  const UseRef = dynamic(() => import("../components/hooks/UseRef"));
  const Usecontext = dynamic(() => import("../components/hooks/Usecontext"));
  const UseReducer = dynamic(() => import("../components/hooks/UseReducer"));
  const Debounce = dynamic(() => import("../components/boilerplates/Debounce"));
  const Throttle = dynamic(() => import("../components/boilerplates/Throttle"));
  const Propagation = dynamic(() => import("../components/boilerplates/Propagation"));
  const Bubbling = dynamic(() => import("../components/boilerplates/Bubbling"));
  const Observer = dynamic(() => import("../components/boilerplates/Observer"));

  const renderComp = (compName) => {
    switch (compName) {
      case "usestate":
        return <UseState />;
      case "useeffect":
        return <UseEffect />;
      case "usememo":
        return <UseMemo />;
      case "useref":
        return <UseRef />;
      case "usecontext":
        return <Usecontext />
      case "usereducer":
        return <UseReducer />
      case "debounce":
        return <Debounce />
      case "throttle":
        return <Throttle />
      case "propagation":
        return <Propagation />
      case "bubbling":
        return <Bubbling />
      case "observer":
        return <Observer />
    }
  };

  return (
    <div className="hooks">
      <div className="backimage" style={{ marginTop: "20px" }}>
        <Image
          src="/back.png"
          alt="backbtn"
          width={25}
          height={25}
          onClick={() => router.back()}
        />
      </div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        {router?.query?.type?.toUpperCase()}
      </h2>
      {renderComp(router.query.type)}
    </div>
  );
}
