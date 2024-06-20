import { useSelector } from 'react-redux';
import { CurrentHashtagTextContainer, CurrentHashtagTextItem } from './MainPageCurrentHashtagTextSection.style';

const MainPageCurrentHashtagTextSection = () => {
  const selectedHashtagsArray = [];
  const hashtagState = useSelector((state) => {
    return state.hashtag.hashtagStates;
  });

  for (const [key, value] of Object.entries(hashtagState)) {
    if (value === true) {
      selectedHashtagsArray.push(key);
    }
  }

  return (
    <>
      <CurrentHashtagTextContainer>
        {selectedHashtagsArray.length === 6 ? (
          <CurrentHashtagTextItem>#전체보기</CurrentHashtagTextItem>
        ) : selectedHashtagsArray.length === 0 ? (
          <CurrentHashtagTextItem>#해시태그 없음</CurrentHashtagTextItem>
        ) : (
          selectedHashtagsArray.map((hashtag) => {
            return <CurrentHashtagTextItem key={hashtag}>#{hashtag}</CurrentHashtagTextItem>;
          })
        )}
      </CurrentHashtagTextContainer>
    </>
  );
};

export default MainPageCurrentHashtagTextSection;
