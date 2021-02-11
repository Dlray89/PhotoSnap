import React from 'react';
import {Link } from 'react-router-dom'
import {makeStyles, Grid, Button, Hidden, useTheme, useMediaQuery} from '@material-ui/core'
import Logo from '../../assets/shared/desktop/logoWhite.svg'

import Facebook from '../../assets/shared/desktop/facebook.svg'
import Instagram from '../../assets/shared/desktop/instagram.svg'
import Pinterest from '../../assets/shared/desktop/pinterest.svg'
import Twitter from '../../assets/shared/desktop/twitter.svg'
import Youtube from '../../assets/shared/desktop/youtube.svg'

const useStyles = makeStyles((theme) => ({
    footer:{
        background:'black',
        [theme.breakpoints.down('sm')]:{
        }
    },
    
    firstContainer:{
        width:'45%',
        [theme.breakpoints.down('md')]:{
        },
        [theme.breakpoints.down('sm')]:{
        }

    },
    logoSocialMediaContainer:{
        width:'30%',
        height:'8em',
        [theme.breakpoints.down('md')]:{
            width:'100%',
        },
        [theme.breakpoints.down('sm')]:{
        }
    },
    logoContainer:{
        width:"100%",
        [theme.breakpoints.down('md')]:{
            width:'72%',
        },
        [theme.breakpoints.down('sm')]:{
            margin:0,
            width:'100%',
            textAlign:'center'
        }

    },
    logo:{
        [theme.breakpoints.down('md')]:{
            marginRight:'13em'
        },
        [theme.breakpoints.down('sm')]:{
            margin: 0
        }
    },
    socialMediaContainer:{
        width:"100%",
        marginRight:'2em',
        [theme.breakpoints.down('md')]:{
            width:'40%',
            marginRight:'10.5em',
        },
        [theme.breakpoints.down('sm')]:{
            margin: 0,
            width:'100%'
        }
    },
    socialMedia:{

    },
    linksContainer:{
       
        width:'10em'
    },
    links:{ 
        textDecoration:'none',
        color:'white',
        '&:hover':{
           color:'#dfdfdf' }

    },
    secondContainer:{
        width:'30%',
        marginRight:'6.5em',
        height:'8em',
        [theme.breakpoints.down('sm')]:{
            width:'45%',
            margin:0
        }
    },
    footerButtonContainer:{
        width:'40%',
        textAlign:'right',
        marginRight:'0.98em',
        [theme.breakpoints.down('md')]:{
            width:'75%',
            textAlign:'right',
            marginRight:'0.45em'
        },
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            textAlign:'center',
        }
    },
    footerButton:{
        color:'white'
    },
    footerCopyright:{
        width:'70%',
        fontSize:'1em',
        color:'white',
        textAlign:'right',
        marginRight:'1em',
        [theme.breakpoints.down('md')]:{
            width:'100%',
            textAlign:'right',
        },
        [theme.breakpoints.down('sm')]:{
            textAlign:'center',
            fontSize:'0.65em'
        }

    },
    tabletlinkContainer:{
        width:'80%',
        marginRight:'3em'
    },
    tabletLinks:{
        fontSize:'0.75em',
        textDecoration:'none',
        color:'white'

    },
    mobileLinksContainer:{
    }
    
}))



const Footer = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'))

    // const tabletLinks = (
    //     <Grid className={classes.linksContainer} item container direction='column' justify='space-evenly' alignItems='center'>
    //     <Grid item className={classes.links} component={Link}>Home</Grid>
    //     <Grid item className={classes.links} component={Link}>Stories</Grid>
    //     <Grid item className={classes.links} component={Link}> Features</Grid>
    //     <Grid item className={classes.links} component={Link}>Pricing</Grid>
    // </Grid>
    // )
    return(
        <Grid container direction={matchSM ? 'column' : 'row'} justify='space-between' alignItems='center' className={classes.footer}>
            <Grid item container direction='row' justify='space-evenly' alignItems='center' className={classes.firstContainer}>

                <Grid className={classes.logoSocialMediaContainer} item container direction='column' justify='space-evenly' alignItems='center' component={Link} to='/' >
                    <Grid item className={classes.logoContainer}>
                        <img className={classes.logo} alt='logo of photosnap' src={Logo}  />
                    </Grid>

                    <Hidden lgUp smDown>
                    <Grid className={classes.tabletlinkContainer} item container direction='row' justify='space-evenly' alignItems='center'>
                    <Grid item className={classes.tabletLinks} component={Link} to='/'>Home</Grid>
                    <Grid item className={classes.tabletLinks} component={Link} to='/stories'>Stories</Grid>
                    <Grid item className={classes.tabletLinks} component={Link} to='/features'>  Features</Grid>
                    <Grid item className={classes.tabletLinks} component={Link} to='/pricing'>Pricing</Grid>
                </Grid>
                    </Hidden>

                    <Grid className={classes.socialMediaContainer} item container direction='row' justify='space-evenly' alignItems='center'>
                            <Grid item className={classes.socialMedia}>
                                <img alt='icon of facebook' src={Facebook}   />
                            </Grid>
                            <Grid item>
                            <img alt='icon of youtube' src={Youtube}   />

                            </Grid>
                            <Grid item>
                            <img alt='icon of twitter ' src={Twitter}   />
                            </Grid>
                            <Grid item>
                            <img alt='icon of Pinterest' src={Pinterest}   />

                            </Grid>
                            <Grid item>
                            <img alt='icon of instagram' src={Instagram}   />
                            </Grid>
                    </Grid>
                </Grid>
                
                <Hidden mdDown>
                <Grid className={classes.linksContainer} item container direction='column' justify='space-evenly' alignItems='center'>
                    <Grid item className={classes.links} component={Link} to='/'>Home</Grid>
                    <Grid item className={classes.links} component={Link} to='/stories'>Stories</Grid>
                    <Grid item className={classes.links} component={Link} to='/features'> Features</Grid>
                    <Grid item className={classes.links} component={Link} to='/pricing'>Pricing</Grid>
                </Grid>
                </Hidden>

                <Hidden mdUp>
                <Grid className={classes.mobileLinksContainer} item container direction='column' justify='space-evenly' alignItems='center'>
                    <Grid item className={classes.links} component={Link} to='/'>Home</Grid>
                    <Grid item className={classes.links} component={Link} to='/stories'>Stories</Grid>
                    <Grid item className={classes.links} component={Link} to='/features'> Features</Grid>
                    <Grid item className={classes.links} component={Link} to='/pricing'>Pricing</Grid>
                </Grid>
                </Hidden>

               

            </Grid>

            <Grid item container direction='column' justify='space-evenly' alignItems={matchSM ? 'center':'flex-end'} className={classes.secondContainer}>
                <Grid item className={classes.footerButtonContainer}>
                    <Button className={classes.footerButton}>Get an Invite</Button>
                </Grid>

                <Grid item className={classes.footerCopyright}>
                    &copy; 2019. All Rights Reserved
                </Grid>

            </Grid>
        </Grid>
    )
}


export default Footer