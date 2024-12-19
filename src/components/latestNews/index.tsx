import Image from "next/image";

export default function index() {
  return (
    <>
      <section>
        <p className="our-blog">OUR BLOG</p>
        <h2 className="latest-news-heading">Latest News</h2>
        <div className="latest-news-container">
          {Array.from({ length: 4 }).map((_, colIndex) => (
            <div key={colIndex} className="latest-news-col">
              {cardData?.slice(colIndex * 2, colIndex * 2 + 2)?.map((card) => (
                <div key={card.id} className="latest-news-card">
                  <span className="card-date">{card.date}</span>
                  <p className="card-title">{card.title}</p>
                  <Image
                    src={card.image}
                    alt="content"
                    className="card-image"
                    width={200}
                    height={400}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// Sample data
const cardData = [
  {
    id: 1,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2022 Is Back",
    image:
      "https://s3-alpha-sig.figma.com/img/e186/51c0/bff366efc73350d196325f72ae85615d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hAlg74Zw~fECXfJEpGJtjEvhGrWnG7Aa3BbPDwewptVqjRq359aaVyIrH~Ke62I8Xu~AZR~yjQDHBQVh6cxXAkCzrZsH-B8Ei3W1HlxZvYHHoZPg6ljmPzZ4ZD01VehC3dGSyy0~~tao2~ap1PMyvpJtqQtfkblACZStUuSrAVx5oG1V2lsxVrwZemyZOYWA4-OhuL4dYFfUop0ACGkvHwfGNHchPPiTiWTIxgGXZJzIHkBW55kuhQ5IoYnDFRDjQqGuE1T7lGaudElYcP7dQCDfcSO7qcl73E~lRX18YhpdabfTYwv6gGpy08U5FzUJSOldGpVQzuNTyM5pzT8I~A__",
  },
  {
    id: 2,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2022 Is Back",
    image:
      "https://s3-alpha-sig.figma.com/img/b9db/d8fe/538ccfb6083e67ad7f101adbfd0e48d7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYR~f3cBsPFqABT4RQ3awpCHp23I1qy79GPFQXnb9xWrU68o7YEGtNLsJ08lZUYOhooMZKVVhpALWfOSZy6aPaUZeUUvhgJ0ZzwCde9UOmCp8Nwdt1N-5ZVt2~B93VpIY8Jo10e7dECMvV0U4Ki-fUy5ukUR3DxM6yNLgB2e~twYG5l5erLFaqwylQr79J7lkzUuJsvJfiDoZEEuGAJrLH-MXF4DN1OvafH8mUawPdJXSRDNqQ2x511Wj4kAHmsxu~Vo~H4ErGbZgpo1a7k6FZOrkJxJJ9OgZLfHB98jI5kyTfm4U~UMxivvMDt8oyXQKG1Fpx8SUEKuAIaRa0XoyQ__",
  },
  {
    id: 3,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2022 Is Back",
    image:
      "https://s3-alpha-sig.figma.com/img/e186/51c0/bff366efc73350d196325f72ae85615d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hAlg74Zw~fECXfJEpGJtjEvhGrWnG7Aa3BbPDwewptVqjRq359aaVyIrH~Ke62I8Xu~AZR~yjQDHBQVh6cxXAkCzrZsH-B8Ei3W1HlxZvYHHoZPg6ljmPzZ4ZD01VehC3dGSyy0~~tao2~ap1PMyvpJtqQtfkblACZStUuSrAVx5oG1V2lsxVrwZemyZOYWA4-OhuL4dYFfUop0ACGkvHwfGNHchPPiTiWTIxgGXZJzIHkBW55kuhQ5IoYnDFRDjQqGuE1T7lGaudElYcP7dQCDfcSO7qcl73E~lRX18YhpdabfTYwv6gGpy08U5FzUJSOldGpVQzuNTyM5pzT8I~A__",
  },
  {
    id: 4,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2023 Is Back",
    image:
      "https://s3-alpha-sig.figma.com/img/b9db/d8fe/538ccfb6083e67ad7f101adbfd0e48d7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYR~f3cBsPFqABT4RQ3awpCHp23I1qy79GPFQXnb9xWrU68o7YEGtNLsJ08lZUYOhooMZKVVhpALWfOSZy6aPaUZeUUvhgJ0ZzwCde9UOmCp8Nwdt1N-5ZVt2~B93VpIY8Jo10e7dECMvV0U4Ki-fUy5ukUR3DxM6yNLgB2e~twYG5l5erLFaqwylQr79J7lkzUuJsvJfiDoZEEuGAJrLH-MXF4DN1OvafH8mUawPdJXSRDNqQ2x511Wj4kAHmsxu~Vo~H4ErGbZgpo1a7k6FZOrkJxJJ9OgZLfHB98jI5kyTfm4U~UMxivvMDt8oyXQKG1Fpx8SUEKuAIaRa0XoyQ__",
  },
  {
    id: 5,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2023 Is Back",
    image:
      "https://s3-alpha-sig.figma.com/img/e186/51c0/bff366efc73350d196325f72ae85615d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hAlg74Zw~fECXfJEpGJtjEvhGrWnG7Aa3BbPDwewptVqjRq359aaVyIrH~Ke62I8Xu~AZR~yjQDHBQVh6cxXAkCzrZsH-B8Ei3W1HlxZvYHHoZPg6ljmPzZ4ZD01VehC3dGSyy0~~tao2~ap1PMyvpJtqQtfkblACZStUuSrAVx5oG1V2lsxVrwZemyZOYWA4-OhuL4dYFfUop0ACGkvHwfGNHchPPiTiWTIxgGXZJzIHkBW55kuhQ5IoYnDFRDjQqGuE1T7lGaudElYcP7dQCDfcSO7qcl73E~lRX18YhpdabfTYwv6gGpy08U5FzUJSOldGpVQzuNTyM5pzT8I~A__",
  },
  {
    id: 6,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2023 Is Back",
    image:
      "https://s3-alpha-sig.figma.com/img/b9db/d8fe/538ccfb6083e67ad7f101adbfd0e48d7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYR~f3cBsPFqABT4RQ3awpCHp23I1qy79GPFQXnb9xWrU68o7YEGtNLsJ08lZUYOhooMZKVVhpALWfOSZy6aPaUZeUUvhgJ0ZzwCde9UOmCp8Nwdt1N-5ZVt2~B93VpIY8Jo10e7dECMvV0U4Ki-fUy5ukUR3DxM6yNLgB2e~twYG5l5erLFaqwylQr79J7lkzUuJsvJfiDoZEEuGAJrLH-MXF4DN1OvafH8mUawPdJXSRDNqQ2x511Wj4kAHmsxu~Vo~H4ErGbZgpo1a7k6FZOrkJxJJ9OgZLfHB98jI5kyTfm4U~UMxivvMDt8oyXQKG1Fpx8SUEKuAIaRa0XoyQ__",
  },
  {
    id: 7,
    date: "20 APR",
    title: "The Covid-19 Epidemic In 2023 Is Back",
    image:
      "https://s3-alpha-sig.figma.com/img/e186/51c0/bff366efc73350d196325f72ae85615d?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hAlg74Zw~fECXfJEpGJtjEvhGrWnG7Aa3BbPDwewptVqjRq359aaVyIrH~Ke62I8Xu~AZR~yjQDHBQVh6cxXAkCzrZsH-B8Ei3W1HlxZvYHHoZPg6ljmPzZ4ZD01VehC3dGSyy0~~tao2~ap1PMyvpJtqQtfkblACZStUuSrAVx5oG1V2lsxVrwZemyZOYWA4-OhuL4dYFfUop0ACGkvHwfGNHchPPiTiWTIxgGXZJzIHkBW55kuhQ5IoYnDFRDjQqGuE1T7lGaudElYcP7dQCDfcSO7qcl73E~lRX18YhpdabfTYwv6gGpy08U5FzUJSOldGpVQzuNTyM5pzT8I~A__",
  },
  {
    id: 8,
    date: "17 MAR",
    title: "Hac hendrerit mus non semper suspendisse",
    image:
      "https://s3-alpha-sig.figma.com/img/b9db/d8fe/538ccfb6083e67ad7f101adbfd0e48d7?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYR~f3cBsPFqABT4RQ3awpCHp23I1qy79GPFQXnb9xWrU68o7YEGtNLsJ08lZUYOhooMZKVVhpALWfOSZy6aPaUZeUUvhgJ0ZzwCde9UOmCp8Nwdt1N-5ZVt2~B93VpIY8Jo10e7dECMvV0U4Ki-fUy5ukUR3DxM6yNLgB2e~twYG5l5erLFaqwylQr79J7lkzUuJsvJfiDoZEEuGAJrLH-MXF4DN1OvafH8mUawPdJXSRDNqQ2x511Wj4kAHmsxu~Vo~H4ErGbZgpo1a7k6FZOrkJxJJ9OgZLfHB98jI5kyTfm4U~UMxivvMDt8oyXQKG1Fpx8SUEKuAIaRa0XoyQ__",
  },
];
