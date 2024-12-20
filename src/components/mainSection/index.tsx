import Image from "next/image";

export default function index() {
  return (
    <>
      <section className="main-section">
        <div className="main-section-container">
          <h1 className="main-heading">Essential Vitamins</h1>
          <div className="main-section-row d-flex">
            <div className="main-section-col">
              <div className="main-left-content">
                <h4>Online Medical Supplied</h4>
                <h3>
                  Get Your Vitamins <br />& Minerals
                </h3>
                <button className="explore-btn">Explore</button>
              </div>
            </div>
            <div className="main-section-col">
              <div className="box-div">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/6dd8/7f0a/f73aa0189cad884f47381dd92205b7c0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F2G6yxiZIu3go7JW3LmG7-iDc6mcbfm7YaWEzBwkWluXySPkbpT~ZdcR8VPKpPh758HtxQNS~VRUfQH9XyWuBC0~0SvqYTY2vgaHcYXKPJb6phHVYPb2hFdz391Nd5~JzNvZf3noAQVo7uMLOQge0q1v5VZgi4ET4qVY6sHT8VHhGJnsF-DhAq80fBxmlNjb-YmzCgaGnAGmB6Z7wuoifjycIiBX7y2NpSOpp22pZ4HAD8YMdlkOz-9o4bGtj2jlKYymburdfE7Zb8B7s3RNWHSdEsDVHcGn11bA7yVDjSl1rL69Mn0QD6-K1dYiW5WNDiOI-hjDENJn9~ywfDliig__"
                  alt="main-img"
                  width={300}
                  height={300}
                  priority
                ></Image>
              </div>
            </div>
            <div className="main-section-col">
              {iconsCardData?.map((item) => (
                <div key={item?.id} className="main-icon-card d-flex">
                  <Image src={item?.icon} alt={item?.title} width={100} height={100}></Image>
                  <div className="card-content">
                    <h3>{item?.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item?.subTitle }}></p>
                  </div>
                </div>
              ))}
            </div>
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
    subTitle: "Increased Vitamins and <br> minerals in your diet",
    icon: "https://s3-alpha-sig.figma.com/img/1d76/fc2a/470ec862c44115964979f90b5cb3a94e?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hN2pKd7K83QSQqK2qdx83jA7uA7fKuR9RehyufNjSiabomscZk8Od-9-GZawxIFGDigYNzRyiWSDNd9q~Q6t6Z1g7pw54rKQ0Jljf-rZsgdxgJLmNAGid6c~PGu6qdqAHRHCAQBSy4eQDcKxeOcpWIIoOz4HEQnV1qXufZQVegaoGnD3~6fba2gB3oOfePFE9YVfrjcB-aTRPtfV4JBzbjfmwvrpMI1K~kaCO6lrTOPR-Fs~42DG0Y57qj5p~b0N4i6qB6duhMp0fUaPK1LxCsc~EwTwCqPHc026oiGjXuPRCdWwYGRwbs-I2F4ydwflZIGL2w7ev2uOjgkNgHz9mA__",
  },
  {
    id: 2,
    title: "Weight Loss",
    subTitle: " Weight Loss <br> Find scientifically proven solutions",
    icon: "https://s3-alpha-sig.figma.com/img/c0ae/6abf/9917c0af12dcc49a9c0130d3e68e04b1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JhRFaalfsAmu4zsIS2v1y4qDkb51h2YaKkwU2qtMQYWZIxPhGqTffGinOCN1wDoF6bh6SMDEnlweK7latzUxxHcSi7O4WH0D9d-xe0ZHfZxUBbDinFN0VfHB~5oXXvlUP72Ah6ggYJijvtrWvJlVdmkfEEQT5HRVyzUDBFe3nXQpzSrI3RVCvY3ONO8bIxr5nlmImDOZKkAhVG3JYfQQazkvAPsMI5TvWEWZNw~XU8kC5bh4mkIwwQVM1WbVWIw8A5qxdsy3pSoYxopjf6T0~7veHpSqp-VLLbYSexcRvICXJfVpM5BkztzwXYTOwurr4E7szxoKaa6GySRV5LiIVg__",
  },
  {
    id: 3,
    title: "Functional Foods",
    subTitle: "Functional Foods <br> From protein powers to baby formula",
    icon: "https://s3-alpha-sig.figma.com/img/ad6c/6ad1/2116d12f8d75befd05e66d41425cb402?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B~Bzo~pTwN1NRSAMr5VdP0L94h1N5rIwunDIrWMD~4o~AnSvL2kyR953wpir46pNQcfiLAP3fuMlekD~Gc~vY3hn59yIMGXGy39wgwVpZFrdz2MeMqxgDseiOqIg~cvXcl4YFFsV3ambddGij7jovRyz~7KjBs-r2yRkNV3slabyvDvzeVbr--ugcNjguJLuwK9oQeJh24BWc8B-VTefmeS~0j4AQz-qFZuFDWyjNAzpRdx1foJUtrLCdeMV~M~idJV42revCcHZatJ7ypEW97ig-5lPxu5ZwAS3D94UwMkJwAzKHtTG~krbygYsZ5DqQnoM~dthe2Y~WcxZbsnerg__",
  },
];
