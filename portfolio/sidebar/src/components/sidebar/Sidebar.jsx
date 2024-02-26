import './sidebar.scss';
import React from 'react';
import { NavLink } from "react-router-dom";
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faChartColumn, faWallet, faChartPie, faEnvelope, faAngleLeft, faAngleRight, faSliders, faPhoneVolume, faAngleUp, faAngleDown, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/logo.png'
import user from '../../assets/user.jpg'
import Tooltip from './tooltip/Tooltip'
import { motion } from 'framer-motion'
const userInfo =  {name:'Loria Clark', email: 'lori.clark@example.com', photo: user };



const routes = [
    { title: 'Home', icon: faHome, path: '/' },
    { title: 'Sales', icon: faChartLine, path: '/sales'  },
    { title: 'Costs', icon: faChartColumn, path: '/costs' },
    { title: 'Payments', icon: faWallet, path: '/payments'},
    { title: 'Finances', icon: faChartPie, path: '/finances'  },
    { title: 'Messages', icon: faEnvelope, path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: faSliders,  path: '/settings' },
    { title: 'Support', icon: faPhoneVolume, path: '/support' },
];


const variantsBasic={
    initial: {
        width:300,

    },
    animate:{
        width:100,

    }
}

const variantsCircles ={
    initial:{y:-10, opacity:0},
    animate:{y:0, opacity:1,
        transition:{duration:0.2, staggerChildren:0.2}},    
}

const variantslogoWrapper = {
    initial:{y:-10, opacity:0},
    animate:{y:0, opacity:1,
        transition:{duration:0.3, staggerChildren:0.3, delayChildren:0.3}}
}


const variantsNav = {
    initial:{y:-40, opacity:0},
    animate:{y:0, opacity:1,
        transition:{duration:0.2, staggerChildren:0.4, delayChildren:0.6}}
}

const variantsNavBottom = {
    initial:{y:40, opacity:0},
    animate:{y:0, opacity:1,
        transition:{duration:0.4, staggerChildren:0.6, delayChildren:2.2}}
}

const variantsProfile = {
    initial:{y:40, opacity:0},
    animate:{y:0, opacity:1,
        transition:{duration:0.4, staggerChildren:0.4, delayChildren:2}}
}

const variantBtn = {
    initial : {
        x: 0,
        
    },
    animateClose : {
        x:95,
    },
    animateOpen : {
        x:0,
    }
}

const btnOnLoad = {
    initial: {
        x:200,
        y:0,
        opacity:0
    },
    animate: {
        x:0,
        y:0,
        opacity:1,
        transition: {
            duration:1,
            delay:3.5,
        }
    }
}

const userProfile = {
    initial: {
        y: [0, 0], 
        opacity: 0,
    },
    animate : {
        y: [50, 0 ],
        opacity:[0, 1],
        transition: { duration: 0.5, delay:0}
    }
}

const userProfileUl = {
    initial: {
        y: [0, 0], 
        opacity: 0,
    },
    animate : {
        y: [50, 0 ],
        opacity:[0, 1],
        transition: { duration: 0.5, delay:0.5}
    }
}

const userProfileBtn = {
    initial: {
        opacity: 0,
    },
    animate : {
        opacity:[0, 1],
        transition: { duration: 0.5, delay:1}
    }
}

// initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 2.5 }}

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: true,
            isVisible: true,

        };


    } 
    
    toggleSidebar = () => {
        this.setState((state) => ({ isOpened: !state.isOpened }) );
    };

    
    

    toggleTooltip = () => {      
            this.setState((state) => ({isVisible: !state.isVisible}));        
    }

    

    
    handleClick = (path ) =>{
        console.log(`going to "${path}"`);
    }
   


    render() {
        const { isOpened } = this.state;
        const { isVisible } = this.state; 
        // const containerClassnames = classnames('sidebar', { opened: isOpened }, {isVisible: false});
        const containerClassnames = classnames('sidebar', { opened: isOpened });

      
        return (
            <motion.div className={containerClassnames} 
            variants={variantsBasic} 
            animate={isOpened ?  'initial' : 'animate' }
            >
                <motion.div className="circles" variants={variantsCircles} initial='initial' animate='animate'>
                    
                    <motion.a variants={variantsCircles} href='#!' className="circle red"></motion.a>
                    <motion.a variants={variantsCircles} href='#!' className="circle yellow"></motion.a>
                    <motion.a variants={variantsCircles} href='#!' className="circle green"></motion.a>
                </motion.div>
                <motion.div className='logoWrapper' initial={{overflowX: 'hidden'}} 
                animate={{overflowX: 'visible'}}
                transition={{delay:2, duration:1}}
                >
                    <motion.div className="logoWrapper-item" variants={variantslogoWrapper} initial='initial' animate='animate'>
                        <motion.img
                            className='logo'
                            src={ logo }
                            alt="TensorFlow logo"
                            variants={variantslogoWrapper}
                        />
                        <motion.span variants={variantslogoWrapper}>TensorFlow</motion.span>
                    </motion.div>
                    
                    <motion.div className='btn-wrapper' variants={btnOnLoad} initial='initial' animate='animate'>

                        <motion.button onClick={ this.toggleSidebar }
                        variants={variantBtn}
                        initial='initial'
                        animate={isOpened ? 'animateOpen' : 'animateClose'}
                        className={ isOpened ? 'btn-open' : 'btn-close' }>
                            <FontAwesomeIcon icon={ isOpened ? faAngleLeft : faAngleRight } />
                        </motion.button>

                        <Tooltip classcomponent={'shrink'}>
                        SHRINK
                        </Tooltip>

                    </motion.div>
                </motion.div>

                <motion.div className='navItems' variants={variantsNav} initial='initial' animate='animate' >
                    {
                        routes.map((route) => (
                        <NavLink className={({isActive})=> isActive ? 'navItem active' : 'navItem'} 
                        to={route.path}
                        key={ route.title}
                        >
                            <motion.div className="motion-div"
                            variants={variantsNav}                        
                            >
                                <FontAwesomeIcon className='icon' icon={ route.icon } />
                                <span>{ route.title }</span>
                                {isOpened ? '' :
                                <Tooltip classcomponent='smallNav'>
                                { route.title }
                                </Tooltip>
                                }
                            </motion.div>
                            
                        </NavLink>
                        ))
                    }
                               
                </motion.div>
                

                <motion.div className='navItems-bottom' variants={variantsNavBottom} initial='initial' animate='animate'>
                    {
                        bottomRoutes.map((route) => (
                            <NavLink key={ route.title } to={route.path} 
                            className={({isActive}) => isActive ? 'navItem active' : 'navItem'}>
                                <motion.div className="motion-div" variants={variantsNavBottom}>
                                    <FontAwesomeIcon icon={ route.icon } className='icon' />
                                    <span>{ route.title }</span>

                                    {isOpened ? '' :
                                    <Tooltip classcomponent='smallNav'>
                                    { route.title }
                                    </Tooltip>
                                    }
                                </motion.div>
                                
                            </NavLink>
                        ))
                    }
                </motion.div>

                <hr />

                <motion.div className='userProfile' 
                variants={variantsProfile}
                initial='initial'
                animate='animate'
                onClick={ isOpened?  null : this.toggleTooltip  }
                >
                    <motion.img variants={variantsProfile} src={userInfo.photo} alt={userInfo.name} />
                    <motion.div variants={variantsProfile} className="userProfile-info">
                        <span>User Account</span>
                        <h3>{userInfo.name.slice(0, 7) + '.'}</h3>
                    </motion.div>
                    <motion.button variants={variantsProfile} className='userProfile-btn-open'>
                        <FontAwesomeIcon icon={faAngleUp} />
                        <FontAwesomeIcon icon={faAngleDown} />
                    </motion.button>


                    {isVisible ? '' : 
                    <Tooltip 
                    classcomponent={'hiddenProfile'} 
                    style={{opacity:0}}
                    > 
                    <motion.div className="infoPerson"
                    variants={userProfile}
                    animate={isVisible ? 'initial' : 'animate'}
                    >
                        <img src={userInfo.photo} alt={userInfo.name} />
                        <div className="infoPerson__contact">
                            <h3>{userInfo.name}</h3>
                            <span>{userInfo.email}</span>
                        </div>
                    </motion.div>

                     <motion.ul variants={userProfileUl} animate={isVisible? 'initial' : 'animate'}>
                        <li><a href="#!">View Profile</a></li>
                        <li><a href="#!">Manage subscriptions</a></li>
                        <li><a href="#!">View history</a></li>
                     </motion.ul>   

                     <motion.div className='logout' 
                     variants={userProfileBtn}
                     animate={isVisible ? 'initial' : 'animate'}
                    >
                        <div className="logout-btn">
                            <span>Logout</span>
                            <button>
                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            </button>
                        </div>
                        <div className="logout-bottom">
                            <span>v 1.0.34</span>
                            <a href="#!">Terms and conditions</a>
                        </div>
                                               

                     </motion.div>
                    </Tooltip>
                    }                    

                    
                </motion.div>

                
            </motion.div>
        );
    }
}



