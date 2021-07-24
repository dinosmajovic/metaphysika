import Button from 'components/atoms/Button';
import Product from './Product';

// import { bagPath } from 'constants/paths';
// import { useRouter } from 'next/router';
// import { deleteFromWishList } from 'state/wishlist';
// import { myWishlistPath } from 'constants/paths';

import { ArrowUp, ArrowHoverWrapper, Title, Products, Buttons } from './styled';

const MyWishlist = ({ isOpened, menuIsOpened, menuIsClosed }) => {
  // const router = useRouter();
  // const dispatch = useDispatch();
  // const myWishlistProducts = useSelector((state) => state.wishlist.myWishlist);

  // const onGoToWishlist = () => {
  //   router.push(myWishlistPath);
  // };

  // const onProductDelete = (productId) => {
  //   dispatch(deleteFromWishList(productId));
  // };

  return (
    <>
      <ArrowHoverWrapper />
      <ArrowUp />

      <Title>
        <span>
          My Wishlist (<span>{5}</span>)
        </span>
      </Title>
      <Products>
        <Product
        // product={product}
        // key={product.addProductId}
        // onProductDelete={onProductDelete}
        />
      </Products>

      <Buttons>
        <Button size="small" type="pink">
          VIEW WISHLIST
        </Button>
      </Buttons>
    </>
  );
};

export default MyWishlist;
