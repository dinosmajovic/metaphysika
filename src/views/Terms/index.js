import { Container, Title, LogosContainer, LogoContainer } from './styled';
import visa_secure from 'assets/images/logos/visa_secure.jpg';
import mc_check from 'assets/images/logos/mc_check.png';
import diners_secure from 'assets/images/logos/diners_secure.png';
import monri from 'assets/images/logos/monri.png';

const Terms = () => {
  const terms = [
    {
      termTitle: `General`,
      termDesc: `Metaphysika d.o.o. reserves the right to change these terms and conditions. All changes will be applied to the use of www.metaphysika.ba pages. The buyer is responsible for the accuracy and completeness of the data entered during the purchase.
      The services provided by the www.metaphysika.ba online store do not include the costs you incur using computer equipment and services to access our site. Metaphysika d.o.o. is not responsible for telephone costs, Internet traffic or any other costs that may be incurred.
      Although Metaphysika d.o.o. strives to give the best possible offer of services, Metaphysika d.o.o. cannot guarantee that the services on www.metaphysika.ba will meet your needs.
      Metaphysika d.o.o. nor can it guarantee that the service will be error-free. If an error occurs, please report it to our Contact Center or e-mail contact@metaphysika.ba in order to eliminate it as soon as possible.`
    },
    {
      termTitle: 'Credit card purchase security statement',
      termDesc: `Confidentiality of your information is protected and secured by using SSL encryption. Pages for web payment are secured by using Secure Socket Layer (SSL) protocol with 128-bit data encryption. SSL encryption is a data coding procedure for prevention of unauthorized access during data transfer.
    This enables a secure data transfer and prevents unauthorized data access during communication between user and Monri WebPay Payment Gateway and vice versa.
    Monri WebPay Payment Gateway and financial institutions exchange data by using their virtual private network (VPN) which is also protected from unauthorized access.
    Monri Payments is PCI DSS Level 1 certified payment service provider.
    Credit card numbers are not stored by Merchant and are not available to unauthorized personnel.`
    },
    {
      termTitle: 'Personal data gathering and protection statement',
      termDesc: `We are committed to provide service of protection of our customer's personal data in a way that we collect only essential basic information about our buyers that are necessary for fulfilling our obligations. We also inform our customers about the way we collect information and regularly give customers an option about how their information will be used, including the possibility to decide whether their name should be included or omitted from the lists used for marketing campaigns.
      All user information is strictly guarded and are available only to the employees who need that information for completing the job.
      All our employees and business partners are responsible to follow the principles of confidentiality protection.`
    },
    {
      termTitle: 'Ordering',
      termDesc: `The customer orders the product or products via the electronic order form.
      A customer is considered to be any person who electronically orders at least one product, fills in the required information and sends the order.
      All prices are expressed in the Bosnian-Herzegovinian national currency, convertible mark (km) with VAT.
      Goods are ordered electronically, by clicking on a specific product and storing it in the cart. The goods are considered ordered at the moment when the buyer chooses and confirms the method of payment.`
    },
    {
      termTitle: `Payment`,
      termDesc: `Ordered products or services are paid online with one of the credit cards: Mastercard®, Maestro® or Visa.`
    },
    {
      termTitle: `Currency conversion statement`,
      termDesc: `All payments will be affected in Bosnian currency. The charged amount on your credit card account is converted into your local currency according to the exchange rate of credit card associations.`
    },
    {
      termTitle: `Delivery`,
      termDesc: `Ordered products are packaged in such a way that they are not damaged during normal handling. When picking up, the buyer is obliged to check the condition of the shipment and in case of damage to immediately advertise the product to the delivery person (employee of the company that performs delivery). The seller disclaims all liability for damage that may occur during delivery.
      If the buyer does not receive the goods, or the delivery notice, after it has been sent, within the expected time, the buyer has the right to inform the seller in order to take action to find the shipment or to send a replacement shipment.
      If the buyer refuses to receive the goods he has ordered from the seller, he has the right to demand from the buyer reimbursement of all costs related to delivery.
      The seller undertakes to send the shipment to the buyer the moment he receives the confirmation approving the online transaction. After receiving this confirmation, the seller undertakes to send the shipment within 5 (five) working days.
      Once the courier (the delivery company) receives the shipment from the seller, the seller is no longer responsible for the further course of delivery and any delays and problems that may arise in connection with further handling and delivery of goods.`
    },

    {
      termTitle: `Complaints`,
      termDesc: `The seller undertakes to deliver a product that is technically correct and corresponds to the description of the product listed on www.metaphysika.ba. The image illustrating the product on the website does not have to correspond to the actual appearance of the product and the customer cannot advertise this segment.
      In the event of a technical malfunction of the product, the seller assumes full responsibility.
      In case of technical malfunction, the customer is obliged to advertise the product within 4 (four) working days. After advertising the technical defect, the buyer is obliged to return the technically defective product by mail, along with the invoice, after which the seller will send the buyer a replacement product within 3 (three) working days, free of charge. In the case of the above, the customer has no right to request a refund, but only a replacement product.
      The seller is not responsible for any damages and other obligations that are in the domain of the supplier (the company that performs the delivery of products).`
    },
    {
      termTitle: `Copyright and trademar`,
      termDesc: `Unless otherwise indicated, material on this website, including but not
      limited to texts, images, illustrations, software, audio clips, video clips,
      animation files, is subject to the copyright and trademark rights of
      METAPHYSIKA D.O.O.. Consequently, the material on this website may
      not be copied, reproduced, modified, posted, transmitted, distributed, in
      whole or in part in any form whatsoever, without the prior written consent
      of METAPHYSIKA D.O.O. All rights reserved.`
    },
    {
      termTitle: `Limitations of liability`,
      termDesc: `METAPHYSIKA D.O.O. shall not assume any responsibility, and shall
      not be liable for, any damages to, or viruses that may infect, your
      computer, telecommunication equipment, or other property caused by or
      arising from your access to, use of, or browsing this website or your
      downloading of any materials, from this website. IN NO EVENT WILL
      THE METAPHYSIKA D.O.O. NOR THEIR RESPECTIVE OFFICERS,
      DIRECTORS, EMPLOYEES, SHAREHOLDERS, AFFILIATES,
      AGENTS, SUCCESSORS, ASSIGNS, RETAIL PARTNERS NOR ANY
      PARTY INVOLVED IN THE CREATION, PRODUCTION OR
      TRANSMISSION OF THIS WEB SITE BE LIABLE TO ANY PARTY FOR
      ANY INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL OR
      CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION,
      THOSE RESULTING FROM LOST PROFITS, LOST DATA OR
      BUSINESS INTERRUPTION) ARISING OUT OF THE USE, INABILITY
      TO USE, OR THE RESULTS OF USE OF THIS WEB SITE, ANY WEB
      SITES LINKED TO THIS WEB SITE, OR THE MATERIALS,
      INFORMATION OR SERVICES CONTAINED AT ANY OR ALL SUCH
      SITES, WHETHER BASED ON WARRANTY, CONTRACT, TORT OR
      ANY OTHER LEGAL THEORY AND WHETHER OR NOT ADVISED OF
      THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING
      LIMITATIONS OF LIABILITY DO NOT APPLY TO THE EXTENT
      PROHIBITED BY LAW. PLEASE REFER TO YOUR LOCAL LAWS FOR
      ANY SUCH PROHIBITIONS.
      IN THE EVENT OF ANY PROBLEM WITH THIS WEBSITE OR ANY
      CONTENT, YOU AGREE THAT YOUR SOLE REMEDY IS TO CEASE
      USING THIS WEBSITE. IN THE EVENT OF ANY PROBLEM WITH THE
      PRODUCTS OR SERVICES THAT YOU HAVE PURCHASED ON OR
      THROUGH THIS WEB SITE, YOU AGREE THAT YOUR REMEDY, IF
      ANY, IS FROM THE MANUFACTURER OF SUCH PRODUCTS OR
      SUPPLIER OF SUCH SERVICES, IN ACCORDANCE WITH SUCH
      MANUFACTURER’S OR SUPPLIER’S WARRANTY, OR TO SEEK A
      
      RETURN AND REFUND FOR SUCH PRODUCT OR SERVICES IN
      ACCORDANCE WITH THE RETURNS AND REFUNDS POLICIES
      POSTED ON THIS WEB SITE. This site may include inaccuracies,
      mistakes or typographical errors.`
    },

    {
      termTitle: `Products, content and specifications`,
      termDesc: `All features, content, specifications, products and prices of products and
      services described or depicted on this website are subject to change at
      any time without notice.  Certain weights, measures and similar
      descriptions are approximate and are provided for convenience purposes
      only. We make all reasonable efforts to accurately display the attributes
      of our products, including the applicable colors; however, the actual color
      you see will depend on your computer system and we cannot guarantee
      that your computer will accurately display such colors. The inclusion of
      any products or services in this website at a particular time does not
      imply or warrant that these products or services will be available at any
      time.  It is your responsibility to ascertain and obey all applicable local,
      state and international laws in regard to the possession, use and sale of
      any item purchased from this website. By placing an order, you represent
      that the products ordered will be used only in a lawful manner.`
    },
    {
      termTitle: `Shipping limitations`,
      termDesc: `When an order is placed, it will be shipped to an address designated by
      the purchaser as long as that shipping address is compliant with the
      shipping restrictions contained on this website.  All purchases from this
      website are made pursuant to a shipment contract. As a result, risk of
      loss and title for items purchased from this website pass to you upon
      delivery of the items to the carrier.  You are responsible for filing any
      claims with carriers for damaged and/or lost shipments.`
    },
    {
      termTitle: `Duties and taxed`,
      termDesc: `You are responsible for duties and taxes outside Bosnia and
      Herzegovina. All items entering a foreign country are subject to
      customs inspection and assessment of the duties and taxes in
      accordance with that country’s national laws.`
    },
    {
      termTitle: `Your account`,
      termDesc: `You are responsible for maintaining the confidentiality of your account
      and password information, and you agree to accept responsibility for all
      activities that occur under your account and password.  This website and
      METAPHYSIKA D.O.O. reserves the right to refuse service, terminate
      accounts remove or edit content or cancel orders.
      By placing an order, you warrant that you are over 18 years of age, and
      that you are providing WWW.METAPHYSIKA.BA with accurate, truthful
      information and that you have the authority to place the order.`
    },
    {
      termTitle: `Exchange and refund policy`,
      termDesc: `New, unused full-price merchandise purchased at retail store may be
      exchange at any boutique with an original receipt within 7 days of
      purchase. After 7 days, the merchandise may not be exchanged.
      We offer refund policy on all merchandises, for merchandise qualifying
      for an exchange, item may be exchange for store credits which may be
      used at our store in Sarajevo, Feriza Tumbula 13.
      Merchandise on sale may not be exchanged or returned. All
      merchandise must be returned in sellable condition, otherwise, an
      exchange would not be allowed.
      We reserve the right to reject any form of exchange without the original
      receipt.`
    },
    {
      termTitle: `Exchange and refund policy (ONLINE SHOP)`,
      termDesc: `Electronice Communications
      When you visit this website and/or send email to us, you consent to
      receive electronic communications from us. You agree that all
      agreements, notices, disclosures and other communications that we sent
      you electronically satisfy any legal requirement that such
      communications be in writing
      Exclusions of Warranties
      METAPHYSIKA D.O.O.  makes no representative or warranty regarding
      the good working order or condition of this website, its suitability for use,
      or that its use will be uninterrupted or error-free. All information or
      material provided in this website to you and without warranties of any
      kind, expressed or implied, including without limitation, warranties or
      conditions of merchantability, fitness, quality, durability or suitability for
      any particular purpose, or non-infringement.`
    }
  ];
  return (
    <Container>
      <Title>TERMS OF SERVICE</Title>

      {terms.map((term) => {
        return (
          <div key={term.termTitle}>
            <span>{term.termTitle}</span>
            <span>{term.termDesc}</span>
          </div>
        );
      })}
      <LogosContainer>
        <LogoContainer>
          <span>Your transactions are secure with Visa</span>
          <img src={visa_secure} alt="Visa secure" />
        </LogoContainer>
        <LogoContainer>
          <span>Mastercard® Identity Check™</span>
          <img src={mc_check} alt="Mastercard check" />
        </LogoContainer>
        <LogoContainer>
          <span>Diners</span>
          <img src={diners_secure} alt="Diners" />
        </LogoContainer>
        <LogoContainer>
          <span>Diners</span>
          <img src={monri} alt="Monri" />
        </LogoContainer>
      </LogosContainer>
    </Container>
  );
};

export default Terms;
