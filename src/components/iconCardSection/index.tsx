import { CliniStudied, FreeShip, GmoFree, MadeInIndia, NoRisk, VegFrndly } from "../svsIcons";
export default function index() {
  return (
    <section className="icon-container-section">
      <div className="icons-card-section">
        <div className="icons-card-container">
          {iconsCardData?.map((item) => (
            <div key={item?.id} className="icons-card">
              <div className="icon-div">{item?.icon}</div>
              <h3>{item?.title}</h3> <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const iconsCardData = [
  {
    id: 1,
    title: "Clinically Studied",
    description: "All products that we offer have undergone lab and safety tests",
    icon: <CliniStudied />,
  },
  {
    id: 2,
    title: "Vegetarian Friendly",
    description: "We have a wide selection of vegetarian products to meet your needs",
    icon: <VegFrndly />,
  },
  {
    id: 3,
    title: "Made in India",
    description: "Boost energy and support muscle function",
    icon: <MadeInIndia />,
  },
  {
    id: 4,
    title: "Free shipping",
    description: "We deliver to your door with no shipping costs on your orders",
    icon: <FreeShip />,
  },
  {
    id: 5,
    title: "No Risk",
    description: "We ensure that all products are safe and within their use-by date",
    icon: <NoRisk />,
  },
  {
    id: 6,
    title: "GMO free",
    description: "Natural, no modified products and derivatives for those who need it",
    icon: <GmoFree />,
  },
];
