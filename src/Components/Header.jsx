import { Link } from "react-router-dom";
import {logo} from "../utils/constant";
import {MenuIcon} from '@mui/icons-material/Menu';

const Header =()=>{
    return (
      <div className="flex justify-between py-2 sm:py-4 md:py-8 max-w-full items-center">
      <div className="flex gap-1 sm:gap-3">
        <MenuIcon />
        <image src={logo} alt ="logo"/>
      </div>
      </div>
    );
}
export default Header;