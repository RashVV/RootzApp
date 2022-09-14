import React from "react";
import styled from "styled-components";

export const LandingNewRoot1 = ({}) => {
  const ApplyButtonFunction = (e, name) => {
   let contactForm = prompt('RootzApp is in the development stage, please leave your e-mail and our team will contact you ASAP. Thank you for your visit. You can call +380969634403 for details.', )
      alert(contactForm, 'was saved');
      console.info('Client input was', contactForm);
  };
  const BittersweetTextFunction = (e, name) => {
    let contactForm = prompt('RootzApp is in the development stage, please leave your e-mail and our team will contact you ASAP. Thank you for your visit. You can call +380969634403 for details.', )
      alert(contactForm, 'was saved');
      console.info('Client input was', contactForm);
  };
  const BookADemoBtnFunction = (e, name) => {
    let contactForm = prompt('RootzApp is in the development stage, please leave your e-mail and our team will contact you ASAP. Thank you for your visit. You can call +380969634403 for details.', )
      alert(contactForm, 'was saved');
      console.info('Client input was', contactForm);
  };
  const FAQsButtonContactFunction = (e, name) => {
    let contactForm = prompt('RootzApp is in the development stage, please leave your e-mail and our team will contact you ASAP. Thank you for your visit. You can call +380969634403 for details.', )
      alert(contactForm, 'was saved');
      console.info('Client input was', contactForm);
  };
  const ButtonCloseFunction = (e, name) => {
    let contactForm = prompt('RootzApp is in the development stage, please leave your e-mail and our team will contact you ASAP. Thank you for your visit. You can call +380969634403 for details.', )
      alert(contactForm, 'was saved');
      console.info('Client input was', contactForm);
  };
  const ButtonOpenFunction = (e, name) => {
    let contactForm = prompt('RootzApp is in the development stage, please leave your e-mail and our team will contact you ASAP. Thank you for your visit. You can call +380969634403 for details.', )
      alert(contactForm, 'was saved');
      console.info('Client input was', contactForm);
  };
  const BtnOpen1Function = (e, name) => {
    let contactForm = prompt('RootzApp is in the development stage, please leave your e-mail and our team will contact you ASAP. Thank you for your visit. You can call +380969634403 for details.', )
      alert(contactForm, 'was saved');
      console.info('Client input was', contactForm);
  };
  return (
    <LandingNewRootzApp>
      <Hero>
        <Header>
          <FlexRow>
            <Logo src={`https://file.rendit.io/n/v0D3kdiIRzRqkho6FYgc.svg`} />
            <MenuItems>
              <Text1>Home</Text1>
              <Text2>Our mission</Text2>
              <Text3>Places</Text3>
              <Text4>Team</Text4>
            </MenuItems>
            <ApplyButton onClick={(e) => ApplyButtonFunction(e, "ApplyButton")}>
              Apply
            </ApplyButton>
          </FlexRow>
          <Line src={`https://file.rendit.io/n/DRjMaGl8KXZQvkU3OK1r.svg`} />
        </Header>
        <FlexRow1>
          <FlexColumn>
            <Headline
              src={`https://file.rendit.io/n/4bYXrL9PA0UaZZbHViEu.svg`}
            />
            <Paragraph>
              The scale of the challenges facing our planet can seem daunting,
              but we can all do something.
            </Paragraph>
            <WhiteFlexRow>
              <FlexRow2>
                <Image1
                  src={`https://file.rendit.io/n/EEJ5H9wIcmtWqV8QC4Ne.svg`}
                />
                <Text5>Find the place to help</Text5>
              </FlexRow2>
              <BittersweetText
                onClick={(e) => BittersweetTextFunction(e, "BittersweetText")}
              >
                search
              </BittersweetText>
            </WhiteFlexRow>
          </FlexColumn>
          <Element8>
            <Parrot src={`https://file.rendit.io/n/oHZTkpkEBgyXvjbUQTvq.svg#svgView(viewBox(0,0,62,0))`} />
            <FlexColumn1>
              <Icon src={`https://file.rendit.io/n/fXNoxHicoFXFgdNAZcOw.svg`} />
              <Text6>Members</Text6>
              <Text7>29 128</Text7>
            </FlexColumn1>
          </Element8>
        </FlexRow1>
      </Hero>
      <OurTeam>
        <OurTeamHeader>
          <OurTeamTitle>Our top team</OurTeamTitle>
          <OurTeamDescription>
            Learn more about how you can save our planet's nature.{" "}
          </OurTeamDescription>
        </OurTeamHeader>
        <Element9>
          <Image2 src={`https://file.rendit.io/n/bsFca1s9IypZS2Pr8FTB.svg`} />
          <Image3 src={`https://file.rendit.io/n/k3DCj5vjg3kF6HKmKrky.svg`} />
          <Img src={`https://file.rendit.io/n/CPTK4lLZt5alHWjNpSyv.png`} />
          <Img1 src={`https://file.rendit.io/n/MvmsOzy9hV558t634qbe.png`} />
          <Img2 src={`https://file.rendit.io/n/q9XRFTy27G5fuW4bKxOr.png`} />
        </Element9>
      </OurTeam>
      <GetStarted>
        <Txt>
          <Text9>Get started today!</Text9>
          <Paragraph2>
            Learn more about how you can save our planet's nature. From smart
            consumption to switching to renewable energy, each of us can do our
            part to save the planet.{" "}
          </Paragraph2>
        </Txt>
        <ContactForm>
          <LogFormWrapper>
            <LogInTitle>Log in</LogInTitle>
            <InputName>
              <InputPlaceholder>Name</InputPlaceholder>
            </InputName>
            <InputEmail>
              <InputPlaceholder>Email</InputPlaceholder>
            </InputEmail>
            <BookADemoBtn
              onClick={(e) => BookADemoBtnFunction(e, "BookADemoBtn")}
            >
              Book a demo
            </BookADemoBtn>
          </LogFormWrapper>
          <Image4 src={`https://file.rendit.io/n/GkRkQIRHD6LV9kxsnWpJ.svg`} />
          <Image5 src={`https://file.rendit.io/n/YgB4lOjqG4EMMd7FIWG4.svg`} />
        </ContactForm>
      </GetStarted>
      <FAQs>
        <FAQsWrapper>
          <FAQsAbout>
            <FAQsTitle>Ready to Get started?</FAQsTitle>
            <FAQsDescription>
              When pattern is mentioned in interior design, it is easy to associate it with a geometric patterned wallpaper or colorful prints
              on interior fabrics.
            </FAQsDescription>
          </FAQsAbout>
          <FAQsButtonContact
            onClick={(e) => FAQsButtonContactFunction(e, "FAQsButtonContact")}
          >
            Contact us
          </FAQsButtonContact>
        </FAQsWrapper>
        <QuestionWrapper>
          <Question>
            <QuestionTitleWrapper>
              <QuestionTitle>What can I do to protect our planet?</QuestionTitle>
              <ButtonClose onClick={(e) => ButtonCloseFunction(e, "ButtonClose")} />
            </QuestionTitleWrapper>
            <QuestionAnswer>
              Not to make an open fire in nature and to clean up litter; not to
              pollute open water bodies; to switch to alternative energy
              sources; to reduce the use of non-renewable resources
            </QuestionAnswer>
            <Divider
              src={`https://file.rendit.io/n/YtjuBNNP9FrnuxVKhDeK.svg`}
            />
          </Question>
          <Question1>
            <QuestionTitle1>How to save nature ecology?</QuestionTitle1>
            <ButtonOpen onClick={(e) => ButtonOpenFunction(e, "ButtonOpen")} />
            <Divider1
              src={`https://file.rendit.io/n/YtjuBNNP9FrnuxVKhDeK.svg`}
            />
          </Question1>
          <Question2>
            <QuestionTitleWrapper1>
              <QuestionTitle>What is nature conservation?</QuestionTitle>
              <BtnOpen1 onClick={(e) => BtnOpen1Function(e, "BtnOpen1")} />
            </QuestionTitleWrapper1>
            <Divider
              src={`https://file.rendit.io/n/YtjuBNNP9FrnuxVKhDeK.svg`}
            />
          </Question2>
        </QuestionWrapper>
      </FAQs>
      <Slider>
        <Img3>
          <SliderCallToAct2>Avoid plastic</SliderCallToAct2>
        </Img3>
        <SliderCallToAct3>Choose organic</SliderCallToAct3>
        <FlexColumn3>
          <CardMain>
            <FlexColumn4>
              <Txt3>
                <CallToAction1>Save water</CallToAction1>
                <Paragraph5>
                  Taking on the issue of ensuring access to safe water requires
                  worldwide effort.
                </Paragraph5>
              </Txt3>
            </FlexColumn4>
            <ImgMain
              src={`https://file.rendit.io/n/4GgQ27z3jbz8VWHouy6H.png`}
            />
          </CardMain>
          <Indicator>
            <ChevronRight
              src={`https://file.rendit.io/n/hwG7G8NTRanI45zfJe4D.svg`}
            />
            <Counter>
              1 <CounterNA>/ 6</CounterNA>
            </Counter>
            <ChevronRight
              src={`https://file.rendit.io/n/xOoSPVcZxfCrxRAOiZqw.svg`}
            />
          </Indicator>
        </FlexColumn3>
        <SliderCallToAct1>Plant trees</SliderCallToAct1>
        <Img6>
          <SliderCallToAct>Save energy</SliderCallToAct>
        </Img6>
      </Slider>
      <Footer>
        <FooterTitle>
          <FooterTitle1>Contacts</FooterTitle1>
          <FooterTitleDescription>
            2019 Rootz Foundation. All rights reserved
          </FooterTitleDescription>
        </FooterTitle>
        <ContactInformation>
          <Address>
            <AddressTitle>Headquarters</AddressTitle>
            <AddressDescription>
              1234 Taliban
              <br />
              Los Angeles, La 1234567
              <br />
              (123) 456-7890
            </AddressDescription>
          </Address>
          <ContactSocialMedia>
            <ContactSocialMediaTitle>Social media</ContactSocialMediaTitle>
            <ContactSocialMediaDescription>
              <Tweeter>
                <TweeterImg
                  src={`https://file.rendit.io/n/GUhi3AADgIHH0InSZxIZ.svg`}
                />
              </Tweeter>
              <FaceBook>
                <FaceBookImg
                  src={`https://file.rendit.io/n/yZkB4tuUZ4zGnsw6Fa4c.svg`}
                />
              </FaceBook>
              <LinkedIn>
                <LinkedInImg
                  src={`https://file.rendit.io/n/ZDoLaq44E2cZYFklklNK.svg`}
                />
              </LinkedIn>
            </ContactSocialMediaDescription>
          </ContactSocialMedia>
        </ContactInformation>
      </Footer>
    </LandingNewRootzApp>
  );
};

const InputPlaceholder = styled.div`
  width: 19.541vw;
  height: 1em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #807c7c;
  font-size: 14px;
  font-family: Poppins;
  line-height: 1em;
  white-space: nowrap;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 0.5em 1em;
  @media screen and (max-width: 850px) {
    width: 291px;
    height: 40px;
    line-height: 24px;
  }
`;
const CallToAction1 = styled.div`
  color: #1e1a20;
  font-size: 24px;
  font-weight: 600;
  font-family: Poppins;
  line-height: 34px;
  white-space: nowrap;
`;
const QuestionTitle = styled.div`
  color: #1e1a20;
  font-size: 24px;
  font-weight: 600;
  font-family: Poppins;
  line-height: 34px;
  white-space: nowrap;
  @media screen and (max-width: 850px){
    width: 332px;
    font-size: 18px;
    line-height: 28px;
    height: 110px;
    white-space: unset;
    padding-top: 64px;
    margin-top: 11px;
  }
`;
const Divider = styled.img`
  width: 536px;
  height: 1px;
  @media screen {
    width: 100%;
    height: 2px;
    position: absolute;
    top: 3865px;
    left: 0px;
  }
`;
const ChevronRight = styled.img`
  width: 8px;
  height: 15px;
`;
const LandingNewRootzApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  overflow: hidden;
`;
const Hero = styled.div`
  height: 832px;
  gap: 69px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/M7KSut5G89YVJwNshZSd.svg");
  padding: 32px 80px;
  margin: 0px 0px 192px 0px;
`;
const Header = styled.div`
  gap: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  @media screen and (max-width: 850px){
    div {
      display:none !important;
    }
  }
`;
const Logo = styled.img`
  width: 111.16px;
  height: 37.06px;
  align-self: flex-start;
  margin: 0.25vw 16vw 0px 0px;
  @media screen {
    z-index: 325;
  }
`;
const MenuItems = styled.div`
  width: 548px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 12vw 0px 0px;
   @media screen and (max-width: 850px){
    div {
      display:none !important;
    }
  }
`;
const Text1 = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 32px;
  text-align: center;
  white-space: nowrap;
  margin: 0px 12vw 0px 0px;
`;
const Text2 = styled.div`
  font-size: 16px;
  font-family: Poppins;
  line-height: 32px;
  text-align: center;
  white-space: nowrap;
  margin: 0 12vw 0 0;
`;
const Text3 = styled.div`
  font-size: 16px;
  font-family: Poppins;
  line-height: 32px;
  text-align: center;
  white-space: nowrap;
  margin: 0 12vw 0 0;
`;
const Text4 = styled.div`
  font-size: 16px;
  font-family: Poppins;
  line-height: 32px;
  text-align: center;
  white-space: nowrap;
`;
const ApplyButton = styled.button`
  width: 145px;
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 22.4px;
  text-align: center;
  white-space: nowrap;
  background-color: #ffffff;
  box-shadow: 0px 30px 40px 0px rgba(240, 101, 126, 0.05);
  border-radius: 40px;
  margin: 0px 0.75vw 0px 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  @media screen and (max-width: 850px){
      display: none;
      opacity: 1;
  }
`;
const Line = styled.img`
  width: 97.134vw;
  height: 4px;
`;
const FlexRow1 = styled.div`
  gap: 113.28px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: stretch;
  padding: 0px 32.56px;
  @media screen and (max-width: 850px){
    div {
      flex-direction: column;
      gap: 0px;
      padding: 0px 0px;

    }
  }
`;
const FlexColumn = styled.div`
  height: 555px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 32px 0px;
  @media screen and (max-width: 850px){
    div {
      flex-direction: column;
      gap: 0px;
      padding: 0px;
    }
  }

`;
const Headline = styled.img`
  width: 542.72px;
  height: 292.74px;
  align-self: center;
  margin: 0px 0px 59.26px 0px;
  @media screen and (max-width: 850px){
    width: 104vw;
    height: 54vw;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    margin: 0 0 75vw 0px;
    padding-bottom: 89px;
  }
`;
const Paragraph = styled.div`
  width: 448px;
  font-size: 16px;
  font-family: Poppins;
  line-height: 32px;
  margin: 0px 0px 48px 0px;
  @media screen and (max-width: 850px) {
    width: 325px;
    font-size: 16px;
    font-family: Poppins;
    line-height: 32px;
    margin: 21px 0px 5px 0px;
    position: absolute;
    top: 335px;
    left: 15px;
  }
`;
const WhiteFlexRow = styled.div`
  width: 432px;
  gap: 119px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 30px 40px 0px rgba(240, 101, 126, 0.05);
  border-radius: 40px;
  padding: 8px;
`;
const FlexRow2 = styled.div`
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Image1 = styled.img`
  width: 14px;
  height: 20px;
  @media screen and (max-width: 850px){
    position: absolute;
    top: 509px;
    left: 35px;
  }
`;
const Text5 = styled.div`
  color: #807c7c;
  font-size: 14px;
  font-family: Poppins;
  line-height: 24px;
  white-space: nowrap;
  @media screen and (max-width: 850px){
    position: absolute;
    top: 509px;
    left: 65px;
  }
`;
const BittersweetText = styled.button`
  width: 122px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 18.2px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: #f2726c;
  border-radius: 30px;
  padding: 15px 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  @media screen and (max-width: 850px){
    position: absolute;
    top: 496px;
    left: 229px;
    width: 105px;
    font-size: 12px;
    height: 16px;
  }
  :hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Element8 = styled.div`
  width: 511.44px;
  height: 619px;
  position: relative;
  @media screen and (max-width: 850px){
    width: 279px;
    height: 565px;
    position: absolute;
    top: 509px;
    left: 65px;
  }
`;
const Parrot = styled.img`
  width: 458.44px;
  height: 565px;
  left: 53px;
  position: absolute;
  @media screen and (max-width: 850px){
    width: 87%;
    height: 100%;
    position: relative;
    top: -11px;
    left: 66px;
  }
`;
const FlexColumn1 = styled.div`
  height: 320px;
  top: 299px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/EfQJbicfBqd5CrmPYExl.svg");
  padding: 0px 72px 0px 32px;
  @media screen and (max-width: 850px){
    width: 60vw;
    height: 70vw;
    position: absolute;
    top: 161px;
    left: -57px;
  }
`;
const Icon = styled.img`
  width: 48px;
  height: 56px;
  margin: 0px 0px 92px 0px;
  @media screen and (max-width: 850px){
    width: 35px;
    height: 29px;
    margin: 30px 0px 30px 25px;
  }
`;
const Text6 = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 28px;
  white-space: nowrap;
  text-transform: capitalize;
  @media screen and (max-width: 850px){
    font-size: 15px;
    line-height: 21px;
    margin-left: 20px;
    margin-top: 35px;
  }
`;
const Text7 = styled.div`
  align-self: center;
  color: #ffffff;
  font-size: 56px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 80px;
  white-space: nowrap;
  @media screen and (max-width: 850px){
    font-size: 40px;
    margin-top: -18px;
    margin-left: -56px;
  }
`;
const OurTeam = styled.div`
  width: 1120px;
  gap: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 192px 0px;
`;
const OurTeamHeader = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const OurTeamTitle = styled.div`
  color: #222433;
  font-size: 40px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 56px;
  text-align: center;
  white-space: nowrap;
  text-transform: capitalize;
`;
const OurTeamDescription = styled.div`
  width: 352px;
  color: #1e1a20;
  font-size: 18px;
  font-family: Poppins;
  line-height: 32px;
  text-align: center;
  white-space: pre-wrap;
`;
const Element9 = styled.div`
  width: 1120px;
  height: 367px;
  position: relative;
  align-self: stretch;
  @media screen and (max-width: 850px){
      display: flex;
	    width: 100%;
	    height: 950px;
	    position: relative;
	    -webkit-align-self: stretch;
	    -ms-flex-item-align: stretch;
	    align-self: stretch;
	    flex-wrap: wrap;
	    flex-direction: column-reverse;
	    align-content: center;
	    align-items: center;
  }
`;
const Image2 = styled.img`
  width: 393.04px;
  height: 178.83px;
  left: 163.8px;
  top: 25.34px;
  position: absolute;
  @media screen and (max-width: 850px){
      width: 393.04px;
      left: 315.8px;
    	top: 566.34px;
    	transform: rotate(69deg);
    	position: absolute;
  }
`;
const Image3 = styled.img`
  width: 393.04px;
  height: 178.83px;
  left: 620.8px;
  top: 135.83px;
  position: absolute;
  @media screen and (max-width: 850px) {
      width: 393.04px;
	    height: 178.83px;
	    left: 380.8px;
	    top: 135.83px;
	    transform: rotate(-74deg);
	    position: absolute;
  }
`;
const Img = styled.img`
  width: 323px;
  height: 274px;
  position: absolute;
  @media screen and (max-width: 850px){
    width: 239px;
    height: 226px;
    position: absolute;
    top: 14px;
    left: 375px;
  }
`;
const Img1 = styled.img`
  width: 334px;
  height: 263px;
  left: 392px;
  top: 104px;
  position: absolute;
  @media screen and (max-width: 850px){
    width: 241px;
    height: 207px;
    left: 503px;
    top: 383px;
    position: absolute;
  }
`;
const Img2 = styled.img`
  width: 276px;
  height: 312px;
  left: 844px;
  position: absolute;
  @media screen and (max-width: 850px){
    width: 216px;
    height: 240px;
    top: 820px;
    left: 379px;
    position: absolute;
  }
`;
const GetStarted = styled.div`
  width: 960px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffbd9e;
  border-radius: 20px;
  padding: 79.59px 80px 104px 80px;
  margin: 0px 0px 192px 0px;
  @media screen and (max-width: 850px){
      width: 374px;
	    flex-direction: column;
	    border-radius: 13px;
      padding: 70px 0px;
      margin: 0px 0px;
  }
`;
const Txt = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: center;
  margin: 0px 0px 64px 0px;
  @media screen and (max-width: 850px){
    justify-content: center;
    align-self: stretch;
    margin: 55px 0px 65px 0px;
  }
`;
const Text9 = styled.div`
  width: 389px;
  color: #222433;
  font-size: 40px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 56px;
  text-transform: capitalize;
  @media screen and (max-width: 850px){
    width: 100%;
		font-size: 27px;
		line-height: 42px;
    justify-content: center;
    display: flex;
	}
`;
const Paragraph2 = styled.div`
  width: 384px;
  color: #1e1a20;
  font-size: 18px;
  font-family: Poppins;
  line-height: 32px;
  white-space: pre-wrap;
  @media screen and (max-width: 850px){
    width: 335px;
    justify-content: center;
    display: flex;
    font-size: 15px;
  	line-height: 26.25px;
  }
`;
const ContactForm = styled.div`
  width: 450.89px;
  height: 376.41px;
  position: relative;
  @media screen and (max-width: 850px){
    width: 339px;
    height: 327px;
  }
`;
const LogFormWrapper = styled.div`
  height: 352px;
  top: 24.41px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f3f4;
  border-radius: 16px;
  padding: 0px 55px;
  @media screen and (max-width: 850px){
    width: 339px;
    height: 327px;
    top: 0px;
    position: relative;
    padding: 0;
  }
`;
const LogInTitle = styled.div`
  color: #222433;
  font-size: 32px;
  font-weight: 600;
  font-family: Poppins;
  line-height: 56px;
  white-space: nowrap;
  text-transform: capitalize;
  margin: 0px 0px 24px 0px;
  @media screen and (max-width: 850px) {
    width: 71px;
    font-size: 24px;
    line-height: 32px;
  }
`;
const InputName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 30px 40px 0px rgba(240, 101, 126, 0.05);
  margin: 0px 0px 16px 0px;
`;
const InputEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 30px 40px 0px rgba(240, 101, 126, 0.05);
  margin: 0px 0px 32px 0px;
`;
const BookADemoBtn = styled.button`
  width: 312px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 18.2px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: #f2726c;
  border-radius: 30px;
  padding: 15px 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Image4 = styled.img`
  width: 39.1px;
  height: 20.49px;
  left: 398.55px;
  top: 78.12px;
  position: absolute;
   @media screen and (max-width: 850px){
    width: 39.1px;
    height: 35.49px;
    left: 307.55px;
    top: 22.12px;
  }
`;
const Image5 = styled.img`
  width: 60.03px;
  height: 54.75px;
  left: 379.68px;
  top: 4.28px;
  position: absolute;
  @media screen and (max-width: 850px){
    width: 53.03px;
    height: 69.75px;
    left: 287.68px;
    top: -29.72px;
    position: absolute;
  }
`;
const FAQs = styled.div`
  gap: 104px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0px 0px 192px 0px;
  @media screen and (max-width: 850px){
    width: 100%;
    flex-direction: column;
    margin: 0px;
  }
`;
const FAQsWrapper = styled.div`
  height: 389px;
  gap: 56px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
  @media screen {
    width: 400px;
    justify-content: center;
  }
`;
const FAQsAbout = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 850px){
    width: 303px;
    justify-content: center;
    align-items: center;
    padding-left: 18px;
    padding-right: 36px;
    margin-left: 18px;
    margin-right: 36px;
    justify-content: center;
    align-items: center;
  }
`;
const FAQsTitle = styled.div`
  width: 83%;
  color: #222433;
  font-size: 40px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 56px;
  text-transform: capitalize;
  @media screen and (max-width: 850px){
    width: 109%;
    font-size: 28px;
    line-height: 42px;
  }
`;
const FAQsDescription = styled.div`
  width: 423px;
  color: #1e1a20;
  font-size: 18px;
  font-family: Poppins;
  line-height: 32px;
  @media screen and (max-width: 850px){
    width: 312px;
    font-size: 15px;
    line-height: 26.25px;
  }
`;
const FAQsButtonContact = styled.button`
  width: 166px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 18.2px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: #f2726c;
  border-radius: 30px;
  padding: 15px 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  @media screen and (max-width: 850px){
    margin-left: 30px;
  }
 `;
const QuestionWrapper = styled.div`
  height: 389px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 850px){
    width: 339px;
    height: 404px;
    justify-content: center;
  }
`;
const Question = styled.div`
  height: 181px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: center;
  margin: 0px 0px 32px 0px;
  @media screen and (max-width: 850px) {
    width: 339px;
    justify-content: center;
  }
`;
const QuestionTitleWrapper = styled.div`
  gap: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  margin: 0px 0px 13px 0px;
  @media screen and (max-width: 850px){
    width: 310px;
    margin: 0px;
  }
`;
const ButtonClose = styled.button`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center;
  background-image: url("https://file.rendit.io/n/gMx8abWKQWHADGLKIecq.svg");
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  @media screen and (max-width: 850px){
    width: 67px;
    height: 42px;
    margin-top: 9px;
  }
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
  background-color: transparent;
`;
const QuestionAnswer = styled.div`
  width: 459px;
  align-self: flex-start;
  color: #1e1a20;
  font-size: 16px;
  font-family: Poppins;
  line-height: 24px;
  margin: 0px 0px 31px 0px;
  @media screen and (max-width: 850px) {
    width: 332px;
    font-size: 15px;
    font-weight: 400;
    line-height: 26.5px;
  }
`;
const Question1 = styled.div`
  width: 536px;
  height: 72px;
  position: relative;
  margin: 0px 0px 32px 0px;
  @media screen and (max-width: 850px) {
    width: 339px;
  }
`;
const QuestionTitle1 = styled.div`
  top: 3px;
  position: absolute;
  color: #1e1a20;
  font-size: 24px;
  font-weight: 600;
  font-family: Poppins;
  line-height: 34px;
  white-space: nowrap;
  @media screen and (max-width: 850px){
    top: 35px;
    font-size: 18px;
    line-height: 24px;
    white-space: unset;
  }
`;
const ButtonOpen = styled.button`
  width: 40px;
  height: 40px;
  left: 496px;
  position: absolute;
  background-size: cover;
  background-position: center;
  background-image: url("https://file.rendit.io/n/gSHgUBRKXIzpRpUHlYaQ.svg");
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  @media screen and (max-width: 850px){
    left: 282px;
    top: 31px;
  }
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
  background-color: transparent;
`;
const Divider1 = styled.img`
  width: 536px;
  height: 1px;
  top: 71px;
  position: absolute;
  @media screen and (max-width: 850px){
    top: 81px;
    left: -50px;
  }
`;
const Question2 = styled.div`
  gap: 31px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const QuestionTitleWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
  @media screen and (max-width: 850px){
    width: 332px;
  }
`;
const BtnOpen1 = styled.button`
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: 1155px;
  background-image: url("https://file.rendit.io/n/gSHgUBRKXIzpRpUHlYaQ.svg");
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  cursor: pointer;
  @media screen and (max-width: 850px){
    left: 320px;
  }
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
  background-color: transparent;
`;
const Slider = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: #ffbd9e;
  padding: 104px 0px;
  @media screen and (max-width: 850px){
    width: 100%;
  }
`;
const Img3 = styled.div`
  height: 208px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/KLIHSfVtT2S4rm7072un.png");
  padding: 0px 24px 0px 0px;
  margin: 98px 72px 0px 0px;
`;
const SliderCallToAct2 = styled.div`
  width: 77px;
  height: 34px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  font-family: Poppins;
  line-height: 34px;
  white-space: nowrap;
`;
const SliderCallToAct3 = styled.div`
  width: 193px;
  height: 281px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  font-family: Poppins;
  line-height: 34px;
  white-space: nowrap;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/SLgWKnW2O5OXvl5l2c08.png");
  padding: 0px 41px 0px 42px;
  margin: 62px 53px 0px 0px;
`;
const FlexColumn3 = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  margin: 0px 52px 0px 0px;
`;
const CardMain = styled.div`
  width: 438px;
  height: 383px;
  position: relative;
  @media screen and (max-width: 850px){
    width: 375px;
  }
`;
const FlexColumn4 = styled.div`
  height: 196px;
  top: 21px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/TUgxXUNUW8hcgQQ9vgV8.svg");
  padding: 83px 77px 83px 80px;
`;
const Txt3 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Paragraph5 = styled.div`
  width: 281px;
  color: #1e1a20;
  font-size: 16px;
  font-family: Poppins;
  line-height: 24px;
  text-align: center;
`;
const ImgMain = styled.img`
  width: 186px;
  height: 163px;
  left: 45px;
  position: absolute;
`;
const Indicator = styled.div`
  gap: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Counter = styled.div`
  font-size: 24px;
  font-family: Poppins;
  line-height: 32px;
  white-space: pre-wrap;
`;
const CounterNA = styled.div`
  display: contents;
  color: rgba(0, 0, 0, 0.2);
  font-size: 24px;
  font-family: Poppins;
  line-height: 32px;
`;
const SliderCallToAct1 = styled.div`
  width: 131px;
  height: 243px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  font-family: Poppins;
  line-height: 34px;
  white-space: nowrap;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/K4pmB0jnRzRRizOXJXGG.png");
  padding: 0px 73px;
  margin: 81px 72px 0px 0px;
`;
const Img6 = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/jGdeopnBXC11R4Ra5x63.png");
  padding: 0px 0px 0px 47.93px;
  margin: 104px 0px 0px 0px;
`;
const SliderCallToAct = styled.div`
  width: 51.07px;
  height: 34px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  font-family: Poppins;
  line-height: 34px;
  white-space: nowrap;
`;
const Footer = styled.div`
  width: 1097px;
  height: 152px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f7f3f4;
  padding: 96px 183px 88px 160px;
  @media screen and (max-width: 850px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: max-content;
    padding-top: 20px;
  }
`;
const FooterTitle = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px) {
    gap: 0px;
    justify-content: start;
    align-items: flex-start;
  }
`;
const FooterTitle1 = styled.div`
  color: #333333;
  font-size: 34px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 48px;
  white-space: nowrap;
  text-transform: uppercase;
  @media screen and (max-width: 850px){
    font-size: 28px;
  }
`;
const FooterTitleDescription = styled.div`
  width: 150px;
  align-self: flex-start;
  color: #333333;
  font-size: 13px;
  font-family: Poppins;
  line-height: 24px;
  white-space: nowrap;
  letter-spacing: 0.3px;
  @media screen and (max-width: 850px) {
    font-size: 12px;
    width: 100%;
  }
`;
const ContactInformation = styled.div`
  width: 617px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-end;
  align-items: center;
  @media screen and (max-width: 850px){
    width: 100%;
    justify-content: space-around;
    padding-top: 15px;
  }
`;
const Address = styled.div`
  gap: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px) {
    gap: 10px;
  }
`;
const AddressTitle = styled.div`
  width: 221px;
  color: #333333;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 32px;
  letter-spacing: 0.3px;
  @media screen and (max-width: 850px) {
    width: 100%;
    font-size: 18px;
  }
`;
const AddressDescription = styled.div`
  width: 221px;
  color: #333333;
  font-size: 13px;
  font-family: Poppins;
  line-height: 24px;
  letter-spacing: 0.3px;
  @media screen and (max-width: 850px){
    width: 100%;
    font-size: 12px;
  }
`;
const ContactSocialMedia = styled.div`
  gap: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  @media screen and (max-width: 850px) {
    gap: 10px;
    align-self: flex-start;
    align-items: flex-end;
  }
`;
const ContactSocialMediaTitle = styled.div`
  color: #333333;
  font-size: 20px;
  font-weight: 700;
  font-family: Poppins;
  line-height: 32px;
  white-space: nowrap;
  letter-spacing: 0.3px;
`;
const ContactSocialMediaDescription = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: center;
`;
const Tweeter = styled.div`
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-radius: 16.01px;
  padding: 0px 7px 0px 8px;
`;
const TweeterImg = styled.img`
  width: 17px;
  height: 13.32px;
`;
const FaceBook = styled.div`
  width: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-radius: 16.01px;
  padding: 9.25px 0px 9.31px 0px;
`;
const FaceBookImg = styled.img`
  width: 7.11px;
  height: 13.44px;
`;
const LinkedIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #333333;
  border-radius: 16.01px;
  padding: 8.54px 8.6px 10.65px 9.94px;
`;
const LinkedInImg = styled.img`
  width: 13.46px;
  height: 12.81px;
`;
