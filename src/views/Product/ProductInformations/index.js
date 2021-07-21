// import ProductOptions from './ProductOptions';
// import {
//   ProductInfo,
//   ButtonWrapper,
//   Button,
//   InputError,
//   Description
// } from './styled';
// import transformProductName from 'constants/transformProductName';

// const ProductInformations = ({
//   product,
//   options,
//   onInputClick,
//   onSizeClick,
//   onAddToBag,
//   isErrorMessage
// }) => {
//   return (
//     <ProductInfo>
//       <h1>{transformProductName(product.name)}</h1>
//       <h2>
//         {product.priceValue} {product.priceCurrency}
//       </h2>
//       <ProductOptions
//         options={options}
//         onInputClick={onInputClick}
//         onValueClick={onSizeClick}
//       />
//       <Description
//         dangerouslySetInnerHTML={{ __html: product.description }}
//       ></Description>

//       {isErrorMessage ? (
//         <ButtonWrapper>
//           <InputError>Please add size first</InputError>
//           <Button onClick={onAddToBag}>ADD TO BAG</Button>
//         </ButtonWrapper>
//       ) : (
//         <ButtonWrapper>
//           <Button onClick={onAddToBag}>ADD TO BAG</Button>
//         </ButtonWrapper>
//       )}
//     </ProductInfo>
//   );
// };

// export default ProductInformations;
