import { createMuiTheme} from '@material-ui/core'

// const mainAccent = ''
const pureBlack = '#000000'
// const lightGrey = '#dfdfdf'
const pureWhite = '#ffffff'


export default createMuiTheme({
    palette:{
        primary:{
            main:pureBlack
        },
        secondary:{
                main: pureWhite
        }
    },
    typography:{
        
    },
    overrides:{
        MuiDrawer:{
            paper:{
                border:'solid 2px green',
                height:"30em",
                position:'absolute',
                zIndex: 1,


            },
         root:{
         }
        }
    }
})