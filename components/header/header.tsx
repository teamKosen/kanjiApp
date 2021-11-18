import { FunctionComponent, useState, useCallback } from 'react';
import style from './header.module.scss';
import { Button, InputBase, Drawer } from '@material-ui/core';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DrawerContent } from '../timeline/drawer-content/drawer-content';
import { useUser } from '../../lib/hooks';

export const Header:FunctionComponent = () => {

    const router = useRouter();

    const [currentBudjet, setcurrentBudjet] = useState();
    const [currentNumberOfPeople, setcurrentNumberOfPeople] = useState();
    const [currentGenre, setcurrentGenre] = useState();
    const [currentPurpose, setcurrentPurpose] = useState();
    const [isOpenDrawer, setDrawerState] = useState(false);

    const [user, { mutate }] = useUser();

    const budjetList = [1000,2000,3000,4000];
    const numberOfPeopleList = [2,4,6,8];
    const genreList = ["中華","和食","イタリアン","エスニック"];
    const purposeList = ["打ち上げ","会食","合コン","同窓会"];

    const selectCurrentBudjet = useCallback((budjet) => {
        setcurrentBudjet(budjet)
    },[]);

    const selectBudjetClear = useCallback(() => {
        setcurrentBudjet(undefined)
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
        const apiUrl = `http://localhost:3000/api/tagsearch?budjet=${currentBudjet}&genre=${currentGenre}&numberOfPeople=${currentNumberOfPeople}&purpose=${currentPurpose}`;
        router.push({
            pathname: "./timeline",
            query: { apiUrl: apiUrl}
        });
        setDrawerState(false);
    },[currentBudjet,currentGenre,currentNumberOfPeople,currentPurpose,router])

    const handleLogout = async () => {
        await fetch("/api/auth", {
            method: "DELETE",
        });
        mutate(null);
    };

    return (
        <header className={style.header}>
            <Drawer
                anchor="top"
                open={isOpenDrawer}
                onClose={() => handleCloseDrawer()}
            >
                <DrawerContent
                    searchTag={SearchTag}
                    budjetList={budjetList}
                    currentBudjet={currentBudjet}
                    selectBudjetClear={selectBudjetClear}
                    selectCurrentBudjet={selectCurrentBudjet}
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
                <div className={style.logo}>
                    <Link href="./" >
                        <Image src="/asset/Dlink(Black).png" alt="ロゴ" width={160} height={70}/>
                    </Link>
                </div>
                <InputBase　
                    type="search"
                    name="query"
                    className={style.searchFieldInput}
                    placeholder="キーワードを入力して下さい"
                />
                <Button onClick={handleOpenDrawer}>タグ検索</Button>
                <div className={style.headerLinks}>
                    <ul className={style.insidePageLinks}>
                        {user ? (
                            <>
                                <li className={style.insidePageLink}>
                                    <ul className={style.insideFunctionLinks}>
                                        <li className={style.insideFunctionLink}>
                                            <Link href="/timeline">お店一覧</Link>
                                        </li>
                                        { user.userType === "幹事" ? (
                                            <>
                                                <li className={style.insideFunctionLink}>
                                                <Link href="/userplan">自分のプラン一覧</Link>
                                                </li>
                                                <li className={style.insideFunctionLink}>
                                                    <Link href="./create_plan">飲み会プランを作成</Link>
                                                </li>
                                            </>
                                        ) : (
                                            <li className={style.insideFunctionLink}>
                                                <Link href="/shopplan">投稿プラン一覧</Link>
                                            </li>
                                        )}
                                        <li className={style.insideFunctionLink}>
                                            <Link　href="/mypage/detail">マイページ</Link>
                                        </li>
                                        <li className={style.insideFunctionLink}>{user.name}</li>
                                    </ul>
                                </li>
                                <li className={style.insidePageLink}>
                                    <Button variant="outlined" color="primary" onClick={handleLogout}>
                                        <Link href="./signin">ログアウト</Link>
                                    </Button>
                                </li>
                            </>
                        ) :(
                            <>
                                <li className={style.insidePageLink}>
                                    <ul className={style.insideFunctionLinks}>
                                        <li className={style.insideFunctionLink}>
                                            <Link href="/timeline">お店一覧</Link>
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
            </div>
        </header>
    );
};