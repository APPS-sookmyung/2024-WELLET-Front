import * as S from './AddCardPage.style';
import Icon from '../../components/Icon/Icon';
import { InputWrapper, BlueBadge } from '../../components';

export default function DirectInputForm({
  profileImagePreview,
  onUploadProfileImage,
  handleProfileImageClick,
  profileImageInputRef,
  inputFields,
  activeGroupBadge,
  groupBadges,
  setActiveGroupBadge,
  handleInputChange,
  formDataState,
}) {
  return (
    <S.DashedBorder>
      <S.AddBoxTitle>등록할 명함첩을 선택하세요</S.AddBoxTitle>

      <S.RegisterImageContainer>
        <S.SelectImg
          onClick={handleProfileImageClick}
          style={{
            backgroundImage: `url(${profileImagePreview || ''})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {!profileImagePreview && <Icon id='image' fill='none' />}
        </S.SelectImg>
        <S.RegisterText>
          <S.RegisterTitle>프로필 사진 등록</S.RegisterTitle>
          <S.RegisterSubTitle>
            사진 아이콘을 클릭하여
            <br />
            명함에 들어갈 프로필 사진을 등록하세요.
          </S.RegisterSubTitle>
        </S.RegisterText>
        <input
          type='file'
          accept='image/*'
          ref={profileImageInputRef}
          style={{ display: 'none' }}
          onChange={onUploadProfileImage}
        />
      </S.RegisterImageContainer>

      <S.InputContainer>
        {inputFields.map((field, index) => (
          <InputWrapper
            key={index}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            value={formDataState[field.name] || ''}
            onChange={handleInputChange}
          />
        ))}
      </S.InputContainer>

      <S.GroupContainer>
        <S.InputLabel>그룹</S.InputLabel>
        <S.GroupButtonWrapper>
          <BlueBadge
            badges={groupBadges}
            activeBadge={activeGroupBadge}
            setActiveBadge={setActiveGroupBadge}
          />
        </S.GroupButtonWrapper>
      </S.GroupContainer>
    </S.DashedBorder>
  );
}
