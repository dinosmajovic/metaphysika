import {
  Table,
  Container,
  ShoesTable,
  Description,
  ClothesTable,
  Text
} from './styled';

const SizeGuide = () => {
  return (
    <Container>
      <ShoesTable>
        <Description>Shoes are graded using Euro size only</Description>
        <Table>
          <tr>
            <td>Euro</td>
            <td>36</td>
            <td>37</td>
            <td>38</td>
            <td>39</td>
            <td>40</td>
            <td>41</td>
            <td>42</td>
          </tr>
          <tr>
            <td>cm</td>
            <td>22.5</td>
            <td>23</td>
            <td>23.5</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>26.5</td>
          </tr>
        </Table>
      </ShoesTable>
      <ClothesTable>
        <Description>Clothing</Description>
        <Table>
          <tr>
            <td>Size</td>
            <td>XS</td>
            <td>S</td>
            <td>M</td>
            <td>L</td>
            <td>XL</td>
            <td>2XL</td>
            <td>3XL</td>
          </tr>
          <tr>
            <td>Bust</td>
            <td>85</td>
            <td>90</td>
            <td>95</td>
            <td>100</td>
            <td>105</td>
            <td>110</td>
            <td>117.5</td>
          </tr>
          <tr>
            <td>Waist</td>
            <td>67</td>
            <td>72</td>
            <td>77</td>
            <td>82</td>
            <td>87</td>
            <td>92</td>
            <td>99.5</td>
          </tr>
        </Table>
        <Text>
          <span>
            One size fits all sizes due to fabric elasticity and/or clothes type
          </span>
          <ul>
            <span>
              All measurements are shown in CM/centimetres. When taking
              measurements, please note:
            </span>
            <li>Bust: Measure around fullest part including normal bra.</li>
            <li>Waist: Measure around the natural waistline.</li>
            <li>Waist: Measure around the natural waistline.</li>
          </ul>
        </Text>
      </ClothesTable>
    </Container>
  );
};

export default SizeGuide;
