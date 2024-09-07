import { CgLogOut } from "react-icons/cg";
import useLogOut from "../../hooks/useLogOut";



function LogoutButton() {
  const { loading, logout } = useLogOut();
  
    return <div className="mt-auto">
      {!loading ? (
        <CgLogOut className="w-6 h-6 text-amaranthPink hover:text-rosePompadour cursor-pointer"
      onClick={logout}/>
      ) : (
          <span className="loading loading-spinner"></span>
      )}
  </div>;
}

export default LogoutButton;

/**
 * import { CgLogOut } from "react-icons/cg";

function LogoutButton() {
    return <div className="mt-auto">
      <CgLogOut className="w-6 h-6 text-amaranthPink hover:text-rosePompadour cursor-pointer"/>
  </div>;
}

export default LogoutButton;

 */
