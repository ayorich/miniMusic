import React from 'react';
import {Link} from 'react-router-dom';

import MusicLogo from '../../assets/images/logo.png';
import './Logo.css';

const logo = () => <Link to="/" exact='true' >
                     <img src={MusicLogo} alt="Logo" className="header__logo" />
                    </Link>
                                        

export default logo;