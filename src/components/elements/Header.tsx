import {useHistory} from 'react-router-dom';
import {Path} from 'router/routes';

import {
    makeStyles,
    createStyles,
    AppBar,
    Toolbar,
    Button
} from '@material-ui/core';

const useStyles = makeStyles(() => 
    createStyles({
        root: {
            flexGrow: 1,
        },
        header: {
            background: "#6200ea",
        },
    }),
);
const Header = () => {
    
    const classes = useStyles();
    const history = useHistory();

    /**
     * ホーム画面へ遷移する関数
     * @return void
     */
    const transitionHome = () => {
        history.push(Path.home);
    }

    /**
     * 村一覧画面へ遷移する関数
     * @return void
     */
    const transitionVillages = () => {
        history.push(Path.villages);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.header}>
                    <Button style={{color: 'white'}} onClick={transitionHome}>ホーム</Button>　
                    <Button style={{color: 'white'}} onClick={transitionVillages}>村一覧</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
