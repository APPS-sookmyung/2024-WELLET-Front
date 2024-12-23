import React, { useRef, useState, useEffect } from 'react';
import * as S from './AddCardPage.style';
import {
  Header,
  SearchBar,
  BlueBadge,
  PrimaryButton,
  SecondaryButton,
} from '../../components';
import ImageInputForm from './ImageInputForm';
import DirectInputForm from './DirectInputForm';
import { postCards, getGroupList } from '../../apis';

export default function AddCardPage() {
  const [activeBadge, setActiveBadge] = useState('이미지로 입력');
  const [activeGroupBadge, setActiveGroupBadge] = useState('');
  const [groupBadges, setGroupBadges] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [formDataState, setFormDataState] = useState({
    name: '',
    company: '',
    department: '',
    position: '',
    phone: '',
    email: '',
    tel: '',
    address: '',
    memo: '',
  });

  const imageInputRef = useRef(null);
  const profileImageInputRef = useRef(null);

  const badges = [
    { label: '이미지로 입력', value: '이미지로 입력' },
    { label: '직접 입력', value: '직접 입력' },
  ];

  useEffect(() => {
    const fetchGroupData = async () => {
      try {
        const response = await getGroupList();
        const data = response.data;

        if (Array.isArray(data) && data.length > 0) {
          const formattedGroupBadges = data.map((group) => ({
            label: group.name,
            value: group.name,
          }));
          setGroupBadges(formattedGroupBadges);
          setActiveGroupBadge(formattedGroupBadges[0]?.value || '');
        } else {
          setGroupBadges([]);
        }
      } catch (error) {
        console.error('그룹 데이터를 가져오는 데 실패했습니다:', error);
        setGroupBadges([]);
      }
    };

    fetchGroupData();
  }, []);

  const inputFields = [
    {
      label: '이름 *',
      type: 'text',
      name: 'name',
      placeholder: '이름을 입력하세요',
    },
    {
      label: '회사명 *',
      type: 'text',
      name: 'company',
      placeholder: 'WELLET Corp.',
    },
    {
      label: '부서',
      type: 'text',
      name: 'department',
      placeholder: '신규 개발팀',
    },
    { label: '직책', type: 'text', name: 'position', placeholder: '사원' },
    {
      label: '휴대폰 *',
      type: 'tel',
      name: 'phone',
      placeholder: '010-1234-5678',
    },
    {
      label: '이메일',
      type: 'email',
      name: 'email',
      placeholder: 'email@welletapp.co.kr',
    },
    {
      label: '유선전화',
      type: 'tel',
      name: 'tel',
      placeholder: '81-2-222-3456',
    },
    {
      label: '주소',
      type: 'text',
      name: 'address',
      placeholder: '서울특별시 용산구 청파로 47길 100(청파동 2가)',
    },
    { label: '메모', type: 'text', name: 'memo', placeholder: '메모' },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (!name) {
      console.error('Input에 name 속성이 누락되었습니다:', event.target);
      return;
    }

    setFormDataState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    const formData = new FormData();
    Object.entries(formDataState).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    formData.append('categoryName', activeGroupBadge);

    if (profileImage) formData.append('profImg', profileImage);
    if (selectedImage[0]) formData.append('frontImg', selectedImage[0]);
    if (selectedImage[1]) formData.append('backImg', selectedImage[1]);

    try {
      const response = await postCards(formData);
      alert('명함이 성공적으로 등록되었습니다!');
    } catch (error) {
      console.error('명함 등록 실패:', error);
      alert('명함 등록에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.AddCardPage>
      <Header color='blue' />
      <SearchBar theme='white' />

      <S.TitleContainer>
        <S.Title>명함 추가하기</S.Title>
        <S.Subtitle>사진을 첨부 / 직접 입력하여 명함 추가하기</S.Subtitle>
      </S.TitleContainer>

      <S.ButtonContainer>
        <BlueBadge
          badges={badges}
          activeBadge={activeBadge}
          setActiveBadge={setActiveBadge}
        />
      </S.ButtonContainer>

      {activeBadge === '이미지로 입력' ? (
        <ImageInputForm
          selectedImage={selectedImage}
          onUploadImage={(e) =>
            setSelectedImage([...selectedImage, ...e.target.files])
          }
          imageInputRef={imageInputRef}
        />
      ) : (
        <DirectInputForm
          profileImage={profileImage}
          profileImagePreview={profileImagePreview}
          inputFields={inputFields}
          activeGroupBadge={activeGroupBadge}
          groupBadges={groupBadges}
          setActiveGroupBadge={setActiveGroupBadge}
          handleInputChange={handleInputChange}
          formDataState={formDataState}
        />
      )}

      <S.ActionBtnContainer>
        <PrimaryButton onClick={handleRegister}>등록</PrimaryButton>
        <SecondaryButton>취소</SecondaryButton>
      </S.ActionBtnContainer>
    </S.AddCardPage>
  );
}
