import { Container, Title, List } from './styled';

const ReturnPolicy = () => {
  const returnPolicy = [
    {
      title: `RETURN & EXCHANGES`,
      description: `We want you to be happy with your purchase and we apologize if it is not. For
      whatever reason that you are not satisfied, we would be most happy to provide
      exchanges and returns for all items purchased from us if the following conditions are
      met:`,
      list: [
        `All items must be in their original packaging with product tags intact`,
        `All items must be unworn, unused, unwashed and in its original condition`,
        `Footwear should have no scuff marks on its outsole`,
        `Originals receipts would need to be included`,
        `All items would need to be purchased originally from Metaphysika store`,
        `If non of the above conditions are met, we regret to inform that we are unable
        to process any claims for exchanges or refund regardless that the items have
        been mailed back to us.`,
        `Sales item(s) are non-exchangeable nor returnable either in our retail boutique
        or via our online portal.`
      ]
    },
    {
      title: `1. VALIDITY FOR EXCHANGES &; RETURNS`,
      description: `All exchanges and returns would need to be raised within 10 days of the invoice date
      for orders in Bosnia and Herzegovina, and 20 days for overseas orders. For local
      deliveries, there is an option to exchange at our store in Sarajevo or through our
      online portal at www.metaphysika.ba
      All requests for can be made in our store in Sarajevo or via email at
      contact@metaphysika.ba`,
      list: null
    },
    {
      title: `2. EXCHANGES AT OUR BOUTIQUES`,
      description: `You can exchange any item bought at www.metaphysika.ba in our store in Sarajevo,
      Feriza Tumbula 13, 71 000 Sarajevo. Also you can get a store credit.`,
      list: null
    },
    {
      title: `3. EXCHANGES &; RETURNS ONLINE`,
      description: null,
      list: [
        `3.1 You will need to include your original invoice together with the item(s) in its
        original condition and packaging.`,
        `3.2 Mail us your parcel via a traceable mode of postage.`,
        `3.3 Wait for our email confirmation and you will be notified once your online Store
        Credit Voucher is ready. Generally, the processing period is 5-7 working days upon
        receipt of your parcel.`,
        `3.4 All requests for returns will be refunded via online Store Credit Vouchers only.
        Your online Store Credit Voucher is valid forever and can be used for your next
        purchase online.`,
        `3.5 Online Store Credit Vouchers are to be used in a singular transaction and any
        excess amount not utilized, would not be refunded.`,
        `3.6 Online Store Credit Vouchers given will be at the buying price of the product as
        stated in the original invoice. No refunds will be given for delivery charges incurred in
        the original, returned and onward shipping charges of exchanged items.`,
        `3.7 However, if any of the products received is deemed defective or a wrong
        shipment, metaphysika.ba will bear the cost of shipping the item(s) back to you.
        Please note that all exchanges are subjected to stock availability and
        whilst we endeavour to ship a replacement item(s) back to you, we reserve the right
        to do an exchange by way of an item(s) of a similar value or providing online store
        credits or any other methods at the discretion of metaphysika.ba`,
        `3.8 No refunds will be given for taxes, duties, tariffs and excise charges levied for
        overseas orders either for refunds or exchanged items.`,
        `3.9 All returns and exchanges made via our online portal at www.metaphysika.ba
        would need to be shipped to :
        Metaphysika d.o.o.
        Feriza Tumbula 13
        71 000 Sarajevo
        Bosnia and Herzegovina
        Tel: +387 61 534 854`
      ]
    },
    {
      title: `4. OTHER TERMS &; CONDITIONS`,
      description: null,
      list: [
        `
      4.1 All items that are returned and exchanged, can only be made once.
      `,
        `4.2 We reserve the right and full discretion to disqualify you from enjoying free
        returns if the subsequent item(s) for return or exchange are of the same item(s) as a
        previous order`,
        `4.3 Our returns and exchanges policy does not cover damage resulting from unique,
        accidental, or random damage that is the result of use by you or wear and tear of a
        product.`,
        `4.4 Metaphysika D.O.O. makes no warranty in respect of any product, express or
        implied, including any implied warranties of merchantability, quality, compliance with
        description and fitness for a particular purpose`,
        `4.5 Such returns are at all times governed by the provisions of the Consumer
        Protection (Fair Trading) Act of BiH`,
        `4.6 All decisions made by Metaphysika D.O.O. are final.`
      ]
    },
    {
      title: `5. REPAIR POLICY`,
      description: `We offer repair services for all our products. Kindly visit us at our store in Sarajevo. 
      More information at contact@metaphysika.ba`,
      list: null
    }
  ];
  return (
    <Container>
      <Title>RETURN POLICY</Title>
      {returnPolicy.map((policy, index) => {
        return (
          <div key={policy.title + index}>
            <span>{policy.title}</span>
            <span>{policy.description}</span>
            <List>
              {policy.list?.map((p) => {
                return <li key={p}>{p}</li>;
              })}
            </List>
          </div>
        );
      })}
    </Container>
  );
};

export default ReturnPolicy;
