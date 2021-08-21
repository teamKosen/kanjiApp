import { TextField, Button } from '@material-ui/core';
import { useStyles } from './drawer-content.style';
import { FunctionComponent } from "react";

type Props = {
    searchTag: () => void;
    budjetList: number[];
    currentBudjet: any;
    selectBudjetClear: () => void;
    selectCurrentBudjet: (budjet: any) => void;
    numberOfPeopleList: number[];
    currentNumberOfPeople: any;
    selectNumberOfPeopleClear: () => void;
    selectCurrentNumberOfPeople: (numberOfPeople: any) => void;
    genreList: string[];
    currentGenre: any;
    selectGenreClear: () => void;
    selectCurrentGenre:  (genre: any) => void;
    purposeList: string[];
    currentPurpose: any;
    selectPurposeClear: () => void;
    selectCurrentPurpose:  (purpose: any) => void;
    handleCloseDrawer: () => void;
};

export const DrawerContent:FunctionComponent<Props> = (props) => {
    const {
        searchTag,
        budjetList,
        currentBudjet,
        selectBudjetClear,
        selectCurrentBudjet,
        numberOfPeopleList,
        currentNumberOfPeople,
        selectNumberOfPeopleClear,
        selectCurrentNumberOfPeople,
        genreList,
        currentGenre,
        selectGenreClear,
        selectCurrentGenre,
        purposeList,
        currentPurpose,
        selectPurposeClear,
        selectCurrentPurpose,
        handleCloseDrawer,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.drawerContentPosition}> 
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" className={classes.searchFieldInput}/>
            </div>
            <Button onClick={searchTag}>たぐけんさく</Button>
            <div className={classes.cardPosition}>
                <div className={classes.card}>
                    <h2>予算</h2>
                    <div>
                        <ul className={classes.lists}>
                            {budjetList.map((budjet) => (
                                <li key={budjet} >
                                    {
                                        (budjet === currentBudjet) ? (
                                            <div 
                                                className={classes.currentTag}
                                                onClick={() => selectBudjetClear()}
                                            >
                                                ＃{budjet}円
                                            </div>
                                        ) : (  
                                            <div 
                                                className={classes.anotherTag} 
                                                onClick={() => selectCurrentBudjet(budjet)}
                                            >
                                                #{budjet}円
                                            </div>
                                        )
                                    }
                                </li>   
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={classes.card}>
                    <h2>人数</h2>
                    <div>
                        <ul className={classes.lists}>
                            {numberOfPeopleList.map((numberOfPeople) => (
                                <li key={numberOfPeople}>
                                    {
                                        (numberOfPeople === currentNumberOfPeople) ? (
                                            <div 
                                                className={classes.currentTag}
                                                onClick={() => selectNumberOfPeopleClear()}
                                            >
                                                ＃{numberOfPeople}人
                                            </div>
                                        ) : (  
                                            <div 
                                                className={classes.anotherTag} 
                                                onClick={() => selectCurrentNumberOfPeople(numberOfPeople)}
                                            >
                                                #{numberOfPeople}人
                                            </div>
                                        )
                                    }
                                </li>  
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={classes.card}>
                    <h2>ジャンル</h2>
                    <div>
                        <ul className={classes.lists}>
                            {genreList.map((genre) => (
                                <li key={genre}>
                                    {
                                        (genre === currentGenre) ? (
                                            <div 
                                                className={classes.currentTag}
                                                onClick={() => selectGenreClear()}
                                            >
                                                ＃{genre}
                                            </div>
                                        ) : (  
                                            <div 
                                                className={classes.anotherTag} 
                                                onClick={() => selectCurrentGenre(genre)}
                                            >
                                                #{genre}
                                            </div>
                                        )
                                    }
                                </li>  
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={classes.card}>
                    <h2>利用目的</h2>
                    <div>
                        <ul className={classes.lists}>
                            {purposeList.map((purpose) => (
                                <li key={purpose}>
                                    {
                                        (purpose === currentPurpose) ? (
                                            <div 
                                                className={classes.currentTag}
                                                onClick={() => selectPurposeClear()}
                                            >
                                                ＃{purpose}
                                            </div>
                                        ) : (  
                                            <div 
                                                className={classes.anotherTag} 
                                                onClick={() => selectCurrentPurpose(purpose)}
                                            >
                                                #{purpose}
                                            </div>
                                        )
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.drawerCloseButton} onClick={() => handleCloseDrawer()}>閉じる↑</div>
        </div>
    );
};