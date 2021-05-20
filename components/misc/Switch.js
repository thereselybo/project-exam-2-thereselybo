import dynamic from "next/dynamic";

const Switch = dynamic(() => import("bootstrap-switch-button-react"), {
  loading: () => <p>loading</p>,
  ssr: false,
});

export default Switch;
