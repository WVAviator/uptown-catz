import StyledButton from './StyledButton';

interface HeroTitleProps {
  text: string;
  subtext: string;
  mainAction: HeroAction;
  secondaryAction: HeroAction;
}

export interface HeroAction {
  text: string;
  href: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
  text,
  subtext,
  mainAction,
  secondaryAction,
}) => {
  return (
    <div className="flex flex-col gap-4 max-w-[66vw]">
      <div>
        <h1 className="text-[36px] leading-[100%] font-bold">{text}</h1>
      </div>
      <div>
        <p className="text-[14px] font-bold">{subtext}</p>
      </div>
      <div className="flex gap-4 items-center">
        <StyledButton href={mainAction.href} scheme="secondary">
          {mainAction.text}
        </StyledButton>
        <StyledButton href={secondaryAction.href} scheme="secondary">
          {secondaryAction.text}
        </StyledButton>
      </div>
    </div>
  );
};

export default HeroTitle;
