import { FunctionComponent, useState, useCallback,useEffect } from 'react';
import { useStyles } from "./header.style";
import { Button, InputBase, Drawer} from '@material-ui/core';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DrawerContent } from '../timeline/drawer-content/drawer-content';
import { useUser } from '../../lib/hooks';
import { Notificater } from './components/notificater/notificater';


export const Header:FunctionComponent = () => {
    const style = useStyles();

    const router = useRouter();

    const [currentbudget, setcurrentbudget] = useState();
    const [currentNumberOfPeople, setcurrentNumberOfPeople] = useState();
    const [currentGenre, setcurrentGenre] = useState();
    const [currentPurpose, setcurrentPurpose] = useState();
    const [isOpenDrawer, setDrawerState] = useState(false);
    const [offerplanForuser, setOfferplanForuser] = useState<JSON>();
    const [currentUserName, setCurrentUserName] = useState();

    const [user, { mutate }] = useUser();

    const budgetList = [1000,2000,3000,4000];
    const numberOfPeopleList = [2,4,6,8];
    const genreList = ["中華","和食","イタリアン","エスニック"];
    const purposeList = ["打ち上げ","会食","合コン","同窓会"];

    const selectCurrentbudget = useCallback((budget) => {
        setcurrentbudget(budget)
    },[]);

    const selectbudgetClear = useCallback(() => {
        setcurrentbudget(undefined)
    },[]); 

    const selectCurrentNumberOfPeople = useCallback((numberOfPeople) => {
        setcurrentNumberOfPeople(numberOfPeople)
    },[]);

    const selectNumberOfPeopleClear = useCallback(() => {
        setcurrentNumberOfPeople(undefined)
    },[]);

    const selectCurrentGenre = useCallback((genre) => {
        setcurrentGenre(genre)
    },[]);

    const selectGenreClear = useCallback(() => {
        setcurrentGenre(undefined)
    },[]);   

    const selectCurrentPurpose = useCallback((purpose) => {
        setcurrentPurpose(purpose)
    },[]);

    const selectPurposeClear = useCallback(() => {
        setcurrentPurpose(undefined)
    },[]); 

    const handleOpenDrawer = useCallback(
        () => {
            setDrawerState(true);
    },[]);

    const handleCloseDrawer = useCallback(
        () => {
            setDrawerState(false);
    },[]);

    const SearchTag = useCallback(() => {
        const apiUrl = `http://localhost:3000/api/tagsearch?budget=${currentbudget}&genre=${currentGenre}&numberOfPeople=${currentNumberOfPeople}&purpose=${currentPurpose}`;
        router.push({
            pathname: "./timeline",
            query: { apiUrl: apiUrl}
        });
        setDrawerState(false);
    },[currentbudget,currentGenre,currentNumberOfPeople,currentPurpose,router])

    const handleLogout = async () => {
        await fetch("/api/auth", {
            method: "DELETE",
        });
        mutate(null);
    };

    useEffect(() => {
        if (user) {
            setCurrentUserName(user.name);
        }
    },[user])

    useEffect(() => {
        const request = async () => {
            const res = await fetch(`http://localhost:3000/api/offerplan/offerplanUserdatas?userName=${currentUserName}`);
            const offerplanUserdatas = await res.json()
            setOfferplanForuser(JSON.parse(JSON.stringify(offerplanUserdatas)));
        }
        if(user){
            request();
        }
    },[currentUserName]);

    return (
        <header className={style.header}>
            <Drawer
                anchor="top"
                open={isOpenDrawer}
                onClose={() => handleCloseDrawer()}
            >
                <DrawerContent
                    searchTag={SearchTag}
                    budgetList={budgetList}
                    currentbudget={currentbudget}
                    selectbudgetClear={selectbudgetClear}
                    selectCurrentbudget={selectCurrentbudget}
                    numberOfPeopleList={numberOfPeopleList}
                    currentNumberOfPeople={currentNumberOfPeople}
                    selectNumberOfPeopleClear={selectNumberOfPeopleClear}
                    selectCurrentNumberOfPeople={selectCurrentNumberOfPeople}
                    genreList={genreList}
                    currentGenre={currentGenre}
                    selectGenreClear={selectGenreClear}
                    selectCurrentGenre={selectCurrentGenre}
                    purposeList={purposeList}
                    currentPurpose={currentPurpose}
                    selectPurposeClear={selectPurposeClear}
                    selectCurrentPurpose={selectCurrentPurpose}
                    handleCloseDrawer={handleCloseDrawer}
                />
            </Drawer> 
            <div className={style.headerContent}>
                <div className={style.headerLinks}>
                    <ul className={style.insidePageLinks}>
                        {user ? (
                            <>
                                <li className={style.insidePageLink}>
                                    <ul className={style.insideFunctionLinks}>
                                        <li className={style.insideFunctionLink}>
                                            <Button onClick={handleOpenDrawer}>タグ検索</Button>
                                        </li>
                                        
                                        <li className={style.insideFunctionLink}>
                                            <Button href="/timeline">お店一覧</Button>
                                        </li>
                                        { user.userType === "幹事" ? (
                                            <>
                                                <li className={style.insideFunctionLink}>
                                                <Button href="/userplan">自分のプラン一覧</Button>
                                                </li>
                                                <li className={style.insideFunctionLink}>
                                                    <Button href="./create_plan">飲み会プランを作成</Button>
                                                </li>
                                            </>
                                        ) : (
                                            <li className={style.insideFunctionLink}>
                                                <Button href="/shopplan">投稿プラン一覧</Button>
                                            </li>
                                        )}
                                        <li className={style.insideFunctionLink}>
                                            <Button　href="/mypage/detail">マイページ</Button>
                                        </li>
                                        <li className={style.insideFunctionLink_username}>{user.name}</li>
                                    </ul>
                                </li>
                            </>
                        ) :(
                            <>
                                <li className={style.insidePageLink}>
                                    <ul className={style.insideFunctionLinks}>
                                        <li className={style.insideFunctionLink}>
                                            <Button href="/timeline">お店一覧</Button>
                                        </li>
                                    </ul>
                                </li>
                                <li className={style.insidePageLink}>
                                    <Button variant="contained" color="primary">
                                        <Link　href="./signup">新規登録</Link>
                                    </Button>
                                </li>
                                <li className={style.insidePageLink}>
                                    <Button variant="outlined" color="primary">
                                        <Link href="./signin">ログイン</Link>
                                    </Button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <div className={style.headermain}>
                    <div className={style.logo}>
                        <Link href="./" >
                            <Image src="/asset/Dlink(Black).png" alt="ロゴ" width={214} height={95}/>
                        </Link>
                    </div>
                    <div className={style.searchField}>
                        <InputBase　
                            type="search"
                            name="query"
                            className={style.searchFieldInput}
                            inputProps={{style: {fontSize: 36, padding: "12px 0 7px 10px", }  }} 
                            placeholder="キーワードを入力"
                        />
                        <Button 
                            className={style.searchButton}
                        >検索</Button>
                    </div>
                    { user ? 
                    <>
                        { user.userType === "幹事" ? (
                            <>
                                <div className={style.notificationPosition}>
                                    <Notificater user={user} offerplanForuser={offerplanForuser}/>
                                </div>  
                            </>
                        ) : (
                            <>
                            </>
                        )}
                        <Button  
                            onClick={handleLogout} 
                            href="./signin"
                            className={style.logout}
                        >ログアウト</Button>
                    </> : <></>}
                </div>
            </div>
        </header>
    );
};