import { useState } from 'react';
import { Container, Title } from './styled';

const Terms = () => {
  const [terms, setTerms] = useState([
    {
      termTitle: `THESE TERMS AND CONDITIONS MAY CHANGE`,
      termDesc: `We reserve the right to update or modify these terms and conditions at
      any time without prior notice.  Your use of www.metaphysika.ba
      following any such change constitutes your agreement to follow and be
      bound by the terms and conditions as changed. For this reason, we
      encourage you to review these terms and conditions whenever you use
      this website.`
    },
    {
      termTitle: `LIMITATIONS OF LIABILITY`,
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
      termTitle: `COPYRIGHT AND TRADEMARK`,
      termDesc: `Unless otherwise indicated, material on this website, including but not
      limited to texts, images, illustrations, software, audio clips, video clips,
      animation files, is subject to the copyright and trademark rights of
      METAPHYSIKA D.O.O.. Consequently, the material on this website may
      not be copied, reproduced, modified, posted, transmitted, distributed, in
      whole or in part in any form whatsoever, without the prior written consent
      of METAPHYSIKA D.O.O. All rights reserved.`
    },
    {
      termTitle: `PRODUCTS, CONTENT AND SPECIFICATIONS`,
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
      termTitle: `SHIPPING LIMITATIONS`,
      termDesc: `When an order is placed, it will be shipped to an address designated by
      the purchaser as long as that shipping address is compliant with the
      shipping restrictions contained on this website.  All purchases from this
      website are made pursuant to a shipment contract. As a result, risk of
      loss and title for items purchased from this website pass to you upon
      delivery of the items to the carrier.  You are responsible for filing any
      claims with carriers for damaged and/or lost shipments.`
    },
    {
      termTitle: `DUTIES AND TAXES`,
      termDesc: `You are responsible for duties and taxes outside BOSNIA AND
      HERZEGOVINA. All items entering a foreign country are subject to
      customs inspection and assessment of the duties and taxes in
      accordance with that country’s national laws.`
    },
    {
      termTitle: `YOUR ACCOUNT`,
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
      termTitle: `EXCHANGE AND REFUND POLICY`,
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
      termTitle: `EXCHANGE AND REFUND POLICY (ONLINE SHOP)`,
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
    },
    {
      termTitle: ``,
      termDesc: ``
    }
  ]);
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
    </Container>
  );
};

export default Terms;
