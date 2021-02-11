import { createMuiTheme} from '@material-ui/core'

const mainAccent = '#c471ed'
// 'linear-gradient(to left, #12c2e9, #c471ed, #f64f59)
const pureBlack = '#000000'
// const lightGrey = '#dfdfdf'
// const pureWhite = '#ffffff'


export default createMuiTheme({
    palette:{
        primary:{
            main:pureBlack
        },
        secondary:{
                main: mainAccent
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