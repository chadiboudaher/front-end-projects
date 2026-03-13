import "./SideBar.css";
export function SideBar() {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <h3 className="app-name">doable.</h3>
          <div className="menu-container">
            <p className="menu">MENU</p>
            <div className="menu-content">
              <div className="menu-part">
                <div
                  className="bullet"
                  style={{ backgroundColor: "#ffaa5a" }}
                ></div>
                <p className="all-tasks">All Tasks</p>
              </div>
              <p className="tasks-number">8</p>
            </div>
            <div className="menu-content">
              <div className="menu-part">
                <div
                  className="bullet"
                  style={{ backgroundColor: "#ffd25a" }}
                ></div>
                <p className="all-tasks">Today</p>
              </div>
              <p className="tasks-number">3</p>
            </div>
            <div className="menu-content">
              <div className="menu-part">
                <div
                  className="bullet"
                  style={{ backgroundColor: "#fff05a" }}
                ></div>
                <p className="all-tasks">Upcoming</p>
              </div>
              <p className="tasks-number">5</p>
            </div>
            <div className="menu-content">
              <div className="menu-part">
                <div
                  className="bullet"
                  style={{ backgroundColor: "grey" }}
                ></div>
                <p className="all-tasks">Completed</p>
              </div>
              <p className="tasks-number">12</p>
            </div>
          </div>
          <hr />
          <div className="list-container">
            <p className="list">LISTS</p>

            <div className="list-content">
              <div className="list-part">
                <div
                  className="bullet"
                  style={{ backgroundColor: "#ffaa5a" }}
                ></div>
                <p className="all-tasks">Work</p>
              </div>
              <p className="lists-number">4</p>
            </div>

            <div className="list-content">
              <div className="list-part">
                <div
                  className="bullet"
                  style={{ backgroundColor: "#ffd25a" }}
                ></div>
                <p className="all-tasks">Personal</p>
              </div>
              <p className="lists-number">2</p>
            </div>

            <div className="list-content">
              <div className="list-part">
                <div
                  className="bullet"
                  style={{ backgroundColor: "#fff05a" }}
                ></div>
                <p className="all-tasks">Learning</p>
              </div>
              <p className="lists-number">2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
