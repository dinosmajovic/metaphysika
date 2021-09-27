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
      answer: `We accept payments via Paypal and all major credit and debit cards
      such as Mastercard, VISA and American Express.`
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
      question: `I have a discount code, how can I use it?`,
      answer: `Key in the voucher code at the field “Voucher Code” and click “Add” in
      your Shopping Cart page before proceeding to check out. Please note
      that we are unable to manually apply the voucher code to your order if
      you have missed keying it during check out. Kindly ensure that all
      information is correct before confirming your purchase.`
    },
    {
      isOpened: false,
      question: `How will I know if my order is confirmed?`,
      answer: `After you have placed your order, you will receive an acknowledgement
      e-mail from us to confirm that your orders have been received. However,
      do note that orders will only be shipped when your credit card payment
      has been approved and billing and delivery address is verified.
      Alternatively, you may check the status of your order in “My Account” if
      you are a registered user.`
    },
    {
      isOpened: false,
      question: `When will my order be processed?`,
      answer: `All orders will be processed within 2 working days, excluding weekends
      and public holidays.`
    },
    {
      isOpened: false,
      question: `How long will it take for me to receive my order?`,
      answer: `The Standard courier delivery time frame is approximately 7-10 working
      days and the Express courier is approximately 5-7 working days from the
      time of placing your order and receipt of your confirmation email with
      tracking number. This is applicable only to all EU countries. For all
      international deliveries, the time taken is dependent on our logistics
      partners and their affiliates.`
    },
    {
      isOpened: false,
      question: `How can I track my delivery?`,
      answer: `Once the order has been dispatched, an email confirmation will be sent
      to you with the tracking number. You may check and track the delivery
      status of your orders.`
    },
    {
      isOpened: false,
      question: `What are the shipping charges like?`,
      answer: `Shipping for residents of Bosnia and Herzegovina regardless the volume
      or value of order is 10,00KM. For international deliveries, you may select
      your item and proceed to the check out page as charges are based on
      weight and volume. Upon entering your delivery details, we will auto
      calculate the delivery charges based on your given address without the
      need for payment or registration`
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
      as soon as we recieve the item we will ship the new one.`
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
    },
    {
      isOpened: false,
      question: `I have yet to receive my parcel within the stipulated time frame.
      Whom can I contact?`,
      answer: `You may check the status of your parcel via “Track your order” at to find
      out why it might have been delayed. Alternatively, you may drop us an
      email at contact@metaphysika.ba and we will assist you further.`
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
              <span>E-mail:</span>
              <span>contact@metaphysika.ba</span>
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
