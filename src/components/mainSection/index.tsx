import Image from "next/image";

export default function index() {
  return (
    <>
      <section>
        <div className="main-section-container">
          <h1>Essential Vitamins</h1>
          <div className="main-section-row">
            <div className="main-section-col">
              <h4>Online Medical Supplied</h4>
              <h3>
                Get Your Vitamins <br />& Minerals
              </h3>
              <button className="explore-btn">Explore</button>
            </div>
            <div className="main-section-col">
              <div className="box-div">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/6dd8/7f0a/f73aa0189cad884f47381dd92205b7c0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F2G6yxiZIu3go7JW3LmG7-iDc6mcbfm7YaWEzBwkWluXySPkbpT~ZdcR8VPKpPh758HtxQNS~VRUfQH9XyWuBC0~0SvqYTY2vgaHcYXKPJb6phHVYPb2hFdz391Nd5~JzNvZf3noAQVo7uMLOQge0q1v5VZgi4ET4qVY6sHT8VHhGJnsF-DhAq80fBxmlNjb-YmzCgaGnAGmB6Z7wuoifjycIiBX7y2NpSOpp22pZ4HAD8YMdlkOz-9o4bGtj2jlKYymburdfE7Zb8B7s3RNWHSdEsDVHcGn11bA7yVDjSl1rL69Mn0QD6-K1dYiW5WNDiOI-hjDENJn9~ywfDliig__"
                  alt="main-img"
                  width={300}
                  height={300}
                ></Image>
              </div>
            </div>
            <div className="main-section-col"></div>
          </div>
        </div>
      </section>
    </>
  );
}

const iconsCardData = [
  {
    id: 1,
    title: "Vitamins",
    subTitle: "Increased Vitamins and minerals in your diet",
    icon: "",
  },
  {
    id: 2,
    title: "Weight Loss",
    subTitle: "Increased Vitamins and minerals in your diet",
    icon: "",
  },
  {
    id: 3,
    title: "Functional Foods",
    subTitle: "Increased Vitamins and minerals in your diet",
    icon: "",
  },
];
