import { NavLink } from "react-router";

export default function Navbar(){
    return (
        <nav className="flex items-center justify-center gap-4 p-6 text-muted-foreground">
            <NavLink to={'/'}>
                Home
            </NavLink>
            <NavLink to={'/login'}>
                Login
            </NavLink>
            <NavLink to={'/signup'}>
                Signup
            </NavLink>
            <NavLink to={'/forget-password'}>
                Forget Password
            </NavLink>
        </nav>
    )
}