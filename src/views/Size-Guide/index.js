import {
  TablesWrapper,
  TableContainer,
  Table,
  Container,
  Hr,
  Text
} from './styled';

const shoeSizes = [
  {
    euro: '36',
    cm: '22.5'
  },
  {
    euro: '37',
    cm: '23'
  },
  {
    euro: '38',
    cm: '23.5'
  },
  {
    euro: '39',
    cm: '24'
  },
  {
    euro: '40',
    cm: '25'
  },
  {
    euro: '41',
    cm: '26'
  },
  {
    euro: '42',
    cm: '26.5'
  }
];

const clothingSizes = [
  {
    size: 'XS',
    bust: '85',
    waist: '67',
    hips: '95'
  },
  {
    size: 'S',
    bust: '90',
    waist: '72',
    hips: '100'
  },
  {
    size: 'M',
    bust: '95',
    waist: '77',
    hips: '105'
  },
  {
    size: 'L',
    bust: '100',
    waist: '82',
    hips: '110'
  },
  {
    size: 'XL',
    bust: '105',
    waist: '87',
    hips: '115'
  },
  {
    size: '2XL',
    bust: '110',
    waist: '92',
    hips: '120'
  },
  {
    size: '3XL',
    bust: '117.5',
    waist: '99.5',
    hips: '127.5'
  }
];

const SizeGuide = () => {
  return (
    <Container>
      <TablesWrapper>
        <TableContainer>
          <span>Shoes</span>
          <Hr />
          <Table>
            <thead>
              <tr>
                <th>Euro</th>
                <th>Cm</th>
              </tr>
            </thead>
            <tbody>
              {shoeSizes.map((size) => {
                return (
                  <tr key={size.euro}>
                    <td>{size.euro}</td>
                    <td>{size.cm}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableContainer>
        <TableContainer>
          <span>Clothing</span>
          <Hr />
          <Table>
            <thead>
              <tr>
                <th>Size</th>
                <th>Bust</th>
                <th>Waist</th>
                <th>Hips</th>
              </tr>
            </thead>
            <tbody>
              {clothingSizes.map((c) => {
                return (
                  <tr key={c.size}>
                    <td>{c.size}</td>
                    <td>{c.bust}</td>
                    <td>{c.waist}</td>
                    <td>{c.hips}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableContainer>
      </TablesWrapper>
      <Text>
        <span>
          One size fits all sizes due to fabric elasticity and/or clothes type
        </span>
        <span>
          All measurements are shown in CM/centimetres. When taking
          measurements, please note:
        </span>
        <ul>
          <li>Bust: Measure around fullest part including normal bra.</li>
          <li>Waist: Measure around the natural waistline.</li>
          <li>
            Hips: Measure 20cm down from natural waistline at the fullest part.
          </li>
        </ul>
      </Text>
    </Container>
  );
};

export default SizeGuide;
