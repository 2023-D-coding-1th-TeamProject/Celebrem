import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import signupStyled from './signup.module.css';

function SignupPage() {
    //각각 값들의 usestate
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [pw, setPw] = useState("");
    const [checkpw, setCheckPw] = useState("");

    //각 값들의 조건 상태를 보이기 위한 usestate
    const [pwMessage, setPwMessage] = useState("");
    const [checkpwMessage, setCheckPwMessage] = useState("");

    //조건을 만족했는지 확인해주는 usestate
    const [ispw, setIsPw] = useState(false);
    const [ischeckpw, setIsCheckPw] = useState(false);

    const onEmailChange = (e) =>{
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const onNicknameChange = (e) =>{
        setNickname(e.target.value);
        console.log(e.target.value);
    }
    
     // 비밀번호 유효성 검사 함수
     const onPWChange = (e) => {
        const currentPW = e.target.value;
        setPw(currentPW);
        const PasswordReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;// 비밀번호 조건식
        if(!PasswordReg.test(currentPW)){
            setPwMessage("대문자, 소문자, 숫자, 특수문자를 모두 포함한 8자 이상");
            setIsPw(false);
        }// 비밀번호 조건식과 입력한 값이 일치하지 않은 경우
        else{
            setPwMessage("이 비밀번호를 사용할 수 있습니다.");
            setIsPw(true);
        }// 비밀번호 조건식과 입력한 값이 일치한 경우
    }  

    // 비밀번호 확인 유효성 검사 부분
    const onCheckPWChange = (e) => {
        const currenCheckPW = e.target.value;
        setCheckPw(currenCheckPW);
        if(pw !== currenCheckPW){
            setCheckPwMessage("비밀번호가 일치하지 않습니다.");
            setIsCheckPw(false);
        }
        else{
            setCheckPwMessage("비밀번호가 일치합니다.");
            setIsCheckPw(true);
        }
    }

    // 이메일 중복 확인 부분 [이메일 중복 확인 버튼]
    const onCheckEmail = (e) => {
        axios.post('/auth/signup', {
            "Email": email
        }).then( (response)=>{
            //true or false 
            /* if(response.data.???){
                alert('사용가능한 이메일입니다.');
            } */
        }).catch( ()=>{
            alert('아직 서버 연결 ㄴㄴ');
        });
    }

    // 닉네임 중복 확인 부분 [닉네임 중복 확인 버튼]
    const onCheckNickname = (e) => {
        axios.post('/auth/signup', {
            "Email": email
        }).then( (response)=>{
            //true or false 
            /* if(response.data.???){
                alert('사용가능한 이메일입니다.');
            } */
        }).catch( ()=>{
            alert('아직 서버 연결 ㄴㄴ');
        });
    }


    const navigate = useNavigate();

    //회원가입 버튼 눌렀을 때 
    const sendSignUpData = async() => {
        
            if(email===''){
                alert('이메일을 작성해주세요');
                return;
            }else if(nickname===''){
                alert('닉네임을 작성해주세요');
                return;
            }else if (pw !== checkpw) {
                console.error('Passwords do not match.');
                alert('⚠비밀번호 불일치');
            }

            //POST 회원가입//
            axios.post('/auth/signup', {
              "useremail": email,
              "nickname": nickname,
              "password": pw
            }).then((response)=>{
                console.log('Server response:', response.data);
                alert("회원가입이 완료하였습니다.");
                navigate('/login');
            }).catch(()=>{
                alert("회원가입 실패😖 아직 서버 연결 안됨");
            });
    
            

    }

    return(
        <>
             <div className={signupStyled.signup}>
                <p style={{fontSize: 25}}><strong>Celebrem</strong></p>
                <div className={signupStyled.form}>
                    <label htmlFor="email">이메일</label>
                    <div className={signupStyled.input}>
                        
                        <input 
                            id="email"
                            type="text" 
                            placeholder="celebrem@test.com" 
                            name="name"
                            value={email}
                            onChange={onEmailChange}>
                        </input>
                        <button className={signupStyled.checkBtn} onClick={ onCheckEmail }  >이메일 중복 확인</button>
                    </div>
                </div>
                
                <div className={signupStyled.form}>
                    <label htmlFor="nickname">닉네임</label>
                    <div className={signupStyled.input}>
                        <input 
                            id="nickname" 
                            type="text"
                            placeholder="영문 16자나 숫자 또는 한글 6가 이내"
                            name="nickname"
                            value={nickname}
                            onChange={onNicknameChange}>
                        </input>
                        <button  className={signupStyled.checkBtn} onClick={ onCheckNickname } >닉네임 중복 확인</button>
                    </div>

                </div>
                
                <div className={signupStyled.pw}> 
                    <div className={signupStyled.form}>
                        <label htmlFor="pw">비밀번호</label>
                        <input 
                            id="pw"
                            type="password" 
                            placeholder="비밀번호"
                            name="pw"
                            alue={pw}
                            onChange={onPWChange}>
                        </input>
                        <p>{pwMessage}</p>
                    </div>

                    <div className={signupStyled.form}>
                        <label htmlFor="checkpw">비밀번호 확인</label>
                        <input 
                            id="checkpw"
                            type="password" 
                            placeholder="비밀번호 확인"
                            name="pw"
                            value={checkpw}
                            onChange={onCheckPWChange}>
                        </input>                
                        <p>{checkpwMessage}</p>
                    </div>
                </div>

                <button className={signupStyled.signupBtn}onClick={sendSignUpData}>회원 가입</button>
            </div>
        </>
    )
}

export default SignupPage;