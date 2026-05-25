import logo from "../assets/img/ChatGPT Image 17 mag 2026, 19_59_08.png";
import { NavLink } from "react-router-dom";
import menu from "../data/menu-nav";
import { useContext } from "react";
import BudgetContext from "../context/BudgetContext";

export default function AppHeader() {
  const { budgetMode, setbudgetMode, toggleBudgetMode } = useContext(BudgetContext);
  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="100" height="90" className="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav grassetto">
            {menu.map((item) => (
              <NavLink
                className="nav-item nav-link"
                to={item.path}
                key={item.id}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        <button type="button" className={`btn ms-auto me-3 ${budgetMode ? "btn-light" : "btn-success"}`} onClick={toggleBudgetMode}>
          <i className={`${budgetMode ? "bi bi-toggle-off" : "bi bi-toggle-on"}`}></i> Modalità Budget
        </button>




      </nav>
    </header>
  );
}
