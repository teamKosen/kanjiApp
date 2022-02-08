import React, { useState, useEffect } from "react";
import Router from "next/router";
import { useUser } from "../../lib/hooks"
import { useStyles } from "./signup.style";
import Tag from "./components/tag";

import {TextField} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {Radio} from '@material-ui/core';
import {RadioProps} from '@material-ui/core';
import {RadioGroup} from '@material-ui/core';
import {FormControlLabel} from '@material-ui/core';
import {FormControl} from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';


export const Signup = () => {
  const style = useStyles();
  const [user, { mutate }] = useUser();
  const [errorMsg, setErrorMsg] = useState("");
  const [uservalue, setUservalue] = useState("");
  const [paymentvalue, setPaymentvalue] = useState("");
  const [genretag, setGenretags] = useState([]);
  const [purposetag, setPurposetags] = useState([]);
  const [state, setState] = useState({
    cash: false,
    card: false,
    emoney: false,
  });

  const { cash, card, emoney } = state;

  // call whenever user changes (ex. right after signing up successfully)
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace("/timeline");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userBody = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.name.value,
      userType: e.currentTarget.userType.value,
      password: e.currentTarget.password.value,
    };
    const shopBody = {
      email: e.currentTarget.email.value,
      name: e.currentTarget.name.value,
      userType: e.currentTarget.userType.value,
      password: e.currentTarget.password.value,
      shopName: e.currentTarget.shopName.value,
      adress: e.currentTarget.adress.value,
      place: e.currentTarget.place.value,
      weekdayOpen: e.currentTarget.weekdayOpen.value,
      weekdayClose: e.currentTarget.weekdayClose.value,
      weekendOpen: e.currentTarget.weekendOpen.value,
      weekendClose: e.currentTarget.weekendClose.value,
      counter: e.currentTarget.counter.value,
      table: e.currentTarget.table.value,
      zasiki: e.currentTarget.zasiki.value,
      cash: e.currentTarget.cash.checked,
      card: e.currentTarget.card.checked,
      emoney: e.currentTarget.emoney.checked,
      park: e.currentTarget.park.value,
      phoneNumber: e.currentTarget.phoneNumber.value,
      budgetMin: e.currentTarget.budgetMin.value,
      budgetMax: e.currentTarget.budgetMax.value,
      numberOfPeopleMin: e.currentTarget.numberOfPeopleMin.value,
      numberOfPeopleMax: e.currentTarget.numberOfPeopleMax.value,
      genre: genretag,
      purpose: purposetag,
      introduction: e.currentTarget.introduction.value,
    };
    const userRes = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userBody),
    });
    const shopRes = await fetch("/api/shopregister", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(shopBody),
    });
    if (userRes.status === 201) {
      const userObj = await userRes.json();
      // writing our user object to the state
      mutate(userObj);
    } else {
      setErrorMsg(await userRes.text());
    }
    if (shopRes.status === 201) {
      const shopObj = await shopRes.json();
      // writing our user object to the state
      mutate(shopObj);
    } else {
      setErrorMsg(await shopRes.text());
    }
  };

  const handleChangeuser = event => {
    setUservalue(event.target.value);
  };

  const handleChangepayment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  //ラジオボタンデザイン
  const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 20,
    height: 20,
    boxShadow: 'inset 0 0 0 2px rgba(16,22,26,.3), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#FFFFFF',
    backgroundImage:'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#FFFFFF',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 20,
      height: 20,
      backgroundImage: 'radial-gradient(#000,#000 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#c0c0c0',
    },
  });
  
  // Inspired by blueprintjs
  function BpRadio(props: RadioProps) {
    return (
      <Radio
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }


  return (
    <div className={style.root}>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className={style.form}>
                <div className={style.label}>メールアドレス</div>
                <div className={style.indispensable}>必須</div>
                <TextField className={style.boxdesign}  size="small" variant="outlined" id="email" name="email" type="email" InputProps={{placeholder: "未入力"}}/>
            </div>
            <div className={style.form}>
                <div className={style.label}>ユーザーネーム</div>
                <div className={style.indispensable}>必須</div>
                <TextField className={style.boxdesign}  size="small" variant="outlined" id="name" name="name" type="text" InputProps={{placeholder: "未入力"}}/>
            </div>
            <div className={style.form}>
                <div className={style.label}>パスワード</div>
                <div className={style.indispensable}>必須</div>
                <TextField className={style.boxdesign}  size="small" variant="outlined" id="password" name="password" type="password" InputProps={{placeholder: "未入力"}}/>
            </div>
            <div className={style.form}>
              <div className={style.label}>ユーザータイプ</div>
              <div className={style.indispensable}>必須</div>
              <FormControl className={style.radioform}>
                <RadioGroup
                  row
                  name="userType"
                  id= 'userType'
                  value={uservalue}
                  onChange={handleChangeuser}
                >
                  <FormControlLabel
                    value="幹事"
                    control={<BpRadio />}
                    label={<span className={style.radioLabel}>幹事</span>}
                  />
                  <FormControlLabel
                    value="お店"
                    control={<BpRadio />}
                    label={<span className={style.radioLabel}>お店</span>}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        
          {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
          {uservalue === "お店" ? (
            <>
              <h1>店舗情報</h1>
              <div className={style.form}>
                  <div className={style.label}>店名</div>
                  <div className={style.indispensable}>必須</div>
                  <TextField className={style.boxdesign}  size="small" variant="outlined" id="shopName" name="shopName" type="text" InputProps={{placeholder: "未入力"}}/>
              </div>
              <div className={style.form}>
                  <div className={style.label}>住所</div>
                  <div className={style.indispensable}>必須</div>
                  <TextField className={style.boxdesign}  size="small" variant="outlined" id="adress" name="adress" type="text" InputProps={{placeholder: "未入力"}}/>
              </div>
              <div className={style.form}>
                  <div className={style.label}>場所</div>
                  <div className={style.indispensable}>必須</div>
                  <TextField className={style.boxdesign}  size="small" variant="outlined" id="place" name="place" type="text" InputProps={{placeholder: "町の名前や目印"}}/>
              </div>
              <div className={style.form}>
                  <div className={style.label}>営業時間</div>
                  <div className={style.indispensable}>必須</div>
                  <div className={style.besideForm}>
                    <div className={style.moji}>平日</div>
                    <TextField className={style.boxdesigntime}  size="small" variant="outlined" id="weekdayOpen" name="weekdayOpen" type="time" InputLabelProps={{shrink: true}}/>
                    <div className={style.mojito}>～</div>
                    <TextField className={style.boxdesigntime}  size="small" variant="outlined" id="weekdayClose" name="weekdayClose" type="time" InputLabelProps={{shrink: true}}/>
                  </div>
                  <div className={style.besideForm}>
                    <div className={style.moji}>休日</div>
                    <TextField className={style.boxdesigntime}  size="small" variant="outlined" id="weekendOpen" name="weekendOpen" type="time" InputLabelProps={{shrink: true}}/>
                    <div className={style.mojito}>～</div>
                    <TextField className={style.boxdesigntime}  size="small" variant="outlined" id="weekendClose" name="weekendClose" type="time" InputLabelProps={{shrink: true}}/>
                  </div>
              </div>
              <div className={style.form}>
                  <div className={style.label}>座席タイプ・数</div>
                  <div className={style.indispensable}>必須</div>
                  <div className={style.besideForm}>
                    <div className={style.moji}>カウンター</div>
                    <TextField className={style.boxdesignSeattype} size="small" variant="outlined" id="counter" name="counter" type="Number" InputProps={{placeholder: "席数", }}/>
                  </div>
                  <div className={style.besideForm}>
                    <div className={style.moji}>テーブル</div>
                    <TextField className={style.boxdesignSeattype} size="small" variant="outlined" id="table" name="table" type="Number" InputProps={{placeholder: "席数", }}/>
                  </div>
                  <div className={style.besideForm}>
                    <div className={style.moji}>座敷</div>
                    <TextField className={style.boxdesignSeattype} size="small" variant="outlined" id="zasiki" name="zasiki" type="Number" InputProps={{placeholder: "席数", }}/>
                  </div>
              </div>
              <div className={style.form}>
                  <div className={style.label}>支払い方法</div>
                  <div className={style.indispensable}>必須</div>
                  <div className={style.multiple}>（複数選択可）</div>

                  <FormGroup row className={style.radioform}>
                    <FormControlLabel
                      control={
                        <Checkbox icon={<BpIcon />} checkedIcon={<BpCheckedIcon />} checked={cash} onChange={handleChangepayment} name="cash" id="cash"/>
                      }
                      label={<span className={style.radioLabel}>現金</span>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox icon={<BpIcon />} checkedIcon={<BpCheckedIcon />} checked={card} onChange={handleChangepayment} name="card" id="card"/>
                      }
                      label={<span className={style.radioLabel}>カード</span>}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox icon={<BpIcon />} checkedIcon={<BpCheckedIcon />} checked={emoney} onChange={handleChangepayment} name="emoney" id="emoney"/>
                      }
                      label={<span className={style.radioLabel}>電子マネー</span>}
                    />
                  </FormGroup>
              </div>
              <div className={style.form}>
                  <div className={style.label}>駐車場</div>
                  <div className={style.indispensable}>必須</div>
                  <div className={style.besideForm}>
                    <div className={style.moji}>台数</div>
                    <TextField className={style.boxdesignSeattype} size="small" variant="outlined" id="park" name="park" type="Number" InputProps={{placeholder: "未入力", }}/>
                  </div>
              </div>
              <div className={style.form}>
                  <div className={style.label}>電話番号</div>
                  <div className={style.indispensable}>必須</div>
                  <TextField className={style.boxdesign}  size="small" variant="outlined" id="phoneNumber" name="phoneNumber" type="text" InputProps={{placeholder: "未入力"}}/>
              </div>
              <div className={style.form}>
                  <div className={style.label}>予算</div>
                  <div className={style.indispensable}>必須</div>
                  <div className={style.besideFormNumber}>
                    <TextField className={style.boxdesignBudget} size="small" variant="outlined" id="budgetMin" name="budgetMin" type="Number" InputProps={{placeholder: "未入力", }}/>
                    <div className={style.mojito}>～</div>
                    <TextField className={style.boxdesignBudget} size="small" variant="outlined" id="budgetMax" name="budgetMax" type="Number" InputProps={{placeholder: "未入力", }}/>
                  </div>
              </div>
              <div className={style.form}>
                  <div className={style.label}>人数</div>
                  <div className={style.indispensable}>必須</div>
                  <div className={style.besideFormNumber}>
                    <TextField className={style.boxdesignBudget} size="small" variant="outlined" id="numberOfPeopleMin" name="numberOfPeopleMin" type="Number" InputProps={{placeholder: "未入力", }}/>
                    <div className={style.mojito}>～</div>
                    <TextField className={style.boxdesignBudget} size="small" variant="outlined" id="numberOfPeopleMax" name="numberOfPeopleMax" type="Number" InputProps={{placeholder: "未入力", }}/>
                  </div>
              </div>
              <div className={style.form}>
                  <div className={style.label}>ジャンル</div>
                  <div className={style.indispensable}>必須</div>
                  <Tag className={style.boxdesign} size="small" variant="outlined" setValue={setGenretags}/>
              </div>
              <div className={style.form}>
                  <div className={style.label}>目的</div>
                  <div className={style.indispensable}>必須</div>
                  <Tag className={style.boxdesign} size="small" variant="outlined" setValue={setPurposetags}/>
              </div>
              <div className={style.form}>
                  <div className={style.label}>紹介文</div>
                  <TextField className={style.boxdesigncomment} multiline rows={5} size="small" variant="outlined" id="introduction" name="introduction" type="text" InputProps={{placeholder: "未入力"}}/>
              </div>
            </>
          ) : (
            <>
            </>
          )}
          
          <Button className={style.button} type="submit">サインアップ</Button>
        
        </form>
      </div>
    </div>
  );
};