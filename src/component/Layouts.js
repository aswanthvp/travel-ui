export function PageLayout({ children }) {
    return (
      <>
        <div className="d-flex" id="wrapper">
          <div className="w-100">
            <div className="container-fluid">{children}</div>
          </div>
        </div>
      </>
    );
  }
  