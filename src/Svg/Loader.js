import "./Loader.scss";

const LoaderIcon = () => (
  <div className="loaderIcon">
    <div className="loaderIconInner">
      <svg
        width="230"
        height="30"
        viewBox="0 0 230 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="103" cy="9" r="3" fill="#fff" />
        <circle cx="115" cy="3" r="3" fill="#fff" />
        <circle cx="127" cy="9" r="3" fill="#fff" />
        <circle
          cx="127"
          cy="21"
          r="3"
          transform="rotate(-180 127 21)"
          fill="#fff"
        />
        <circle
          cx="115"
          cy="27"
          r="3"
          transform="rotate(-180 115 27)"
          fill="#fff"
        />
        <circle
          cx="103"
          cy="21"
          r="3"
          transform="rotate(-180 103 21)"
          fill="#fff"
        />
      </svg>
    </div>
  </div>
);

export default LoaderIcon;
