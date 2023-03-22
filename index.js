import "/public/fonts/index.css";

// function tiny(string) {
//   if (typeof string !== "string") throw new TypeError("Tiny wants a string!");
//   return string.replace(/\s/g, "");
// }

const ESGDonation = () => {
  let page = 1;

  const changePage = (number) => {
    page = number;
  };

  const renderedPage = () => {
    if (page == 1) {
      return <OptIn changePage={changePage} />;
    }
    if (page == 2) {
      return <Location changePage={changePage} />;
    }
    if (page == 3) {
      return <Project changePage={changePage} />;
    }
  };

  return (
    <div className="main">
      <div className="mainimg">
        <img src="public/icons/g5327.png" alt="" />
      </div>

      <div className="content">
        <h1>Plant A Tree</h1>
        {renderedPage()}
      </div>
    </div>
  );
};

const OptIn = (props) => {
  return (
    <>
      <p>
        Make the best out of your journey from{" "}
        <span className="locationlink" onClick={() => props.changePage(2)}>
          Stafford
        </span>{" "}
        to Silverstone by saving the environment. 89 miles of travel can
        neutralise 112 kilograms of CO
        <sub>2</sub> emmissions
      </p>
      <div className="optInSelect">
        <input
          type="radio"
          id="optinNo"
          name="optin"
          value="no"
          defaultChecked
        />
        <label htmlFor="optinNo">
          <UncheckedIcon />
          <CheckedIcon />
          I'd like to skip this for now
        </label>
        <br />

        <input type="radio" id="optinYes" name="optin" value="yes" />
        <label htmlFor="optinYes">
          <UncheckedIcon />
          <CheckedIcon />
          Donate £ 1.00 to plant a tree to Straffordshire UK <br />
        </label>
        <span className="projectslink" onClick={() => props.changePage(3)}>
          Choose which project you like to contribute
        </span>
        <br />
      </div>
    </>
  );
};

function UncheckedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
      <path d="M24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
    </svg>
  );
}
function CheckedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
      <path d="M21.05 33.1 35.2 18.95l-2.3-2.25-11.85 11.85-6-6-2.25 2.25ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
    </svg>
  );
}

module.exports = ESGDonation;
