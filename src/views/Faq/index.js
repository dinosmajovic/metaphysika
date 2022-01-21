import {
  ContactInfo,
  Container,
  FaqWrapper,
  Title,
  Questions,
  Question,
  QuestionAnswerContainer,
  Answer,
  ContactInformation,
  Wrapper
} from './styled';

import arrowRight from 'assets/icons/arrowRight.svg';
import arrowDown from 'assets/icons/arrowDown.svg';
import { useState } from 'react';

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      isOpened: false,
      question: `Do I need to open an account in order to shop with you?`,
      answer: `No, you don’t need to. You can make purchases and check out as a
      guest everytime.
      However, by setting up an account with us, it will allow you to order
      without having to enter your details every time you shop with us. You
      can SIGN UP right now, or you can first start shopping and create your
      account before you check out at the shopping cart page.`
    },
    {
      isOpened: false,
      question: `How do I create an account?`,
      answer: `Please click on “Login/Register” followed by ‘Create An Account’ and fill
      in your personal details.`
    },
    {
      isOpened: false,
      question: `How do I order?`,
      answer: `Shop for the items you want and add it to your shopping cart. When you
      have finished, you can proceed to your shopping cart and check out.
      Check and ensure that all information is correct before confirming your
      purchases and payment.`
    },
    {
      isOpened: false,
      question: `I have problems adding items to my shopping cart`,
      answer: `You will be able to add the items as long as it is available. There could
      be an instance where the item is in someone else’s shopping cart hence
      the status of the items is reflected as “Temporarily Unavailable”.`
    },
    {
      isOpened: false,
      question: `How do I pay for my orders?`,
      answer: `We accept payments via cards Mastercard®, Maestro® or Visa.`
    },
    {
      isOpened: false,
      question: `Can I amend and cancel my order?`,
      answer: `Unfortunately we are unable to cancel an order once it has been placed.
      This will allow us to pack your orders efficiently and to minimize errors. It
      is advisable to check your order before placing it.`
    },
    {
      isOpened: false,
      question: `I have a discount coupon, how can I use it?`,
      answer: `At the checkout field “Enter your coupon code” add coupon and click “Apply”.`
    },
    {
      isOpened: false,
      question: `How will I know if my order is confirmed?`,
      answer: `After you have placed your order, you will receive an acknowledgement
      e-mail from us to confirm that your orders have been received. However,
      do note that orders will only be shipped when your credit card payment
      has been approved and billing and delivery address is verified.`
    },
    {
      isOpened: false,
      question: `When will my order be processed?`,
      answer: `All orders will be processed within 5 working days, excluding weekends
      and public holidays.`
    },
    {
      isOpened: false,
      question: `How long will it take for me to receive my order?`,
      answer: `The Standard courier delivery time frame is approximately 7-10 working
      days and the Express courier is approximately 5-7 working days from the
      time of placing your order. This is applicable only to all EU countries. For all
      international deliveries, the time taken is dependent on our logistics
      partners and their affiliates.`
    },
    {
      isOpened: false,
      question: `What are the shipping charges like?`,
      answer: `Shipping for residents of Bosnia and Herzegovina regardless the volume
      or value of order is 10,00KM. For international deliveries, you may select
      your item and proceed to the check out page as charges are based on
      type of item. We will auto
      calculate the delivery charges.`
    },
    {
      isOpened: false,
      question: `Can I change my shipping address after my order has been
      confirmed?`,
      answer: `Unfortunately, we are unable to redirect orders once your order is
      confirmed. Therefore, please ensure you provide the correct shipping
      address.`
    },
    {
      isOpened: false,
      question: `There is a missing item in my order, what should I do?`,
      answer: `We apologize for sending you an incomplete order. Please contact our
      Customer Care Team at contact@metaphysika.ba and we will get back
      to you as soon as we can.`
    },
    {
      isOpened: false,
      question: `I’ve received a defective item, what should I do?`,
      answer: `We apologize if you had received a defective item from us. Please
      contact our Customer Care Team at contact@metaphysika.ba with a
      snapshot of the product and we will get back to you as soon as we can.`
    },
    {
      isOpened: false,
      question: `I’ve received an incorrect item, what should I do?`,
      answer: `We apologize for sending you the wrong item. Please contact our
      Customer Care Team at contact@metaphysika.ba and we will get back
      to you as soon as we can.`
    },
    {
      isOpened: false,
      question: `I’ve purchased the wrong size or color`,
      answer: `You can exchange the item, contact us at contact@metaphysika.ba and
      as soon as we receive the item we will ship the new one.`
    },
    {
      isOpened: false,
      question: `I have not received my parcel, what should I do?`,
      answer: `Kindly drop an email to our Customer Care Team
      at contact@metaphysika.ba if you have not received your parcel after 10
      working days and we will assist you accordingly.`
    },
    {
      isOpened: false,
      question: `Will there be an additional charge for redelivery?`,
      answer: `Every shipping is paid by the customer.`
    }
  ]);

  const onOpenAnswer = (question) => {
    const index = faq.findIndex((f) => {
      return f.question === question;
    });

    const newFaq = [...faq];
    newFaq[index].isOpened = !newFaq[index].isOpened;

    setFaq(newFaq);
  };

  return (
    <Container>
      <Wrapper>
        <FaqWrapper>
          <Title>Frequently asked questions</Title>
          <Questions>
            {faq.map((f) => {
              return (
                <QuestionAnswerContainer key={f.question}>
                  <Question onClick={() => onOpenAnswer(f.question)}>
                    <span>{f.question}</span>
                    <div>
                      <img
                        src={f.isOpened ? arrowDown : arrowRight}
                        alt="icon"
                      />
                    </div>
                  </Question>
                  {f.isOpened && <Answer>{f.answer}</Answer>}
                </QuestionAnswerContainer>
              );
            })}
          </Questions>
        </FaqWrapper>
        <ContactInfo>
          <h1>Contact informations</h1>
          <div>
            <ContactInformation>
              <span>Name</span>
              <span>Metaphysika doo</span>
            </ContactInformation>
            <ContactInformation>
              <span>E-mail:</span>
              <span>contact@metaphysika.ba</span>
            </ContactInformation>
            <ContactInformation>
              <span>Tax code</span>
              <span>201573300009</span>
            </ContactInformation>
            <ContactInformation>
              <span>JIB</span>
              <span>4201573300009</span>
            </ContactInformation>
            <ContactInformation>
              <span>Customer service:</span>
              <span>+38761534854</span>
            </ContactInformation>
            <ContactInformation>
              <span>Address:</span>
              <span>
                Feriza Tumbula 13, 71000 Sarajevo, Bosnia and Herzegovina
              </span>
            </ContactInformation>
          </div>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Faq;
