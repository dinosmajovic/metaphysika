import { Wrapper, Item1, Item2, Item3, Item4, Container } from './styled';

const About = () => {
  return (
    <Wrapper>
      <Item1 />
      <Item2>
        <span>
          Metaphysika was founded in 2010 in Sarajevo by a family that wanted to
          introduce a refreshed, original, and unique view towards women’s
          fashion by representing the iconic British footwear brand, Irregular
          Choice. In 2005, Metaphysika became the leading distributor of
          Irregular Choice for the Balkans.
        </span>
        <span>
          Over time Metaphysika became a recognizable cultural club for local
          and regional designers and bespoke tailors, which have found their
          place where they can launch their arts and crafts trough joint and
          creative projects. They have delivered various campaigns for
          international and local companies such as Disney UK; Philip Morris,
          Jägermeister, DM markets, Bosnalijek and many others, all led by the
          creative Metaphysika team.
        </span>
      </Item2>
      <Item3>
        <Container type="gray">
          <h1>2016</h1>
          <span>
            In 2016, Metaphysika launched its own clothing brand for women
            through its bespoke tailoring approach, which is focused on creating
            its garments matching the individual needs of our clients avoiding
            stock production and focusing on slow, sustainable fashion.{' '}
          </span>
        </Container>
        <Container type="gray">
          <h1>Our Goal</h1>
          <span>
            Our goal at Metaphysika is to deliver and provide high quality
            tailoring through our unique fashionable and eclectic way, focusing
            on quality and vision, while bringing joy to our customers of
            refined taste and style
          </span>
        </Container>
        <Container>
          <h1>Our pieces</h1>
          <span>
            No matter what the occasion is, we do not follow trends; our pieces
            are timeless and speak for themselves. All the pieces are produced
            in Bosnia and Herzegovina by featured designers, small businesses
            and/or our team of home-based seamstresses to create distinct
            garments that you will wear proudly.
          </span>
        </Container>
      </Item3>
      <Item4>
        <p>
          Everything we create can be mixed and matched with previous
          collections and seasons and your personal wardrobe, our clothes
          reflect emotion through dedication to every detail and seam.
        </p>
        <p>
          By supporting Metaphysika, you are doing more than just supporting the
          label, but making it possible for all the women and their families
          involved in the creation process to live happy and content lives,
          responsibly.
        </p>
        <span>
          <span>Love, Metaphysika.</span>
          <span>Sarajevo.</span>
        </span>
      </Item4>
    </Wrapper>
  );
};

export default About;
