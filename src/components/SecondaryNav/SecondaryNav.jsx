import React from 'react'
import styles from "./SecondaryNav.module.scss";
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
  return (
    <div className={styles.topHeader}>
      <Container className={styles.secondaryNav}> 
			<a href='#'> CondosOttawa.com </a>
			<div>
        <FontAwesomeIcon icon={faUser} className={styles.socialmediaIcons}/>

			</div>
			<div>
				<a href='#'> Login </a>
				<a href='#'> Sign-Up </a>
			</div>
			<div>
          <FontAwesomeIcon icon={['fab', 'facebook-f']} className={styles.socialmediaIcons}/>
          <FontAwesomeIcon icon={['fab', 'twitter']} className={styles.socialmediaIcons}/>
          <FontAwesomeIcon icon={['fab', 'youtube']} className={styles.socialmediaIcons}/>
			</div>
			<button>Contact</button>
      </Container>
    </div>
  )
}
