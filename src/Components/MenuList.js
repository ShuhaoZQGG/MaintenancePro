import { useState } from 'react';
import AuthenticationButton from './Buttons/Auth-button';
import logo from '../images/1.png'
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

export default function MenuList() {
  const { user } = useAuth0();
  const { isAuthenticated, isLoading } = useAuth0();
  const [email, setEmail] = useState('');
	const [isActive, setisActive] = useState(false);
  user && !email && setEmail(user.email)

	const toggleNav = () => {
		setisActive(!isActive)
	}

  const LogInView =
	<nav className="navbar" role="navigation" aria-label="main navigation">
		  <div className="navbar-brand">
				<img alt="MaintenancePro" className="logo" src={logo}/>
			
		    <a 
					onClick={toggleNav}
					role="button" 
					className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
					aria-label="menu" 
					aria-expanded="false" 
					data-target="navbarBasicExample"
					id='burger'
				>
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		    </a>
		  </div>
			
			
		  <div 
				id="navbarBasicExample" 
				className={`navbar-menu ${isActive ? "is-active" : ""}`}
			>
				<div className="menu-label">
					{isLoading && <li className="tag">Loading...</li>}
      	  {(!isAuthenticated && !isLoading) && <li className="tag">Please Log IN</li>}
      	  {isAuthenticated && <Profile nickname={user.nickname} email={email} picture={user.picture} />}
				</div>
		    <div className="navbar-start">
					
		    </div>
			
		    <div className="navbar-end">
		      <div className="nav-list">
						{(!isAuthenticated && !isLoading) &&  <AuthenticationButton onClick={toggleNav}/>}
            {/* <AuthenticationButton onClick={toggleNav}/> */}
		      </div>
		    </div>
		  </div>
		</nav>

    // <aside className="menu">
    //   <img className="logo" alt="MaintenancePro" src={logo} />
    //   <ul className="links">
    //     {isLoading && <li className="menu-label">Loading...</li>}
    //     {isAuthenticated &&
    //       <Profile nickname={user.nickname} email={email} picture={user.picture} />
    //     }
    //     {(!isAuthenticated && !isLoading) && <li className="nav-list"><AuthenticationButton /></li>}

    //   </ul>
    // </aside>


  const adminView = (
		<nav className="navbar" role="navigation" aria-label="main navigation">
		  <div className="navbar-brand">
				<img alt="MaintenancePro" className="logo" src={logo}/>
			
		    <a 
					onClick={toggleNav}
					role="button" 
					className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
					aria-label="menu" 
					aria-expanded="false" 
					data-target="navbarBasicExample"
					id='burger'
				>
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		    </a>
		  </div>
			
			
		  <div 
				id="navbarBasicExample" 
				className={`navbar-menu ${isActive ? "is-active" : ""}`}
			>
				<div className="menu-label">
					{isLoading && <li className="tag">Loading...</li>}
      	  {(!isAuthenticated && !isLoading) && <li className="tag">Please Log IN</li>}
      	  {isAuthenticated && <Profile nickname={user.nickname} email={email} picture={user.picture} />}
				</div>
				<hr className="underline"/>
		    <div className="navbar-start">
					<div className="nav-list">
						<Link to="/today" onClick={toggleNav} className="link">
							<div>
								<i className="far fa-eye"></i>
								Today at Glance
							</div>
						</Link>
					</div>
					<div className="nav-list">
						<div className="link">
							<Link to="/workorders" onClick={toggleNav}>
								<i className="far fa-clipboard"></i>
								Work Orders
							</Link>
							<Link to="/workorders/create" className="add" onClick={toggleNav}>
								<span>+</span>
							</Link>
						</div>
          </div>
					<div className="nav-list">
						<div className="link">
							<Link to="/inventory" onClick={toggleNav}>
								<i className="fas fa-wrench"></i>
								Inventories
							</Link>
							<Link to="/inventory/create" className="add" onClick={toggleNav}>
								<span>+</span>
							</Link>
						</div>
          </div>
					<div className="nav-list">
						<Link to="/summary" className="link" onClick={toggleNav}>
							<div>
								<i className="far fa-list-alt"></i>
								Summary
							</div>
						</Link>
					</div>
					<div className="nav-list">
						<Link to="/chat" className="link" onClick={toggleNav}>
							<div>
								<i className="fas fa-comment-alt"></i>
								Chat Platform
							</div>
						</Link>
					</div>
		    </div>
			
		    <div className="navbar-end">
		      <div className="nav-list">
            <AuthenticationButton onClick={toggleNav}/>
		      </div>
		    </div>
		  </div>
		</nav>
	)
		
    /* // <aside className="menu">
    //   <img className="logo" alt="MaintenancePro" src={logo} />

    //   {isLoading && <li className="menu-label">Loading...</li>}
    //   {(!isAuthenticated && !isLoading) && <li className="menu-label">Please Log IN</li>}
    //   {isAuthenticated && <Profile nickname={user.nickname} email={email} picture={user.picture} />}
    //   <hr />
    //   <ul className="links">
    //     <li className="nav-list">
    //       <Link to="/today" className="link">
    //         <div>
    //           <i className="far fa-eye"></i>
    //           Today at Glance
    //         </div>
    //       </Link>
    //     </li>

    //     <li className="nav-list">
    //       <div className="link">
    //         <Link to="/workorders">
    //           <i className="far fa-clipboard"></i>
    //           Work Orders
    //         </Link>
    //         <Link to="/workorders/create">
    //           <span>+</span>
    //         </Link>
    //       </div>
    //     </li>

    //     <li className="nav-list">
    //       <div className="link">
    //         <Link to="/inventory">
    //           <i className="fas fa-wrench"></i>
    //           Inventories
    //         </Link>
    //         <Link to="/inventory/create">
    //           <span>+</span>
    //         </Link>
    //       </div>
    //     </li>

    //     <li className="nav-list">
    //       <Link to="/summary" className="link">
    //         <div>
    //           <i className="far fa-list-alt"></i>
    //           Summary
    //         </div>
    //       </Link>
    //     </li>
    //     <li className="nav-list">
		// 			<Link to="/chat" className="link">
		// 				<div>
		// 					<i className="fas fa-comment-alt"></i>
		// 					Chat Platform
		// 				</div>
		// 			</Link>
		// 		</li>
    //     <li className="nav-list logout">
    //       <AuthenticationButton />
    //     </li>
    //   </ul>
    // </aside>; */

  const technicianView = (
		<nav className="navbar" role="navigation" aria-label="main navigation">
		  <div className="navbar-brand">
				<img alt="MaintenancePro" className="logo" src={logo}/>
			
		    <a 
					onClick={toggleNav}
					role="button" 
					className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
					aria-label="menu" 
					aria-expanded="false" 
					data-target="navbarBasicExample"
					id='burger'
				>
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		      <span aria-hidden="true"></span>
		    </a>
		  </div>
			
			
		  <div 
				id="navbarBasicExample" 
				className={`navbar-menu ${isActive ? "is-active" : ""}`}
			>
				<div className="menu-label">
					{isLoading && <li className="tag">Loading...</li>}
      	  {(!isAuthenticated && !isLoading) && <li className="tag">Please Log IN</li>}
      	  {isAuthenticated && <Profile nickname={user.nickname} email={email} picture={user.picture} />}
				</div>
				<hr className="underline"/>
		    <div className="navbar-start">
					<div className="nav-list">
							<Link to="/workorders" onClick={toggleNav} className="link">
							<div >
								<i className="far fa-clipboard"></i>
								Work Orders
							</div>
							</Link>
          </div>
					<div className="nav-list">
						<Link to="/chat" className="link" onClick={toggleNav}>
							<div>
								<i className="fas fa-comment-alt"></i>
								Chat Platform
							</div>
						</Link>
					</div>
		    </div>
			
		    <div className="navbar-end">
		      <div className="nav-list">
            <AuthenticationButton onClick={toggleNav}/>
		      </div>
		    </div>
		  </div>
		</nav>
	)
    
		
		// <aside className="menu">
    //   <img className="logo" alt="MaintenancePro" src={logo} />
    //   {isLoading && <li className="menu-label">Loading...</li>}
    //   {(!isAuthenticated && !isLoading) && <li className="menu-label">Please Log IN</li>}
    //   {isAuthenticated && <Profile nickname={user.nickname} email={email} picture={user.picture} />}
    //   <hr />
    //   <ul className="links">
    //     <li className="nav-list">
		// 				<Link to="/workorders" className="link">
		// 					<div>
		// 						<i className="far fa-clipboard"></i>
		// 						Work Orders
		// 					</div>
		// 				</Link>
		// 		</li>
    //     <li className="nav-list">
		// 			<Link to="/chat" className="link">
		// 				<div>
		// 					<i className="fas fa-comment-alt"></i>
		// 					Chat Platform
		// 				</div>
		// 			</Link>
		// 		</li>
    //     <li className="nav-list"><AuthenticationButton /></li>
    //   </ul>
    // </aside>;

  return (
    (user && user.email === 'admin@gmail.com') ? adminView :
      (user && user.email !== 'admin@gmail.com') ? technicianView :
        LogInView
  )
}