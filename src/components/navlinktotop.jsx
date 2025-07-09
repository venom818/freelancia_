import { useLocation, useNavigate } from "react-router-dom";
import { useRefresh } from "@/contexts/refreshcontext";

const NavLinkToTop = ({ to, children, className }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { triggerRefresh } = useRefresh();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      triggerRefresh(); // triggers form reset in Contact page
    } else {
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default NavLinkToTop;
