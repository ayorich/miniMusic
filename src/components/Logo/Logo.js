import React from 'react';
import {Link} from 'react-router-dom';

import './Logo.css';

const logo = () => <span className="header__logo"><Link to="/" exact='true' >
                      MINIMUSIC
                    </Link></span>
                                        

export default logo;