import * as S from './AddCardPage.style';
import React, { useState } from 'react';
import {
  Header,
  TabBar,
  SearchBar,
  BlueButton,
  PrimaryButton,
  SecondaryButton,
  InputWrapper,
} from '../../components';
import addCard from '../../icons/icon-add-card.svg';
import addCardDot from '../../icons/icon-add-card-dot.svg';
import pencilIcon from '../../icons/icon-pencil.svg';
import ImageIcon from '../../icons/icon-image.svg';

export default function AddCardPage() {
  const [activeButton, setActiveButton] = useState('이미지로 입력');

  const buttons = [
    { label: '이미지로 입력', value: '이미지로 입력' },
    { label: '직접 입력', value: '직접 입력' },
  ];

  return (
    <>
      <S.AddCardPage>
        <Header />
        <SearchBar />

        <S.TitleContainer>
          <S.Title>명함 추가하기</S.Title>
          <S.Subtitle>사진을 첨부하거나 직접 입력하여 명함 추가하기</S.Subtitle>
        </S.TitleContainer>

        <S.ButtonContainer>
          <BlueButton
            buttons={buttons}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        </S.ButtonContainer>

        <S.DashedBorder>
          {activeButton === '이미지로 입력' && (
            <S.AddBoxContainer>
              <S.AddBoxTitle>등록할 명함첩을 선택하세요</S.AddBoxTitle>
              <S.AddBoxIconWrapper>
                <img src={addCard} alt='도트' />
              </S.AddBoxIconWrapper>
              <S.AddBoxSubTitle>
                아래 버튼을 클릭하거나, <br />
                이미지 파일을 여기에 끌어다 놓으세요.
              </S.AddBoxSubTitle>
              <S.AddBoxDescWrapper>
                <S.AddBoxDesc>
                  <S.DotIconWrapper>
                    <img src={addCardDot} alt='도트' />
                  </S.DotIconWrapper>
                  <S.AddBoxText>
                    선택한 모든 명함 이미지는 앞면으로 인식합니다.
                  </S.AddBoxText>
                </S.AddBoxDesc>
                <S.AddBoxDesc>
                  <S.DotIconWrapper>
                    <img src={addCardDot} alt='도트' />
                  </S.DotIconWrapper>
                  <S.AddBoxText>
                    이미지는 한 번에 100장까지 업로드할 수 있습니다.
                  </S.AddBoxText>
                </S.AddBoxDesc>
                <S.AddBoxDesc>
                  <S.DotIconWrapper>
                    <img src={addCardDot} alt='' />
                  </S.DotIconWrapper>
                  <S.AddBoxText>
                    이미지 한 장 당 최대 크기는 1MB 입니다.
                  </S.AddBoxText>
                </S.AddBoxDesc>
              </S.AddBoxDescWrapper>
              <S.ImportFileBtnWrapper>
                <S.ImportFileBtn>파일 가져오기</S.ImportFileBtn>
              </S.ImportFileBtnWrapper>
            </S.AddBoxContainer>
          )}

          {activeButton === '직접 입력' && (
            <S.FormContainer>
              <S.AddBoxTitle>등록할 명함첩을 선택하세요</S.AddBoxTitle>

              <S.RegisterImageContainer>
                <S.SelectImg>
                  <img src={ImageIcon} alt='' />
                </S.SelectImg>
                <S.RegisterText>
                  <S.RegisterTitle>프로필 사진 등록</S.RegisterTitle>
                  <S.RegisterSubTitle>
                    사진 아이콘을 클릭하여
                    <br />
                    명함에 들어갈 프로필 사진을 등록하세요.
                  </S.RegisterSubTitle>
                </S.RegisterText>
              </S.RegisterImageContainer>

              <S.InputContainer>
                <InputWrapper
                  label='이름'
                  type='text'
                  placeholder='이름을 입력하세요'
                />
                <InputWrapper
                  label='회사'
                  type='text'
                  placeholder='회사를 입력하세요'
                />
                <InputWrapper
                  label='직책 / 부서'
                  type='text'
                  placeholder='직책 / 부서를 입력하세요'
                />
              </S.InputContainer>
            </S.FormContainer>
          )}
        </S.DashedBorder>

        <S.ActionBtnContainer>
          <PrimaryButton>등록</PrimaryButton>
          <SecondaryButton>취소</SecondaryButton>
        </S.ActionBtnContainer>
      </S.AddCardPage>
      <TabBar />
    </>
  );
}
