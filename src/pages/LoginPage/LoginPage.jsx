import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginStyled from './login.module.css';
import axios from 'axios';

function LoginPage() {

    const [userEmail, setUserEmail] = useState('');
    const [userPW, setUserPW] = useState('');

    const saveUserEmail = (e) => {
        setUserEmail(e.target.value);
        console.log(e.target.value);
    }
    
    const saveUserPW = (e) => {
        setUserPW(e.target.value);
        console.log(e.target.value);
    };
    
    let navigate = useNavigate();

    return(
        <>
            <div className={loginStyled.login}>
                <h1>celebrem</h1>
                <div className={loginStyled.form}>
                    <label htmlFor="inputEmail">이메일</label>
                    <div className={loginStyled.close}>
                        <input 
                            id="inputEmail" 
                            type="text" 
                            placeholder="celebrem@test.com"
                            name="inputEmail"
                            value={userEmail}
                            onChange={saveUserEmail}>
                        </input>
                    </div>
                </div>
                
                <div className={loginStyled.form}>
                    <label htmlFor="inputPW">비밀번호</label>
                    <input 
                        id="inputPW"
                        type="password" 
                        placeholder="비밀번호를 입력하세요"
                        name="password"
                        value={userPW}
                        onChange={saveUserPW}>
                    </input>
                </div>
                <br/>
                <button id={loginStyled.loginbtn} onClick={ ()=>{ Token() }}>로그인</button><br/>
                <p>비밀번호 찾기</p>
                <p>아직 회원이 아니신가요? <span onClick={ ()=>{ navigate('../signup'); }}>회원가입</span></p>
            </div>
        </>
    )

    function Token(){
        console.log('토큰 작업 실행');
        axios
            .post('http://49.247.33.67:8080/login',{
                "phonenumber": userEmail,
                "password": userPW
            })
            .then(function (response){
                console.log(response);
                const token = response.data.accessToken;

                if(token){
                   
                    //로컬 스토리지에 토큰 저장
                    localStorage.setItem('login-token', token);
                    console.log(token);
                }
                navigate('/');
            })
            .catch(function (error){
                alert("로그인 실패😣");
            }

        )

    }


}

export default LoginPage;