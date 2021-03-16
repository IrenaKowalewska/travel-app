import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#77cfb8',
      padding: '10px 25px',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.5rem'
   },
   logo_rs: {
     width: 70,
   },
   authors: {
      display: 'flex',
      flexDirection: 'column'
   },
   authors_link: {
      color: '#031e11',
      textDecoration: 'none',
   }
 }));

function Footer({ authors }) {
   const classes = useStyles();
   return (
      <div className={classes.footer}>
         <div className={classes.logo_rs}>
            <a href='https://rs.school/js/'><img src="https://rs.school/images/rs_school_js.svg" alt="rs_school"/></a>
         </div>
         <div>2021</div>
         <div className={classes.authors}>
            <a className={classes.authors_link} href='https://github.com/IrenaKowalewska'>{authors[0]}</a>
            <a className={classes.authors_link} href='https://github.com/Metanix777'>{authors[1]}</a>
            <a className={classes.authors_link} href='https://github.com/Evgenia-cyber'>{authors[2]}</a> 
         </div>
      </div>
   )
}

export default Footer
