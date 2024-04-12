import { FAQImage, FAQItemContainer, FAQTitleWrap } from './FAQItem.styled';


export const FAQItem = ({ title, text, index, src, alt, openIndex, toggleFAQ, isOpen }) => {
  return (
    <FAQItemContainer onClick={() => toggleFAQ(index)} active={isOpen}>
      {index === openIndex &&
        <FAQImage src={src[0]} alt={alt} loading='lazy'
                  srcSet={`${src[0]} 183w,
                          ${src[1]} 366w,
                          ${src[0]} 270w,
                          ${src[1]} 514w,`}
                          sizes='(max-width: 768px) 183px, 514px'
                          />
      }
      <span>{`[ ${index + 1} ]`}</span>
      <FAQTitleWrap active={isOpen}>
        <h3>{title}</h3>
        {index === openIndex && <p>{text}</p>}
      </FAQTitleWrap>
    </FAQItemContainer>
  );
};
